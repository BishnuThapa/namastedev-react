import burger from "/burger.jpg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";




const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

function App() {
  return (
    <>
      <AppLayout />
    </>
  );
}

export default App;
