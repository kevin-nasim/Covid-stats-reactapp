import Button from "./Buttons";

import "./buttoncontainer.css";
import StatsCard from "./StatsCard";

const Buttoncontainer = ({ btnHandler, btnState, data }) => {
  // console.log(data.TotalConfirmed);

  let btn1 = "button-1";
  let btn2 = "button-2";
  let btn3 = "button-3";
  let covidData = data.TotalConfirmed;
  let statCardtitle = "Total Confirmed Cases";
  let statCardStyle = "stats-card-total";

  if (btnState.confirmed === true) {
    btn2 = "button-2-unactive";
    btn3 = "button-3-unactive";
  } else if (btnState.deaths === true) {
    btn1 = "button-1-unactive";
    btn3 = "button-3-unactive";
    covidData = data.TotalDeaths;
    statCardStyle = "stats-card-deaths";
    statCardtitle = "Total Deaths";
  } else {
    btn1 = "button-1-unactive";
    btn2 = "button-2-unactive";
    covidData = data.TotalRecovered;
    statCardtitle = "Total Recovered Cases";
    statCardStyle = "stats-card-recovered";
  }

  return (
    <div className="main-container">
      <div className="button-container">
        <Button
          buttonText="Confirmed"
          buttonClass={btn1}
          btnHandler={btnHandler}
          id="btn1"
        />
        <Button
          buttonText="Deaths"
          buttonClass={btn2}
          btnHandler={btnHandler}
          id="btn2"
        />
        <Button
          buttonText="Recovered"
          buttonClass={btn3}
          btnHandler={btnHandler}
          id="btn3"
        />
      </div>

      <StatsCard
        data={covidData}
        cardTitle={statCardtitle}
        cardStyle={statCardStyle}
      />
    </div>
  );
};

export default Buttoncontainer;
