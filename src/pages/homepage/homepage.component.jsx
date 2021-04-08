import React from "react";
import movies from "../../rawData/movies.json";

import CollectionList from "../../components/collection-list/collection-list.component";

const HomePage = () => {  
  return (
      <>
        { <CollectionList movies={movies} /> }
      </>
    );
  }

export default HomePage;