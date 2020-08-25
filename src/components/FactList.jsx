import React from "react";
import { useState, useEffect } from "react";
import FactItem from "./FactItem";

export default function FactList() {
  let [factList, setFactList] = useState([]);
  function fetchFactList() {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((result) => {
        let allFacts = result.all;
        let randomFacts = allFacts
          //.sort(() => Math.random() - Math.random())
          .slice(0, 20);
        setFactList(randomFacts);
      });
  }

  useEffect(() => {
    // Det som står här körs en gång så fort komponenten renderas
    fetchFactList();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(factList);

  return (
    <div className="row">
      {factList.map((item, index) => {
        return (
          <FactItem
            key={index}
            id={index}
            text={`${item.text.substring(0, 20)}...`}
          />
        );
      })}
    </div>
  );
}
