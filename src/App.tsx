import { useState } from "react";
import "./App.css";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import NavBar from "./Navbar";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import SocialMedia from "./SocialMedia";
import ProductCard from "./Card";

function App() {
  const [email, setEmail] = useState("");
  const [check, setChecked] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //test email beofre submitting
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g.test(email)) {
      //  if not valid email send error message or popup
      alert("invalid Email");
      return;
    }
    const formData = new URLSearchParams();
    formData.append("email", email);

    try {
      const response = await fetch(
        "https://subscriber-server-service.onrender.com/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );
      //handle response accordingly
      if (response.status === 500) {
        alert("email saved successful");
      } else {
        alert("there was a problem saving your email");
      }
      //set response to
    } catch (err) {
      console.log(err);
      //alert
    }
  };
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
        <NavBar />
        {/* jumbotron section */}
        <div className="jumbotron">
          <div className="main-header">
            <h2>Gold Big Hoops</h2>
            <h3>$68.00</h3>
            <button>
              <a href="#products"> View Products</a>
            </button>
          </div>
        </div>
        <main className="margin-top" id="products">
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
        </main>
        <footer>
          <div className="flex-container">
            <div className="flex-item">
              <a href="" className="nav-bottom">
                CONTACT
              </a>

              <a href="" className="nav-bottom">
                TERMS OF SERVICES
              </a>

              <a href="" className="nav-bottom">
                SHIPPING AND RETURNS
              </a>
            </div>

            <div className="flex-item">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Place email here to get the newsletter"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <ArrowRightAltIcon
                  color="action"
                  type="submit"
                  onClick={handleSubmit}
                />
              </div>
            </div>
          </div>
          <div className="flex-item">
            <FormGroup sx={{ display: { xs: "flex", md: "none" } }}>
              <FormControlLabel
                control={<Checkbox />}
                label="I agree to the websites terms and conditions"
              />
            </FormGroup>
          </div>
          <div className="flex-container">
            <div className="flex-item">
              <a href="">2023 Shelly:Terms of use and privacy policy</a>
            </div>
            <div className="flex-item">
              <p>Follow us</p>

              {socialMedia.map((item) => {
                return <SocialMedia link={item.link} iconName={item.icon} />;
              })}
            </div>
          </div>
          {/*  <h3 className="section-header"> Follow us on our social media</h3> */}
        </footer>
      </div>
    </>
  );
}

export default App;
