import './quote.scss';

const Quote = () => (
  <div className="quote page container container--small">
    <blockquote className="quote__text">
      Mathematics is not about numbers, equations, computations, or algorithms:
      it is about understanding.
    </blockquote>
    <figcaption className="quote__author">- William Paul Thurston</figcaption>
  </div>
);

export default Quote;
