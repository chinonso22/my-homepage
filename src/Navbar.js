
import React, { useState, useEffect } from 'react';
import { AiFillAccountBook } from "react-icons/ai";
import "./pages/navbar.css"
import { Link } from 'react-router-dom'
import {Button} from "./pages/Button"


function Navbar() {


  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
<>

<nav className='navbar'>
<div className='navbar-container'>
<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
Asonmedical
<i class='fab fa-typo3' />
</Link>
<div className='menu-icon' onClick={handleClick}>
<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
</div>
<div className='menu-icon' onClick={handleClick}>
<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
</div>


<ul className={click ? 'nav-menu active' : 'nav-menu'}>



<li className='nav-item'>
<Link to='/'
className='nav-links'
onClick={closeMobileMenu}
id='home-style'
>Home</Link>

</li>

<li className='nav-item'>
<Link to='/About'
className='nav-links'
onClick={closeMobileMenu}
>About</Link>
</li>

<li className='nav-item'> 
<Link to='/patients' 
className='nav-links'
onClick={closeMobileMenu}
>Careers</Link>
</li>
<li className='nav-item'> 
<Link to='/Ser' 
className='nav-links'
onClick={closeMobileMenu}


>Teams</Link>
</li>
<li className='nav-item'> 
<Link to='/Teams' 
className='nav-links'
onClick={closeMobileMenu}

>contact Us</Link>
</li>
<li className='nav-item'> 
<Link to='/Test' 
className='nav-links'
onClick={closeMobileMenu}

>Products</Link>
</li>
<li className='nav-item'> 
<Link to='/Technology' 
className='nav-links'
onClick={closeMobileMenu}

>Technology</Link>
</li>

<li className='nav-item'> 
<Link to='/' 
className='nav-links'
onClick={closeMobileMenu}
>
{button && <Button buttonStyle='btn--outline'>

COVID19</Button>}
</Link>
</li>


</ul>



</div>

</nav>
</>

  
  )
}

export default Navbar
