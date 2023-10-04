    import React, { useState } from 'react'

    export default function About(props) {
    //     const [myStyle, SetStyle] = useState({
           
    //             color: 'white' ,
    //         backgroundColor:'black'
    //  })


    let myStyle={
        color: props.mode==='light'?"black":"white",
       backgroundColor :props.mode==='light'?"white":"#246ea4",
    }

    //  const [first, setfirst] = useState("Enable dark mode")
   


    return (
        <div className="container" style ={myStyle } >
            <h1>About US</h1>
        <div class="accordion" id="accordionExample">
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"style ={myStyle}>
           <strong>TextUtils</strong> 
            </button>
             
        </h2>
        
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"style ={myStyle}>
            <div class="accordion-body"style ={myStyle}>
              TextUtils is a Website built on react that helps you to perfrom basic task on Text. 
            </div>
        </div>
        </div>
        </div> 
         <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style ={myStyle}>
           <strong>Free to Use</strong>
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"style ={myStyle}>
            <div class="accordion-body">
             Yup we are totally free no ads nothing ......   
            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style ={myStyle}>
          <strong>DEVELOPER</strong>   
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body"style ={myStyle}>
             Made By FLICKER_BoT With Love and React;  
        </div>
    </div>
 
     
    </div>
</div>
  )
}
