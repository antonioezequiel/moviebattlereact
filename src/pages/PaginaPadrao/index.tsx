import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";

const PaginaPadrao = () => {
    return (
        <>
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default PaginaPadrao;