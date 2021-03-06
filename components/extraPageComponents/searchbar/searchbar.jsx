import React, { useState } from 'react';


const SearchBar = ({setChange, searchTerm}) => {
  const BarStyling = {};
  return (
    <React.Fragment>

      <input
        key="random1"
        className="mainLoginInput"
        value= {searchTerm}
        placeholder="&#61442;          Search Publications"
        onChange={setChange}
      />
      <style jsx global>
        {`
          @import "//netdna.bootstrapcdn.com/font-awesome/3.0/css/font-awesome.css";
          .mainLoginInput{
              height: 40px;
              padding: 30px 10px;
              font-size: 30px;
              margin: 5px 0;
              border: 1.5px solid #313131;
              border-radius: 8px;
              transform: scale(0.8)
            }

.mainLoginInput::-webkit-input-placeholder { 
font-family: FontAwesome, Avenir;
overflow: visible;
display: flex !important;
padding-bottom: 10px;
padding-left: 30px;
color: #313131;
font-size: 16px;
line-height: 181.6%;
}

@media only screen and (max-width: 999px) {
.mainLoginInput{
  display: none;
}
}
          `}
      </style>
    </React.Fragment>
  );
}

export default SearchBar