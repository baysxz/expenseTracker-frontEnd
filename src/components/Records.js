import axios from "axios";
import { useEffect, useState } from "react";
import OneRecord from "./OneRecord";
import moment from "moment";

export const Records = ({ records }) => {
  // console.log(records);
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
