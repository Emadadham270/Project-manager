# Project Management App 🚀

A modern, responsive project management application built with React and Node.js. Manage your projects and tasks with an intuitive interface featuring beautiful gradients, smooth animations, and a professional design.

## ✨ Features

### 🔐 Authentication
- **Secure Login/Signup** with JWT authentication
- Beautiful glassmorphic design with animated backgrounds
- Form validation and error handling
- Persistent sessions with localStorage

### 📊 Project Management
- **Create, Edit, Delete** projects with rich descriptions
- **Grid and List Views** for flexible project browsing
- **Real-time Search** across project titles and descriptions
- **Responsive Design** that works on all devices

### ✅ Task Management
- **Task Creation** within projects
- **Status Tracking**: To Do, In Progress, Done
- **Task Statistics** with visual progress indicators
- **Individual Task Views** with detailed information

### 🎨 Modern UI/UX
- **Gradient Backgrounds** and glassmorphic cards
- **Smooth Animations** and hover effects
- **Consistent Design System** across all components
- **Professional Color Scheme** with semantic status colors

## 🛠️ Tech Stack

### Frontend
- **React 18** with functional components and hooks
- **React Router** for client-side routing
- **Tailwind CSS** for styling and responsive design
- **Custom SVG Icons** for a cohesive visual experience

### Backend
- **Node.js** with Express.js framework
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcrypt** for password hashing
- **CORS** enabled for cross-origin requests

## 📁 Project Structure

```
project-management-app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js          # Authentication - Login
│   │   │   ├── Signup.js         # Authentication - Signup
│   │   │   ├── Projects.js       # Project list with grid/list view
│   │   │   ├── ProjectDetail.js  # Individual project with tasks
│   │   │   └── TaskDetail.js     # Individual task view
│   │   ├── api/
│   │   │   ├── auth.js           # Authentication API calls
│   │   │   ├── project.js        # Project CRUD operations
│   │   │   └── task.js           # Task CRUD operations
│   │   ├── App.js                # Main app component
│   │   └── index.js              # App entry point
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
├── backend/
│   ├── models/
│   │   ├── User.js               # User schema
│   │   ├── Project.js            # Project schema
│   │   └── Task.js               # Task schema
│   ├── routes/
│   │   ├── auth.js               # Authentication routes
│   │   ├── projects.js           # Project routes
│   │   └── tasks.js              # Task routes
│   ├── middleware/
│   │   └── auth.js               # JWT verification middleware
│   ├── server.js                 # Express server setup
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/project-management-app.git
   cd project-management-app
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/project-management
   JWT_SECRET=your-super-secret-jwt-key-here
   ```

4. **Start MongoDB**
   - For local MongoDB: `mongod`
   - Or use MongoDB Atlas connection string

5. **Run the backend server**
   ```bash
   npm start
   # or for development with auto-reload
   npm run dev
   ```

### Frontend Setup

1. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file in the frontend directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Usage

### Getting Started
1. **Sign Up**: Create a new account with username and password
2. **Sign In**: Log in with your credentials
3. **Create Projects**: Add projects with titles and descriptions
4. **Manage Tasks**: Add tasks to projects and track their progress
5. **Switch Views**: Toggle between grid and list views for projects
6. **Search**: Use the search bar to find specific projects

### Key Features
- **Project Dashboard**: View all projects with search and filter options
- **Task Management**: Create and organize tasks within projects
- **Status Tracking**: Monitor task progress with visual indicators
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🎨 Design Features

### Visual Elements
- **Glassmorphic Cards** with backdrop blur effects
- **Gradient Backgrounds** for visual appeal
- **Smooth Animations** on hover and interactions
- **Consistent Color Scheme** with semantic meanings
- **Professional Typography** for excellent readability

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **MongoDB** for the flexible database solution
- **Express.js** for the minimal web framework

## 📸 Screenshots

### Login Page
Beautiful glassmorphic login form with animated background

### Project Dashboard
Modern project management interface with grid/list toggle

### Project Details
Comprehensive project view with task management capabilities

### Task Management
Intuitive task creation and status tracking

---

