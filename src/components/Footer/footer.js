import React from "react";
import "./footer.css";

import Boxes from "../Footer-boxes/boxes";
import NewsLetter from "../NewsLetter/newsletter";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const Footer = () => {
  return (
    <div className="footer">
      <NewsLetter />
      <div className="big">
        <div className="logoName">
          <h3>Shoes</h3>
          <p>Make your Shoes Bright</p>
        </div>
        <Boxes
          title="Products"
          links={[
            "Best Seller",
            "WishList",
            "Featured Products",
            "Trending Products",
          ]}
        />
        <Boxes
          title="Our Company"
          links={[
            "Search",
            "Contact Us",
            "Delivery",
            "Terms & conditions of Use",
          ]}
        />
        <Boxes
          disable="true"
          title="Store Information"
          links={[
            "Shoes Store, Near Road, Karachi",
            "+921234567891",
            "shoes@store.com",
            ".",
          ]}
          icons={[<LocationOnIcon />, <PhoneIcon />, <EmailIcon />]}
        />
      </div>
      <div className="small">
        <p>Copyright &copy; Shoes 2020</p>
        <p>Made with ❤️ by Hina</p>
      </div>
    </div>
  );
};

export default Footer;
