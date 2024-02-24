import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked "+ text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("convert to Uppercase!","success")
    }
    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
       
    }
    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked "+ text);
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("convert to Lowercase!","success")
  }
  const handleClearClick= ()=>{
    // console.log("Uppercase was clicked "+ text);
    let newText='';
    setText(newText)
    props.showAlert("Text cleared!","success")
}
const handleCopy= ()=>{
  // console.log("Uppercase was clicked "+ text);
 
  navigator.clipboard.writeText(text);
  props.showAlert("Copied to Clipbord!","success")

}
const handleExtraSpaces= ()=>{
  // console.log("Uppercase was clicked "+ text);
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))

}
    const [text,setText]=useState('enter text here')
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white' : '#042743 '}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey' : 'white',color:props.mode==='dark'?'white' : '#042743 '}} id="mybox" rows="3"></textarea>
</div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-1 my-1 " onClick={handleLoClick}>Convert to Lower Case</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Cases</button>
    </div>
    <div className='container' style={{color:props.mode==='dark'?'white' : '#042743 '}}>
      <h1>your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text} </p>
    </div>
    </>

  )
}
