import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Outlet} from "react-router-dom";
import NavBar from "../components/Navbar.jsx";

export const Home = () => {
    return (
        <>
            <Header/>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}