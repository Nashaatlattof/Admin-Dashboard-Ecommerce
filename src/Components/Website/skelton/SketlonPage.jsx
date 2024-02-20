import React from "react";
import Skeleton from "react-loading-skeleton";

const SketlonPage = ( props ) => {
  const skeletonNumbers = Array.from({ length: props.leng }).map((_, key) => (
    
      <Skeleton
        height={props.height}
        width={props.width}
        
        key={key}
      />
   
  ));
  return skeletonNumbers;
};

export default SketlonPage;
