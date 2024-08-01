## React Overview

### What is React?
React is a JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies. It allows developers to create large web applications that can update and render efficiently in response to data changes.

### Key Features
- **Component-Based**: Build encapsulated components that manage their own state, then compose them to make complex UIs.
- **Declarative**: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
- **Virtual DOM**: React creates an in-memory data structure cache, computes the resulting differences, and then updates the browser's displayed DOM efficiently.

### Core Concepts
- **JSX**: A syntax extension that allows mixing HTML with JavaScript. It’s not required, but it makes writing React components easier and more intuitive.
- **Components**: The building blocks of a React application. They can be functional or class-based.
- **State and Props**: `State` is a way to store and manage local component data. `Props` are inputs to components that allow data to be passed from one component to another.
- **Lifecycle Methods**: Special methods in class components that get called at different points in a component's life (e.g., `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).

### Getting Started
1. **Installation**:
   - Using Create React App: `npx create-react-app my-app`
   - Manual setup: Install `react` and `react-dom` via npm or yarn.

2. **Basic Example**:
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Hello, world!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));
```

3. **Creating Components**:
   - Functional Component:
   ```jsx
   function Welcome(props) {
     return <h1>Hello, {props.name}</h1>;
   }
   ```
   - Class Component:
   ```jsx
   class Welcome extends React.Component {
     render() {
       return <h1>Hello, {this.props.name}</h1>;
     }
   }
   ```

4. **State Management**:
   - Using `useState` Hook in Functional Components:
   ```jsx
   import React, { useState } from 'react';

   function Counter() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p>You clicked {count} times</p>
         <button onClick={() => setCount(count + 1)}>Click me</button>
       </div>
     );
   }
   ```

   - Using State in Class Components:
   ```jsx
   class Counter extends React.Component {
     constructor(props) {
       super(props);
       this.state = { count: 0 };
     }

     render() {
       return (
         <div>
           <p>You clicked {this.state.count} times</p>
           <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
         </div>
       );
     }
   }
   ```

### Useful Links
- [Official Documentation](https://reactjs.org/docs/getting-started.html)
- [React GitHub Repository](https://github.com/facebook/react)
- [Create React App](https://create-react-app.dev/)
