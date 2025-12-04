import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AreasVerdes from "./pages/servicios/AreasVerdes.jsx";
import CableadoEstructurado from "./pages/servicios/CableadoEstructurado.jsx";
import Electricidad from "./pages/servicios/Electricidad.jsx";
import Plomeria from "./pages/servicios/Plomeria.jsx";
import Soldadura from "./pages/servicios/Soldadura.jsx";
import TablarocaEmpastado from "./pages/servicios/TablarocaEmpastado.jsx";
import PreguntasFrecuentes from "./pages/empresa/PreguntasFrecuentes.jsx";
import PoliticaPrivavidad from "./pages/empresa/PoliticaPrivavidad.jsx";
import SobreNosotros from "./pages/empresa/SobreNosotros.jsx";
import VentaRefacciones from "./pages/equipos/VentaRefacciones.jsx";
import RentaEquipos from "./pages/equipos/RentaEquipos.jsx";
import Contacto from "./pages/Contacto.jsx";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/servicios/areas-verdes" element={<AreasVerdes/>} />
      <Route path="/servicios/cableado-estructurado" element={<CableadoEstructurado/>} />
      <Route path="/servicios/electricidad" element={<Electricidad/>} />
      <Route path="/servicios/plomeria" element={<Plomeria/>} />
      <Route path="/servicios/soldadura" element={<Soldadura/>} />
      <Route path="/servicios/tablaroca-empastado" element={<TablarocaEmpastado/>} />
      <Route path="/empresa/sobre-nosotros" element={<SobreNosotros/>} />
      <Route path="/empresa/politica-privacidad" element={<PoliticaPrivavidad/>} />
      <Route path="/empresa/preguntas-frecuentes" element={<PreguntasFrecuentes/>} />
      <Route path="/equipos/venta-refacciones" element={<VentaRefacciones/>} />
      <Route path="/equipos/renta-equipos" element={<RentaEquipos/>} />
      <Route path="/contacto" element={<Contacto/>} />
    </Routes>
  );
}

export default Router;