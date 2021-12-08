import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NewProduct = ({product}) => {
    const [productInfo, setProductInfo] = useState({});
    const location = useLocation()

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setProductInfo(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(productInfo);

        await fetch('http://localhost:5000/produtos/' + productInfo.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        });
    }

    useEffect(() => {
        setProductInfo(location.state.product);
    }, [location])

    return <div className="container">
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="inputNome" class="form-label">Nome</label>
                <input value={productInfo.name || ""} onChange={handleChange} name="name" type="text" class="form-control" id="inputNome" />
            </div>
            <div class="mb-3">
                <label for="inputDescricao" class="form-label">Descrição</label>
                <input value={productInfo.description || ""} onChange={handleChange} name="description" type="text" class="form-control" id="inputDescricao" />
            </div>
            <div class="mb-3">
                <label for="inputUnidade" class="form-label">Unidade</label>
                <input value={productInfo.unit || ""} onChange={handleChange} name="unit" type="text" class="form-control" id="inputUnidade" />
            </div>
            <div class="mb-3">
                <label for="inputPreco" class="form-label">Preço</label>
                <input value={productInfo.price || ""} onChange={handleChange} name="price" type="number" class="form-control" id="inputPreco" step="0.01" />
            </div>
            <Link to="/">Voltar</Link>
            <button type="submit" class="btn btn-primary">Editar</button>
        </form>
    </div>
}

export default NewProduct;