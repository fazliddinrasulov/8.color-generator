import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [colors, setColors] = useState(new Values("#315c72").all(10));
  const addColor = (color: any) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <ToastContainer position="top-center" />
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  );
}

export default App;
