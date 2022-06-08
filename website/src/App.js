import Aside from "./components/Aside";
import Content from "./components/Content";
function App() {
  return (
    <>
      <div className="sm:flex sm:flex-col">
      <Aside/>
      <Content/>
      </div>
    </>
  );
}

export default App;
