import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import ContextProvider from "./context/context";

function App() {
  return (
    <div>
      <ContextProvider>
        <Header />
        <Container />
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
