
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";


const PopularMenu = () => {
   const [menu] = useMenu()
   const popular = menu.filter(item=>item.category === 'popular')


    return (
        <section className="mb-12">
            <SectionTitle
            Heading={'FROM OUR MENU'}
            subHeading={'Check it out'}
            ></SectionTitle>

          <MenuCategory
          items={popular}
          ></MenuCategory>

            <div className="flex justify-center mt-6">
            <button className="btn btn-outline border-0 border-b-4  mt-6">View Full Menu</button>
            </div>

            
        </section>
    );
};

export default PopularMenu;