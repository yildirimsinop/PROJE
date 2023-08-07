import ThemeContext, { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <>
      <ThemeProvider>
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
