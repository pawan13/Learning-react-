import './App.css';
import Car3 from './Components/Car';

function App() {
  // const x = 5;
// let text = "Goodbye";
// if (x < 10) {
//   text = "Hello";
// }
// {/* ============= React Components ============  

// Components are like functions that return HTML elements.

// react components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML

// components are two types: class and  functions 

// In older React code bases,  Class components are primarily  used. It is now suggested to use Function components along with Hooks, which were added in React 16.8.

// */}

// {/* Function Component 
//    function component returns HTML, and can be written less code, and are easier to understand

// */}

// {/* example  */}
// function Car(){
//   return <h2>Hi, I am a brand new car</h2>
// }

// // Props 
// // components can be passed as props, which stands for properties 
// // props are like function arguments, and you send them into components as Attributes.

// {/* example  */}
// function Car1(props){
//   return <h2>I am a {props.color} Car!</h2>
// }

// {/* Components in Components */}

// function Garage(){
//   return(
//     <>
//     <h1>Who lives in my Garage?</h1>
//     <Car/>  
//     {/* car component is refered here inside the garage components. */}
//     </>
//   )
// }

{/*React Props */}
{/* Props are arguments passed into React components. Props are passed to components via HTML attributes
Example: 
<Car brand= "Ford"/>
The component receives the argument as a props object.
props stands for properties
 */}

 // using the brand attribute in the component and props as object

 function Car(props){
  return <h2>I am a {props.brand}!</h2>
 }
// props are also how you pass data from one component to another, as parameters
 function Garage(){
  return(
    <>
    <h1>Who lives in my garage?</h1>
    <Car brand="Toyota Hilux 4WD"/>
    </>
  )
 }

 // if you have the variable to send and not a string, just put the variable name inside curly brackets.
 function Garage(){
  const carName = "Toyota Ford Hilux 4WD"
  return(
    <>
  <h1>Which Car is my garage?</h1>
  <Car brand = {carName}/>
  </>
  )
 }

 // or if it was a object
 function Garage(){
  const carInfo = { name: "Toyota", model:"Hilux 4WD"}
  return(
    <>
    <h1>Which car is in my garage?</h1>
    <Car brand= {carInfo.name} />
    </>
  )
 }

 {/* React props are read only! you will get an error if you try to change their value*/}

  return (
    <div className="App">
      <header className="App-header">
        {/* rendering a car component
        <Car/>
        <Car1 color="purple"/>
        {/* <h1>Happy Coding</h1> 

        <Garage/>
  <Car3/>*/}

  <Car brand = "Ford"/>
  <Garage/>
{/* =============== JSX +++++++++++++  */}
        {/* JSX -> JavaScript XML => makes it easier to write and add HTML in React*/}

        {/* <h1>I Love JSX!</h1> */}

        {/* expressions in JSX  */}
        {/* <p>React is {5+5} times better with JSX!</p> */}

        {/* Inserting a large block of HTML  */}
        {/* <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
        </ul> */}
      {/* wrapping two paragraph inside one DIV  element*/}
        {/* <div>
          <p>I am paragraph.</p>
          <p>I am a paragraph too</p>
        </div> */}
   {/* Note: JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element. */}

   {/* Wrap two paragraphs inside a fragment */}
      {/* <>
      <p>I am paragraph inside a fragment.</p>
      <p>I am a paragraph inside a fragment too</p>
      </> */}
{/* elements must be closed  */}
{/* jsx follows XML rules, and therefore HTML elements must be properly closed  */}
{/* <input type="text" /> */}

{/* Attribute class = className 
Note: use attribute className instead of class. */}
{/* <p className='myClass'>Happy coding to all coders </p> */}
{/* Conditions - if statements  */}
 {/* React supports if statements, but not inside JSX  */}
  {/* Note: Use if statements outside of the JSX or you could use a ternary expression  */}

{/* Example outside of the JSX  */}
{/* if statements are used outside of JSX here  */}
 

{/*<h1>{x < 10 ? "Hello Canberra" : "Welcome to Canberra"}</h1>
Note: In order to embed a JavaScript expression inside JSX, the JavaScript must wrapped with curly braces.  */} 



      </header>
    </div>
  );
}

export default App;
