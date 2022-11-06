import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./sections/Home/Home";
import Design from "./sections/Design/Design";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Design />
    </>
  );
};

export default App;
