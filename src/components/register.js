import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';

export default function Register() {
    const navigate = useNavigate();
    const { http } = AuthUser();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();
    const [error, setError] = useState();

    const submitForm = (e) => {
        // api call
        e.preventDefault();
        var data = new FormData();
        data.append("pic", pic, pic.name);
        data.append("name", name);
        data.append("email", email);
        data.append("password", password);
        console.log(data);
        http.post('/auth/register', data).then((res) => {
            if (res.data.status === true) {
                console.log(res.data);
                navigate('/login')
            } else {
                setError({
                    email: res.data.errors.email[0],
                    name: res.data.errors.name[0],
                    password: res.data.errors.password[0],
                    
                });
                console.log();

               
            }

        }, (err) => {
            console.log(err);
        })
    }

    return (
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Register </h1>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="test" className="form-control" placeholder="Enter name"
                            onChange={e => setName(e.target.value)}
                            id="name" />
                    </div>
                    <div><small className="text-danger">{error?error.name:""}</small></div>
                    <div className="form-group mt-3">
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={e => setEmail(e.target.value)}
                            id="email" />
                    </div>
                    <div><small className="text-danger">{error?error.email:""}</small></div>
                    <div className="form-group mt-3">
                        <label>Upload Profile Picture:</label>
                        <input required type="file" className="form-control"
                            onChange={e => setPic(e.target.files[0])}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                            id="pwd" />
                    </div>
                    <div><small className="text-danger">{error?error.password:""}</small></div>
                    <button type="button" onClick={submitForm} className="mt-4 bg-green-500 text-white rounded py-2 px-4 hover:bg-black">Register</button>
                </div>
            </div>
        </div>
    )
}