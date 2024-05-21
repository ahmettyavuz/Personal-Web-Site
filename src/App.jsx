import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import ContextProvider from "./context/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ContextProvider>
        <Header />
        <Container />
        <Footer />
        <ToastContainer />
      </ContextProvider>
    </div>
  );
}

export default App;
