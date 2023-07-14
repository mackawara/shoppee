import { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faFontAwesome,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "./SocialMedia";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import ProductCard from "./Card";

function App() {
  const [email, setEmail] = useState("");
  const socialMedia = [
    { link: "https://www.facebook.com/livestockwealthZA/", icon: faFacebook },
    { link: "https://twitter.com/livestockwealth", icon: faTwitter },
    {
      link: "https://www.linkedin.com/company/livestock-wealth/",
      icon: faLinkedin,
    },
    { link: "https://www.instagram.com/livestock_wealth/s", icon: faInstagram },
  ];
  const products = [
    {
      productCode: "1",
      name: "Lira Earings",
      price: "$20,00",
      image: "assets/hairpinsetof3.png",
    },
    {
      productCode: "2",
      name: "Hale Earings",
      price: "$20,00",
      image: "assets/halearings.png",
    },
    {
      productCode: "3",
      name: "Kaede Hairpin Set",
      price: "$20,00",
      image: "assets/kaedeHairpinSet.png",
    },
    {
      productCode: "4",
      name: "Yuka Hairpin Set",
      price: "$20,00",
      image: "assets/yukahairpiset.png",
    },
    {
      productCode: "5",
      name: "Hairpin Set of 3",
      price: "$20,00",
      image: "assets/hairpinsetof3.png",
    },
    {
      productCode: "5",
      name: "Plaibe Necklace",
      price: "$10,00",
      image: "assets/plaibenecklace.png",
    },
  ];
  return (
    <>
      <div className="main-container">
        <nav></nav>
        {/* jumbotron section */}
        <div className="jumbotron">
          <div className="main-header">
            <h2>Gold Big Hoops</h2>
            <h3>$68.00</h3>
            <button>
              <a href="#products">Products</a>
            </button>
          </div>
        </div>
        <main className="margin-top">
          <h3 className="section-header"> Shop the Latest</h3>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4}>
                <ProductCard
                  key={product.productCode}
                  price={product.price}
                  imageSrc={product.image}
                  productName={product.name}
                />
              </Grid>
            ))}
          </Grid>

          <Grid container>
            <Grid item xs={6} lg={12}>
              <TextField
                id="email"
                label="Submit email to subscribe to the newsletter"
                variant="standard"
                value={email}
              />
            </Grid>
            <Grid item xs={6} lg={12}>
              <button>
                <ArrowRightAltIcon color="action" />
              </button>
            </Grid>
          </Grid>
        </main>
        <footer className="margin-top">
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <a href="">CONTACT</a>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <a href="">TERMS OF SERVICES</a>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <a href="">SHIPPING AND RETURNS</a>
            </Grid>
          </Grid>
          {/*  <h3 className="section-header"> Follow us on our social media</h3> */}
          <div className="social-media">
            {socialMedia.map((item) => {
              return <SocialMedia link={item.link} iconName={item.icon} />;
            })}
          </div>
          <small>Terms of use and privacy policy</small>
        </footer>
      </div>
    </>
  );
}

export default App;
