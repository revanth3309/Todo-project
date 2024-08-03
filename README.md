
System Design Overview
This React to-do application consists of several components and functionalities, each contributing to the overall system. Here’s a brief overview of the design:

Components
TodoForm (TodoForm.js)
Purpose: Allows users to input and submit a new task.
Functionality:
Contains an input field for the task and a submit button.
Uses local state to manage the input value.
On form submission, the addTodo function is called to add the new task to the list.

Todo (Todo.js)
Purpose: Represents a single to-do item.
Functionality:
Displays the task and its completion status.
Allows users to toggle the completion status by clicking on the task.
Provides edit and delete options through FontAwesome icons.
The editTodo function toggles the editing state, while deleteTodo removes the task.

EditTodoForm (EditTodoForm.js)
Purpose: Allows users to edit an existing task.
Functionality:
Displays an input field pre-filled with the current task value and a submit button.
On form submission, the editTodo function updates the task and toggles the editing state.

TodoWrapper (TodoWrapper.js)
Purpose: Manages the state of the to-do list and integrates other components.
Functionality:
Manages the list of to-dos using local state.
Provides functions to add, toggle completion, delete, and edit tasks.
Conditionally renders either the EditTodoForm or Todo component based on the isEditing state of each task.
Handles state updates and interacts with child components.

State Management
State:
todos: An array of to-do objects, each containing id, task, completed, and isEditing properties.

State Management Functions:
addTodo: Adds a new task to the list with a unique ID.
toggleComplete: Toggles the completion status of a task.
deleteTodo: Removes a task from the list.
editTodo: Toggles the editing state of a task.
editTask: Updates the task’s text and toggles the editing state.
User Interaction
Adding a Task: Users input a task in the TodoForm, which triggers the addTodo function to add the task to the list.
Editing a Task: Users can click the edit icon on a task to display the EditTodoForm, where they can update the task’s text.
Toggling Completion: Clicking on a task toggles its completion status.
Deleting a Task: Clicking the delete icon removes the task from the list.

Instructions on how to set up and run the application
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
