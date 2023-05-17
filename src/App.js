import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Books from './components/home/Books';
import AddBook from './pages/addBook/AddBook';
import UpdateBook from './pages/updateBook/UpdateBook';
import ViewBook from './pages/viewBook/ViewBook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar/>
        <div className='container'>
          <Sidebar/>
          <Routes>
            <Route path='/' element={<Books/>}/>
            <Route path='/add-book' element={<AddBook/>}/>
            <Route path='/update-book/:bookid' element={<UpdateBook/>}/>
            <Route path='/view-book/:bookid' element={<ViewBook/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
