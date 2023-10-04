import React,{useState} from 'react'


export default function  TextForm(props) {
   
    const handleUpClick =()=>
    { 
        let newText=text.toUpperCase()
      SetText(newText)
    }

    const handleDownClick =()=>
    { 
      let newText1=text.toLowerCase()
      SetText(newText1)
    }

    const handleClearClick =()=>
    { 
      let newText=""
      SetText(newText)
    }


const handleCopy=()=>{
 
  navigator.clipboard.writeText(text )
}
    

     const handleOnChange = (event)=> {
      console.log("OnChange")
    SetText(event.target.value)
    }
 
    const[text,SetText]=useState("")
    return (
      <>
     <div className ="container" style={{ color:props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>


 
  <textarea className="form-control shadow-sm "  style={{ backgroundColor: props.mode==='dark'?'#246ea4':'white', color: props.mode==='dark'?'white':'black' }} id="myBox" value={text} onChange={handleOnChange}rows="8" ></textarea>
 </div>
   <button className="  btn btn-primary   mx-2 my-3" onClick={handleUpClick}> Convert To Upper Case</button>

   <button className="btn btn-success shadow-sm mx-2 my-3"onClick={handleDownClick}>Convert To lower Case</button>
   <button className="btn btn-primary shadow-sm mx-2 my-3"onClick={handleCopy}>Copy Text</button>
   <button className="btn btn-primary shadow-sm mx-2 my-3"onClick={handleClearClick}>CLear Text</button>
   


<div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
<h2>Your Text Summary</h2>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}  ).length } words and {text.length} characters</p>
<p>  { .008*text.split(" ").filter((element)=>{return element.length!==0}  ).length } Minutes Read</p>
<h3>Preview</h3>
<p>{text.length>0 ?text:"Enter your Text in TextBox To Preview It Here !!"} </p>
</div>
</>
  )
}
