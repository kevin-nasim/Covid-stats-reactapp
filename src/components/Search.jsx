import "./search.css";

const Search = ({ searchHandler, fetchCountry, countryData }) => {
  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          placeholder="Search for a Country"
          onChange={searchHandler}
        />
        <button className="search-btn" onClick={fetchCountry}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
