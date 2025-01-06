import OneRecord from "./OneRecord";

export const Records = ({ records }) => {
  return (
    <div>
      {records.map((record) => {
        return (
          <OneRecord
            key={record.id}
            text={record.name}
            money={record.amount}
            time={record.createdat}
            type={record.transaction}
          />
        );
      })}
    </div>
  );
};
