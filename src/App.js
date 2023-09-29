import '../src/componet/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './componet/Home';
import CarouselComponent from './componet/CarouselComponent';
import CardCompnent from './componet/CardComponent';
import AboutUs from './componet/AboutUs';
import ChooseUs from './componet/ChooseUs';
import HealingCenter from './componet/HealingCenter';
import OurPrograms from './componet/OurPrograms';
import HealingStories from './componet/HealingStories';
import BookAppointment from './componet/BookAppointment';
import Review from './componet/Review';
import FooterComponent from './componet/FooterComponent';

function App() {
  return (
    <div>
     <Home/>
     <CarouselComponent/>
     <CardCompnent/>
     <AboutUs/>
     <ChooseUs/>
     <HealingCenter/>
     <OurPrograms/>
     <HealingStories/>
     <BookAppointment/>
     <Review/>
     <FooterComponent/> 
    </div>
  );
}

export default App;
