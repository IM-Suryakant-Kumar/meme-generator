import React from "react";

function Meme() {
   const [memeImg, setMemeImg] = React.useState("");

   function getMemeImg() {
      const randomNumber = Math.floor(Math.random() * 10);
      setMemeImg("https://picsum.photos/640/360");
   }

   return (
      <main>
         <div className="form">
            <input type="text" placeholder="Top text" className="form-input" />
            <input
               type="text"
               placeholder="Bottom text"
               className="form-input"
            />
            <button className="form-button" onClick={getMemeImg}>Get a new meme image 🖼️</button>
         </div>
         <img src={memeImg} alt="" className="meme-img" />
      </main>
   );
}

export default Meme;
