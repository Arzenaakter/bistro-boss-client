import OrderCoverimg from "../../../assets/shop/banner2.jpg";
import Cover from "../../SharedPage/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";

import Ordertab from "../OrderTab/Ordertab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {

  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks', 'offered'];
  const {category} =useParams()
  const initialIndex = categories.indexOf(category);



  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  // console.log(category);

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div className=" ">
       <Helmet>
        <title>BistroBoss | Order</title>
      </Helmet>
      <Cover img={OrderCoverimg} title="Order Food"></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
          <Tab>Offered</Tab>
        </TabList>
        <TabPanel>
            <Ordertab
            items={salad}
            ></Ordertab>
        </TabPanel>
        <TabPanel>
        <Ordertab
            items={pizza}
            ></Ordertab>
        </TabPanel>
        <TabPanel>
        <Ordertab
            items={soup}
            ></Ordertab>
        </TabPanel>
        <TabPanel>
        <Ordertab
            items={dessert}
            ></Ordertab>
        </TabPanel>
        <TabPanel>
        <Ordertab
            items={drinks}
            ></Ordertab>
        </TabPanel>
        <TabPanel>
        <Ordertab
            items={offered}
            ></Ordertab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
