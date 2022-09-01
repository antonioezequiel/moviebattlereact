import CreateUser from "pages/createUser";
import NewPlay from "pages/newPlay";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PaginaPadrao from "./pages/PaginaPadrao";
import SobreNos from "./pages/Sobre";

const AppRouter = () => {
    return (
        <main>
            <Router>
                <Routes>
                    <Route path="/" element={<PaginaPadrao/>}>
                        <Route index element={<Home />} />
                        <Route path="/about" element={<SobreNos/> }></Route>
                        <Route path="/create-user/new" element={<CreateUser/> }></Route>
                        <Route path="/batalha/new" element={<NewPlay/> }></Route>
                    </Route>
                </Routes>
            </Router>
        </main>
    )
}

export default AppRouter;