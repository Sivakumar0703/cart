
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ReactStars from 'react-rating-stars-component';





function App() {

  const perfume = [
    {
      image: 'https://airdealbd.com/wp-content/uploads/2021/04/Royal-Mirage-5.jpg',
      perfume_name: 'Royal Mirage',
      price: 'Rs. 1800',
      
    },
    {
      image: 'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/b/7bd09b88903105031257_1.jpg',
      perfume_name: 'Yardley London Gentleman Classic',
      price: 'Rs. 387',
     
    },
    {
      image: 'https://m.media-amazon.com/images/I/51QJzYUXsDL._SX522_.jpg',
      perfume_name: 'Engage Indigo Skies',
      price: 'Rs. 400',
      
    },
    {
      image: 'https://www.takeit2day.com/image/cache/data/indian-fragrance/bella-vita/bella-vita-skai-aquatic-600x800-0.jpg',
      perfume_name: 'Bella Vita Luxury SKAI AQUATIC',
      price: 'Rs. 559',
     
    },
    {
      image: 'https://i.pinimg.com/originals/26/1f/e0/261fe0b4b12fdcd8c50abc5b724310a5.jpg',
      perfume_name: 'Wild Stone Ultra Sensual',
      price: 'Rs. 390',
     
    },
    {
      image: 'https://th.bing.com/th/id/OIP.QY6k12z20isGlnxs1wcpfQHaHa?pid=ImgDet&rs=1',
      perfume_name: 'Guess Perfume',
      price: 'Rs. 4100',
      
    },
    {
      image: 'https://images-na.ssl-images-amazon.com/images/I/51WIqH1IFUL._SX466_.jpg',
      perfume_name: 'DENVER Hamilton Perfume',
      price: 'Rs. 400',
     
    },
    {
      image: 'https://th.bing.com/th/id/OIP.qPHuEedtNNjB5b0X3vSR7AHaHa?pid=ImgDet&rs=1',
      perfume_name: 'Brut-Oceans',
      price: 'Rs. 375',
      
    }
  ];

let [cart_count,setcart_count] = useState(0);



  return (
    <div className="App">
      <div className='cart'>
      <h2>
         <Badge className='badge' bg='warning'><i className="fa-sharp fa-solid fa-cart-shopping"></i> CART {cart_count}</Badge>
      </h2>
      </div>
      
      <div className='card-container'>
      {perfume.map((value, index) => <Product key={index}
        value={value}
        cart_count = {cart_count}
        setcart_count = {setcart_count}
      />)}
     </div>
    </div>
  );
} 

export default App;


function Product({ value,cart_count,setcart_count }) {


  const [dis , setDis] = useState(true);// to treat remove button 
  function disableAdd(){
     setDis(!dis)
     setcart_count(cart_count + 1)
  }

  function disableRemove(){
    setDis(!dis)
    setcart_count(cart_count - 1)
 } 

 const [rate , setRate] = useState(0);

 

 const readChange = (rating) => {
   setRate({rating});
   console.log(rating);
   }


  return (

   

      <Card className='box'  >
        <Card.Img variant="top" src={value.image} />
        <Card.Body>
          <Card.Title>{value.perfume_name}</Card.Title>
          <Card.Text>
            {value.price}
          </Card.Text>

          <Card.Text>
               <ReactStars
                   className='star'
                   size = {25}
                   isHalf = {true}
                   onChange= {readChange} > {rate}
                   
               </ReactStars>
         
          </Card.Text>

        </Card.Body>
        
        <Card.Footer>


        <Button variant="success"
           disabled={!dis}
            onClick={disableAdd}
            className='add_btn'
          >ADD TO CART</Button>
          
           <Button variant="danger"
            disabled={dis}
            onClick={disableRemove}

          >REMOVE FROM CART</Button> 

        </Card.Footer>
      </Card>
   

  );
} 
