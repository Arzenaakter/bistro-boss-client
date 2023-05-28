import { Helmet } from "react-helmet-async";
import Cover from "../SharedPage/Cover/Cover";

import menuBg from "../../assets/menu/banner3.jpg";
import dessetBg from "../../assets/menu/dessert-bg.jpeg";
import pizzabg from "../../assets/menu/pizza-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";

import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>BistroBoss | Menu</title>
      </Helmet>
      <Cover img={menuBg} title="Our Menu"></Cover>

      <SectionTitle
        subHeading={"Dont miss"}
        Heading="TODAY'S OFFER"></SectionTitle>



      <MenuCategory items={offered}></MenuCategory>

      <MenuCategory
        items={dessert}
        title="dessert"
        coverImg={dessetBg}></MenuCategory>

      <MenuCategory
        items={pizza}
        title="pizza"
        coverImg={pizzabg}></MenuCategory>

      <MenuCategory
        items={soup}
        title="soup"
        coverImg={soupBg}></MenuCategory>

      <MenuCategory
        items={salad}
        title="salad"
        coverImg={saladBg}></MenuCategory>
    </div>
  );
};

export default Menu;
