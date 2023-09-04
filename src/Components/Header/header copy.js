import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import ProductCartIcon from '../product-cart/product-cart-icon'
import styles from './header.modul.css'
const Header = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState(false);

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

  const handleChange = (item, d) => {
    const updatedCart = cart.map((data) => {
      if (data.id === item.id) {
        const newAmount = data.amount + d;
        // Ensure that the item's amount is never less than 1
        data.amount = Math.max(newAmount, 1);
      }
      return data;
    });

    setCart(updatedCart);
  };

  return (
    <header className={styles['header']}>
      <nav>        
        <ul>
            <li><NavLink to={'/'}>خانه</NavLink></li>
            <li><NavLink to={'/products'}>محصولات</NavLink></li>
            <li><NavLink to={'/about'}>درباره ما</NavLink></li>
            <li><NavLink to={'/contact'}>تماس با ما</NavLink></li>
            <li > 
              <ProductCartIcon size={cart.length} setShow={setShow}/>
                {
                  show && <NavLink to={'/ProductCart'}></NavLink> 
                }
                {
                  warning && <div>item already added</div>
                }
            </li>
        </ul>
        
      </nav>
      
    </header>
  )
}

export default Header