
import { useState } from 'react'
import './App.css'
import Bottols from './Components/Bottols/Bottols'
import Header from './Components/Header/Header'
import { useEffect } from 'react'
import { addToLs, getStoredCart, removeFromLs } from './Utilis/localStorage'
import Cart from './Components/Cart/Cart'

function App() {
  const [bottols, setBottols] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
    fetch('bottols.json')
      .then(res => res.json())
      .then(data => setBottols(data))
  }, [])


  useEffect(()=>{
    console.log('called use effect',bottols.length);
    if(bottols.length>0){

      const storedCart = getStoredCart();
      

      const saveCart =[]
      for(const id of storedCart){
        
        const bottole = bottols.find(bottole => bottole.id === id)
        if(bottole){
          saveCart.push(bottole)
        }
        console.log('saved cart',saveCart);
        setCart(saveCart)
      }
    }
  },[bottols])

  const handleAddToCart = bottol => {
    const newCart = [...cart, bottol]
    setCart(newCart)
    addToLs(bottol.id)


  }
  const handleRemoveCart = id =>{
    removeFromLs(id)
  }


  return (
    <>

      <h2>Memorable Water battol</h2>
      <Header></Header>
      <div >
        <h4>Abavilable Bottols:{bottols.length}</h4>
        <Cart cart={cart}></Cart>

        <div className='bottol-container'>
          {bottols.map(bottol => <Bottols
            key={bottol.id}
            bottol={bottol}
            handleAddToCart={handleAddToCart}
            handleRemoveCart={handleRemoveCart}

          ></Bottols>)}
        </div>
      </div>


    </>
  )
}

export default App
