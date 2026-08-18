# Vehicle Management System 🚗

A modern, full-stack web application designed to streamline vehicle service registrations and management. Built with a decoupled architecture using React (TypeScript/Vite) for a highly responsive dark-mode UI, and a robust Spring Boot backend powered by MySQL.

## ✨ Features
* **User Authentication:** Secure user registration and login flows.
* **Vehicle Service Dashboard:** A real-time grid view of all incoming vehicles.
* **Full CRUD Operations:** Register new vehicles, edit existing records, and delete serviced vehicles.
* **Duplicate Validation:** Backend constraints to prevent duplicate vehicle number registrations.
* **Modern UI/UX:** Responsive dark-theme interface built with Tailwind CSS and Lucide icons.

## 🛠️ Tech Stack
**Frontend:**
* React 19
* TypeScript
* Vite (Configured for port 3000)
* Tailwind CSS
* Lucide React (Icons)

**Backend:**
* Java (JDK 25)
* Spring Boot 3.x
* Spring Data JPA / Hibernate
* MySQL
* Maven

## 🚀 Local Setup Instructions

### Prerequisites
* JDK 25 installed
* Node.js (v18+) installed
* MySQL Server running locally on port 3306

### 1. Backend Setup (Spring Boot)
1. Open MySQL and create a database for the project:
   ```sql
   CREATE DATABASE vehicle_management;
   ```

2. Navigate to the backend directory and update `src/main/resources/application.properties` with your MySQL credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/vehicle_management
   spring.datasource.username=root
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   ```

3. Run the application using your IDE or via Maven:
   ```bash
   mvn spring-boot:run
   ```
   *The backend server will start on http://localhost:8080.*

### 2. Frontend Setup (React/Vite)
1. Navigate to the frontend directory.
2. Install the required dependencies (note: ui components have been custom-implemented to remove bloat):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   *The frontend will be accessible at http://localhost:3000.*

## 💡 API Endpoints Reference
* `POST /api/users/register` - Register a new user
* `POST /api/users/login` - Authenticate user
* `GET /api/vehicles` - Fetch all vehicles
* `POST /api/vehicles` - Add a new vehicle
* `PUT /api/vehicles/{id}` - Update a vehicle
* `DELETE /api/vehicles/{id}` - Delete a vehicle entry
