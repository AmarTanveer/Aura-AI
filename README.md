# Aura AI

Aura AI is an intelligent chatbot designed to assist users with various queries, providing real-time responses and maintaining a history of interactions. Built with a modern tech stack including React and powered by the Gemini API, Aura AI aims to enhance user experience through intuitive design and efficient functionality.

## Live Link

https://aura-ai.netlify.app/

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [How It Works](#how-it-works)

## Features

- **Real-time Chatbot:** Quickly answers user queries powered by the Gemini API.
- **Prompt History:** Stores and displays recent prompts in a sidebar for easy reference.
- **User-Friendly Interface:** Clean and intuitive design created with HTML and CSS.
- **Typing Animation:** Engages users with a dynamic typing animation for responses.

## Technologies Used

- **React:** For building the user interface.
- **JavaScript:** For application logic and dynamic functionalities.
- **HTML/CSS:** For structuring and styling the application.
- **Vite:** For a fast development environment and optimized builds.
- **Gemini API:** For processing and generating responses to user queries.

## Getting Started

To get started with Aura AI, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/aura-ai.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd aura-ai
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser and navigate to** `http://localhost:3000` to view the application.

## How It Works

Aura AI utilizes a context provider to manage the state and functionalities of the chatbot. The key functionalities include:

- **Input Handling:** The user inputs queries, which are processed and sent to the Gemini API.
- **Loading State:** A loading indicator is shown while the chatbot processes the input.
- **Response Display:** Responses are displayed with a typing animation to enhance user engagement.
- **Prompt History:** Recent prompts are stored and displayed in the sidebar for easy access.
