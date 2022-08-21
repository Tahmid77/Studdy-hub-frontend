import { Routes, Route, Link } from 'react-router-dom';
import Home from '../components/home';
import Dashboard from '../components/dashboard';
import AuthUser from '../components/AuthUser';
import Post from '../components/post';
import Manage from '../components/manage';
import { useEffect, useState } from 'react';
import Upload from '../components/upload';
import EditProfile from '../components/editProfile';
import EditProblem from '../components/editProblem';
function Auth() {
    const { token, logout, http } = AuthUser();

    const logoutUser = () => {
        if (token !== undefined) {
            logout();
        }
    }

    return (
        <>

            <nav className="flex justify-between items-center m-7">
                <a href="/dashboard"
                ><img className="w-24" src="logo.png" alt=""
                    /></a>
                <ul className="flex space-x-6 mr-6 text-lg">
                    <li>
                        <span class="font-bold upppercase hover:text-green-500">

                            <Link className="no-underline hover:text-green-500" to="/user">Welcome User</Link>
                        </span>
                    </li>
                    <li>
                        <Link className="no-underline hover:text-green-500" to="/upload"><i class="fa-solid fa-plus mr-1"></i>
                            Upload Problems</Link>

                    </li>
                    <li>
                        <Link className="no-underline hover:text-green-500" to="/problem/manage"><i class="fa-solid fa-gear mr-1"></i>
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
                    <Route path="/user" element={<EditProfile />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/problem/details/:id" element={<Post />} />
                    <Route path="/problem/edit/:pid" element={<EditProblem />} />
                    <Route path="/problem/manage" element={<Manage />} />
                    <Route path="/upload" element={<Upload />} />
                </Routes>

            </div>
            <footer
                className="w-full flex items-center justify-start font-bold bg-slate-900 text-white h-24 opacity-90 md:justify-center mt-3"
            >
                <p class="ml-2">Copyright &copy; 2022, All Rights reserved</p>
            </footer>
        </>
    );
}

export default Auth;
