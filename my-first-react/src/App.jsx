import { Routes, Route } from 'react-router-dom';
import './App.css';
import Chapter01 from './components/chapter01/Chapter01';
import SelectBoard from './components/chapter01/SelectBoard';
import Header from './components/common/header/header';
import Button from './components/modules/Button';
import FirstComponent from "./components/modules/FirstComponent";
import Fusion from './components/modules/fusion';
import { WhatIsJsx, WhatIsReact } from './components/modules/WhatIsJsx';




function App() {
  return (
    <>
      {/* 자바스크립트 코드를 작성할 수 있는 영역 */}
      
      {false && <Fusion/> && <Chapter01 /> && <SelectBoard /> && <Board /> && <PhotoBoard />}
      <Header />  
   
      <Routes>
        <Route path="/" element={<h1>메인입니다.</h1>} />
        <Route path="/fusion" element={<Fusion />} />
        <Route path="/01" element={<Chapter01 />} />
        <Route path="/02" element={<Chapter02 />} />
        <Route path="/*" element={<h1>존재하지 않는 페이지입니다.</h1>} />
      </Routes>
    </>
  );
}

export default App
