import React from "react";

export default props => {

  const bigData = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
  const smallData = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

  return (
    <div style={{display: 'flex', justifyContent: 'center', padding: '50px 0'}}>
      <button onClick={() => props.onSelect(smallData)} className="btn btn-secondary">
        32 элемента
      </button>
      <button onClick={() => props.onSelect(bigData)} className="btn btn-secondary">
        1000 элементов
      </button>
    </div>
  );
};

