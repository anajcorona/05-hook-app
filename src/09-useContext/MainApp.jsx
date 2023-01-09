import { Routes, Route, Navigate } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { UserProvider } from "./context/UserProvider";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <UserProvider>
        <Navbar/>
        <hr />

        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="about" element={ <AboutPage/> } />
            <Route path="login" element={ <LoginPage/> } />

            {/*  Formas de colocar una navegacion cuando coloca cualquier cosa en la ruta */}
            {/* <Route path="/*" element={ <LoginPage/> } /> */}
            <Route path="/*" element={ <Navigate to="/about" /> } />

        </Routes>
    </UserProvider>
  )
}