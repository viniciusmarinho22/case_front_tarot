import { useState } from "react"
import PaginaInical from '../telas/PaginaInicial';
import PaginaEmbaralhada from '../telas/PaginaEmbaralhada';
import PaginaDetalheCarta from '../telas/PaginaDetalheCarta';

function SelecionaPagina() {

    const [pagina, setValorPagina] = useState(1)
    const [detalheCarta, setDetalheCarta] = useState([])

    switch (pagina) {
        case 1:
            return <PaginaInical setValorPagina={setValorPagina} setDetalheCarta={setDetalheCarta} />
        case 2:
            return <PaginaEmbaralhada setValorPagina={setValorPagina} setDetalheCarta={setDetalheCarta} />
        case 3:
            return <PaginaDetalheCarta detalheCarta={detalheCarta} />
        default:
            return "Página não encontrada!"
    }
}
export default SelecionaPagina