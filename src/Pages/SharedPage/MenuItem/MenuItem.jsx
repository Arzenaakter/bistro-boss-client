

const MenuItem = ({item}) => {
    const {name,price,recipe,image} = item;
    // console.log(item);
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} src={image} alt=""  className="w-[120px]"/>
            <div>
                <h3 className="uppercase">{name}---------------</h3>
                <p className="">{recipe}</p>

            </div>
            <p className="text-yellow-400"> {price}</p>
            
        </div>
    );
};

export default MenuItem;

