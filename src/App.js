import logo from "./logo.svg";
import "./App.css";
import { AppRouter } from "./components/appRouter";
import { Route, Routes } from "react-router-dom";
import { ViewItem } from "./pages/viewItem";
import DataProvider from "./context/dataProvider";
import 'boxicons'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { LogIn } from "./pages/logIn";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="" element={<AppRouter />}></Route>
          <Route path="view/:id" element={<ViewItem />}></Route>
          <Route path="login" element={<LogIn/>}></Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
