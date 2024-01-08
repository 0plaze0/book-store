import { Route, Routes } from "react-router-dom";

import "./App.css";
import { CreateBook, ShowBook, EditBook, DeleteBook, Home } from "./container";
import { ToogleProvider } from "./context/Toogle";

function App() {
  return (
    <div className="app">
      <ToogleProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/books/create" element={<CreateBook />} />
          <Route path="/books/details/:id" element={<ShowBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
        </Routes>
      </ToogleProvider>
    </div>
  );
}

export default App;
