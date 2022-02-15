import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = ({defaultCategories=[]}) => {
  
  //const [ cat, setCat] = useState(['one punch']);
    const [ cat, setCat] = useState( defaultCategories );

    // const handleAdd = () =>{

    //      setCat([...cat,'Baki Hanma '])  
    //     //setCat(cats =>[...cats,'Baki'])

    // }


    return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCat }/>
      <hr />

      

      <ol>
          {
              cat.map(category=>
                 <GifGrid 
                 key={category}
                 category={category}
                 />
              )
          }
      </ol>
    </>
  );
};

export default GifExpertApp;

 