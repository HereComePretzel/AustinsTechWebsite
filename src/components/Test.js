import React, { useState, Component } from 'react'
import { Menu } from 'semantic-ui-react'

function AltNav() {
  
    const [activeItemObj, setActiveItemObj] = useState('about')

    const handleItemClick = (e, { name }) => setActiveItemObj({ activeItem: name })
  



    const { activeItem } = activeItemObj

    return (
      <Menu tabular>
        <Menu.Item
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='blogs'
          active={activeItem === 'blogs'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={handleItemClick}
        />
      </Menu>
    )
  
}

export default AltNav
