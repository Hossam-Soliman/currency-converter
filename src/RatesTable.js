import React from "react";

const RatesTable = ({ firstCurrency, secondCurrency, rate }) => {
  return (
    <div className="table">
      <div
        className="container"
        style={{ backgroundColor: "#fff", paddingTop: 50, paddingBottom: 30 }}
      >
        <h4 style={{ color: "#082976", textAlign: "center", marginBottom: 30 }}>
          Convert {firstCurrency} to {secondCurrency}
        </h4>
        <table>
          <tr>
            <th>{firstCurrency}</th>
            <th>{secondCurrency}</th>
          </tr>
          <tr>
            <td>1 {firstCurrency}</td>
            <td>
              {rate} {secondCurrency}
            </td>
          </tr>
          <tr>
            <td>5 {firstCurrency}</td>
            <td>
              {Number(rate * 5).toFixed(4)} {secondCurrency}
            </td>
          </tr>
          <tr>
            <td>10 {firstCurrency}</td>
            <td>
              {Number(rate * 10).toFixed(4)} {secondCurrency}
            </td>
          </tr>
          <tr>
            <td>20 {firstCurrency}</td>
            <td>
              {Number(rate * 20).toFixed(4)} {secondCurrency}
            </td>
          </tr>
          <tr>
            <td>50 {firstCurrency}</td>
            <td>
              {Number(rate * 50).toFixed(4)} {secondCurrency}
            </td>
          </tr>
          <tr>
            <td>100 {firstCurrency}</td>
            <td>
              {Number(rate * 100).toFixed(4)} {secondCurrency}
            </td>
          </tr>
          <tr>
            <td>500 {firstCurrency}</td>
            <td>
              {Number(rate * 500).toFixed(4)} {secondCurrency}
            </td>
          </tr>
          <tr>
            <td>1000 {firstCurrency}</td>
            <td>
              {Number(rate * 1000).toFixed(4)} {secondCurrency}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default RatesTable;
