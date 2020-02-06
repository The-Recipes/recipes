import React from "react";
import "../Styles/Preview.scss";

function Preview(props) {
  const { previews } = props;
  return (
    <div className="preview-list">
      {previews.map(preview => (
        <div className="preview-container">
          <img className="preview-picture" src={preview.picture} />
          <div className="preview-category-container">
            <p className="preview-category">{preview.category}</p>
          </div>
          <p className="preview-name">{preview.name}</p>
          <p className="preview-shortDescription">{preview.shortDescription}</p>
        </div>
      ))}
    </div>
  );
}

export default Preview;
