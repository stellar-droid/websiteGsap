import { Route, Routes } from "react-router-dom";
import SoftwareSolution from "./pages/Saas/SoftwareAsAService";
import ProductSolution from "./pages/Pass/Paas";
import SoarServices from "./pages/ManagedSecurityServices/SoarServices";
export default function Routing() {
    return(
            <Routes>
                <Route path="/" element={<SoftwareSolution />} />
                <Route path="/paas" element={<ProductSolution/>}/>
                <Route path="/soarservices" element={<SoarServices/>}/>
            </Routes>
    )
}