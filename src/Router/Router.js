import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaDetalheCarta from "../telas/PaginaDetalheCarta";
import PaginaEmbaralhada from "../telas/PaginaEmbaralhada";
import PaginaInical from "../telas/PaginaInicial"

function Router() {
    const [detalheCarta, setDetalheCarta] = useState([])
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaInical />} />
                <Route path="/paginaEmbaralhada" element={<PaginaEmbaralhada setDetalheCarta={setDetalheCarta} />} />
                <Route path="/paginaDetalheCarta" element={<PaginaDetalheCarta detalheCarta={detalheCarta} />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router