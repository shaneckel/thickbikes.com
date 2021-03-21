/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import DeskHeader from './DeskHeader';
import MobileHeader from './MobileHeader';
import { useEffect, useState } from 'react'
import Break from './Break'
import { Box, Header, Text } from './Common'
import { Theme } from './Theme'
import FrontContainer from './FrontContainer'

const Layout = ({ children }) => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      window.pageYOffset > 5 ? setShadow(true) : setShadow(false)
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, [shadow]);

  return (
    <>
      <Box 
        position={['relative','fixed']}
        zIndex='10'
        pt={['1','4']}
        pb='3'
        width='100%'
        bg={[null, shadow ? 'background' : '']}
        css={css`
          transition: all 600ms ease;
        `}
      >
        <Header
          maxWidth={Theme.Breakpoints.md} 
          m='auto'
          pl={[4, 5, 6]}
          pr={[4, 5, 6]}
          as='header'
        >
        {
          Break().isMobile 
            ? <MobileHeader />
            : <DeskHeader shadow />
        }
        </Header>
      </Box>
      <Box pt={[2, 6]}>
        <Box
          m='auto'
          p={[ 4, 5, 6 ]}
          as='main'
        >
          {children}
          <FrontContainer>
            <Text as='p' color='grey'>
              <a href="https://www.facebook.com/thickbikes/">facebook</a> / 
              <a href="https://twitter.com/thickbikes"> twitter</a> / 
              <a href="https://www.instagram.com/thickbikes/"> instagram</a>
            </Text>
            <Text 
              as='p' 
              color='grey' 
              fontSize='0'
            >
              est. 2000 - pittsburgh, pa 
            </Text>
          </FrontContainer>
        </Box>   
      </Box>
    </>
  )
}

export default Layout
