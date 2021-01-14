import React, { useState } from 'react'

function Nav() {

    const [activeItem, setActiveItem] = useState('')
    
    const handleItemClick = (e) => setActiveItem(e.target.name)
    
    return(
    <div className='ui menu'>
        <a className='item'
            name='blogs'
            active={activeItem === 'blogs'}
            onClick={handleItemClick}
        >
            Blogs
        </a>
        <a className='item'
            name='portfolio'
            active={activeItem === 'portfolio'}
            onClick={handleItemClick}
        >
            Portfolio
        </a>
        <a className='item'
            name='about'
            active={activeItem === 'about'}
            onClick={handleItemClick}
        >
            About
        </a>
        <a className='item'
            name='contact'
            active={activeItem === 'contact'}
            onClick={handleItemClick}
        >
            Contact
        </a>
        <a href='https://github.com/HereComePretzel'><i className='big github icon' style={{color: 'black'}}></i></a>
        <a href='https://www.linkedin.com/in/austin-oie-4a176519/'><i className='big linkedin icon' style={{color: '#0072B1'}}></i></a>
        <a href='https://austinoie.medium.com/'><i className='big medium icon' style={{color: 'black'}}></i></a>

    </div>
    )
}

export default Nav