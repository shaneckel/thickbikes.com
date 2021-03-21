/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import NavLinks from './Nav-links'
import { Flex, Box, Image, A} from './Common'
import Link from 'next/link' 

const Header = () => {
  return (
    <Flex 
      display={[ 'block', 'flex'] }
      width={1}
      height={1/2}
    >
      <Box 
        width={1/3}
        display='flex'
        alignContent='center'
        css={css`
          cursor: pointer;
        `}
      >
        <Link href='/' as='/'>
          <A
            css={css`
              max-width: 144px;
              flex: 1;
            `} 
          >
            <Image 
              src="/img/thicklogo.svg" 
              alt="Thick Bikes - Pittsburgh Bike Shop logo" 
            />
          </A>
        </Link>
      </Box>
      <NavLinks width={2/3} />
    </Flex>
  )
}
export default Header
