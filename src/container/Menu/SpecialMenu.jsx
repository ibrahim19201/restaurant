import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_drinks flex__center">
          <p className="app__specialMenu-menu_heading">Drinks</p>
          <div className="app__specialMenu_items">
            {data.drinks.map((drinks, index) => (
              <MenuItem
                key={drinks.title + index}
                title={drinks.title}
                tags={drinks.tags}
                price={drinks.price}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu" />
        </div>

        <div className="app__specialMenu-menu_juice flex__center">
          <p className="app__specialMenu-menu_heading">Juice</p>
          <div className="app__specialMenu_items">
            {data.juice.map((juice, index) => (
              <MenuItem
                key={juice.title + index}
                title={juice.title}
                tags={juice.tags}
                price={juice.price}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
