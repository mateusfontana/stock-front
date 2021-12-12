import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const token = localStorage.getItem('token');

        const res = await fetch("http://localhost:5000/produtos", {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
        const data = await res.json();

        console.log(data)

        setProducts(data);
    }

    const deleteProduct = async (id) => {
        const token = localStorage.getItem('token');

        await fetch('http://localhost:5000/produtos/' + id, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        getProducts();
    }

    useEffect(() => {
        getProducts()
    }, [])

    return <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>  
                    <th scope="col">Unidade</th>
                    <th scope="col">Preço</th>
                </tr>
            </thead>
            <tbody>
                {products.length && products.map(product => (
                    <tr>
                        <th scope="row">{product.id}</th>
                        <td>{product.name}</td>
                        <td>{product.unit}</td>
                        <td>{product.price}</td>
                        <td>
                            <Link to="edit" state={{product: product}}>Editar</Link>
                            <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Deletar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Link to="new">Novo Produto</Link>
    </div>
}

export default ProductList;