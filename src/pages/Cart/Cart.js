import React, { useContext } from 'react'
import "./Cart.css" 
import { StoreContext } from '../../context/storeContext'
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

const Cart = ({mode}) => {

    const {cartItems,food_list,removeFromCart,getTotalAmt} = useContext(StoreContext);
    const navigate = useNavigate();


  return (
    <div className='cart'>
        <div className='cart-items'>
            <div className='cart-items-title'>
               <p>Items</p>
               <p>Title</p>
               <p>Price</p>
               <p>Quantity</p>
               <p>Total</p>
               <p>Remove</p>
            </div>
            <br/>
            <hr/>
            {
                food_list.map((item,index)=>{
                   if(cartItems[item._id]>0){
                    return(
                        <div>
                           {
                             mode==="light"?
                                <div className='cart-items-title cart-items-item cartmode '>
                                    <img src={item.image} alt=''/>
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                    <p onClick={()=>removeFromCart(item._id)} className='cross'><MdDelete size={20}/></p>
                                </div>
                            : 
                            <div className='cart-items-title cart-items-item cart-mode'>
                                <img src={item.image} alt=''/>
                                <p className=''>{item.name}</p>
                                <p className=''>${item.price}</p>
                                <p className=''>{cartItems[item._id]}</p>
                                <p className=''>${item.price * cartItems[item._id]}</p>
                                <p onClick={()=>removeFromCart(item._id)} className='cross'><MdDelete size={20}/></p>
                            </div>
                           }

                            <hr/> 
                        </div>
                    )
                   }
                })
            }
        </div>
        <div className='cart-bottom'>
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
                    <button onClick={()=>navigate('/order')}>Proceed to Checkout</button>
                </div>
            </div>
            <div className='cart-promocode'>
                <div>
                    <p>If you have a promo code, Enter it here</p>
                    <div className='cart-promocode-input'>
                        <input type='text' placeholder='Promocode'/>
                        <button>Submit</button>
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Cart
