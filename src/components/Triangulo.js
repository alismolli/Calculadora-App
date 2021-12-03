import React, { useState } from 'react'
import { Header } from './Header'
import { Main } from './Main'
import { Buttons } from './Buttons'
import './styles/Triangulo.css'

function Triangulo() {
    const [baseTriangulo, setBaseTriangulo]=useState('')
    const [alturaTriangulo, setAlturaTriangulo]=useState('')
    const [ladoTriangulo, setLadoTriangulo]=useState('')
    const [resultado, setResultado] = useState(0)
    return (
        <article className="triangulo-card">
            <Header/>
            <Main
            baseTriangulo={baseTriangulo}
            setBaseTriangulo={setBaseTriangulo}
            alturaTriangulo={alturaTriangulo}
            setAlturaTriangulo={setAlturaTriangulo}
            ladoTriangulo={ladoTriangulo}
            setLadoTriangulo={setLadoTriangulo}
            resultado={resultado}
            setResultado={setResultado}/>
            <Buttons
            baseTriangulo={baseTriangulo}
            setBaseTriangulo={setBaseTriangulo}
            alturaTriangulo={alturaTriangulo}
            setAlturaTriangulo={setAlturaTriangulo}
            ladoTriangulo={ladoTriangulo}
            setResultado={setResultado}
            />
        </article>
    )
}

export { Triangulo }
