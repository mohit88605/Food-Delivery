import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/storeContext'

const PlaceOrder = () => {

   const {getTotalAmt} = useContext(StoreContext);

  return (
    <form className='place-order'>
        <div className='place-order-left'>
            <p className='title'>Delivery Information</p>
            <div className='multi-fields'>
                <input type='text' placeholder='First Name'/>
                <input type='text' placeholder='Last Name'/>
            </div>
            <input type='email' placeholder='Email address'/>
             <div className='multi-fields'>
                <input type='text' placeholder='Street'/>
            </div>
            <div className='multi-fields'>
                <input type='email' placeholder='Zip Code'/>
                <input type='text' placeholder='City'/>
            </div>
            <input type='text' placeholder='Phone no.'/>
        </div>
        <div className='place-order-right'>
           <div className='cart-total'>
                <h2>Cart Totals</h2>
                <div>
                    <div className='cart-total-details'>
                        <p>Subtotal</p>
                        <p className='red'>${getTotalAmt()}</p>
                    </div>
                    <hr/>
                    <div className='cart-total-details'>
                        <p>Delivery fee</p>
                        <p className='red'>${getTotalAmt()===0?0:5}</p>
                    </div>
                    <hr/>
                    <div className='cart-total-details'>
                        <p>Total</p>
                        <p className='red'>${getTotalAmt()===0?0:getTotalAmt()+5}</p>
                    </div>
                    <button>Proceed to Payment</button>
              </div>
            </div>
        </div>
      
    </form>
  )
}

export default PlaceOrder
