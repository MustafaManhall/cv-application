import "../styles/card.css";

function Card({ data, titleKey, subtitleKey }) {
  return data.map((item) => {
    return (
      <div className="card" key={item.id}>
        <div className="card-info">
          <h3>{item[titleKey]}</h3>
          <div className="card-description">
            <h6>{item[subtitleKey]}</h6>
            <h6>{item.startDate + item.endDate}</h6>
          </div>
        </div>
        <div className="card-btns">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    );
  });
}

export { Card };
