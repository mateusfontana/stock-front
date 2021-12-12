import { useState } from "react";
import { Link } from "react-router-dom";

const NewProduct = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputs);

        const token = localStorage.getItem('token');

        await fetch('http://localhost:5000/produtos', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(inputs)
        });
    }

    return <div className="container">
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="inputNome" class="form-label">Nome</label>
                <input value={inputs.name || ""} onChange={handleChange} name="name" type="text" class="form-control" id="inputNome" />
            </div>
            <div class="mb-3">
                <label for="inputDescricao" class="form-label">Descrição</label>
                <input value={inputs.description || ""} onChange={handleChange} name="description" type="text" class="form-control" id="inputDescricao" />
            </div>
            <div class="mb-3">
                <label for="inputUnidade" class="form-label">Unidade</label>
                <input value={inputs.unit || ""} onChange={handleChange} name="unit" type="text" class="form-control" id="inputUnidade" />
            </div>
            <div class="mb-3">
                <label for="inputPreco" class="form-label">Preço</label>
                <input value={inputs.price || ""} onChange={handleChange} name="price" type="number" class="form-control" id="inputPreco" step="0.01" />
            </div>
            <Link to="/">Voltar</Link>
            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
    </div>
}

export default NewProduct;