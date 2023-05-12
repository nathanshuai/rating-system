import { useState } from 'react';
import Star from './Star';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (ratingValue) => {
    setRating(ratingValue);
  };
 
//In the map method, the underscore is used as a convention to indicate that the value is not being used in the callback function. 

  const stars = [...Array(5)].map((_, index) => (
    <Star
      key={index}
      selected={index < rating}
      onClick={() => handleStarClick(index + 1)}
    />
  ));
  
  const word = (() => {
    switch (rating) {
      case 1:
        return 'Terrible';
      case 2:
        return 'Poor';
      case 3:
        return 'Average';
      case 4:
        return 'Very Good';
      case 5:
        return 'Excellent';
      default:
        return '';
    }
  })();

  return (
    <>
    <div className='star'>{stars}</div>
      <h2>{word}</h2>
    </>
  );
};

export default StarRating;

