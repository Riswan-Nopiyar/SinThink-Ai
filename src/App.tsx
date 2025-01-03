import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListAi from './pages/ListAi';
import ImageAi from './pages/list-ai/ImageAi';
import ChatAi from './pages/list-ai/ChatAi';
import Install from './pages/Install';
import Error404 from './pages/errors/Error404';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/install" element={<Install />} />
        <Route path="/list-ai" element={<ListAi />} />
        <Route path="/list-ai/service/Image" element={<ImageAi />} />
        <Route path="/list-ai/service/Chat" element={<ChatAi />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
  );
}

export default App;