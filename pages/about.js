import { motion } from 'framer-motion'
import { Image } from '../components/Common'
import FrontContainer from '../components/FrontContainer'
import { Theme } from '../components/Theme'

const About = () => (
  <FrontContainer>
    <motion.div       
      initial="initial"
      animate="enter"
      exit="exit"
      variants={Theme.transition.default}
    >
      <Image 
        borderRadius='6px' 
        src="/img/about-head.jpg" 
        alt="about thick bikes"
      />
      <h1>Bike Shop!</h1>
      <p>Thick bikes is a bike shop in pittsburgh. We really like bikes and riding them. We Try our best to run a great shop. We've been considered <a href="https://www.pghcitypaper.com/pittsburgh/best-of-pittsburgh-legacy-thick-bikes/BestOf?oid=9839513">The Best</a> a bunch of times, no cap. We've been around since 2000. Stop by and get all bikey wit-cha-boi.</p>
    </motion.div>
  </FrontContainer>
)

export default About