import { MdDeleteOutline } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";
import "../styles/card.css";

function Card({ data, titleKey, subtitleKey, handleDelete, handleEdit, sectionTitle }) {
  return (
    <>
      <h5 className="header">{sectionTitle}</h5>
      {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="card-info">
              <h3>{item[titleKey]}</h3>
              <div className="card-description">
                <h6>{item[subtitleKey]}</h6>
                <h6>{item.startDate} / {item.endDate}</h6>
              </div>
            </div>
            <div className="card-btns">
              <button className="icon-btn " onClick={() => handleEdit(item.id)}>
                <RiEditLine />
              </button>
              <button
                className="icon-btn"
                onClick={() => handleDelete(item.id)}
              >
                <MdDeleteOutline />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export { Card };
