import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStarSolid,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
interface ProductProps {
  rating: number;
}
const Rating: React.FC<ProductProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="rating">
      {Array.from({ length: fullStars }).map((_, index) => (
        <FontAwesomeIcon
          icon={faStarSolid}
          key={index}
          className="text-stars md:text-base text-ssm"
        />
      ))}
      {hasHalfStar && (
        <FontAwesomeIcon
          icon={faStarHalfAlt}
          className="text-stars md:text-base text-ssm"
        />
      )}
      {Array.from({ length: Math.floor(5 - rating) }).map((_, index) => (
        <FontAwesomeIcon
          className="text-stars md:text-base text-ssm"
          key={index + fullStars + 1}
          icon={faStarRegular}
        />
      ))}
    </div>
  );
};
export default Rating;
