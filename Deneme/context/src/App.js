import ThemeContext from "./context/ThemeContext";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <ThemeContext.Provider value="dark">
        <Button />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
