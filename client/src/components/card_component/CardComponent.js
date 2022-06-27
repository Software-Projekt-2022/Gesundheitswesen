import {useDispatch} from "react-redux";
import useStyles from "./styles";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';import { Container } from "@mui/system";
;


const CardComponent = ({image, title, description, id, overlay, triplePoints, deleteAction, name, onButtonBaseClick}) => {
    const dispatch = useDispatch()
    const classes = useStyles()


    return (
            <Container maxWidth="false">
                <Card className={classes.card} variant="outlined" elevation="24">
                <ButtonBase         
                    component="span"
                    name="test"
                    onClick={(() => onButtonBaseClick(id))}
                    >
                    <CardMedia className={classes.media} image={image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={title} />
                    <div className={classes.overlay}>
                        <Typography variant="body1">{name}</Typography>
                        <Typography variant="body2">{overlay}</Typography>
                    </div>

                    <CardContent>
                        <Typography variant="h6">{title}</Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="body1"  component="p">{"Beschreibung:"}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                    </CardContent>
                    </ButtonBase>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => dispatch(deleteAction(id))}><DeleteIcon fontSize="small" /> Delete</Button>
                    </CardActions>
                </Card>
        </Container>
    )

}

export default CardComponent