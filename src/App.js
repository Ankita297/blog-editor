import "./App.css";
import { AppProvider } from './context/AppContext';
import TabComponent from "./components/TabComponent/TabComponent";

function App() {
  return (
    <>
     <AppProvider>
      <TabComponent />
    </AppProvider>
    </>
  );
}

export default App;
