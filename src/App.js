import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


const products = [
  {
    name: 'Photoshop',
    price: '$45.09'
  },
  {
    name: 'LightHouse',
    price: '$43.09'
  },
  {
    name: 'Blender',
    price: '$95.09'
  },
  {
    name: 'Facebook',
    price: '$00.00'
  },
  {
    name: 'Youtube',
    price: '$00.00'
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <Person name= 'Abul' id = '11'></Person>
        <Person name= 'Jamal' id = '51'></Person>
        <Person name= 'Monto' id = '66'></Person>
        <Person name= 'Sahed' id = '98'></Person> */}

        {/* <Product name = {products[0].name} price={products[0].price}></Product> */}
        {/* <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Product product = {products[2]}></Product> */}
        <Counter></Counter>
        <Users></Users>

        {products.map(product=> <Product producta = {product}></Product>)}

      </header>
      
    </div>
  );
}

function Person(props){

  var style ={
    border : '2px solid black',
    color : 'white',
    backgroundColor: 'grey',
    margin: '5px',
    padding: '5px',
    float: 'left'
  }

  return(
    <div style={style}>
      <h2>Name: {props.name}</h2>
  <h6>ID: {props.id}</h6>
    </div>
  );
}

function Product(props){

const card = {
  border : '5px solid white',
  backgroundColor: 'salmon',
  boxShadow : '5px 5px 10px yellow',
  width: '200px',
  height: '250px'
}
const {name, price} = props.producta;
  return (
    <div style={card}>
      {/* <h2>{props.name}</h2>
      <h3>Price: {props.price}</h3> */}
      <h2>{name}</h2>
      <h3>Price: {price}</h3>
      <button>Buy now</button>
    </div>
  )
}
function Counter(){
  const[count, setCount] = useState(0);
  const handleIncrease = ()=>{
    const newCount = count+1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {handleIncrease}>Increase</button>
      <button>Decrease</button>
    </div>
  )
}

function Users(){
   const[users, setUsers] = useState([]);
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data=> setUsers(data));

   }, []);


  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <h4>posts</h4>
      <ul>
  {users.map(user=> <li>{user.title}</li>)}
      </ul>
    </div>
  )
}

export default App;
