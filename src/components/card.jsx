import "../styles/card.css";

function Card({ data, titleKey, subtitleKey, handleDelete, handleEdit }) {
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
          <button className="edit-btn" onClick={() => handleEdit(item.id)}>
            Edit
          </button>
          <button className="delete-btn" onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  });
}

export { Card };
