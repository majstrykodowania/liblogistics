import React from "react";

const HistoryTab = (props) => {
  const row = props.book.borrowHistory.map((item, index) => (
    <tr key={index}>
      <td>{item.reader}</td>
      <td>{item.borrowDate}</td>
      <td>{item.returnDate}</td>
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>ID Czytelnika</th>
          <th>Data wypożyczenia</th>
          <th>Data zwrotu</th>
        </tr>
      </thead>
      <tbody>{row}</tbody>
    </table>
  );
};

export default HistoryTab;
