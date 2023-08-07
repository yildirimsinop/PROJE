import ThemeContext, { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <>
      <ThemeProvider>
        <Button />
        <hr />
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
