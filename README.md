
# 🦷 Dental Clinic Management (MERN Stack)

A patient and admin portal built with the **MERN stack** (MongoDB, Express, React, Node.js).  
This was my first full-stack project—a clinic management system for scheduling and tracking dental appointments.

---

## 🌟 Features

- **Dental Disease Checker**: Patients can upload dental images to check for probable dental diseases using an AI model.
  - Integrated with my ML project: [DentalDiseasesClassification](https://github.com/haripatel07/DentalDiseasesClassification)


- User authentication (patients & admins)
- **Appointment booking** with date/time selector
- Patient dashboard: view and cancel bookings
- Admin dashboard: manage services, review appointments, manage users
- Responsive front‑end with React and React Router
- RESTful API built on Node.js and Express
- Data storage using MongoDB with Mongoose
- Optional: file uploads (e.g. dental X‑rays)

---

## 📂 Project Structure

```
/client         # React front-end
/controllers    # Express route handlers
/models         # Mongoose schemas
/routes         # Express API endpoints
/server.js      # Backend entry point
.env            # Configuration (not tracked)
models/         # Skipped if models folder in root
DentalDiseasesClassific… # ML model code (Python)
```

---

## ⚙️ Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/haripatel07/dental-clinic-management.git
   cd dental-clinic-management
   ```

2. Install dependencies:
   ```bash
   npm install       # root backend
   cd client && npm install  # React front-end
   ```

3. Set up environment variables:
   - Create `.env` in the root
   - Example variables:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/clinicdb
     JWT_SECRET=your_jwt_secret
     ```

4. Start the development servers:
   ```bash
   # In the project root:
   npm run dev       # or start backend

   # In parallel (client folder):
   cd client
   npm start
   ```

---

## 🚀 Usage

- Visit `http://localhost:3000` (frontend) and `http://localhost:5000` (backend API).
- Sign up as a patient to book appointments.
- Log in as admin (credentials you configured) to manage services, users, and view bookings.

---

## 🧪 Technologies

- **Frontend:** React, React Router, Bootstrap/CSS  
- **Backend:** Node.js, Express  
- **Database:** MongoDB with Mongoose  
- **Auth:** JWT or Firebase (if used)  
- **Dev Tools:** Nodemon, ESLint, Prettier

---

## 🛡 .gitignore & Security

Be sure to ignore:

```
/node_modules/
client/node_modules/
.env
.DS_Store
*.log
```

This prevents committing secrets or heavy dependencies.

---

## 📈 Why This Project Matters

- **First full-stack experience**: built front-to-back using React, Express, and MongoDB.
- **Real-world utility**: appointment scheduler and admin panel designed for actual clinic workflows.
- **Learning opportunity**: authentication, REST APIs, state management, and responsive UI.

---

## 👏 How to Contribute / Use

This repo is archived since it was built for personal learning and for a family clinic. However:

- You can fork it to extend features like reminders, file uploads, admin permissions, etc.
- If you want help crafting features or deploying it, feel free to reach out.

---

## 📄 License

MIT License
