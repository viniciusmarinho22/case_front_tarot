import React from "react"
import { useNavigate } from "react-router-dom"
import { irParaPaginaInicial } from "../Router/coordinator"
import { Button } from "../Styled"

function BotaoInicio() {
    const navigate = useNavigate()
    return (
        <Button onClick={() => irParaPaginaInicial(navigate)}>
            <i>INICIO</i>
        </Button>
    )
}

export default BotaoInicio