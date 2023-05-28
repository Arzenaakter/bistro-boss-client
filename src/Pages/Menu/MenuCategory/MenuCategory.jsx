import { Link } from "react-router-dom";
import Cover from "../../SharedPage/Cover/Cover";
import MenuItem from "../../SharedPage/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImg, title }) => {
  return (
    <div className="pt-10">
    {title && <Cover img={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
     <Link to={`/order/${title}`}>
     <button className="btn btn-outline border-0 border-b-4  mt-6">Oder Now</button>
     </Link>
    </div>
  );
};

export default MenuCategory;
