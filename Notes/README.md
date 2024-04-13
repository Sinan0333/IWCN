# Note Taker Web Application

## Overview
This project is a web application for taking notes. It consists of both frontend and backend components. The frontend is built using React, while the backend is developed with Express.js and MySQL for database management.

## Frontend

### Technologies Used
- React.js
- Tailwind CSS

### Setup
1. **Install dependencies**: Run `npm install` in the root directory to install all required dependencies.
2. **Start development server**: Run `npm run dev` to start the development server. The application will open in your default web browser.

### Usage
- **Add Note**: Enter a heading and note content in the input fields and click the "Add" button to add a new note.
- **Delete Note**: Click on the trash icon next to each note to delete it.

## Backend

### Technologies Used
- Express.js
- MySQL

### Setup
1. **Install dependencies**: Run `npm install` in the `backend` directory to install all required dependencies.
2. **Environment variables**: Create a `.env` file in the `backend` directory and set the following variables:
   - `PORT`: Port number for the server.
   - `MY_SQL_HOST`: MySQL database host.
   - `MY_SQL_USER`: MySQL database username.
   - `MY_SQL_DATABASE`: MySQL database name.
   - `MY_SQL_PASSWORD`: MySQL database password.

### API Endpoints
- **POST `/create`**: Create a new note. Requires `date`, `heading`, and `note` in the request body.
- **GET `/get_notes`**: Get all notes.
- **DELETE `/delete/:id`**: Delete a note by ID.

## Database
- MySQL is used to store notes data.
- Database schema:
  ```sql
  CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATETIME,
    heading VARCHAR(255),
    note TEXT
  );
