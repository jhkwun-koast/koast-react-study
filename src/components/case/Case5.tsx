import {useEffect, useState} from "react";
import {Product} from "./CaseIndex.tsx";


export interface Product {
  name: string,
  isInCart: boolean
}

const showNotification = (product:Product) => {
  alert(`Added ${product.name} to the shopping cart!`)
}

function Case5() {
  const item = window.localStorage.getItem('product');
  const banana = item? JSON.parse(item) : {
    name: 'banana',
    isInCart: false
  }
  const [product, setProduct] = useState(banana);

  useEffect(() => {
    if (product.isInCart) {
      showNotification(product);
    }
  }, [product]);

  function handleBuyClick() {
    addToCart(product);
  }

  function handleCheckoutClick() {
    addToCart(product);
    //brabra
  }

  const addToCart = (product:Product) => {
    product.isInCart = true;
    setProduct({...product});
    window.localStorage.setItem('product', JSON.stringify(product));
  }

  /*function buyProduct() {
    addToCart(product);
    showNotification(`Added ${product.name} to the shopping cart!`);
  }

  function handleBuyClick() {
    buyProduct();
  }

  function handleCheckoutClick() {
    buyProduct();
    //brabra
  }*/

  return (
    <>
      {product.name}, {product.isInCart ? 'o':'x'}
      <button onClick={handleBuyClick}>구매</button>
      <button onClick={handleCheckoutClick}>결제</button>
      <button onClick={()=>{
        product.isInCart = false;
        setProduct({...product});
        window.localStorage.clear();
      }}>초기화</button>
    </>
  )
}

export default Case5;