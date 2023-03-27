import React from "react"
import { useNavigate } from "react-router-dom"
import { irParaPaginaEmbaralhada } from "../Router/coordinator"
import { Button } from "../Styled"

function BotaoEmbaralhar() {
    const navigate = useNavigate()
    return (
        <Button onClick={() => irParaPaginaEmbaralhada(navigate)}>
            <i>EMBARALHAR</i>
        </Button>
    )
}

export default BotaoEmbaralhar