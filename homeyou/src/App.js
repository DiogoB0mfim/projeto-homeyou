import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/Header";
import Home from "./sections/Home/Home";
import Design from "./sections/Design/Design";
import Galery from "./sections/Galery/Galery";
import Budget from "./sections/Budget/Budget";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Design />
      <Galery />
      <Budget />
      <Footer />
    </>
  );
};

export default App;
