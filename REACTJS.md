https://github.com/sudheerj/reactjs-interview-questions?tab=readme-ov-file#what-is-react

Source for Interview Questions of React.js

# What are hooks?
- Hooks are the functions in React that let you use state and other React features without writing a class. 
- Hooks allows functional components to manage state and lifecycle events, which were previously only possible in class components. 
- 


# What is the difference between Functional Component and Class Component in React?
- The class component uses ES6 classes to create the components. It uses render function to render the HTML content in the webpage.
```javascript
class App extends React.Component {
  render() {
    return <h1>This is a class component</h1>;
  }
}
```
- Functional Component in React is nothing but the plain JS function which returns a JSX element which describe what should appear on the user interface. 
```javascript
function WelcomeMessage(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```
- In class component, you can update the state when a user interacts with it or server updates the data using the setState() method. The initial state is going to be assigned in the Constructor() method using the this.state object and it is possible to assign different data types such as string, boolean, numbers, etc.
- The useState() hook can used to implement state in functional components. It returns an array with two items: the first item is current state and the next one is a function (setState) that updates the value of the current state.

# useState Hook
- Allows to add state to the Functional Components.
```javascript
import React, { useState } from 'react';

function UseStateDemo() {
  // Declare a state variable called `count` with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="UseStateDemo">
      <h1>Counter App</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default UseStateDemo;
```

# useEffect
- Allows us to perform side effects in your function components, such as data fetching or manually updating the DOM.
- If the dependancy array is Empty, then the function will run only once when the component is mounted.
```javascript
import React, { useState, useEffect } from 'react';

function UseEffectDemo() {
  // State to store the list of product
  const [product, setProducts] = useState([]);
  // State to handle loading status
  const [loading, setLoading] = useState(true);
  // State to handle errors
  const [error, setError] = useState(null);

  // Fetch products when the component mounts
  useEffect(() => {
    // Define an async function to fetch data
    const fetchProducts = async () => {
      try {
        // Fetch data from API
        const response = await fetch('https://fakestoreapi.com/products');
        // Check if response is ok
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the JSON data
        const data = await response.json();
        // Update state with the fetched data
        setProducts(data);
      } catch (error) {
        // Update state with the error
        setError(error);
      } finally {
        // Update loading state
        setLoading(false);
      }
    };

    // Call the async function
    fetchProducts();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Render loading, error, or product data
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="ProductList">
    <h1>Product List</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {product.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>${product.price.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default UseEffectDemo;
```

# useReducer
- This hook is an alternative to useState for managing complex state logic. 
```javascript
import React, { useReducer } from 'react';

// Define the initial state
const initialState = {
  count: 0,
  name: '',
  isEditing: false,
};

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'TOGGLE_EDIT':
      return { ...state, isEditing: !state.isEditing };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

// Component
const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => dispatch({ type: 'INCREMENT' });
  const handleDecrement = () => dispatch({ type: 'DECREMENT' });
  const handleToggleEdit = () => dispatch({ type: 'TOGGLE_EDIT' });
  const handleNameChange = (e) => dispatch({ type: 'SET_NAME', payload: e.target.value });

  return (
    <div>
      <h1>UseReducer Demo</h1>
      <div>
        <h2>Count: {state.count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div>
        <h2>Name: {state.name}</h2>
        <button onClick={handleToggleEdit}>
          {state.isEditing ? 'Stop Editing' : 'Edit Name'}
        </button>
        {state.isEditing && (
          <input
            type="text"
            value={state.name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        )}
      </div>
    </div>
  );
};

export default UseReducerDemo;
```
- Centralized State Management: The reducer function manages all state changes in one place, making the logic easy to follow and maintain.
- Scalability: As the state management logic grows more complex, useReducer can handle it more gracefully than useState would with multiple state variables.
- Readability: By using actions, the intent of each state change is clearly communicated, improving the readability of the code.