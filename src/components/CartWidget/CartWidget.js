import style from './CartWidget.module.css';
import { FiShoppingCart } from 'react-icons/fi';
import Counter from '../Counter/Counter';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const CartWidget = (props) => {
     const cartList = useContext(CartContext);

     return (
          <>
          <button className={style.cart}>
               <FiShoppingCart className={style.cart__icon} />
               {
                    cartList.total_quantity() > 0 &&
                    <Counter cant={cartList.total_quantity()} />
               }
               
          </button>
          </>
     );
}

export default CartWidget;