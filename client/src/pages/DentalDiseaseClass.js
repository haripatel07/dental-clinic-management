import React, { useState } from 'react';
import axios from 'axios';
import '../styles/dentaldiseaseclass.css';

function DentalDiseaseClass() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setImagePreview(file ? URL.createObjectURL(file) : null);
    setPrediction('');
    setError('');
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select or capture an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      setLoading(true);
      setError('');
      const res = await axios.post('http://localhost:5000/predict', formData);
      setPrediction(res.data.prediction);
    } catch (err) {
      console.error('Error uploading image:', err);
      setError('Prediction failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dental-classifier">
      <h2>Dental Disease Classifier</h2>
      
      {/* File input with camera capture support */}
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
      />

      {/* Show preview if image is selected */}
      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Selected" />
        </div>
      )}

      <button onClick={handleUpload} disabled={loading}>
        {loading ? 'Processing...' : 'Upload & Predict'}
      </button>

      {error && <p className="error-message">{error}</p>}
      {prediction && !error && (
        <div className="result">
          <h4>Prediction Result:</h4>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
}

export default DentalDiseaseClass;
