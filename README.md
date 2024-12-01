# Philcoda Frontend

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Philcoda Frontend is a React-based Single Page Application (SPA) built with Vite for fast and efficient development. It integrates with a Django backend to provide a seamless user experience for managing and visualizing geospatial data.

---

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
```

---

## 🛠️ Technologies Used

- **Frontend Framework**: React + Vite
- **HTTP Client**: Axios
- **CSS Framework**: Tailwind CSS
- **Mapping Library**: Leaflet
- **State Management**: React Context or similar

---

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: >= 16.x
- **npm** or **yarn**

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/pulidongz/philcoda-fe.git
cd philcoda-fe
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables

Create a `.env` `.env.development` and `.env.production` file in the root directory and set the following environment variables:

```plaintext
VITE_GOOGLE_MAPS_API_KEY=
VITE_API_URL=
VITE_SERVER_PORT=
```

### 4. Start the Development Server

```bash
npm run dev
```

## Deployment

### 1. Build the Project

```bash
npm run build
```

### 2. Serve the Project

Serve the files in the `dist` directory
