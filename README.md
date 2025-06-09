# Dumebi Forum

Dumebi Forum is a full-stack discussion forum web application created and maintained by **Dumebi Oruche**. It features a modern React frontend (using Vite and Tailwind CSS) and a Node.js/Express backend with MongoDB. Users can ask questions, reply, and interact in real time.

## Author
- **Dumebi Oruche**  
  [GitHub](https://github.com/DumebiOrucheX)

## Features
- User authentication (signup/login)
- Post questions and answers
- Real-time chat and notifications
- Responsive design (mobile & desktop)
- Modern UI with Tailwind CSS
- Fast frontend with Vite + React
- RESTful API backend (Node.js/Express)
- MongoDB for data storage

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

#### 1. Clone the repository
```sh
git clone https://github.com/DumebiOrucheX/discussion-forum.git
cd discussion-forum-main
```

#### 2. Install dependencies
##### Frontend
```sh
cd discussion-forum
npm install
```
##### Backend
```sh
cd ../backend
npm install
```

#### 3. Configure Environment Variables
- Create a `.env` file in the `backend/` directory with your MongoDB URI and any other secrets.

#### 4. Run the Application
##### Start Backend
```sh
cd backend
npm start
```
##### Start Frontend
```sh
cd ../discussion-forum
npm run dev
```

The frontend will be available at `http://localhost:5173` (or as specified by Vite), and the backend at `http://localhost:5000` (or as configured).

## Folder Structure
```
discussion-forum-main/
  backend/         # Node.js/Express API
  discussion-forum/ # Vite + React frontend
```

## Deployment
- Backend can be deployed to Vercel, Heroku, or any Node.js host.
- Frontend can be deployed to Vercel, Netlify, or any static host.

## License
MIT

---
Made with ❤️ by Dumebi Oruche
