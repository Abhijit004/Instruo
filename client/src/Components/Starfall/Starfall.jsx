import './Starfall.css';

const STAR_COUNT = 30;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

const Starfall = () => {
  const stars = Array.from({ length: STAR_COUNT }).map((_, i) => {
    // Randomize top offset, delay, and tail length for each star
    const topOffset = `${randomBetween(0, 100)}%`;
    const fallDelay = `${randomBetween(0, 9)}s`;
    const tailLength = `${randomBetween(4, 15)}em`;

    return (
      <div
        key={i}
        className="star"
        style={{
          '--top-offset': topOffset,
          '--fall-delay': fallDelay,
          '--star-tail-length': tailLength,
        }}
      ></div>
    );
  });

  return <div className="stars">{stars}</div>;
};

export default Starfall;
