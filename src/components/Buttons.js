import React from 'react'
import './styles/Buttons.css'
function Buttons({baseTriangulo, alturaTriangulo, ladoTriangulo, setResultado}) {
    const calcularArea = (baseTriangulo, alturaTriangulo)=>{
        const area = (baseTriangulo*alturaTriangulo)/2
        setResultado(area)
    }
    const calcularPerimetro = (baseTriangulo, ladoTriangulo)=>{
        const perimetro = parseFloat(ladoTriangulo*2)+parseFloat(baseTriangulo)
        setResultado(perimetro)
    }
    return (
        <section className ="button-container">
            <button className="button-container__payment"onClick={() => calcularArea(baseTriangulo, alturaTriangulo)}>Calcular el área</button>
            <button className="button-container__payment"onClick={() => calcularPerimetro(baseTriangulo, ladoTriangulo)}>Calcular el perímetro</button>
            <a href="/">
              <button className="button-container__cancel">Cancelar</button>
            </a>
        </section>
        
    )
}

export { Buttons }
