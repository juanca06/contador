
import { useState } from "react";


function App() {

  const [cuenta, setCuenta] = useState(0);
  const [paso, setPaso] = useState(1);

  const handleClic = () => {
    console.log(paso);
    setCuenta(cuenta+paso);
  }
  const handleMenosClic = () => {
      setCuenta(cuenta-paso);
  }
    const handleResetClic = () => {
      setCuenta (cuenta-cuenta);
      setPaso(1);
  };

const handleInputChange = (e) => {
  if (isNaN(e.target.value)){
    return;
  }
  setPaso(Number(e.target.value))
};

  return (
    <div className="App" >
      <div class= "mx-auto">
        <center>
          <br />
          <h3>Contador</h3>
        </center>
        
     
        <hr />
        <h2 className="text-center">{cuenta}</h2>
        <hr />
        <div style={
          {display: "flex", 
          justifyContent: "flex-end", 
          marginRight: "5px",}}>

          <label >
            Paso
            <input id="paso" name="paso" class= "mx-2" type="text" onChange= {handleInputChange} value={paso} style={{
              marginleft: "5px", 
              width: "60px"}}  />

          </label>
          

          
          <button type="button" class="btn btn-primary " onClick={() => {
            handleClic()
            }}>+1</button>

            <button type="button" class="btn btn-primary mx-2" onClick={() => {
            handleMenosClic()
            }}>-1</button>
          
          <button type="button" class="btn btn-primary mx-2" onClick={() => {
            handleResetClic()
            }}>Reset</button>

          
          
        </div>
        
        <div>
          <center>
          <img src="https://www.cultture.com/pics/2021/04/el-emotivo-final-de-horimiya-deja-sin-resolver-aspectos-cruciales-de-la-historia.jpg" width={350} alt="" />
        </center>
        </div>
        
        
      </div>
        
    </div>
  );
}

export default App;
