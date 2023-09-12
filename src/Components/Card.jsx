import CardInfo from './Card-info';
import CardAbout from './Card-about';
import CardInterest from './Card-interest';
import CardFooter from './Card-footer';
import '../styles/card.css';

export default function Card() {
  return (
    <div className='business_card'>
      <CardInfo />
      <CardAbout />
      <CardInterest />
      <CardFooter />
    </div>
  );
}
