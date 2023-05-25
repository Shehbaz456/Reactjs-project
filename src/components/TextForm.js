import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked"+text);
        setTest(text.toUpperCase())
        props.ShowAlert("Converted to UpperCase","info")
    }
    const handleLoClick = () => {
        setTest(text.toLowerCase())
        props.ShowAlert("Converted to LowerCase","info")
    }
    const handleClearClick = () => {
        setTest('')
        props.ShowAlert("Clear TextBox ","info");

    }
    const handelOnChange = (event) => {
        // console.log("on Change");
        setTest(event.target.value)
    }
    let handle_CopyClipboard_Click = ()=>{
        let copyText = document.getElementById("myInput");
        copyText.select()
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.ShowAlert("Copied to Clipboard!","info");

        // setTest(text)
        // alert("copied to clipbord - "+copyText.value)
    }

    const [text, setTest] = useState('')
    return (
    <>
        <div className='container'>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='Dark'?'#13466e':'white',color:props.mode==='Dark'?'white':'black'}} onChange={handelOnChange} id="myInput" rows="8" >
                </textarea>
            </div>
            <button disabled = {text.length===0} onClick={handleUpClick} className="btn btn-primary my-1 mx-1">convert to uppercase</button>
            <button disabled = {text.length===0} onClick={handleLoClick} className="btn btn-primary my-1 mx-1">convert to Lowercase</button>
            {/* <button onClick={handleLoClick} className="btn btn-primary mx-2">convert to Lowercase</button> */}
            <button disabled = {text.length===0}onClick={handle_CopyClipboard_Click} className="btn btn-primary my-1 mx-1">copy to clipboard</button>
            <button disabled = {text.length===0}onClick={handleClearClick} className="btn  btn-primary my-1 mx-1">Clear</button>
        </div>
        <div className='container my-4'>
            <h1>Your text summary</h1>
            <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
            <p>{text.split("\n").filter((element)=>{return element.length!==0}).length} Count lines</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing To Preview" }</p>
        </div>
    </>
    )
}