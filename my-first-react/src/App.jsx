import { Routes, Route } from 'react-router-dom';
import './App.css';
import Chapter01 from './components/chapter01/Chapter01';
import SelectBoard from './components/chapter01/SelectBoard';
import Header from "./components/common/header/Header.jsx";  // ✅ H 대문자 주의
import Nav from "./components/common/Nav/Nav.jsx";            // ✅ 정확한 경로
import Button from './components/modules/Button';
import FirstComponent from "./components/modules/FirstComponent";
import Fusion from './components/modules/fusion';
import Foods from './components/Busan/Foods.jsx';
import Detail from './components/Busan/Detail/Detail.jsx';
import { WhatIsJsx, WhatIsReact } from './components/modules/WhatIsJsx';
import Chapter02 from './components/chapter02/Chapter02';
import Chapter03 from './components/chapter03/Chapter03';
import Chapter03_Input from './components/chapter03/Chapter03_Input';

function App() {
  return (
    <>
      <Header />     {/* ✅ 헤더는 항상 맨 위 */}
      <Nav />        {/* ✅ 네비게이션은 Routes 위쪽 */}

      <Routes>
        <Route path="/" element={<h1>메인입니다.</h1>} />
        <Route path="/fusion" element={<Fusion />} />
        <Route path="/01" element={<Chapter01 />} />
        <Route path="/02" element={<Chapter02 />} />
        <Route path="/03" element={<Chapter03 />} />
        <Route path="/input" element={<Chapter03_Input />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/foods/:id" element={<Detail />} />
        <Route path="/*" element={<h1>존재하지 않는 페이지입니다.</h1>} />
      </Routes>
    </>
  );
}

export default App;
