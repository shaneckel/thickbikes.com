/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import ActiveLink from './ActiveLink'
import { Flex, Box, A } from './Common'
import { useEffect, useRef, useState } from 'react'
import { Theme } from './Theme'

const links = [
  ['about', '/about' ],
  ['inventory', '/inventory' ],
  ['used', '/used' ]
]

const NavLinks = ({ open, setOpen, ...props }) => {
  const navigationBox = useRef(null)
  const [navHeight, setNavHeight] = useState(500);

  useEffect( () => {
    if(navigationBox.current && navigationBox.current > 500) {
      setNavHeight(navigationBox.current.offsetHeight)
    }
  }, [navigationBox]);
  
  return (
    <Flex 
      {...props}
      ref={navigationBox}
      open={open} 
      display={['block'] } 
      textAlign='right'
      width={['100%', 2/3]}
      pl={[0, 0]}
      pt={[6, 0]}
      pb={[6, 0]}
      zIndex='0'
      position={['fixed', 'inherit']}
      left='0'
      top={[open ? '0': `-${navHeight}px`, null]}
      css={css`
        transition: all 500ms ease;
        padding-right: 0px;
      `}
      as='nav'
    >
      <Box 
        display={['block', 'none']}
        fontSize={[3, 1, 2]}
        p={[4,2, '5px']}
        flex='1'
        textAlign={['center', '']}
        mt={[null, 0]}
        pr='0'
        border={[null, '5px solid white']}
        ml={['0', '4']}
      >
        <ActiveLink 
          activeClassName="active" 
          href='/'
        >
          <A 
            onClick={() => setOpen ? setOpen(!open) : null }
            as="a" 
            href=""
            p={[4, 2, 4]}
            width="100%"
            color='white'
            css={css`
              text-transform: uppercase;
              font-weight: 900;
              &.active {
                color: ${Theme.colors.yellow}
              }
            `}    
          >
            home
          </A>
        </ActiveLink>
      </Box>
      {       
        links.map((link, idx) => {
          return (
            <Box 
              display={['block', 'inline-block']}
              key={idx} 
              fontSize={[3, 1, 2]}
              p={[4,2, '5px']}
              flex='1'
              textAlign={['center', '']}
              mt={[null, 0]}
              pr='0'
              border={[null, '5px solid white']}
              ml={['0', '4']}
            >
              <ActiveLink 
                activeClassName="active" 
                href={link[1]}
              >
                <A 
                  onClick={() => setOpen ? setOpen(!open) : null }
                  as="a" 
                  href=""
                  p={[4, 2, 4]}
                  width="100%"
                  color='white'
                  css={css`
                    text-transform: uppercase;
                    font-weight: 900;
                    &.active {
                      color: ${Theme.colors.yellow}
                    }
                  `}    
                >
                  {link[0]}
                </A>
              </ActiveLink>
            </Box>
          )
        })
      }
    </Flex>
  )
}

export default NavLinks 