export let Card = ({ img, name, population, region, capital, subregion, }) => {
  return (
    <li className="card">
      <img src={img} alt="flag" style={{ borderRadius: 6 }} />
      <div className="innerCard">
        <h4>country:{name}</h4>
        <p>Population:{population}</p>
        <p>Region:{region}</p>
        <p>Capital:{capital}</p>
        <p>subregion:{subregion}</p>
      </div>
    </li>
  );
};
