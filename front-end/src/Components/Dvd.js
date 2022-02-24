import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { textAlign } from "@mui/system";

export default function Dvd({ dvd }) {
    const {  id, name, image, price, rating } = dvd;
    return (
        <Card sx={{ maxWidth: 400 }} className='card1'>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">{name}</Typography>
                <Link to={`/dvds/${id}`}>
                    <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={name} />
                </Link>
                <Typography variant="body2" color="text.secondary">
                    <p>Price: ${price}</p>
                    <p>Rating: {rating}</p>
                </Typography>
            </CardContent>

            <CardActions>
                {/* <Button size="small">Share</Button> */}
                <Link to={`/dvds/${id}`} style={{textDecoration: 'none'}}>
                    <Button size="small">Learn More</Button>
                </Link>
            </CardActions>
        </Card>
    );
};

