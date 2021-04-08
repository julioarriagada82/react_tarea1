import React from 'react';
import { PATH_IMAGE_w300 } from '../../constants/variables'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const CollectionItem = ({ vote_average, poster_path, popularity, title }) => (

    <Grid item xs={12} sm={6} md={4}>
        <Paper className="paper">
            <h2>{title}</h2>
            <img src={`${PATH_IMAGE_w300}${poster_path}`} alt={title}  />
            <ul>
                <li>Votación: {vote_average}</li>
                <li>Popularidad: {popularity}</li>
            </ul>
        </Paper>
    </Grid>
);

export default CollectionItem;