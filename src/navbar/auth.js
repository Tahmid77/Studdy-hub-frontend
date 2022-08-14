import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/home';
import Dashboard from '../components/dashboard';
import AuthUser from '../components/AuthUser';
function Auth() {
    const { token, logout } = AuthUser();
    const logoutUser = () => {
        if (token !== undefined) {
            logout();
        }
    }

    return (
        <>

            <nav className="flex justify-between items-center m-7">
                <a href="/"
                ><img className="w-24" src="logo.png" alt=""
                    /></a>
                <ul className="flex space-x-6 mr-6 text-lg">
                    <li>
                        <span class="font-bold upppercase hover:text-green-500">

                            <Link className="no-underline hover:text-green-500" to="/">Welcome User</Link>
                        </span>
                    </li>
                    <li>
                        <Link className="no-underline hover:text-green-500" to="/dashboard"><i class="fa-solid fa-plus mr-1"></i>
                            Upload Problems</Link>

                    </li>
                    <li>
                        <Link className="no-underline hover:text-green-500" to="/dashboard"><i class="fa-solid fa-gear mr-1"></i>
                            Manage Problems</Link>

                    </li>
                    <li>
                        <button class="hover:text-red-500" style={{ cursor: "pointer" }} onClick={logoutUser}>
                            <i class="fa-solid fa-door-closed"></i> Logout
                        </button>
                    </li>

                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </>
    );
}

export default Auth;
