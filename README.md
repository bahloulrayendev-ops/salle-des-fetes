# Salle des Fêtes Management System

A full-stack web application for managing a hall reservation business. This project brings together a Spring Boot backend and a React frontend to provide a complete administrative solution for handling reservations, clients, employees, formulas, payments, and notifications.

## Overview

This system is designed to help manage a venue or event hall business efficiently. It provides an administrative dashboard where staff can organize all essential operations related to reservations and customer management.

## Key Features

- Reservation management
- Client management
- Employee management
- Venue / hall management
- Pricing formulas and packages
- Payment tracking
- Notification management
- Authentication and protected routes
- Dashboard overview for administrative tasks

## Tech Stack

### Backend
- Java 25
- Spring Boot 4.1.0
- Spring Data JPA
- Spring Validation
- Spring Security
- MySQL
- Maven

### Frontend
- React 18
- Vite
- React Router DOM
- JavaScript
- CSS

## Project Structure

```text
Stage WhiteCape/
├── README.md
├── Salle des fetes BackEnd/
│   ├── mvnw
│   ├── mvnw.cmd
│   ├── pom.xml
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   └── target/
├── Salle des fetes FrontEnd/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── README.md
│   └── src/
└── ...
```

## Prerequisites

Before running the project, install the following:

- Java JDK 25
- Maven
- Node.js 18+
- npm
- MySQL Server
- Git

## Database Setup

1. Create a MySQL database named:

```sql
salle_des_fetes
```

2. Import the SQL script from:

```text
WhiteCape/salle_des_fetes.sql
```

3. Update the backend connection settings in:

```text
Salle des fetes BackEnd/src/main/resources/application.properties
```

Example configuration:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/salle_des_fetes
spring.datasource.username=root
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=none
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
```

## Backend Setup

Open a terminal and run:

```bash
cd "Salle des fetes BackEnd"
./mvnw spring-boot:run
```

On Windows PowerShell:

```powershell
cd "Salle des fetes BackEnd"
./mvnw.cmd spring-boot:run
```

The backend will be available at:

```text
http://localhost:8080
```

## Frontend Setup

Open a terminal in the frontend folder:

```bash
cd "Salle des fetes FrontEnd"
npm install
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

## Main Modules

- Dashboard
- Salles
- Reservations
- Employees
- Clients
- Formules
- Payments
- Notifications

## Architecture

The project is structured using a typical full-stack architecture:

- Frontend: React interface for user interaction
- Backend: Spring Boot REST API
- Database: MySQL
- ORM: JPA/Hibernate
- Security: Spring Security for access control

## API Structure

The backend exposes REST endpoints grouped by resource, including:

- ReservationController
- ClientController
- EmployerController
- FormuleController
- PaiementController
- NotificationController
- DisponibiliteController
- AffectationController

## Project Workflow

1. Start MySQL and make sure the database is available.
2. Run the backend server.
3. Start the frontend development server.
4. Log in to the application and manage the admin dashboard.
5. Create or update reservation-related data through the UI.

## Development Commands

### Backend
```bash
cd "Salle des fetes BackEnd"
./mvnw clean install
./mvnw spring-boot:run
```

### Frontend
```bash
cd "Salle des fetes FrontEnd"
npm install
npm run dev
npm run build
```

## Notes

This project was developed as part of a stage and internship workflow. It demonstrates a functional example of a business management dashboard with a modern frontend and a robust backend API.

## License

This project is intended for educational and internal project use.
