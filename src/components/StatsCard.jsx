import "./statscard.css";
import globe from "../globe.svg";

const StatsCard = ({ data, cardStyle, cardTitle }) => {
  // console.log(data);
  return (
    <div className="container stats-card-container">
      <div className={cardStyle}>
        <img src={globe} alt="globe" />
        <p>{cardTitle}</p>
        <span>WorldWide</span>
        <h1>{data}</h1>
      </div>
    </div>
  );
};

export default StatsCard;
