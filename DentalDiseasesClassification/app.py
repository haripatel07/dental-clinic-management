from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
import torch.nn as nn
from torchvision import models, transforms
from PIL import Image
import io


# Define the model structure
class DentalModel(nn.Module):
    def __init__(self, num_classes):
        super(DentalModel, self).__init__()
        self.model = models.resnet18(weights=None)
        self.model.fc = nn.Linear(self.model.fc.in_features, num_classes)

    def forward(self, x):
        return self.model(x)


# Handles preprocessing and prediction
class DentalClassifier:
    def __init__(self, model_path, class_names):
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.class_names = class_names

        self.model = DentalModel(num_classes=len(class_names))

        # ✅ Load model checkpoint correctly
        checkpoint = torch.load(model_path, map_location=self.device)
        self.model.load_state_dict(checkpoint["model"])

        self.model.to(self.device)
        self.model.eval()

        self.transform = transforms.Compose([
            transforms.Resize((224, 224)),
            transforms.ToTensor(),
            transforms.Normalize([0.485, 0.456, 0.406],
                                 [0.229, 0.224, 0.225])
        ])

    def predict(self, image_bytes):
        try:
            image = Image.open(io.BytesIO(image_bytes)).convert('RGB')
            input_tensor = self.transform(image).unsqueeze(0).to(self.device)

            with torch.no_grad():
                outputs = self.model(input_tensor)
                _, predicted = torch.max(outputs, 1)
                return self.class_names[predicted.item()]
        except Exception as e:
            raise RuntimeError(f"Prediction failed: {str(e)}")


# Flask web API
class FlaskAPI:
    def __init__(self, model_path, class_names):
        self.app = Flask(__name__)
        CORS(self.app)  # ✅ Enable CORS for frontend access

        self.classifier = DentalClassifier(model_path, class_names)
        self.setup_routes()

    def setup_routes(self):
        @self.app.route('/predict', methods=['POST'])
        def predict():
            if 'image' not in request.files:
                return jsonify({"error": "No image file provided"}), 400

            image_file = request.files['image']
            try:
                prediction = self.classifier.predict(image_file.read())
                return jsonify({'prediction': prediction})
            except Exception as e:
                return jsonify({'error': str(e)}), 500

    def run(self, host='0.0.0.0', port=5000):
        self.app.run(debug=True, host=host, port=port)


# Class labels for predictions
CLASS_NAMES = [
    'Calculus',
    'Caries',
    'Gingivitis',
    'Ulcers',
    'Tooth Discoloration',
    'Hypodontia'
]

# Entry point
if __name__ == '__main__':
    api = FlaskAPI(model_path='dental_model.pth', class_names=CLASS_NAMES)
    api.run()
