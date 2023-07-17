import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ProductCard(props: any) {
  return (
    <Card sx={{ marginTop: "2em", minWidth: 280 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="320"
          image={props.imageSrc}
          alt={props.productName}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            sx={{ fontFamily: "Montserrat", fontSize: "1.5em" }}
            component="div"
          >
            {props.productName}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontFamily: "Montserrat", fontSize: "1.5em" }}
          >
            {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
