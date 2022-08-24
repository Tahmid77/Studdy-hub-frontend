import { useEffect, useState } from 'react';
import AuthUser from '../AuthUser';
import { useNavigate, useParams } from "react-router-dom";
import { Routes, Route, Link } from 'react-router-dom';

export default function EditListing(props) {
    const navigate = useNavigate();
    const { http, user } = AuthUser();
    const [userdetail, setUserdetail] = useState('');

    const { u_id } = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [password, setPassword] = useState();

    const submitForm = () => {
        /* API CALL */
        http.put('/Admin/UpdateUser/' + u_id, { id: id, name: name, email: email }).then((res) => {
            navigate('/users/view');
        })
    }

    useEffect(() => {
        fetchUserDetail();
    }, []);



    const fetchUserDetail = () => {

        setUserdetail(user);
        setId(user.id);
        setName(user.name);
        setEmail(user.email);
    }
    return (
        <div className="mt-3">
            <Link className="inline-block text-success ml-4 mb-4 text-decoration-none" to="/dashboard">Back </Link>
            <div className="row justify-content-center pt-5">
                <div className="col-sm-6">
                    <div className="card p-4">
                        <h2 className="align-items-center text-center text-success">Update Profile Information</h2>

                        <div className="mb-3 mt-3">
                            <label className="form-label">Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name"

                                onChange={e => setName(e.target.value)} />
                        </div>

                        <div className="mb-3 mt-3">
                            <label className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"

                                onChange={e => setEmail(e.target.value)} />
                        </div>

                        <button type="button" onClick={submitForm} className="btn btn-success mt-4">Update</button>
                    </div>
                </div>
            </div>




        </div>
    );
}