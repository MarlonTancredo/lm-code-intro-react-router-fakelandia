import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../footer/Footer"

const MainLayout = () => {
    return (
        <>
            <Header />
            <main style={{ height: "100vh" }}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout