import './App.css';
import "bulma/css/bulma.css";
import NavBar from './components/NavBar/NavBar.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={'/'} element={<ItemListContainer />} />
          <Route path={'/category/:categoryId'} element={<ItemListContainer />} />
          <Route path={'/item/:itemId'} element={<ItemDetailContainer />} />
          <Route path={'*'} element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
