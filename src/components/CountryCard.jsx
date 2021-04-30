import ProvinceCard from "../components/ProvinceCard";
import "./countrycard.css";

const CountryCard = ({ countryData }) => {
  let countryName = "";
  let confirmed = 0;
  let deaths = 0;
  let recovered = 0;

  countryData.forEach((country) => {
    countryName = country.Country;
    confirmed = confirmed + country.Confirmed;
    deaths = deaths + country.Deaths;
    recovered = recovered + country.Recovered;
  });

  return (
    <div className="container Country-card-container">
      <div className="country-card">
        <h1>{countryName}</h1>
        <p>Total Confirmed Cases</p>
        <h2>{confirmed}</h2>
        <p>Total Deaths</p>
        <h2>{deaths}</h2>
        <p>Total Recovered</p>
        <h2>{recovered}</h2>
      </div>

      <ProvinceCard data={countryData} />
    </div>
  );
};

export default CountryCard;
