import "./provincecard.css";

const ProvinceCard = (data) => {
  console.log(data);

  data.data.map((c) => console.log("asdas"));
  return (
    <div className="province">
      <div className="province-name">
        <p>Province</p>
        {data.data.map((country) => (
          <p key={country.Province}>{country.Province}</p>
        ))}
      </div>

      <div className="province-confirmed">
        <p>Confirmed</p>
        {data.data.map((country) => (
          <p key={country.Confirmed}>{country.Confirmed}</p>
        ))}
      </div>

      <div className="province-deaths">
        <p>Deaths</p>
        {data.data.map((country) => (
          <p key={country.Deaths}>{country.Deaths}</p>
        ))}
      </div>

      <div className="province-recovered">
        <p>Recovered</p>
        {data.data.map((country) => (
          <p key={country.Recovered}>{country.Recovered}</p>
        ))}
      </div>
    </div>
  );
};

export default ProvinceCard;
