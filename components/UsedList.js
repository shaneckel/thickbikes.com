/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { Text, Box, Image, Flex } from '../components/Common'

const UsedList = ({usedList }) => {
  return (
    <Flex
      display='flex'
      flexWrap='wrap'
      justifyContent='end'
      alignItems='center'
    >
    {
      usedList.map((post, idx) => {
        return (
          <Box
            flex='1'
            minWidth='220px'
            maxWidth={['100%','292px']}
            m='2'
            key={idx}
          >
            <a href={post.data.image.url} target="_blank">
              <Box
                borderRadius='6px'
                bg='text'
                p='4'
                position='relative'
                zIndex='0'
             >
                <Image 
                  borderRadius='6px'
                  width={['100%', null]}
                  src={post.data.image.thumb.url} 
                />
                <Text 
                  fontSize={1}
                  color='white'
                  bg='background'
                  p='2'
                  css={css`
                    position: absolute;
                    display: inline-block;
                    border-radius: 4px;
                    top: 10px;
                    left: 10px;
                  `}
                > 
                  ${post.data.price[0].text}
                </Text>
                <Box 
                  minHeight='2.4em;'
                  display='flex'
                  alignItems='center'
                >
                  <Text mb='2' fontSize='1' color='grey' fontWeight='300' mt='0' as='p'>{post.data.description[0].text}</Text>
                </Box>
              </Box>
            </a>          
          </Box>
        )
      })
    }
    </Flex>
  )
}

export default UsedList
