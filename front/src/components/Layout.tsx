// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import style from "../styles/Layout.module.css";

export const Layout = () => {
    const classAcive = ({ isActive }: { isActive: boolean }) => isActive ? style.active : "";

    return (<>
        <header>
            <NavLink to="/" className={classAcive}>Dish Categories</NavLink>
            <NavLink to="/about" className={classAcive}>About</NavLink>
            <NavLink to="/swagger" className={classAcive}>Swagger</NavLink>

        </header>
        <Outlet />
        <footer><h2>2023 by RomaN</h2></footer >
    </>
    )
}

