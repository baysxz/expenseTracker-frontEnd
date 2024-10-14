import axios from "axios";
import { useEffect, useState } from "react";
import OneRecord from "./OneRecord";
import moment from "moment";

export const Records = ({ records }) => {
  const [symbol, setSymbol] = useState("-");

  // const handleSymbol = (transaction) => {
  //   if (transaction === "Income") {
  //     setSymbol("+");
  //   } else {
  //     setSymbol("-");
  //   }
  // };
  //////+, -, color

  return (
    <div>
      {records.map((record) => {
        return (
          <OneRecord
            key={record.id}
            text={record.name}
            money={record.amount}
            time={record.updatedat}
            type={record.transaction}
          />
        );
      })}
    </div>
  );
};
