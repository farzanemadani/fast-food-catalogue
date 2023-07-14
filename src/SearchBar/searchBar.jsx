import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({searchItems}) => {
  const [value, setValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('value',value);
    searchItems(value)
  };
  return (
    <div>
      <form
        onSubmit={onSubmit}
        className="search flex-fill d-flex align-items-center"
      >
        <div className="input-group">
          <input
            type="text"
            className="form-control rounded-end pe-5 borde-success"
            placeholder="جست وجوی فست فود ..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <BsSearch className="position-absolute top-50 translate-middle-y text-muted me-3" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
