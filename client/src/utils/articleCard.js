import { Link as RouterLink } from 'react-router-dom';
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    IconButton,
    Typography,
    Button
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ArticleCard = ({article}) => {

    return(
        <Card>
            <CardMedia
                style={{height:0,paddingTop:'56.25%'}}
                image={`https://picsum.photos/200?${article._id}`}
                title="some title"
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component="h2">
                    {article.title}
                </Typography>
                <Typography variant='body2' component="p">
                    {article.excerpt}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <FavoriteIcon/>
                </IconButton>
                <Button 
                    size="small"
                    color="primary" 
                    component={RouterLink}
                    to={`/articles/article/${article._id}`}
                >
                    View article
                </Button>
            </CardActions>
        </Card>
    )

}

export default ArticleCard