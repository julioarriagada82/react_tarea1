import React from "react";
import Grid from "@material-ui/core/Grid";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionList = ({ movies }) => (
      <Grid container spacing={3} justify="center">
        {movies.map(({ id, ...otherCollectionProps }) => (
              <CollectionItem key={id} {...otherCollectionProps} />
            ))}
      </Grid>
);

export default CollectionList;