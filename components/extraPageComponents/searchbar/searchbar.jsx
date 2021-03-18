import React from 'react';


const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {};
  return (
    <React.Fragment>
      
    <input 
     key="random1"
     id="search"
     value={keyword}
     placeholder="&#61442; Search Publications"
     onChange={(e) => setKeyword(e.target.value)}
     />
     <style jsx global>
          {`
          @import "//netdna.bootstrapcdn.com/font-awesome/3.0/css/font-awesome.css";
          input#search {
              background-image: url('http://www.clker.com/cliparts/z/1/T/u/9/2/search-icon-hi.png');
              background-size:contain;
              background-repeat: no-repeat;
              text-indent: 20px;
              width: 20rem;
              height: 57px;
              background: #F2F1F9;
              border: 1.5px solid #313131;
              padding: 0.5rem;
              border-radius: 8px
          }
          input#search:focus {
              background-image:none;
              text-indent:0px
              }
          `}
      </style>
     </React.Fragment>
  );
}

export default SearchBar