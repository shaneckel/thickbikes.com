/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { motion } from 'framer-motion'
import { Theme } from '../components/Theme'
import Prismic from 'prismic-javascript'
import { Box, Text, Image } from '../components/Common'
import FrontContainer from '../components/FrontContainer'
import { RichText, Date } from 'prismic-reactjs'
import { format } from 'date-fns'

const client = Prismic.client('https://thick.cdn.prismic.io/api/v2')

const Inventory = (props) => {
  const homeData = props.prismicRequest.results[0];
  return (
    <motion.div       
      initial="initial"
      animate="enter"
      exit="exit"
      variants={Theme.transition.default}
    >
      <FrontContainer>
      <Image 
          borderRadius='6px' 
          src="/img/inventory-head.jpg" 
          alt="our used bike section"
        />
        <Text as='h1'>
          New Bike Inventory!
        </Text>
        <Text as='p' fontWeight='400' fontSize='.8em' color='grey'>
          Updated: <Text as='span' fontWeight='900' color='background'>{ format(new Date(homeData.last_publication_date), 'MMMM do, yyyy / h:mma')}</Text>
        </Text>
        <Box
          color='grey'
          css={css`
            font-size: .8em;
          `}
        >
          {RichText.render(homeData.data.body)}
        </Box>
      </FrontContainer>
    </motion.div>
  )
}

Inventory.getInitialProps = async (context ) => {
  const prismicRequest = await client.query(
    Prismic.Predicates.at('document.type', 'inventory')
  )
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  return { prismicRequest }
}

export default Inventory
