import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem", height: "57px",background:"#F2F1F9", border:"1.5px solid #313131", padding:"0.5rem", "border-radius": "8px"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search Publications"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar