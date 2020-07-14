import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import cover from "./img/cover1.jpg";
import { FaAngleRight, FaExchangeAlt } from "react-icons/fa";
import Navbar from "./Navbar";
import RatesTable from "./RatesTable";

const RatesConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [firstCurrency, setFirstCurrency] = useState("EUR");
  const [secondCurrency, setSecondCurrency] = useState("USD");
  const [inputValue, setInputValue] = useState();
  const [date, setDate] = useState();
  const [rate, setRate] = useState();
  const [result, setResult] = useState();

  const screenWidth = window.screen.width <= 770;

  useEffect(() => {
    axios.get("https://api.exchangeratesapi.io/latest").then((res) => {
      setCurrencies([res.data.base, ...Object.keys(res.data.rates)]);
      setDate(res.data.date);
    });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.exchangeratesapi.io/latest?base=${firstCurrency}&symbols=${secondCurrency}`
      )
      .then((res) => {
        setRate(res.data.rates[secondCurrency]);
      })
      .catch((err) => {
        setRate(1);
      });
  }, [firstCurrency, secondCurrency]);

  const getRate = (e) => {
    e.preventDefault();
    const inputValue = document.getElementById("input").value;
    setInputValue(inputValue);
    if (inputValue >= 0) {
      setResult(inputValue * rate);
      // document.getElementById('errorMsg').innerHTML= ''
    } else {
      document.getElementById("errorMsg").innerHTML = "Positive numbers only";
    }
  };

  const handleChange = (e) => {
    // const inputValue = document.getElementById('input').value
    // if (inputValue >=0){
    //     setResult(inputValue * rate)
    //     // document.getElementById('errorMsg').innerHTML= ''
    // }else{
    //     document.getElementById('errorMsg').innerHTML='Positive numbers only'
    // }
  };

  const swapCurrency = () => {
    if (firstCurrency === document.getElementById("select1").value) {
      document.getElementById("select1").value = secondCurrency;
      document.getElementById("select2").value = firstCurrency;
      setFirstCurrency(document.getElementById("select1").value);
      setSecondCurrency(document.getElementById("select2").value);
    } else {
      document.getElementById("select1").value = firstCurrency;
      document.getElementById("select2").value = secondCurrency;
      setFirstCurrency(document.getElementById("select1").value);
      setSecondCurrency(document.getElementById("select2").value);
    }
  };

  const currenciesList = currencies.map((currency) => {
    return (
      <option value={currency} key={currency}>
        {currency}
      </option>
    );
  });
  return (
    <Fragment>
      <div className="body" style={{ backgroundImage: "url(" + cover + ")" }}>
        <Navbar />
        <div className="container">
          <h5 style={{ textAlign: "left", color: "#fff", marginTop: 50 }}>
            Last updated: {date}
          </h5>
          <div className="convert-area">
            <form className="body-form" onSubmit={getRate}>
              <label>Amount</label>
              <input
                className="input"
                id="input"
                type="number"
                onChange={handleChange}
              ></input>
              <label>From</label>
              <select
                id="select1"
                onChange={(e) => setFirstCurrency(e.target.value)}
              >
                {currenciesList}
              </select>
              <FaExchangeAlt
                style={{ fontSize: 40, marginTop: 7 }}
                onClick={swapCurrency}
              />
              <select
                id="select2"
                value={secondCurrency}
                onChange={(e) => setSecondCurrency(e.target.value)}
              >
                {currenciesList}
              </select>

              <button>
                <FaAngleRight style={{ fontSize: 40, marginTop: -3 }} />
              </button>
            </form>
            {result && (
              <h4 style={{ fontSize: 16, color: "white" }}>
                {inputValue} {firstCurrency} ={" "}
              </h4>
            )}
            <div className="values">
              <h1>{result && Number(result).toFixed(4)}</h1>
              {result && <h4> {secondCurrency}</h4>}
            </div>
            {result && (
              <h2 style={{ color: "#fff" }}>
                1 {firstCurrency} = {Number(rate).toFixed(4)} {secondCurrency}
              </h2>
            )}
            {!screenWidth && (
              <p className="note">
                All figures are live mid-market rates, which are not available
                to consumers and are for informational purposes only.
              </p>
            )}
          </div>
        </div>
      </div>
      <div>
        <RatesTable
          firstCurrency={firstCurrency}
          secondCurrency={secondCurrency}
          rate={rate}
        />
      </div>
    </Fragment>
  );
};

export default RatesConverter;

// style={{backgroundImage: "url(" + cover + ")"}}
