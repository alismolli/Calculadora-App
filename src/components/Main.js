import React from 'react'
import { Operations } from './Operations'
import './styles/Main.css'
function Main(props) {
    return (
        <main>
            <h1> Calculadora de Física</h1>
            <p> Triangulo</p>
            <Operations
            baseTriangulo={props.baseTriangulo}
            setBaseTriangulo={props.setBaseTriangulo}
            alturaTriangulo={props.alturaTriangulo}
            setAlturaTriangulo={props.setAlturaTriangulo}
            ladoTriangulo={props.ladoTriangulo}
            setLadoTriangulo={props.setLadoTriangulo}
            resultado={props.resultado}
            setResultado={props.setResultado}
            />
        </main>
    )
}

export {Main}
