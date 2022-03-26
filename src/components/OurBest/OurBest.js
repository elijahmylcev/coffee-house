import ListOfCards from '../ListOfCards/ListOfCards';
import './OurBest.scss';

export default function OurBest() {
  return (
    <section className="ourBest">
      <div className="container">
        <h3 className="ourBest__title">Our best</h3>
        <ListOfCards isBest />
      </div>
    </section>
  );
}
