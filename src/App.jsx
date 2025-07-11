import './App.css'
import { Header } from './components/Header.jsx';
import { ProductCard } from './components/ProductCard.jsx';
import { Formulario } from './components/Formulario.jsx';


const products = [
  { title: "Laguito", image: "https://picsum.photos/id/10/2500/1667", description: "Tiene mucha agua" },
  { title: "Bosque", image: "https://picsum.photos/id/28/4928/3264", description: "Esta verdecito" },
  { title: "Bosque", image: "https://picsum.photos/id/28/4928/3264", description: "Esta verdecito" }
];

function App() {
  return (
    <>
      <div>
        <Header />  
      </div>
      <div>
        <ProductCard 
          title="Laguito" 
          image="https://picsum.photos/id/10/2500/1667" 
          description="Tiene mucha agua" 
        />
        <ProductCard 
          title="Bosque" 
          image="https://picsum.photos/id/28/4928/3264" 
          description="Esta verdecito" 
        />
      </div>
      <div>
        {products.map((product, index) => (
          <ProductCard 
            key={index} 
            title={product.title} 
            image={product.image} 
            description={product.description} 
          />
        ))}

      </div>
      <div>
        <Formulario />

      </div>
    </>
  )
}
export default App
