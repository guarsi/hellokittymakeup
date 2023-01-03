import React, { useEffect, useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../constants/data/products';
import { Card, Progress} from '../../components'


const Home = ({categoria = 0}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const onHandlerSelect = (product) => {  
    navigate(`/product/${product.id}`, { state: product})
  }


  let lista = []
if (categoria == 0) { 
  lista= PRODUCTS 
}
else{
  PRODUCTS.forEach((p) => {
    console.log("categoria del producto", p.categoryId)
  if(p.categoryId == categoria){
    lista.push(p)
  }
  })

}
console.log("listafiltrada",lista)

  useEffect(() => {
    const getDocHeight = () => {
      return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      )
    }
    const calculateScrollDistance = () => {
      const scrollTop = window.pageYOffset;
      const winHeight = window.innerHeight;
      const docHeight = getDocHeight();
      const totalDocScrollLength = docHeight - winHeight;

      const scrollPosition = Math.floor(scrollTop / totalDocScrollLength * 100);
      setScrollPosition(scrollPosition);
    }
    const handleScroll = (event) => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    }
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <div className="home-container">
      <Progress scroll={scrollPosition}/>
      <h1>Productos destacados</h1>
        <div className='products-container'>
        {lista.map((product) => (
          <Card product={product} key={product.id} onSelect={onHandlerSelect}/>
        ))}
      </div>
    </div>
  );
}

export default Home;
