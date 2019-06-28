import React from "react";

function SummaryOption(props) {
  return (
    <div className="summary__option">
      <div className="summary__option__label">{props.feature} </div>
      <div className="summary__option__value">{props.name}</div>
      <div className="summary__option__cost">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        }).format(props.cost)}
      </div>
    </div>
  );
}
export default SummaryOption;
