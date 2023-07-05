import React from "react";

const LanguagesModal = () => {
  return (
    <div className="lang-dropdown">
      <div className="languages">
        <button className="active-lang" type="button">
          Portugês (Brazil)
        </button>
        <button type="button" disabled>
          English
        </button>
      </div>
    </div>
  );
};

export default LanguagesModal;
