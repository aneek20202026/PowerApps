import React from 'react';
// import '../design/page2.css';

function Page2() {
  const queryParams = new URLSearchParams(window.location.search);
  const jsonDataString = queryParams.get('data');
  const jsonData = JSON.parse(jsonDataString);

  // console.log(jsonData);
  
  return (
    <div>
      <h1>Data</h1>
      <p>Option: {jsonData[0].option}</p>
      <p>Text: {jsonData[0].text}</p>
      <p>Radio: {jsonData[0].radio}</p>
      <p>Type: {jsonData[0].type}</p>
      <p>Length: {jsonData[0].length}</p>
      <p>Remark: {jsonData[0].remark}</p>
    </div>
  );
}

export default Page2;
