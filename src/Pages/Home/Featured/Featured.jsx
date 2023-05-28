import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className="featured-item text-white pt-10 my-20 bg-fixed  ">
          <div className=" overlay ">
 
            <SectionTitle
             subHeading={'Check it out'}
             Heading={'FROM OUR MENU'}
            ></SectionTitle>
       
     
          <div className="md:flex justify-center items-center pb-20 pt-12 px-36   ">
            <div>
                <img src={featured} alt="" />
            </div>
            <div className="md:ml-10">
                <p>March 20, 2023</p>
                <p className="uppercase">WHERE CAN I GET SOME?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className="btn btn-outline border-0 border-b-4 text-white mt-6">Oder Now</button>

                 
            </div>
            </div>


          </div>

            
        </section>
    );
};

export default Featured;