import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({ email: "mates@teste.com", password: "123456"});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputs);

        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputs)
        });

        const responseBody = await response.json();

        localStorage.setItem('token', responseBody.token);
        localStorage.setItem('user', responseBody.usuario);

        navigate("/products")
    }

    return <div className="container">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input value={inputs.email || ""} onChange={handleChange} name="email" type="email" className="form-control" id="inputEmail" />
            </div>
            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Senha</label>
                <input value={inputs.password || ""} onChange={handleChange} name="password" type="password" className="form-control" id="inputPassword" />
            </div>
            <button type="submit" className="btn btn-primary">Acessar</button>
        </form>
    </div>
}

export default Login;
