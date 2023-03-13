

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
//import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import React from 'react';




function Product({ value,cart_count,setcart_count }) {

 // let [btn_show, setbtn_show] = useState(false);

 // let [disable , setDisable] = useState(false);
/*
  function addItemToCart(){
    setbtn_show(!btn_show)
    setcart_count(cart_count + 1)
  }

  function removeItemFromCart(){
    setbtn_show(!btn_show)
    setcart_count(cart_count - 1)
  }*/
const [dis , setDis] = useState(true);// to treat remove button 
  function disableAdd(){
     //setDisable(!disable)
     setDis(!dis)
     setcart_count(cart_count + 1)
  }

  function disableRemove(){
   // setDisable(!disable)
    setDis(!dis)
    setcart_count(cart_count - 1)
 } 

  return (

   

      <Card className='box'  >
        <Card.Img variant="top" src={value.image} />
        <Card.Body>
          <Card.Title>{value.perfume_name}</Card.Title>
          <Card.Text>
            {value.price}
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



//export default Product