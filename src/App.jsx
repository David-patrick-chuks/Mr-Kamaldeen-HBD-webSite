import { useState, useEffect } from "react";
import { Loader } from "./Loader";
import { Card } from "./Card";
import { Wish } from "./Wish";

function App() {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 300);
  }, []);

  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <>
          <div className=" relative bg-gradient-to-tr from-stone-500 to-stone-800 flex justify-center w-screen h-screen  ">
            <Wish />
            <Card />
          </div>
        </>
      )}
    </>
  );
}

export default App;
