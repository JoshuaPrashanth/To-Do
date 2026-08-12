# 📝 To-Do List

A clean, responsive **React To-Do List application** for managing daily tasks. The app provides task creation, search, filtering, completion tracking, deletion, and task statistics through a simple and responsive interface.

## 🚀 Live Demo

**Try the application:**

https://joshuaprashanth.github.io/To-Do/

## 📸 Screenshot

Add a screenshot named `screenshot.png` to the project root to display it here:

![To-Do List Screenshot](screenshot.png)

## ✨ Features

- ➕ Add new tasks
- 🔍 Search tasks by title
- ✔️ Mark tasks as completed
- 🗑️ Delete tasks
- 📋 View all tasks
- ✅ Filter completed tasks
- ⏳ Filter pending tasks
- 📊 View total, pending, and completed task counts
- 🔄 Clear the current search
- ⌨️ Press Enter to search or add a task
- 📱 Responsive layout for different screen sizes
- 🎨 Clean and minimal user interface
- ⚡ Lightweight React application

## 🛠️ Tech Stack

| Technology            | Purpose                                |
| --------------------- | -------------------------------------- |
| **React.js**          | Building the user interface            |
| **JavaScript (ES6+)** | Application logic and state management |
| **CSS3**              | Styling and responsive design          |
| **Lucide React**      | Interface icons                        |
| **Vite**              | Development and build tooling          |
| **GitHub Pages**      | Application deployment                 |

## 📂 Project Structure

```text
To-Do/
├── public/
├── src/
│   ├── components/
│   │   ├── AddTask.jsx
│   │   └── Refresh.jsx
│   ├── ToDo.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── screenshot.png
├── package.json
├── vite.config.js
└── README.md
```

> The exact structure may vary depending on the local project setup.

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/joshuaprashanth/To-Do.git
```

### 2. Navigate to the project directory

```bash
cd To-Do
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

## 🔎 How It Works

### ➕ Add a Task

Click **Add Task**, enter a task name, and click **Submit**. The task is added to the list with a pending status.

Empty task names are ignored.

### 🔍 Search Tasks

Enter a keyword into the search field and click the search icon, or press **Enter**.

The application displays tasks whose titles contain the entered keyword.

### ✔️ Complete a Task

Click the **check icon** next to a task to change its completion status.

Completed tasks can also be changed back to pending.

### 🗑️ Delete a Task

Click the **trash icon** next to a task to remove it from the list.

### 📋 Filter Tasks

Use the filter buttons to control which tasks are displayed:

- **All** — Displays all tasks
- **Completed** — Displays only completed tasks
- **Pending** — Displays only unfinished tasks

Search and filtering work together, so you can search within a specific task category.

### 📊 Task Statistics

The status section displays:

- **Total Tasks** — Number of tasks currently in the list
- **Pending** — Number of unfinished tasks
- **Completed** — Number of completed tasks

## ⚛️ React Concepts Demonstrated

This project demonstrates several fundamental React and JavaScript concepts.

### State Management

React's `useState` hook manages application state including:

- Task data
- Search input
- Current filter
- Add-task form visibility
- Search/refresh state

### Array Methods

JavaScript array methods are used extensively for task operations:

```javascript
map();
filter();
includes();
```

These methods are used to:

- Update task completion status
- Delete tasks
- Search tasks
- Filter tasks
- Calculate task statistics

### Conditional Rendering

React conditional rendering is used for components such as the **Add Task** form and **Refresh** control.

### Component-Based Architecture

The application separates functionality into reusable components:

```text
ToDo
├── AddTask
└── Refresh
```

This keeps the main component organized while separating individual responsibilities.

## 📱 Responsive Design

The application is designed to provide a consistent experience across:

- 📱 Mobile devices
- 📲 Tablets
- 💻 Laptops
- 🖥️ Desktop monitors

CSS media queries are used to adapt the layout, spacing, typography, and task components to different screen sizes.

## 🚀 Build for Production

Create an optimized production build with:

```bash
npm run build
```

The production files will be generated in the `dist` directory.

You can then deploy the build to GitHub Pages using the project's configured deployment workflow.

## 🔮 Future Improvements

Possible improvements for future versions include:

- [ ] Persist tasks using `localStorage`
- [ ] Edit existing tasks
- [ ] Add task due dates
- [ ] Add task priorities
- [ ] Add task categories
- [ ] Add dark mode
- [ ] Add drag-and-drop task ordering
- [ ] Add task animations
- [ ] Add backend/database persistence
- [ ] Add user authentication

## 👨‍💻 Author

**Joshua Prashanth**

This project was created as a practical React application to demonstrate frontend development, component-based architecture, state management, responsive UI design, and JavaScript fundamentals.

## 🌐 Project Links

**Live Application:**
https://joshuaprashanth.github.io/To-Do/

**GitHub Repository:**
https://github.com/joshuaprashanth/To-Do/

---

⭐ If you found this project useful, consider giving the repository a star!
