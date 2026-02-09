import {useState} from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value)=>{
    setInput((prev)=>prev+value);
  };

  const clearAll =()=>{
    setInput("");
  };

  const deleteLast =()=>{
    setInput((prev)=>prev.slice(0, -1));
  };

  const calculateResult = ()=>{
    try{
      setInput(eval(input).toString());
    }catch{
      setInput("error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        {input || "0"}
      </div>

      <div className="buttons">
        <button classname="operator" onClick={clearAll}>AC</button>
        <button classname="operator" onClick={deleteLast}>Del</button>
        <button classname="operator" onClick={()=>handleClick("%")}>Mod</button>
        <button classname="operator" onClick={()=>handleClick("/")}>Div</button>

        <button onClick={()=>handleClick("7")}>7</button>
        <button onClick={()=>handleClick("8")}>8</button>
        <button onClick={()=>handleClick("9")}>9</button>
        <button classname="operator" onClick={()=>handleClick("*")}>Mul</button>

        <button onClick={()=>handleClick("4")}>4</button>
        <button onClick={()=>handleClick("5")}>5</button>
        <button onClick={()=>handleClick("6")}>6</button>
        <button classname="operator" onClick={()=>handleClick("-")}>Sub</button>

        <button onClick={()=>handleClick("1")}>1</button>
        <button onClick={()=>handleClick("2")}>2</button>
        <button onClick={()=>handleClick("3")}>3</button>
        <button classname="operator" onClick={()=>handleClick("+")}>Add</button>

        <button onClick={()=>handleClick("0")}>0</button>
        <button onClick={()=>handleClick("00")}>00</button>
        <button onClick={()=>handleClick(".")}>.</button>
        <button onClick={()=>{calculateResult}}>=</button>
      </div>
    </div>
  )
}

export default App;