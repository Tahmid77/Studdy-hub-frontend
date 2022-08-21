import { useState } from "react"
import AuthUser from './AuthUser'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Upload = () => {
    const navigate = useNavigate();

    const { http } = AuthUser();

    const [title, setTitle] = useState();
    const [email, setEmail] = useState();
    const [tags, setTags] = useState();
    const [description, setDescription] = useState();
    const submitForm = () => {
        /* API CALL */
        http.post('/posts/create', { title: title, email: email, tags: tags, description: description }).then((res) => {
            console.log(res.data);
            navigate('/dashboard');
        })
    }
    return (
        <div className="row justify-content-center pt-4">
            <Link className="inline-block text-success ml-4 mb-4 text-decoration-none" to="/dashboard">Back </Link>

            <div className="col-sm-6">

                <div className="card p-4">
                    <h2 className="align-items-center text-center text-success">Post a Problem</h2>

                    <div className="mb-3 mt-3">
                        <label className="form-label">Title:</label>
                        <input type="text" className="form-control" id="title" placeholder="Enter Title" name="title"
                            onChange={e => setTitle(e.target.value)} />
                    </div>

                    <div className="mb-3 mt-3">
                        <label className="form-label">Email:</label>
                        <input type="email" className="form-control" id="location" placeholder="Enter Email" name="email"
                            onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Tags:</label>
                        <input type="text" className="form-control" id="tags" placeholder="Enter Tags" name="tags"
                            onChange={e => setTags(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Description:</label>
                        <input type="text" className="form-control" id="description" placeholder="Enter Description" name="description"
                            onChange={e => setDescription(e.target.value)} />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-success mt-4">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Upload;