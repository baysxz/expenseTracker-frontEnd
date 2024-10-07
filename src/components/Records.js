import axios from "axios";
import { useEffect, useState } from "react";
import OneRecord from "./OneRecord";
import moment from "moment";

export const Records = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const getRecords = async () => {
      const { data } = await axios.get("http://localhost:8888/userRecord");
      setRecords(data.record);
    };
    getRecords();
  }, []);

  return (
    <div>
      {records.map((record) => {
        return (
          <OneRecord
            key={record.id}
            text={record.name}
            money={record.amount}
            time={record.updatedat}
          />
        );
      })}
    </div>
  );
};
