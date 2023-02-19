import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import classes from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [index, setIndex] = useState(0);

  const cards = [
    { id: "1", image: img1 },
    { id: "2", image: img2 },
    { id: "3", image: img3 },
  ];

  const mod = (n: any, m: any) => {
    let result = n % m;

    //Return a postive value

    return result >= 0 ? result : result + m;
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setIndex((index + 1) % cards.length);
    }, 3000);
    return () => clearTimeout(interval);
  }, [index, cards.length]);

  return (
    <>
      <div className={classes.carousel}>
        {cards.map((item, i) => {
          const indexLeft = mod(index - 1, cards.length);
          const indexRight = mod(index + 1, cards.length);
          let className = "";

          if (i === index) {
            className = `${classes.card} ${classes.card_active}`;
          } else if (i === indexRight) {
            className = `${classes.card} ${classes.card_right}`;
          } else if (i === indexLeft) {
            className = `${classes.card} ${classes.card_left}`;
          } else {
            className = `${classes.card}`;
          }

          return (
            <img
              key={item.id}
              className={className}
              src={item.image}
              alt="chordImg"
            ></img>
          );
        })}
      </div>
    </>
  );
}

export default App;
