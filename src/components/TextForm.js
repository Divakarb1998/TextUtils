import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper Case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase","success")
  };
  const handleLoClick = () => {
    // console.log("Upper Case was clicked" + text);
    let newText = text.toLowerCase();
    
    props.showAlert("Converted To LowerCase","success")
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("Upper Case was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared","success")
  };

  // Function to capitalize  first letter of each word
  const handleFirstLetterUppercase = () => {
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    const upper = text.split(" ").map(capitalize).join(" ");
    setText(upper);
    props.showAlert("Converted To Titlecase","success")

  };

  // function to download the text
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
  };

  

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied","success")
  }

  const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
    setText(newText.join(" "))

      }
  
  // Hooks
  const [text, setText] = useState("");
  // text = "new text";
  // setText("new text");

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',
                 color:props.mode==='dark'?'white':'#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button
          className="btn btn-success"
          onClick={handleFirstLetterUppercase}
        >
          Convert To Titlecase
        </button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-secondary mx-2 my-2" onClick={downloadTxtFile}>
          Download Text
        </button>
        <button className="btn btn-success mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/)
                    .filter(function (n) { return n !== '' })
                    .length} words and {text.split('').length} characters
        </p>
        <h2>How Much Time To Read</h2>
        <p>{0.008 * text.split(" ").length} Minutes To Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Your Text To Preview It Here"}</p>

       <footer className="center">
      <h2>Stay Connected</h2>
      <div className="social_media_icons">
        <a href="https://www.instagram.com/i_divakar_bansal/" target="_blank_"
          ><i className="fab fa-instagram"></i
        ></a>
        <a href="https://github.com/Divakarb1998" target="blank"
          ><i className="fab fa-github"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/divakarb1998/"
          target="blank"
          ><i className="fab fa-linkedin"></i
        ></a>
      </div>
    </footer>
      </div>
   
    </>
  );     
}
