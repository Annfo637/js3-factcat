import React from "react";
import { useState, useEffect } from "react";
import FactItemDetail from "../components/FactItemDetail";

export default function FactDetailPage(props) {
  const [factData, setFactData] = useState({});
  const [factName, setFactName] = useState("");
  const factId = props.match.params.id;

  function fetchFact() {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((result) => {
        setFactData(result.all[factId]);
        setFactName(
          result.all[factId].user.name.first +
            " " +
            result.all[factId].user.name.last
        );
      });
  }

  //console.log(factData);

  useEffect(() => {
    fetchFact();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1 className="m-3">Full fact</h1>
      <FactItemDetail
        text={factData.text}
        name={factName}
        upvotes={factData.upvotes}
      />
    </div>
  );
}
