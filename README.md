# 🤖 MERN Chatbot

**MERN Chatbot** is a conversational web application built using the MERN stack (MongoDB, Express, React, and Node.js). This AI-powered chatbot enables real-time user interaction and is designed to streamline customer service by addressing frequent queries. With integration of Gemini AI, the chatbot understands natural language, providing efficient and relevant responses.

## 📚 Table of Contents
1. [Features](#features)
2. [System Architecture](#system-architecture)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Screenshots](#screenshots)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [Authors](#authors)

## Features
- 🔒 **Secure Authentication**: Login with OTP verification using Nodemailer.
- 💬 **Real-time Chat**: Users can engage in real-time conversations with the chatbot in a user-friendly, single-page application.
- 💾 **Persistent Data Storage**: MongoDB manages and stores user chat history for retrieval and analysis.
- 📈 **Scalable Design**: Capable of handling a high volume of users with optimal performance.
- 🤖 **Gemini AI Integration**: Provides intelligent, contextual responses to user inputs.
- 📱 **Responsive Layout**: Optimized for both desktop and mobile devices.

## System Architecture
The architecture follows a client-server model to handle user interactions efficiently:

![](Images/SysArchitecture.png)


## Tech Stack 
- **Frontend**: HTML, Tailwind CSS, React, Vite
- **Backend**: Node.js, Express, Nodemailer, Axios
- **Database**: MongoDB (Atlas for cloud storage)
- **AI/ML Integration**: Gemini AI for enhanced NLP capabilities

## Project Structure
```plaintext
MERN_Chatbot/
├── chat-frontend/              # Frontend folder
│   ├── public/                 # Public assets and HTML template
│   ├── src/                    # React application source code
│   │   ├── components/         # Reusable components (e.g., Header, Sidebar)
│   │   ├── contexts/           # Contexts for managing user and chat data
│   │   ├── pages/              # Pages for login, verification, and main chat
│   │   ├── App.jsx             # Main application component with routing
│   │   └── main.jsx            # Entry point with backend URL configuration
│   ├── package.json            # Frontend dependencies
├── chatserver/                 # Backend folder
│   ├── controllers/            # Contains logic for handling user and chat actions
│   ├── models/                 # MongoDB schemas for User, Chat, and Conversation
│   ├── routes/                 # Express routes for chat and user operations
│   ├── middlewares/            # Authentication middleware
│   ├── config/                 # Database connection and environment setup
│   ├── utils/                  # Helper functions (e.g., OTP email service)
│   ├── .env                    # Environment variables for backend (create this file)
│   └── package.json            # Backend dependencies
└── README.md                   # Project documentation
```

## Installation 

This project is deployed so can't be run on localhost. If you want to run it on localhost, visit  [GitHub](https://github.com/Abhishek-2502/MERN_Chatbot_Localhost)


## Screenshots

### Desktop

![](Images/Website/Login.png)
![](Images/Website/OTP.png)
![](Images/Website/Home.png)

### Mobile

<p align="center">
  <img src="Images/Website/HomeMobile.jpg" height="500" width="250" alt="Error">
  <img src="Images/Website/HistoryMobile.jpg" height="500" width="250" alt="Error">
</p>


## Usage

1. Open the provided vercel link your browser.
2. Enter your email to receive an OTP, then verify to log in.
3. Begin chatting with the bot on the main chat interface after logging in.
4. View previous chat history or start a new conversation as needed.
5. Log out when finished to securely end your session.

## Contributing 
We welcome contributions to improve MERN Chatbot! Follow these steps to get started:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add a new feature'
   ```
4. Push to your branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

##  Authors

- **Abhishek Rajput** - [GitHub](https://github.com/Abhishek-2502)
- **Aaryan Dhawan** - [GitHub](https://github.com/dhawanaaaryan)
- **Arnav Jain** - [GitHub](https://github.com/Arnavjain2503)
- **Gautam Rajhans** - [GitHub](https://github.com/capricode-ui)
