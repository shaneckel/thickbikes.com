/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { Text, Flex, Box, Image, A} from '../components/Common'
import { Theme } from '../components/Theme'
import { motion } from 'framer-motion'
import FrontContainer from '../components/FrontContainer'
import Link from 'next/link'
import { RichText, Date } from 'prismic-reactjs'
import { format } from 'date-fns'
import Prismic from 'prismic-javascript'

const client = Prismic.client('https://thick.cdn.prismic.io/api/v2')

const DateBox = ({children}) => {
  return (
    <Box
      flex='1 100px' 
      width='96px'
      borderRight='2px solid'
      borderTop='2px solid'
      m='2'
      p='1'
      minWidth='110px'
      borderRadius='0 6px 0 0'
    >
      {children}
    </Box>
  )
}

const Hours = {
  monday: 'Closed',
  tuesday: '11a - 7p',
  wednesday: '11a - 7p',
  thursday: 'Closed',
  friday: '11a - 7p',
  saturday: '9a - 5p',
  sunday: 'Closed'
}

const Home = (props) => {
  const mainData = props.prismicRequest.results[0];

  return (
    <motion.div       
      initial="initial"
      animate="enter"
      exit="exit"
      variants={Theme.transition.default}
    >
      <FrontContainer>
        <Text fontSize={[ 3, 6]} as='h1' fontWeight='400' pb='4'color='grey' mt='5'>
          <Text as='span' color='background' fontWeight='900'>THICK bikes</Text> is an award winning bike shop in Pittsburgh. We <Text as='span' color='background' fontWeight='800'>sell</Text> bikes & bike gear. We <Text as='span' color='background' fontWeight='800'>repair</Text> bikes. We <Text as='span' color='background' fontWeight='800'>ride</Text> bikes. We're all about bikes.
        </Text>
        <Image borderRadius='6px' src="/img/thick-building.jpg" alt="Bike shop building." />
      </FrontContainer>

      <FrontContainer>
        <Text color='grey' fontSize={[1, 2]} as='h2' fontWeight='400'><Text color='background' fontSize={[2, 3]} fontFamily='"Ideal Sans A", "Ideal Sans B"' as='span' fontWeight='800'>We have every bike thing for all types of bike people.</Text> If you want to buy, repair, or modify your bike... We're the best shop in Pittsburgh for bikes. We've been helping Pittsburgh safely get on two wheels since 2000.</Text>
        <Flex
          display={['block', 'flex']}
          flexWrap='wrap'
          mt={[2, 5]}
        >
          <Box 
            flex='1 0 40%' 
            width={[1, 1, 1, 1/2]} 
            mr={[0, 2]}
          >
            <Image 
              borderRadius='6px' 
              src="/img/thick-inside-1.jpg" 
              alt="Bike shop inside."
            />
          </Box>
          
          <Box 
            flex='1 0 40%' 
            width={[1, 1, 1, 1/2]} 
            ml={[0, null, 1, 2]}
            display={['none', 'block']}
          >
            <Image 
              borderRadius='6px' 
              src="/img/thick-inside-2.jpg" 
              alt="Bike shop inside."
            />
          </Box>
        </Flex>
      </FrontContainer>

      <FrontContainer>      
        <Text as='h1'>News</Text>
        <Text as='p' fontWeight='400' fontSize='.8em' color='grey'>
          <Text as='span' fontWeight='900' color='background'>{ format(new Date(mainData.last_publication_date), 'MMMM do, yyyy')}</Text>
        </Text>
        <Box
          color='grey'
        >
          {RichText.render(mainData.data.body)}
        </Box>
      </FrontContainer>

      <FrontContainer>
        <Text as='h1'>Hours (Covid-19 Hours)</Text>
        <Text as='h2' fontWeight='400' fontSize={[1,2]} color='grey'>Walk in sales one customer at a time. Email us at <a href="mailto:sales@thickbikes.com">sales@thickbikes.com</a> with any questions. Walk in service is also available. Email <a href="mailto:tech@thickbikes.com">tech@thickbikes.com</a> or Text <a href="tel:4123903590">(412) 390-3590</a>.</Text>
        <Flex 
          as='aside'
          display='flex'
          flexWrap='wrap'
          mt='5'
        >
          <DateBox><Text as='h4' fontSize='1' pb='0' mb='3'>Monday</Text> <Text as='p' color='grey'>{Hours.monday}</Text></DateBox>
          <DateBox><Text as='h4' fontSize='1' pb='0' mb='3'>Tuesday</Text> <Text as='p' color='grey'>{Hours.tuesday}</Text></DateBox>
          <DateBox><Text as='h4' fontSize='1' pb='0' mb='3'>Wednesday</Text> <Text as='p' color='grey'>{Hours.wednesday}</Text></DateBox>
          <DateBox><Text as='h4' fontSize='1' pb='0' mb='3'>Thursday</Text> <Text as='p' color='grey'>{Hours.thursday}</Text></DateBox>
          <DateBox><Text as='h4' fontSize='1' pb='0' mb='3'>Friday</Text> <Text as='p' color='grey'>{Hours.friday}</Text></DateBox>
          <DateBox><Text as='h4' fontSize='1' pb='0' mb='3'>Saturday</Text> <Text as='p' color='grey'>{Hours.saturday}</Text></DateBox>
          <DateBox><Text as='h4' fontSize='1' pb='0' mb='3'>Sunday</Text> <Text as='p' color='grey'>{Hours.sunday}</Text></DateBox>
        </Flex>
      </FrontContainer>

      <FrontContainer> 
        <Text as='h1'>Who we carry</Text>
        <Text as='p' css={css`a{text-decoration: underline; `}>
          We carry a wide range of quality brands including <Text as='span' fontWeight='900'>bikes</Text> from <a href='https://www.specialized.com/us/en' target='_blank'>Specialized</a>, <a href='https://www.giant-bicycles.com/us' target='_blank'>Giant</a>, <a href='https://salsacycles.com/' target='_blank'>Salsa</a>, <a href='https://surlybikes.com/' target='_blank'>Surly</a> and <a href='https://allcitycycles.com/' target='_blank'>All-City</a>.
        </Text>
        <Text as='p' css={css`a{text-decoration: underline;}`}>
          We have <Text as='span' fontWeight='900'>eBikes</Text> from <a href='https://www.gazellebikes.com/' target='_blank'>Gazelle</a>, <a href='https://www.giant-bicycles.com/us/ebikes-overview' target='_blank'>Giant</a> and <a href='https://www.specialized.com/us/en/electric-bikes' target='_blank'>Specialized</a> as well.  
        </Text>
        <Text as='p' css={css`a{text-decoration: underline;}`}>
        You will also find a selection of <Text as='span' fontWeight='900'>eCargo bikes</Text> from <a href='https://www.urbanarrow.com/en' target='_blank'>Urban Arrow</a>, <a href='https://yubabikes.com/' target='_blank'>Yuba</a>, <a href='http://www.larryvsharry.com/' target='_blank'>Larry Vs. Harry</a>, and <a href='https://surlybikes.com/bikes/big_easy' target='_blank'>Surly</a>.
        </Text>
        <Text as='p' css={css`a{text-decoration: underline;}`}>
          We also fix up and sell <Text as='span' fontWeight='900'>used bikes</Text>. Visit our <Link href="/used">Used Bike Photo Album</Link> to see our current listing of used bikes.
        </Text>
      </FrontContainer>

      <FrontContainer> 
        <Text as='h1'>Phone / Email </Text>
        <Text as='h2' fontWeight='400' fontSize={[1,2]} color='grey'>Feel free to contact us about anything bike related. We're friendly.</Text>
        
        <Text as='h1'>
          <a href="tel:4123903590">(412) 390-3590</a> 
        </Text>
        
        <Flex 
          as='aside'
          flexWrap='wrap'
          mt='5'
          textAlign='center'
          display={['block', 'flex']}
        >
          <Box
            flex='1' 
            width={[1, 1/2]} 
            mr={[0, 4]}
            mb={[4, 0]}
          >
            <A as='a' fontWeight='300' color='white' href="mailto:tech@thickbikes.com"> 
              <Box 
                bg='background'
                color='white'
                borderRadius='6px'
                p='1'
              >
                <Text as='h4' color='white' fontSize='3' mb='0'>Technical Questions</Text>
                <p>tech@thickbikes.com</p>
              </Box>
            </A>
          </Box>
          <Box
            flex='1' 
            width={[1, 1/2]} 
            ml={[0, 4]}
          >
            <A as='a' fontWeight='300' color='white' href="mailto:sales@thickbikes.com"> 
              <Box 
                bg='background'
                color='white'
                borderRadius='6px'
                p='1'
              >
                <Text as='h4' color='white' fontSize='3' mb='0'>Sales Questions</Text>
                <p>sales@thickbikes.com</p>
              </Box>
            </A>
          </Box>
        </Flex>
      </FrontContainer>

      <FrontContainer>
        <Text as='h1'>Location</Text>
        <Text as='h2' fontWeight='400' fontSize={[1,2]} color='grey'>Don't let the southside parking phobia keep you from stopping by. We have a parking lot in front of our building right off of 15th street.</Text>
        <A as='a' fontWeight='300' color='white' href="https://www.google.com/maps?ll=40.42614,-79.978377&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=10115945386035297245" > 
          <Box 
            bg='background'
            color='white'
            borderRadius='6px'
            p='1'
            textAlign='center'
          >
            <p>62 S. 15th Street / Pittsburgh, Pa / 15203</p>
          </Box>
        </A>
      </FrontContainer>
    </motion.div>  
  )
}

Home.getInitialProps = async (context ) => {
  const prismicRequest = await client.query(
    Prismic.Predicates.at('document.type', 'home_page')
  )
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }
  return { prismicRequest }
}

export default Home