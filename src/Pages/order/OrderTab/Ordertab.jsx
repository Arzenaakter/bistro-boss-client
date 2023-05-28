import FoodCard from "../../../Components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Ordertab = ({ items }) => {

  const pagination ={
    clickable : true,
    renderBullet : function(index,className){

      return '<span class=" ' + className + ' ">' + (index+1) + "</span>"
    },
  }




  return (
    <div>
      <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
            {items.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Ordertab;
