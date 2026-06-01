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