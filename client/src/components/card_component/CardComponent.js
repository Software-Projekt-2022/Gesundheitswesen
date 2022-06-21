import {useDispatch} from "react-redux";
import useStyles from "./styles";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const CardComponent = ({image, title, description, id, overlay, triplePoints, deleteAction, name}) => {
    const dispatch = useDispatch()
    const classes = useStyles()

    const history = useHistory();

    const onClick = () => {
        history.push("/");
    }

    return (
        <Card className={classes.card}>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={triplePoints}><MoreHorizIcon fontSize="default" /></Button>
            </div> 
            <ButtonBase         
            component="span"
            name="test"
            className={classes.cardAction}
            onClick={onClick}
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
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteAction(id))}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>
        </Card>
    )

}

export default CardComponent