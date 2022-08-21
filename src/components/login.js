import { useState } from "react"
import AuthUser from './AuthUser';

export default function Login() {
    const { http, setToken, setUser } = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitForm = () => {
        // api call
        http.post('/auth/login', { email: email, password: password }).then((res) => {
            if (res.data.status === true) {
                setToken(res.data.user, res.data.token);
                setUser(res.data.user);
            } else {
                console.log(res.data);
            }
        }, (err) => {
            console.log(err);
        })
    }

    return (
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <h1 className="text-center mb-3">Login </h1>
                    <div className="form-group">
                        <label>Email address:</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            onChange={e => setEmail(e.target.value)}
                            id="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            onChange={e => setPassword(e.target.value)}
                            id="pwd" />
                    </div>
                    <button type="button" onClick={submitForm} className="mt-4 bg-green-500 text-white rounded py-2 px-4 hover:bg-black">Login</button>
                </div>
            </div>
        </div>
    )
}