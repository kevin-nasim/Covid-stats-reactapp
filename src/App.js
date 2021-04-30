import { useState, useEffect } from "react";
import "./App.css";
import Buttoncontainer from "./components/Buttoncontainer";
import CountryCard from "./components/CountryCard";
import Header from "./components/Header";
import Heading from "./components/Heading";
import Search from "./components/Search";

function App() {
  const [worldData, setWorldData] = useState("");
  const [btnToggle, setBtnToggle] = useState({
    confirmed: true,
    deaths: false,
    recovered: false,
  });
  const [countryData, setCountryData] = useState(false);
  const [search, setSearch] = useState("");
  let date = 0;

  const fetchWorldData = () => {
    fetch("https://api.covid19api.com/world/total")
      .then((res) => res.json())
      .then((data) => setWorldData(data));
  };

  const fetchCountryData = (country) => {
    formatDate();
    fetch(
      `https://api.covid19api.com/live/country/${country}/status/confirmed/date/${date}`
    )
      .then((res) => res.json())
      .then((data) => setCountryData(data));
  };

  const buttonToggle = (e) => {
    const btnId = e.target.dataset.buttonId;
    console.log(btnId);
    if (btnId === "btn1") {
      console.log("button1");
      setBtnToggle({
        confirmed: true,
        deaths: false,
        recovered: false,
      });
    } else if (btnId === "btn2") {
      setBtnToggle({
        confirmed: false,
        deaths: true,
        recovered: false,
      });
    } else {
      setBtnToggle({
        confirmed: false,
        deaths: false,
        recovered: true,
      });
    }
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const fetchCountry = () => {
    fetchCountryData(search);
  };

  const formatDate = () => {
    const dateYearMonth = new Date().toISOString().slice(0, 7);
    const day = new Date().toISOString().slice(8, 10) - 1;

    date = `${dateYearMonth}-${day}`;
    console.log(date);
  };

  // console.log(worldData);
  // console.log(countryData);

  useEffect(() => {
    fetchWorldData();
    console.log(countryData);
  }, [countryData]);

  return (
    <div className="App">
      <Header />
      <Heading />
      <Buttoncontainer
        btnHandler={buttonToggle}
        btnState={btnToggle}
        data={worldData}
      />
      <Search searchHandler={searchHandler} fetchCountry={fetchCountry} />
      {/* <CountryCard countryData={countryData} /> */}
      {countryData === false ? (
        <></>
      ) : (
        <CountryCard countryData={countryData} />
      )}
    </div>
  );
}

export default App;
