import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import FourOFour from './Pages/FourOFour';
import NavBar from './Components/NavBar';
import Index from './Pages/Index';
import Edit from './Pages/Edit';
import Home from './Pages/Home';
import Show from './Pages/Show';
import New from './Pages/New';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dvds' element={<Index />} />
        <Route path='/dvds/:id' element={<Show />} />
        <Route path='/dvds/:id/edit' element={<Edit />} />
        <Route path='/dvds/new' element={<New />} />
        <Route path='*' element={<FourOFour />} />
      </Routes>
    </BrowserRouter>
  );
};