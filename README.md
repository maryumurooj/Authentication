# React & .NET Core Authentication Project

## Overview

This project is a full-stack web application that integrates a React frontend with a .NET Core backend API, using SQL Server as the database. The application features a user authentication system, allowing users to sign up, log in, and access a personalized dashboard. The project demonstrates the flow of data from frontend to backend, user authentication with JWT, and database management with Entity Framework Core.

## Key Features

- **User Authentication**: Sign-up, log-in, and secure session management using JWT tokens.
- **Dashboard**: A personalized dashboard that displays real-time information such as time, a daily quote, and a mood tracker.
- **API Integration**: Backend API built with .NET Core, handling user authentication and data storage.
- **Database**: User data is stored securely in a SQL Server database.
- **Styling**: The application is styled with custom CSS, providing a responsive and user-friendly interface.

## Technologies Used

- **Frontend**: React, CSS Modules, Vite
- **Backend**: .NET Core Web API, Entity Framework Core
- **Database**: Microsoft SQL Server
- **Authentication**: JSON Web Tokens (JWT)

## Project Structure

### Frontend (React)
- `Landing`: The initial landing page with options to log in or sign up.
- `Login`: The login page where users enter their credentials.
- `Signup`: The sign-up page for new users to register.
- `Dashboard`: The user dashboard, accessible after successful login, featuring a clock, quote of the day, weather preferences, and mood tracker.

### Backend (.NET Core)
- **Controllers**: Handle API requests, including user registration and login.
- **Models**: Define the structure of the data, such as user details.
- **Database Context**: Manages the connection to the SQL Server database and handles data operations.

### Database (SQL Server)
- **Tables**: 
  - `Users`: Stores user details like username, email, hashed passwords, and more.

## Flow of the Application

1. **User Registration**: 
   - Users register on the signup page.
   - The frontend sends the user details to the backend API.
   - The API stores the user details in the SQL Server database.

2. **User Login**:
   - Users log in with their credentials.
   - The backend API validates the credentials and generates a JWT token.
   - The token is stored in the browser's local storage to maintain the session.

3. **Dashboard Access**:
   - Upon successful login, users are redirected to the dashboard.
   - The dashboard fetches and displays real-time information such as time, a quote of the day, and mood tracking.

## Lessons Learned

- **React and Vite**: Learned how to set up and manage a React project using Vite, understanding the advantages of Vite's fast build and development times.
- **JWT Authentication**: Gained experience in implementing JWT-based authentication, including token storage and session management.
- **Entity Framework Core**: Developed skills in using Entity Framework Core for database management, including creating models, running migrations, and querying data.
- **SQL Server Integration**: Integrated SQL Server with a .NET Core application, learning how to manage and query data effectively.

## Getting Started

### Prerequisites

- Node.js
- .NET Core SDK
- SQL Server

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd your-project-directory
   ```

3. **Install frontend dependencies**:
   ```bash
   cd frontend
   npm install
   ```

4. **Install backend dependencies**:
   ```bash
   cd backend
   dotnet restore
   ```

5. **Set up the database**:
   - Update the connection string in `appsettings.json` to match your SQL Server setup.
   - Apply migrations to create the database and tables:
     ```bash
     dotnet ef database update
     ```

6. **Run the application**:
   - Start the backend server:
     ```bash
     dotnet run
     ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```

7. **Access the application**:
   - Open your browser and navigate to `http://localhost:3000`.

---

### About the Database

Yes, new users created through the signup form are being saved in a SQL Server database. The database is specified in your `.NET Core` project under the `appsettings.json` file, where the connection string defines its location. The user information is stored in the `Users` table, which includes fields like `Username`, `Email`, `PasswordHash`, and other relevant details.

---

