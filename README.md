# Philcoda Frontend

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Philcoda Frontend is a React-based Single Page Application (SPA) built with Vite for fast and efficient development. It integrates with a Django backend to provide a seamless user experience for managing and visualizing geospatial data.

## 🚀 Features

- Built with **React** and **Vite** for modern, high-performance web development.
- API integration with a Django backend for real-time data.
- Modular and scalable architecture for easy maintenance.
- Designed for geospatial data visualization and management.
- Utilizes third-party libraries like Axios and Leaflet for API interactions and mapping.

---

## 📂 Project Structure

```plaintext
philcoda-fe/
├── public/              # Static assets
├── src/                 # Source code
│   ├── api/             # API interaction functions
│   ├── components/      # Reusable React components
│   ├── pages/           # Page-level components
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
├── .env.example         # Environment variable template
├── vite.config.js       # Vite configuration
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation

🛠️ Technologies Used
Frontend Framework: React + Vite
HTTP Client: Axios
CSS Framework: Tailwind CSS
Mapping Library: Leaflet
State Management: React Context or similar
⚙️ Prerequisites
Before you begin, ensure you have the following installed:

Node.js: >= 16.x
npm or yarn
🚀 Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/pulidongz/philcoda-fe.git
cd philcoda-fe
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Copy the .env.example file and create a .env file:
bash
Copy code
cp .env.example .env
Update the .env file with your API endpoints and keys.
Start the development server:

bash
Copy code
npm run dev
The application will be available at http://localhost:5173.

🛠️ Available Scripts
Start development server:

bash
Copy code
npm run dev
Build for production:

bash
Copy code
npm run build
Preview the production build:

bash
Copy code
npm run preview
Lint the codebase:

bash
Copy code
npm run lint
📦 Deployment
Build the project:

bash
Copy code
npm run build
Deploy the contents of the dist/ folder to your web server.

```
