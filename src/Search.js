import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const query = useQuery();

  const term = query.get("term");

  const inputRef = useRef(null);
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`?term=${inputRef.current.value}`);
  };

  return (
    <div>
      <form action="" onSubmit={formSubmitHandler}>
        <input type="text" name="term" ref={inputRef} />
        <input type="submit" value="Search" />
        {term && <h2>Results for '{term}'</h2>}
      </form>
    </div>
  );
};

export default Search;
