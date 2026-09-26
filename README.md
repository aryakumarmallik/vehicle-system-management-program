# Project Report: Vehicle Management System

**Live Demo:** https://vehicle-system-management-program.vercel.app/  
**Backend API Base:** https://vehicle-system-management-program.onrender.com
 
**Project Category:** Full-Stack Web Development & Cloud Deployment  

## 1. Project Overview
The Vehicle Management System is a comprehensive web application . The primary objective is to digitize and manage vehicle service records, providing a centralized cloud-based dashboard for service centers to track incoming vehicles, owner details, and vehicle issues. 

The system utilizes a modern, decoupled architecture, separating the client-side presentation layer from the server-side business logic and data persistence layers, and is fully deployed on the internet using modern CI/CD practices.

## 2. Technology Stack
* **Client-Side (Frontend):** React 19, TypeScript, Vite, Tailwind CSS. (Hosted on **Vercel**)
* **Server-Side (Backend):** Java, Spring Boot 3.x, RESTful APIs. (Containerized via **Docker**, Hosted on **Render**)
* **Database Management:** MySQL, Spring Data JPA / Hibernate. (Hosted on **Aiven Cloud**)
* **Build Tools:** Maven (Backend), npm (Frontend).

## 3. System Architecture & Features
* **Cloud-Native Deployment:** Fully hosted decoupled architecture with automated builds via GitHub integration. 
* **Authentication Module:** A secure UI mechanism for user login and registration, communicating securely with live backend validation endpoints.
* **Dashboard Module:** A dynamic grid-based interface displaying vehicle records fetched seamlessly from the Spring Boot API.
* **CRUD Implementation:** Complete Create, Read, Update, and Delete lifecycle management for vehicle data.
* **Error Handling & Validation:** Implemented backend constraints (e.g., `existsByVehicleNumber`) to prevent data redundancy, alongside strict CORS configurations to secure data transport.

## 4. Local Setup and Execution Instructions

While the project is live, it can also be run locally for development purposes.

### Database Configuration
Ensure MySQL is running locally. Update the `application.properties` file located in `src/main/resources/` with your local database credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/vehicle_management
spring.datasource.username=root
spring.datasource.password=[Your_Password]
spring.jpa.hibernate.ddl-auto=update
```

### Running the Application
1. **Backend:** Import the project into a Java IDE. Navigate to the backend directory and execute `mvn spring-boot:run` (or run via the provided Dockerfile). The backend will initialize on port `8080`.
2. **Frontend:** Navigate to the frontend directory, execute `npm install` to resolve dependencies, and run `npm run dev` to start the Vite development server. Access the UI via `http://localhost:3000` or `5173`.

## 5. Individual Contributions

To clarify the distribution of work on this system, below are the specific tasks and modules I independently architected and implemented:

* **Cloud Deployment & DevOps:** Successfully migrated the local application to the cloud. Containerized the Spring Boot backend using Docker and deployed it to Render, hosted the MySQL database on Aiven Cloud, and deployed the React frontend to Vercel with automated CI/CD pipelines.
* **Frontend Development:** Developed the entire React/TypeScript user interface from scratch. Implemented responsive design using Tailwind CSS and managed state transitions for the authentication and dashboard components without relying on bloated external UI libraries.
* **Backend Development:** Designed and built the complete Spring Boot REST API. Handled all database routing, entity mapping (JPA), and endpoint creation for the User and Vehicle models.
* **System Integration:** Linked the React frontend with the live Spring Boot backend using the native JavaScript Fetch API, configuring strict Cross-Origin Resource Sharing (CORS) rules for secure data transmission over the web.
* **Debugging & Optimization:** Resolved complex TypeScript indexing issues and implemented strict duplicate-entry validation on the server side to ensure data integrity.

*(Note: The core architecture, database design, backend logic, cloud deployment, and UI/UX implementation were developed independently to fulfill and exceed the technical requirements of this project.)*

## 6. Conclusion
This project successfully demonstrates the practical application of building, integrating, and deploying a modern REST API with a component-based frontend framework. By taking the application live to the cloud, it satisfies the core objectives of the internship's assigned Project while proving readiness for real-world software engineering environments.
