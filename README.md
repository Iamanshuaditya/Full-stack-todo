# ToDo App Readme

## Overview

Welcome to the ToDo App, a simple yet effective task management application built on both the frontend and backend. This application allows users to create, update, delete, and mark tasks as done. The frontend is developed using HTML, CSS, and JavaScript, while the backend is powered by Node.js and Express, storing data in a JSON file.

## Getting Started

To run the ToDo App locally, follow these steps:

### Prerequisites

- Node.js installed on your machine.
- A modern web browser.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-app
   ```

3. Install the required Node.js packages:

   ```bash
   npm install
   ```

### Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Open your web browser and go to [http://localhost:3000](http://localhost:3000).

3. You'll now have access to the ToDo App, where you can add, delete, and mark tasks as done.

## Features

- **Add Task:** Easily add new tasks with a title and description.

- **Delete Task:** Remove tasks that are no longer needed.

- **Mark as Done:** Mark tasks as done to keep track of completed items.

- **Rename Task:** Edit the title of a task to better reflect its content.

## Frontend Structure

The frontend is built using HTML for structure, CSS for styling, and JavaScript for dynamic behavior. The main page (`index.html`) contains a form to input new tasks and a list to display existing tasks. Each task includes buttons to mark it as done, delete it, and rename it.

## Backend Structure

The backend is powered by Node.js and Express, providing RESTful API endpoints for managing tasks. Tasks are stored in a JSON file (`todos.json`). The server supports CRUD operations (Create, Read, Update, Delete) for tasks.

## API Endpoints

- `GET /todos`: Retrieve the list of all tasks.
- `GET /todos/:id`: Retrieve details of a specific task.
- `POST /todos`: Add a new task.
- `PUT /todos/:id`: Update the details of a specific task.
- `DELETE /todos/:id`: Delete a specific task.

## Contributing

Feel free to contribute to the development of this ToDo App by submitting issues or pull requests. Your input is valuable, and together we can make this app even better!

## License

This ToDo App is open-source and available under the [MIT License](LICENSE).

Thank you for using the ToDo App! If you have any questions or feedback, please don't hesitate to reach out.

Happy task management!
