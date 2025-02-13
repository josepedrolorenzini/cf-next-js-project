import Hero from '@/components/Hero';
import HomeProperties from '@/components/HomeProperties';
import InfoBoxes from '@/components/InfoBoxes';
import connectDB from '@/config/database';


const HomePage = () => {
  // console.log(process.env)
  connectDB();
    return (  
       <div >
     <Hero />
     <InfoBoxes />
     <HomeProperties />
      </div>
    );
}
 
export default HomePage;