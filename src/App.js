import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Car3 from './Components/Car';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
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

// {/*React Props */}
// {/* Props are arguments passed into React components. Props are passed to components via HTML attributes
// Example: 
// <Car brand= "Ford"/>
// The component receives the argument as a props object.
// props stands for properties
//  */}

 // using the brand attribute in the component and props as object

//  function Car(props){
//   return <h2>I am a {props.brand}!</h2>
//  }
// // props are also how you pass data from one component to another, as parameters
//  function Garage(){
//   return(
//     <>
//     <h1>Who lives in my garage?</h1>
//     <Car brand="Toyota Hilux 4WD"/>
//     </>
//   )
//  }

//  // if you have the variable to send and not a string, just put the variable name inside curly brackets.
//  function Garage(){
//   const carName = "Toyota Ford Hilux 4WD"
//   return(
//     <>
//   <h1>Which Car is my garage?</h1>
//   <Car brand = {carName}/>
//   </>
//   )
//  }

//  // or if it was a object
//  function Garage(){
//   const carInfo = { name: "Toyota", model:"Hilux 4WD"}
//   return(
//     <>
//     <h1>Which car is in my garage?</h1>
//     <Car brand= {carInfo.name} />
//     </>
//   )
//  }

//  {/* React props are read only! you will get an error if you try to change their value*/}


//  function Football() {
//   const shoot = () => {
//     alert ("Great shot !")
//   }
//   return (
//     <button onClick={shoot}>Take the shoot!</button>
//   )
//  }

 // To pass an argument to an event handler, we use an arrow function 

//  function Football(){
//   const shoot = (a) => {
//     alert(a)
//   }
//   return(
//   <button onClick={()=> shoot("Goal!")}>Take the shot!</button>
//   )
//  }

 // react event object 
 // Event handlers have access to the react event that triggered the function

//  function Football(){
//   const shoot =(a,b) =>{
//     alert( b.type)
//   }

//   return(
//     <button onClick={(event)=> shoot("goal", event)}>Take the shoot</button>
//   )
//  }

// React Conditional rendering 
//  In React, you can conditionally render the components 

// if Statement 
// we can use the if javaScript operator to decide which component to render 

// function MissedGoal(){
//   return <h1>Missed! </h1>
// }

// function MadeGoal(){
//   return <h1>Goal!</h1>
// }

// function Goal(props){
//   const isGoal = props.isGoal;

//   if(isGoal){
//     return <MadeGoal/>
//   }
//   return <MissedGoal/>
//   }

  // Logical && Operator 
// Another way to conditionally render react is by using the && operator.
// function Garage(props){
//   const cars = props.cars

//   return (
//     <>
//     <h1>Garage</h1>
//     {cars.length > 0 &&
//     <h2>You can {cars.length} cars in your garage.</h2>
//     }
//     </>
//   )
// }

// const cars = ["", "", ""]

//  Ternary Operator 
// Another way to conditionally render elements is byy suing the ternary operator
//  condition ? true : False

// function Goal2(props){
//   const isGoal = props.isGoal
//   return (
//     <>
//     {isGoal? <MadeGoal/> : <MissedGoal/>} 
//     </>
//   )
// }
  
//React Lists 
// In React, we will render lists with some type of loop
// The javaScript map() array method is generally the preferred method 
// function Car(props){
//   return <li>I am a {props.brand}</li>
// }

// function Garage(){
//   const cars = ['Ford', 'BMW', 'Audi']
//   return (
//     <>
//     <h1>Who lives in my garage?</h1>
//     <ul>
//       {cars.map((car)=> <Car brand={car}/>)}
//     </ul>
//     </>
//   )
// }

// Keys 
// keys allow react to keep track of elements. this way, if an item is updated or removed, only that item will be re-rendered instead of the entire list 

// function Car(props){
//   return <li>I am a {props.brand}</li>
// }
// function Garage(){
//   const cars = [
//     {id:1, brand: 'Ford'},
//     {id:2, brand: 'BMW'},
//     {id:1, brand: 'Audi'}
//   ];
//   return (
//     <>
//     <h1>Who lives in my garage?</h1>
//     <ul>
//       {cars.map((car)=> <Car key={car.id} brand={car.brand}/>)}
//     </ul>
//     </>
//   )
// }

// React Forms 
// we can add form with react like other element 
// function MyForm(){
//   return(
//     <form>
//       <label>Enter your name:
//         <input type="text" />
//       </label>
//     </form>
//   )
// }

// This will work as normal, the form will submit and the page will refresh
// but this is generally not what we want to happen in react 
// we want to prevent this default behavior and let react control the form 

