import React, { useState } from "react";

import Chart from "./chart";

// Calculate word frequency
 const wordFreqCalculator = (string) => {
  let words = string.replace(/[.]/g, "").split(/\s/);
  let freqMap = [];
  words.forEach(function (w) {
    if (!freqMap[w]) {
      freqMap[w] = 0;
    }
    freqMap[w] += 1;
  });

  return freqMap;
}

function App() {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);

  const fetchData = async () => {
    // fetch raw data from the file
    let txtdata = await fetch("https://www.terriblytinytales.com/test.txt");
    // convert data into string
    let txt = await txtdata.text();

    // calculate word-frequency
    let freqMap = wordFreqCalculator(txt);

    // Sort data in descending order using values=>frequency
    const sortedData = Object.keys(freqMap).sort(function (a, b) {
      return freqMap[b] - freqMap[a];
    });

    // extract first valid 20 entries from the sortedData and changing its format for creating chart
    const slicedData = sortedData
      .slice(1, 21)
      .map((key) => ({ word: key, frequency: freqMap[key] }));
    console.log(slicedData);

    // set data value
    setData(slicedData);

    // display chart
    setDisplay(true);
  };

  return (
    <div className="App">
      <h1>Assignment</h1>

      <button type="submit" onClick={fetchData}>
        Submit
      </button>
      
      {display && <Chart data={data} />}
    </div>
  );
}

export default App;
