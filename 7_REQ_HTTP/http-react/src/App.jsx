import { useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {

  const [products, setProducts] = useState([]);

  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);



  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // });

    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    httpConfig(product, "POST");
    setName("");
    setPrice("");
  };

  const handleDelete = async (id) => {
    httpConfig(id, "DELETE");
  }

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>{product.name} - R$: {product.price} -
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input
              type="text"
              name="name"
              placeholder="Nome do Produto"
              onChange={(e) => { setName(e.target.value) }}
              value={name}
            />
          </label>
          <label>
            <span>Preço:</span>
            <input
              type="text"
              name="price`"
              placeholder="Preço do Produto"
              onChange={(e) => { setPrice(e.target.value) }}
              value={price}
            />
          </label>
          {loading && (
            <input
              type="submit"
              disabled
              value="Aguarde"
            />
          )}
          {!loading && (
            <input
              type="submit"
              value="Criar"
            />
          )}
        </form>
      </div>
    </div>
  )
}

export default App
