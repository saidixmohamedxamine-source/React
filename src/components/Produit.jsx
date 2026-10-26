import { useState } from "react";
import Filtrer from "./Filter";

function Produit() {
  const listProduit = [
    { nom: "banane", type: "fruit" },
    { nom: "orange", type: "fruit" },
    { nom: "pomme", type: "fruit" },
    { nom: "raisins", type: "fruit" },
    { nom: "kiwi", type: "fruit" },
    { nom: "tomate", type: "legume" },
    { nom: "carotte", type: "legume" },
    { nom: "pomme de terre", type: "legume" },
    { nom: "navet", type: "legume" },
    { nom: "poivron", type: "legume" },
  ];
  let types={...new set(ResultistProduit.map((elm)=>{elm.type}))}
  const [result,setResult]=useState(listProduit)
  function SelectHandler (value){
    let newR=result.filter((el)=>{
        el.type===value
    })
    setResult(newR)
    console.log(result)
  }
  
  return (<div>
    <Filtrer SelectHandler={SelectHandler} types={types}/>
  </div>)
}
