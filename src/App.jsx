import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

import { UserCard2 } from './test';
import FullPageDemo from './components/Maincontents';
import TestComponent from './test2';
function App() {
  const [username, setUsername] = useState('');

  // 1. useEffect는 반드시 App() 함수 내부에서 호출합니다.

  useEffect(() => {

  }, []);
  // 2. 화면에 표시할 JSX는 return (...) 안에 작성합니다.
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<FullPageDemo />} />
        <Route path="/user-card" element={<UserCard2 />} />
        <Route path="/TestComponent" element={<TestComponent />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;