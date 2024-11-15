import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(true);
  
  useEffect(() => {
    setOpen(false);
},[]);

  useEffect(() => {
    document.querySelector('.here').textContent = `Count value is ${count}`;
  }, [count]);

  const increaseCount = () => {
    // to open popup
    if (count == 900 || count == 90 || count == 9) {
      setOpen(false);
    }
    // to change bac-ground

    if (count == 900 ) {
      document.querySelector('.hellow').style.backgroundColor = "#D86ECC";
      document.querySelector('.hellow').style.boxShadow = "2px 2px 15px #D86ECC";    }
    if (count == 90 ) {
      document.querySelector('.hellow').style.backgroundColor = "#53E4F3";
      document.querySelector('.hellow').style.boxShadow = "2px 2px 15px #53E4F3";    

    }
    if (count == 9 ) {
      document.querySelector('.hellow').style.backgroundColor = "#F1FE48";
      document.querySelector('.hellow').style.boxShadow = "2px 2px 15px #F1FE48";
    }
    // to increase counter 

    if (count < 10) {
      setCount(count + 1);
    } else if (count >= 10 && count < 100) {
      setCount(count + 10);
    } else if (count >= 100 && count < 1000) {
      setCount(count + 100);
    }
    if (count == 1000) {
      document.querySelector('.inc').style.display = "none";
      document.querySelector('.deac').style.display = "block";
      setOpen(false)
    }

  };
  const deacreaseCount = () => {


     // to changr color

    if (count == 200 ) {
      document.querySelector('.hellow').style.backgroundColor = "#53E4F3";
      document.querySelector('.hellow').style.boxShadow = "2px 2px 15px #53E4F3";    

    }
    if (count == 20 ) {
      document.querySelector('.hellow').style.backgroundColor = "#F1FE48";
      document.querySelector('.hellow').style.boxShadow = "2px 2px 15px #F1FE48";
    }
        // to open popup

    if (count == 200 || count == 20 ) {
      setOpen(false);
    }
     // to deacrease counter

    if (count > 100 ) {
      setCount(count - 100);
    } else if (count <=100 && count > 10) {
      setCount(count - 10);
    } else if (count <= 10 && count > 0) {
      setCount(count - 1);
    }
    if (count == 0) {
      document.querySelector('.inc').style.display ="block" ;
      document.querySelector('.deac').style.display = "none";
    }
  };

  return (
    <>
      <section className="bodyOfBage">
        <div className={open ? 'desactive' : 'active'}>
          <div className="hellow">
            <h3> Hello </h3>
          </div>
        </div>
        <button className="inc" onClick={increaseCount}> increase </button>
        <button className="deac" onClick={deacreaseCount}> decrease </button>
        <button className="open" onClick={() => setOpen(false)}> open </button>
        <button className="close" onClick={() => setOpen(true)}> close </button>
        <p className="here">Count value is {count}</p>
      </section>
    </>
  );
}

export default App
