import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../testimonials/Testimonial";



const Home = () => {
    return (
        <div>
           <Helmet>
        <title>BistroBoss | Home</title>
      </Helmet>
          <Banner></Banner>
          <Category></Category>
          <PopularMenu></PopularMenu>
          <Featured></Featured>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;