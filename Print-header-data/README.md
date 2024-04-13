# Post API Header Viewer

## Overview

This project is a simple web application that makes a POST request to an API endpoint and displays the headers returned in the response. It is built using React.js.

## Usage

1. **Install Dependencies**: Run `npm install` to install all required dependencies.
2. **Start Development Server**: Run `npm run dev` to start the development server. The application will open in your default web browser.
3. **View Headers**: Upon loading the application, it will make a POST request to the specified API endpoint (`https://chimpu.xyz/api/post.php`) with the data `{ phonenumber: '1234567890' }`. The headers returned in the response will be displayed on the page.

## Technologies Used

- React.js
- JavaScript

## Project Structure

- **src/App.js**: Contains the main component of the application. Makes the POST request to the API endpoint and displays the headers.
- **public/index.html**: HTML template file.
- **package.json**: Configuration file for npm packages.

