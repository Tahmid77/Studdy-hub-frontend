import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/home';
import Login from '../components/login';
import Register from '../components/register';

function Guest() {
    return (
        <>
            <nav className="flex justify-between items-center m-7">
                <a href="/"
                ><img className="w-24" src="logo.png" alt=""
                    /></a>
                <ul className="flex space-x-6 mr-6 text-lg">
                    <li>
                        <span class="font-bold upppercase hover:text-green-500">
                            <Link className="no-underline hover:text-green-500" to="/">Home</Link>
                        </span>
                    </li>
                    <li>
                        <Link className="no-underline hover:text-green-500" to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="no-underline hover:text-green-500" to="/register">Register</Link>

                    </li>
                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
            <footer
                className="absolute bottom-0 w-full flex items-center justify-start font-bold bg-slate-900 text-white h-24 opacity-90 md:justify-center"
            >
                <p class="ml-2">Copyright &copy; 2022, All Rights reserved</p>
            </footer>
        </>
    );
}

export default Guest;
