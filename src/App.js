import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const APP_ID = "";
  const APP_KEY = "";

  const request = "";

  /*useEffect( () =>{
    getResult();
  }, []);

  const getResult = async () => {
    const response = await fetch();
    const data = await response.json();

  }
*/

  return(
    <body className="App">
      <ul className="menu">
        <li><a href="App.js">Submission</a></li>
        <li><a href="App.js">Browser</a></li>
        <li><a href="App.js">Get User ID</a></li>
      </ul>
      <br></br>
      <form className = "inputForm">
        
          
          <div className="element">
            <text>User ID: </text>
            <input className="idBox" name="User ID: " type="text"/>
          </div>
          <br></br>
          <div className="Row">
          <div className="element">
            <text>Language Being Compared:</text>
            <select className="langDrop" name="Languages">
            <option value="java">Java</option>
            <option value="c++">C++</option>
            <option value="c">C</option>
            <option value="c#">C#</option>
            <option value="python">Python</option>
            <option value="visualbasic">Visual Basic</option>
            <option value="javascript">Javascript</option>
            <option value="fortran">FORTRAN</option>
            <option value="ml">ML</option>
            <option value="haskell">Haskell</option>
            <option value="lisp">Lisp</option>
            <option value="scheme">Scheme</option>
            <option value="pascal">Pascal</option>
            <option value="modula2">Modula2</option>
            <option value="ada">Ada</option>
            <option value="perl">Perl</option>
            <option value="tcl">TCL</option>
            <option value="mathlab">Mathlab</option>
            <option value="vhdl">VHDL</option>
            <option value="verilog">Verilog</option>
            <option value="spice">Spice</option>
            <option value="mips assembly">MIPS assembly</option>
            <option value="a8086 assembly">a8086 assembly</option>
            <option value="hcl2">HCL2</option>
          </select>
          </div>
        <div className="element">
          <text>Validate Using The Experimental Server:</text> 
          <input name="Use experimental server" type="checkbox"></input>
        </div>
        <div className="element">
          <text>Group Files By The Directory They Are In: </text>
          <input name="Use directory mode" type="checkbox"></input>
        </div>
        </div>
        <br></br>
        <div className="Row">
          <div className="element">
            <text>Legitimacy      Threshold:</text> 
            <input className="parameter" name="Legitimacy threshold" type="number" defaultValue="10"></input>
          </div>
          <div className="element">
            <text>Option N:</text> 
            <input className="parameter" name="Option n" type="number" defaultValue="350"></input>
          </div>
          <div className="element">
            <text>Option C:</text> 
            <input className="parameterB" name="Option c" type="number"></input><br></br>
          </div>
        </div>
        <br></br>
        <div className="Row">
          <div className="element">
            <button className="button" name="Choose base file(s)" >Choose Base File(s)</button>
          </div>
          <div className="element">
            <button className="button" name="Choose source file(s)" >Choose Source File(s)</button>
          </div>
          <div className="element">
            <button className="button" name="Send request" >Send Request</button>
          </div>        
        </div>
        <br></br>
        <br></br>

      </form>
      <br></br>
      <div className="returnBox">
          <textarea className="rerturn" type="text" name="uploadedFiles" readonly="readonly" style ={{width: 1435, height: 360}}/>
      </div>
    </body>
  );


}

export default App;
