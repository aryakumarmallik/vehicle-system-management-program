# Internship Project Report: Vehicle Management System

**Internship Program:** Tata Motors Summer Internship  
**Submission Date:** August 2026  
**Submitted By:** ARYA KUMAR MALLIK; DIKSHA TIWARY; NIYATI; ANSHIKA PRASAD
**Project Category:** Full-Stack Web Development  

## 1. Project Overview
The Vehicle Management System is a comprehensive web application developed as part of this internship program. The primary objective is to digitize and manage vehicle service records, providing a centralized dashboard for service centers to track incoming vehicles, owner details, and vehical issues. 

The system utilizes a modern, decoupled architecture, separating the client-side presentation layer from the server-side business logic and data persistence layers.

## 2. Technology Stack
* **Client-Side (Frontend):** React 19, TypeScript, Vite, Tailwind CSS.
* **Server-Side (Backend):** Java (JDK 25), Spring Boot 3.x, RESTful APIs.
* **Database Management:** MySQL, Spring Data JPA (Hibernate).
* **Build Tools:** Maven (Backend), npm (Frontend).

## 3. System Architecture & Features
* **Authentication Module:** A secure UI mechanism for user login and registration, communicating with backend validation endpoints.
* **Dashboard Module:** A dynamic grid-based interface displaying vehicle records fetched securely from the Spring Boot API.
* **CRUD Implementation:** Complete Create, Read, Update, and Delete lifecycle management for vehicle data.
* **Error Handling & Validation:** Implemented backend constraints (e.g., `existsByVehicleNumber`) to prevent data redundancy, with structured error responses and corresponding UI alerts for the end-user.

## 4. Setup and Execution Instructions

### Database Configuration
Ensure MySQL is running locally. Update the `application.properties` file located in `src/main/resources/` with the appropriate local database credentials prior to execution:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/vehicle_management
spring.datasource.username=root
spring.datasource.password=[Your_Password]
spring.jpa.hibernate.ddl-auto=update
```

### Running the Application
1. **Backend:** Import the project into a Java IDE and run the main application class, or execute `mvn spring-boot:run` in the terminal. The backend will initialize on port `8080`.
2. **Frontend:** Navigate to the frontend directory, execute `npm install` to resolve dependencies, and run `npm run dev` to start the Vite development server. Access the UI via `http://localhost:3000`.

## 5. Individual Contributions

To clarify the distribution of work on this system, below are the specific tasks and modules I independently architected and implemented:

* **Frontend Development:** Developed the entire React/TypeScript user interface from scratch. Implemented responsive design using Tailwind CSS and managed state transitions for the authentication and dashboard components without relying on bloated external UI libraries.
* **Backend Development:** Designed and built the complete Spring Boot REST API. Handled all database routing, entity mapping (JPA), and endpoint creation for the User and Vehicle models.
* **System Integration:** Successfully linked the React frontend with the Spring Boot backend using the native JavaScript Fetch API, ensuring proper CORS configuration and data serialization.
* **Debugging & Optimization:** Resolved complex TypeScript indexing issues and implemented strict duplicate-entry validation on the server side to ensure data integrity.

*(Note: The core architecture, database design, backend logic, and UI/UX implementation were developed independently to fulfill the technical requirements of this project.)*

## 6. Conclusion
This project successfully demonstrates the practical application of building and integrating a modern REST API with a component-based frontend framework, satisfying the core objectives of the internship's assigned Project.
