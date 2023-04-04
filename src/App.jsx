import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

export default function App() {
   return (
      <div>
         <Header />
         <Meme />
      </div>
   );
}

// -------------------------Challenge 1------------------------
// export default function App() {
//   function handleClick() {
//     console.log("I was clicked");
//   }

//   function handleMouseOver() {
//     console.log("MouseOver");
//   }
//    return (
//       <div className="container">
//          <img src="https://picsum.photos/640/360" alt="" onMouseOver={handleMouseOver} />
//          <button onClick={handleClick}>Click me</button>
//       </div>
//    );
// }
// -------------------------Challenge 2------------------------
// export default function App() {
//    const thingsArray = ["Thing 1", "Thing 2"];
//    const thingsElem = thingsArray.map((item, idx) => <p key={idx}>{item}</p>);
//    const pushNewThing = () => {
//       thingsArray.push(`Thing ${thingsArray.length + 1}`);
//       console.log(thingsArray);
//    }

//    return (
//       <div className="container">
//          <button onClick={pushNewThing}>Add Item</button>
//          {thingsElem}
//       </div>
//    );
// }
// -------------------------Challenge 3------------------------
// function greeting(name) {
//    const currDate = new Date();
//    const hours = currDate.getHours();

//    let timeOfTheDay;
//    if (hours >= 4 && hours <= 11) {
//       timeOfTheDay = "morning";
//    } else if (hours >= 12 && hours <= 16) {
//       timeOfTheDay = "afternoon";
//    } else if (hours >= 17 && hours <= 19) {
//       timeOfTheDay = "evening";
//    } else if (hours >= 20 && hours <= 3) {
//       timeOfTheDay = "night";
//    }

//    return `Good ${timeOfTheDay}, ${name}`;
// }
// -------------------------Challenge 4------------------------
// export default function App() {

//    const result = React.useState("No")
//    console.log(result);

//    return (
//       <div className="state">
//          <h1 className="state-title">Is state important to know?</h1>
//          <div className="state-value">
//             <h1>{result[0]}</h1>
//          </div>
//       </div>
//    );
// }
