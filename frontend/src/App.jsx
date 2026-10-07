import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
 
import Productlist from './assets/Productlist';

// function App() {
    
//     const [count,setCount]=useState(0)

//     //Use Effects callbacks are dependent on the dependency array
//     useEffect(() => { // executes if any variable changes -> call backs run each time then
//         console.log("Akshita");
//     })

//     useEffect(() => { // executes once since the [] dependency array is empty
//         console.log("Jiya");
//     }, [])

//     useEffect(() => { // executes when the count useState cariable changes 
//         console.log("Siya");
//     }, [count])


//     return (
//         <div>
//             <h1>Lorem ipsum dolor sit amet.</h1>
//             <button onClick ={()=>setCount(count+1)}>Click Me</button>
//         </div>
//     )

// }


function App(){
    const [count,setCount]=useState(0)
    const [products,setProducts]=useState([])
    useEffect(()=>{
        async function APIcall() {
            console.log("inside async function");
            let response = await fetch("https://fullstack-1-m80f.onrender.com/api/products");

            let data = await response.json();
            console.log(data);
            setProducts(data);
        }
        APIcall();
    },[])



    return (
        <div>
            <h1>Product dashboard</h1>
    
            <Productlist products={products}></Productlist>
        </div>
    )
}

export default App;