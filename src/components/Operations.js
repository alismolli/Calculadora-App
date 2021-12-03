import React from 'react'
import './styles/Operations.css'
function Operations({baseTriangulo, setBaseTriangulo, alturaTriangulo, setAlturaTriangulo, ladoTriangulo, setLadoTriangulo, resultado, setResultado}) {
    
    const handleBase = (event)=>{
        setBaseTriangulo(event.target.value)
    }
    const handleHeight = (event)=>{
        setAlturaTriangulo(event.target.value)
    }
    const handleOnChange = (event)=>{
        setLadoTriangulo(event.target.value)
    }
    return (
        <section className ="operation-container">
            <label htmlFor="base-triangulo">Base del Triangulo</label>
            <input type="text" id="base-triangulo" value={baseTriangulo} onChange={handleBase} placeholder="Ingrese una cantidad en centimetros"/>
            <label htmlFor="altura-triangulo">Altura del Triangulo</label>
            <input type="text" id="altura-triangulo" value={alturaTriangulo} onChange={handleHeight} placeholder="Ingrese una cantidad en centimetros"/>
            <label htmlFor="lado-triangulo">Lado del Triangulo</label>
            <input type="text" id="lado-triangulo" value={ladoTriangulo} onChange={handleOnChange} placeholder="Ingrese una cantidad en centimetros"/>
            <div className="operation-container__resultado">
              <span>Resultado</span>
              <p>{resultado}</p> 
            </div>
        </section>
    )
}

export  { Operations }
