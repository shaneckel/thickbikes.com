/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useState, useRef } from 'react'
import NavLinks from './Nav-links'
import { Box, Text } from './Common'
import Burger from './Burger'
import { useOnClickOutside } from '../hooks'
import Link from 'next/link'

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <Box 
        position='fixed'
        top={3}
        right={1}
        zIndex={20}
      >
        <Burger open={open} setOpen={setOpen} />
      </Box>
      <Link href='/'>
        <Box 
          width={1/3}
          mt={4}
        >
          <img src="/img/thicklogo.svg" alt="Thick Bikes - Pittsburgh Bike Shop logo" />
        </Box>
      </Link>
      <NavLinks 
        open={open} 
        setOpen={setOpen} 
        bg='background'
      />
    </div>
  )
}

export default Header;
