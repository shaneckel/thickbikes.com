import { Box } from './Common'
import { Theme } from './Theme'

const FrontContainer = ({children}) => {
  return (
    <Box 
      maxWidth={Theme.Breakpoints.md} 
      m='auto'
      bg='white'
      borderRadius='10px'
      p={['5']}
      mb='6'
    >
      {children}
    </Box>
  )
}

export default FrontContainer