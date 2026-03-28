# </> LintForge (MERN + React + Vite + Shadcn)

[![License](https://img.shields.io/badge/license-Private-blue)](https://github.com/DevJaem31/LintForge)  
[![Node.js](https://img.shields.io/badge/Node-v18-green)](https://nodejs.org/)  
[![React](https://img.shields.io/badge/React-v18.2-blue)](https://reactjs.org/)  
[![MongoDB](https://img.shields.io/badge/MongoDB-v7.0-green)](https://www.mongodb.com/)

**AI-Guided Code Analysis Tool**

LintForge is a web application that helps developers **analyze and improve their code**. It provides **AI-guided suggestions**, code quality scoring, and best practice recommendations in a **modern React interface** using Vite and Shadcn UI components.

---

## Features

- AI-guided code analysis
- Terminal-style interface for real-time feedback
- Guest users: limited 5 analysis attempts per session
- Registered users: unlimited attempts with login
- Integrated clean coding resources
- Secure — no `eval()` on the backend
- Full-stack MERN architecture with React + Vite + Shadcn UI
- Optional AI integration via OpenAI API for future updates

---

## Screenshots

![Login Page]  
_Login screen for registered users._

![Code Analyzer]  
_Main code analysis workspace._

![Resources]  
_Clean coding resources section._

> Screenshots are placeholders; replace with real images/screenshots when available.

---

## Tech Stack

- **Frontend:** React 18, Vite, Shadcn UI, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Session-based or JWT
- **Optional AI:** Custom JS rules / OpenAI API support

---

## Usage

### Guest Users

1. Open the app
2. Paste your code
3. Click **Forge Code**
4. See AI-guided analysis in the terminal panel
   > Limited to 5 attempts per session

### Registered Users

1. Sign up / Log in
2. Paste your code
3. Click **Forge Code**
4. Get unlimited AI-guided code analysis

---

## Setup / Local Development

```bash
# Clone the repo
git clone https://github.com/DevJaem31/LintForge.git
cd LintForge

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

# Run development environment
# Starts Vite React frontend and Express backend concurrently
npm run dev
```
