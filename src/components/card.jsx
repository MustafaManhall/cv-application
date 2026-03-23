import { MdDeleteOutline } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";
import "../styles/card.css";

function Card({
  data,
  titleKey,
  subtitleKey,
  startDateKey,
  handleDelete,
  handleEdit,
  sectionTitle,
}) {
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
                <h6>
                  {item[startDateKey]} {item.endDate && `/ ${item.endDate}`}
                </h6>
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

function Tags({ data, sectionTitle, handleDelete }) {
  return (
    <>
      <h5 className="header">{sectionTitle}</h5>
      <div className="tags">
        {data.map((item, index) => {
          return (
            <div className="tag" key={index}>
              <h6>{item}</h6>
              <button className="icon-btn" onClick={() => handleDelete(index)}>
                <MdDeleteOutline />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
function LanguageTags({ data, sectionTitle, handleDelete }) {
  return (
    <>
      <h5 className="header">{sectionTitle}</h5>
      <div className="tags">
        {data.map((item) => {
          return (
            <div className="tag" key={item.id}>
              <h6>
                {item.language} - {item.proficiency}
              </h6>
              <button
                className="icon-btn"
                onClick={() => handleDelete(item.id)}
              >
                <MdDeleteOutline />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export { Card, Tags, LanguageTags };
