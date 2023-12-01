import React from "react";
import Count from "./count";

//  counter_text;
const counter_text = [
  {
    id: 1,
    color: "blue-hard",
    counter: 600,
    text: "Genomförda utbildningar",
  },
  {
    id: 2,
    color: "pink-hard",
    counter: 1200,
    text: "Nöjda kunder",
  },
  {
    id: 3,
    color: "sky-hard",
    counter: 50,
    text: "Bemannings uppdrag varje år",
  },
  {
    id: 4,
    color: "green-hard",
    counter: 10,
    text: "Krockade bilar",
  },
];

const Counter = ({ cls = "pt-40 pb-100"  }) => {
  return (
    <>
      <section className={`counter-area ${cls}`}>
        <div className="container">
          <div className="row">
            {counter_text.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="counter__item blue-border mb-30 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className={`counter__icon ${item.color} mb-15`}>
                    <i></i>
                  </div>
                  <div className="counter__content">
                    <h4 className="counter__title">
                      <span className="counter">
                        <Count  number={item.counter} />
                      </span>
                    </h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
