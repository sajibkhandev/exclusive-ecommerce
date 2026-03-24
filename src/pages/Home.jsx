
import Banner from '../layouts/Banner'
import Promotion from '../assets/promotion.png'
import FlashSale from '../layouts/FlashSale'
import BrowserByCategory from '../layouts/BrowserByCategory'
import BestSellingProduct from '../layouts/BestSellingProduct'
import Image from '../components/Image'
import OurProduct from '../layouts/OurProduct'
import Feature from '../layouts/Feature'
import Others from '../layouts/Others'


const Home = () => {
  return (
    <div>
      <Banner/>
      <FlashSale />
      <BrowserByCategory/>
      <BestSellingProduct/>
      <Image className='mx-auto' src={Promotion}/>
      <OurProduct/>
      <Feature/>
      <Others/>
      
      
      
    </div>
  )
}

export default Home