import React from "react";

const LanguageSelector = () => {
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <select
      className="select-language"
      value={"language"}
      onChange={handleLanguageChange}
    >
      <option value="en">English</option>
      <option value="pt">Português</option>
    </select>
  );
};

export default LanguageSelector;
