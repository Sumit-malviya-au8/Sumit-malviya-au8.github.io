import React, { useState, useEffect } from "react";

function App() {
  let today = new Date();
  const [currentdate, setcurrentdate] = useState(today);

  let date = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  function prevWeek() {
    var prevWeek = new Date(
      currentdate.getFullYear(),
      currentdate.getMonth(),
      currentdate.getDate() - 7
    );
    setcurrentdate(prevWeek);
    console.log(currentdate);
    return prevWeek;
  }

  function nextweek() {
    var nextweek = new Date(
      currentdate.getFullYear(),
      currentdate.getMonth(),
      currentdate.getDate() + 7
    );
    setcurrentdate(nextweek);
    console.log(currentdate);
    return nextweek;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date(currentdate);
  let dayName = days[d.getDay()];
  let dayName1 = days[d.getDay() + 1];
  let dayName2 = days[d.getDay() + 2];
  let dayName3 = days[d.getDay() + 3];
  let dayName4 = days[d.getDay() + 4];
  let dayName5 = days[d.getDay() + 5];

  return (
    <div className="App">
      <button onClick={prevWeek}>Prev week</button>
      <p>{date}</p>
      {console.log(date)}
      <button onClick={nextweek}>Next week</button>

      <p>{dayName}</p>
      <p>{dayName1}</p>
      <p>{dayName2}</p>
      <p>{dayName3}</p>
      <p>{dayName4}</p>
    </div>
  );
}

export default App;
