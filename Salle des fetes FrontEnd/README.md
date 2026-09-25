# Salle des Fêtes Frontend

A modern React admin dashboard for managing a wedding hall / event venue business. This interface allows administrators to track reservations, clients, staff, pricing packages, payments, and notifications from a clean and responsive web application.

## Overview

This frontend is built with React and Vite and connects to the Java Spring Boot backend. It provides an administrative management experience for a venue reservation system, with protected routes, authentication, and a structured dashboard interface.

## Features

- Responsive admin dashboard
- Authentication and protected routes
- Reservation management interface
- Client management
- Employee management
- Formula / pricing management
- Payment tracking
- Notification center
- Sidebar-based navigation
- React Router page structure

## Tech Stack

- React 18
- Vite
- JavaScript
- React Router DOM
- CSS custom styling

## Project Structure

```text
Salle des fetes FrontEnd/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   ├── api/
│   │   ├── client.js
│   │   └── index.js
│   ├── components/
│   │   ├── icons.jsx
│   │   ├── Modal.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── Sidebar.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── data/
│   │   ├── mockClients.js
│   │   ├── mockEmployes.js
│   │   ├── mockFormules.js
│   │   ├── mockNotifications.js
│   │   ├── mockPaiements.js
│   │   ├── mockReservations.js
│   │   └── mockSalles.js
│   ├── pages/
│   │   ├── Clients.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Employes.jsx
│   │   ├── Formules.jsx
│   │   ├── Login.jsx
│   │   ├── Notifications.jsx
│   │   ├── Paiements.jsx
│   │   ├── Reservations.jsx
│   │   └── Salles.jsx
│   └── utils/
│       └── format.js
└── public/
```

## Requirements

Before running the frontend, make sure you have:

- Node.js 18 or higher
- npm or yarn
- A running backend API

## Installation

1. Open a terminal in the frontend folder:

```bash
cd "Salle des fetes FrontEnd"
```

2. Install dependencies:

```bash
npm install
```

## Run in Development Mode

```bash
npm run dev
```

Then open the URL shown in the terminal, typically:

```text
http://localhost:5173/
```

## Production Build

Build the app for deployment:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

## Environment and API Configuration

The frontend is configured to work with the backend server, which is expected to run on a local API endpoint. Ensure your backend is started before using the dashboard.

Typical backend URL:

```text
http://localhost:8080
```

## Main Routes

The app includes these main pages:

- /login
- /
- /salles
- /reservations
- /employes
- /clients
- /formules
- /paiements
- /notifications

## Authentication

The application uses a protected route system so unauthorized users are redirected to the login page. The authentication context is managed in the frontend state and is used to control access to admin pages.

## Notes

This project is part of a full-stack event management system. The frontend is designed to work alongside the Spring Boot backend located in the sibling folder:

- Salle des fetes BackEnd

## Development Workflow

```bash
npm install
npm run dev
```

## License

This project is intended for educational or internal business use.
