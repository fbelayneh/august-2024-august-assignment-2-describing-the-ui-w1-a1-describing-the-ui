[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/OV5DoI4W)
# **Assignment Title: Building a Dynamic Web Application with React**

### Introduction:

This exercise is designed to enhance your understanding of React and its core concepts, including components, JSX, props, conditional rendering, and more. By the end of this exercise, you will have built a small, dynamic web application that demonstrates these concepts in action.

### Setup:

- Fork the starter code repository from GitHub Classroom link (provide a specific link).
- Ensure you have Node.js and npm installed on your system.
- Clone your forked repository, and run **`npm install`** to install dependencies.

### Tasks:

### **Task 1: Understanding Components**

- **Objective**: Create a functional component named **`Header`** that displays a page header.
- **Requirements**:
  - Use a functional component.
  - The component should return a **`<header>`** HTML element containing an **`<h1>`** tag.
  - The **`<h1>`** tag should display "Welcome to My React App".

### **Task 2: Importing and Exporting Components**

- **Objective**: Learn how to export the **`Header`** component and import it into the main **`App`** component.
- **Requirements**:
  - Export the **`Header`** component from its file.
  - Import the **`Header`** component in **`App.js`**.
  - Render the **`Header`** component inside the **`App`** component's return statement.

### **Task 3: Writing Markup with JSX**

- **Objective**: Create a **`Footer`** component using JSX that includes your name and the current year.
- **Requirements**:
  - The component should return a footer tag containing a paragraph **`<p>`** that says "© [Your Name] [Current Year]".

### **Task 4: JS in JSX with Curly Braces**

- **Objective**: Dynamically display the current year in the **`Footer`** component using JavaScript within JSX.
- **Requirements**:
  - Use **`new Date().getFullYear()`** to get the current year.

### **Task 5: Props**

- **Objective**: Modify the **`Header`** component to accept a title prop and display it.
- **Requirements**:
  - The **`Header`** component should accept a **`title`** prop.
  - Render the **`title`** prop value inside the **`<h1>`** tag.

### **Task 6: Conditional Rendering**

- **Objective**: Implement conditional rendering in the **`App`** component to display a message if a list is empty.
- **Requirements**:
  - Create a state that holds an array of items (e.g., **`const [items, setItems] = useState([]);`**).
  - Use conditional rendering to display "No items available" if the array is empty.

### **Task 7: Rendering Lists**

- **Objective**: Render a list of items dynamically in the **`App`** component.
- **Requirements**:
  - Map over the **`items`** state to display each item in an unordered list.

### **Task 8: Keeping Components Pure**

- **Objective**: Ensure the **`Header`** component remains pure by passing props.
- **Requirements**:
  - Do not use state or side effects in the **`Header`** component.
  - Pass all necessary data as props from the parent **`App`** component.

### **Task 9: Routing**

- **Objective**: Implement routing to navigate between different pages/components in your application.
- **Requirements**:
  - Use **`react-router-dom`** to set up routes for at least two components.
  - Create navigation links to switch between routes.

### **Task 10: Understanding the UI Tree**

- **Objective**: Sketch or diagram the UI component tree of your application.
- **Requirements**:
  - Identify the hierarchy and structure of components in your application.
  - Submit a simple sketch or diagram representing the component tree.

### Submission:

- Commit and push your changes to your forked repository.
- Submit the link to your repository on GitHub Classroom.

### Evaluation Criteria:

- Adherence to task requirements.
- Clean and readable code.
- Proper use of React concepts and best practices.
