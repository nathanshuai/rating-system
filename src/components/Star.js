import { FaStar } from 'react-icons/fa';

const Star = ({ selected, onClick }) => (
  <FaStar color={selected ? 'goldenrod' : 'grey'} onClick={onClick} size="2em"/>
);

export default Star;