// Handling Forms 
// Handling forms is about how you handle the data when it changes value or gets submitted. 
// In HTML, form data is usually handled by the DOM.
// In React, form data is usually handled by the components 
// when the data is handled by the components, all the data is stored in the component state
// you can control changes by adding event handlers in the onChange attribute 
// we can use the useState Hook to keep track of each inputs value and provide a "single source of truth " for the entire application. 

// function MyForm1(){
//   const [name, setName] = useState("")

//   return(
//     <form action="">
//       <label htmlFor="">Enter your name:
//       <input type="text"
//       value={name}
//       onChange={(e)=> setName(e.target.value)} />
//       </label>
//     </form>
//   )
// }

//Submitting Forms 
// We can control the submit action by adding an event handler in the onSubmit attribute for the <form/>

// function MyForm2(){
//   const [name, setName] = useState('')

//   const handleSubmit = (event)=> {
//     event.preventDefault()
//     alert(`The name you entered was: ${name}`)
//   }

//   return (
//     <form action="" onSubmit={handleSubmit}>
//       <label htmlFor=""> Enter your name: &nbsp;
//         <input type="text"
//         value={name}
//         onChange={(e)=> setName(e.target.value)} />
//       </label>
//       <br/>
//       <input type="submit" />
//     </form>
//   )
// }

// Multiple Input Fields 
// you can control the values of more than one input filed by adding a name attribute to each element 
// we will intialize our state with an empty object 
// To access the fields in the event handler use the event.target.name and event.target.value syntax 
// To update the state, use square brackets around the property name 

// function MyForm3(){
//   const [inputs, setInputs] = useState({})

//   const handleChange = (event) =>{
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//     }
// // we use the same event handler function for both input fields, we could write one event handler for each, but this gives us much cleaner code and is the preferred way in react.
//   const handleSubmit = (event) =>{
//     event.preventDefault()
//     alert(inputs)
//   }

//   return(
//     <form action="" onSubmit={handleSubmit}>
//       <label htmlFor="">
//         Enter your name: &nbsp;
//         <input type="text"
//         name='username'
//         value={inputs.username || ""}
//         onChange={handleChange}
//          />
//       </label> <br />
//       <label htmlFor="">Enter your age: &nbsp;
//       <input type="number"
//       name='age'
//       value={inputs.age || ""}
//       onChange={handleChange}
//        />
//       </label> <br />
//       <input type="submit" />
//     </form>
//   )

// }

 //Textarea 
  // the textarea element in react is slightly different from the ordinary HTML
  // In HTML the value of a textarea was the next between the start tag <textarea> and the end tag </textarea>. but in the react the value of a textarea is placed in a value attribute and we will use the useState Hook to manage the value of the textarea
  // function MyForm4(){
  //   const [textarea, setTextarea]= useState(
  //     "The content of a textarea goes in the value attribute"
  //     )
      

  //     const handleChange= (event) =>{
  //       setTextarea(event.target.value)
  //     }
  //     return(
  //       <form action="">
  //         <textarea value={textarea} onChange={handleChange}></textarea>
  //       </form>
  //     )
  //  }

  return (
    <div className="App">
      <header className="App-header">
        {/* rendering a car component
        <Car/>
        <Car1 color="purple"/>
        {/* <h1>Happy Coding</h1> 

        <Garage/>
  <Car3/>*/}

  {/* <Car brand = "Ford"/>
  <Garage/> */}

  {/* <Football/> */}


  {/* <Garage cars = {cars}/>
  <Goal isGoal={false}/>
  <Goal2 isGoal={true}/> */}

  {/* <Garage/> */}
  {/* <Garage/> */}

  {/* <MyForm/>
  <MyForm1/>
  <MyForm2/>
  <MyForm3/>
  <MyForm4/> */}
  
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

{/* React Events 
Just like HTML DOM events, react can perform actions based on user events.

React has the same events as HTML : click , change , mouseover, etc.

react events are written in camelCase syntax:
onClick instead of onClick 

react event handlers are written inside the curly braces:
onClick={shoot } instead of onClick="shoot()".
*/}

{/* <button onClick={shoot}>Take the shoot </button> */}

{/* React Router  */}
{/* Create react appdoesn't include page routing and react routing is the most popular solution. */}

{/* Add react router  */}
{/* run this terminal from the root directory of the application.  */}
{/* npm i -D react-router-dom  */}


{/*Folder Structure  
to create an application with multiple page routes, let's first start with the file structure.
Within the src folder we'll create a folder name pages with other files 
each file will contain the react component.  */}

<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element={<Home/>} />
  <Route path="blogs" element={<Blogs/>} />
  <Route path="contact" element={<Contact/>} />
  <Route path="*" element={<NoPage/>} />
  </Route>
</Routes>
</BrowserRouter>


      </header>
    </div>
  );
}

export default App;
