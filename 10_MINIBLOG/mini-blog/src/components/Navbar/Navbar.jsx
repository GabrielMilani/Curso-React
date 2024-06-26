import styles from "./Navbar.module.css"
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthValue } from "../../context/AuthContext";
import useAuthentication from "../../hooks/useAuthentication";

const Navbar = () => {

    const { user } = useAuthValue();
    const { logout } = useAuthentication();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? styles.active : "")}>
                        Home
                    </NavLink>
                </li>
                {!user && (
                    <>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) => (isActive ? styles.active : "")}>
                                Entrar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/register"
                                className={({ isActive }) => (isActive ? styles.active : "")}>
                                Cadastrar
                            </NavLink>
                        </li>
                    </>
                )}
                {user && (
                    <>
                        <li>
                            <NavLink
                                to="/posts/create"
                                className={({ isActive }) => (isActive ? styles.active : "")}>
                                Novo post
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => (isActive ? styles.active : "")}>
                                Dashboard
                            </NavLink>
                        </li>
                    </>
                )}
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? styles.active : "")}>
                        Sobre
                    </NavLink>
                </li>
                {user && (
                    <li>
                        <NavLink
                            onClick={handleLogout}>
                            Sair
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar