import React from 'react'




export default function About(props){

    // const [mystyle,setmystyle] = useState({
    //     color:'black',
    //     backgroundColor:"white"
    // })

    // let [btnText,setbtnText] = useState("Enable Dark Mood")

    //let togglestyle=()=>{
    //     if(mystyle.color==='black'){
    //       setmystyle({
    //         color:"white",
    //         backgroundColor:"rgb(42, 42, 42)",
    //         border:'1px solid white'
    //     })
    //         setbtnText("Enable Light Mood")
    //         console.log("white if block")
    //     }
    //     else{
    //       setmystyle({
    //         color:"black",
    //         backgroundColor:"white"
    //     })
    //         setbtnText("Enable Dark Mood")
    //         console.log("white else block")
    //     }
    // }

    let mystyle = {
      color:props.mode==='dark'?'white':'#042743',
      backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white'
    }

  return (
    <div className='container'>
    <h1>About us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={mystyle}  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Analyze Your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle} >
        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" style={mystyle}  aria-controls="collapseTwo">
       Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils is a free character counter tool that provides instant character count & word count Statstics for a given text. TextUtils report the number of words and characters. Thus it is suitable for writing text with word / character limits 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" style={mystyle}  aria-controls="collapseThree">
       Browser Compatible
      </button> 
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse"
    style={mystyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This word counter software works in any software browsers Such as Chrome firefox, Internet Explorer,Safari,Opera. it Suits to count characters in Fackbook, blog, excel document,pdf document, essays, etc.
      </div>
    </div>  
  </div>
</div>
</div>
  )
}
