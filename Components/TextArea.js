import React,{useState} from 'react'

export default function (props) {
    const [text, setText] = useState('');

    const handleUpClick =  () =>{
       // console.log("Uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLoClick =  () =>{
       // console.log("Uppercase was clicked")
        let newText = text.toLocaleLowerCase()
        setText(newText)
    }
    const handleOnChange =  (event) =>{
      //  console.log("On Change")
        setText(event.target.value);
    }

    const handleClearText =()=>{
        let newText = ''
        setText(newText)
    }

    const handleCopy = () =>{
      var text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces =() =>{
      let newtext = text.split(/[  ]+/);
      setText(newtext.join(" "));
    }
    return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>    
<div className="mb-3" >
  
  <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#171414':'white' , color: props.mode === 'dark' ? 'white':'black'}}  rows="8" ></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
<button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white':'black'}}>
        <h3>Text Summery</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read  </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter somthing in above text area to preview it here"}</p>
    </div>
    
    </>
  )
}
