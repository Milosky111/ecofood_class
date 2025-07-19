import './App.css';
import { Header } from './components/header.jsx';
import { ProductCard } from './components/ProductCard.jsx';
import { Formulario } from './components/Formulario.jsx';
import React, { useState } from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';
import AgregarProductoModal from './components/AgregarProductoModal';

const productosIniciales = [
  {
    title: 'Cuida tus recursos.',
    image: 'https://picsum.photos/id/674/367/267',
    description: 'Guárdalos bien para que se conserven mejor.',
  },
  {
    title: 'Revisa tus frutas',
    image: 'https://picsum.photos/id/429/367/267',
    description: 'Siempre se pueden salvar.',
  },
  {
    title: 'Cocina con lo que tienes',
    image: 'https://picsum.photos/id/292/367/267',
    description: 'Usa tu imaginación.',
  },
];

function App() {
  const [productos, setProductos] = useState(productosIniciales);
  const [showModal, setShowModal] = useState(false);

  const agregarProducto = (producto) => {
    const nuevo = {
      id: Date.now(),
      title: producto.title,
      image: producto.image,
      description: producto.description,
    };
    setProductos([...productos, nuevo]);
  };

  return (
    <>
      <Header />
      <div className="d-flex flex-wrap gap-3 justify-content-center p-3">
        {productos.map((prod, idx) => (
          <ProductCard key={idx} {...prod} />
        ))}
      </div>
      <div>
        <Formulario />
      </div>

      <Container className="py-4">
        <h1 className="mb-4">Productos</h1>
        <Button variant="success" onClick={() => setShowModal(true)}>
          + Agregar Producto
        </Button>

  
        <AgregarProductoModal
          show={showModal}
          setShow={setShowModal}
          agregarProducto={agregarProducto}
        />
      </Container>
    </>
  );
}

export default App;
