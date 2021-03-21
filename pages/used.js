import { motion } from 'framer-motion'
import { Theme } from '../components/Theme'
import UsedList from '../components/UsedList'
import Prismic from 'prismic-javascript'
import { Box, Text, Image } from '../components/Common'
import FrontContainer from '../components/FrontContainer'
import { format } from 'date-fns'

const client = Prismic.client('https://thick.cdn.prismic.io/api/v2')

const Used = (props) => {
  let date = props.used.results.reduce((a, b) => {
    return new Date(a) > new Date(b.last_publication_date) 
      ? a 
      : b.last_publication_date
  })


  const usedList = props.used.results
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
          src="/img/used-body1.jpg" 
          alt="our used bike section"
        />
        <Text as='h1'>
          Used Bikes!
        </Text>
        <Text as='h2' fontWeight='400' fontSize={[1,2]} color='grey'>
          Listed below is a complete list of our professionally fixed-up used bicycles we have for sale. This gallery is kept very current - usually up to the minute. If a bike is shown here it should be available to purchase.
        </Text>
        <Text as='p' fontWeight='400' fontSize='.8em' color='grey'>
          Updated: <Text as='span' fontWeight='900' color='background'>{ format(new Date(date), 'MMMM do, yyyy / h:mma')}</Text>
        </Text>
      </FrontContainer>
      <Box 
        maxWidth={Theme.Breakpoints.md}
        m='auto' 
        mb='6'
      >
        <UsedList usedList={usedList} />
      </Box>
    </motion.div>
  )
}

Used.getInitialProps = async (context ) => {
  const used = await client.query(
    Prismic.Predicates.at('document.type', 'used_bikes'),{
      orderings : '[my.writings.date desc]',
      pageSize : 50
    }
  )
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  return { used }
}


export default Used
