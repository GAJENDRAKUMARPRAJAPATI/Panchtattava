import { useState } from "react";
import { CardsData } from "./CardsData";
import "./Style.css";

const CardCompnent = () => {
  const [cards, setCards] = useState(CardsData);
  console.log(cards, 'cards');
  return (
    <div className="cardContainer  mt-4  ">
      {cards.map((item, index) => {
        return (
          <div key={index}>
            <div className="card" >
              <div className="card-head">
                <img className="images" src={item.img} alt="" />
                <h2>{item.title}</h2>
              </div>
              <div className="p-3">
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="">Read less</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardCompnent;
