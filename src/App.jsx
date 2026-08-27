import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Footer from './components/Footer';
import { UserCard2 } from './test';
import FullPageDemo from './components/Maincontents';
import PricingPage from './components/PricingPage';
import FeaturePage from './components/FeaturePage';
import ErrorPage from "./components/ErrorPage"
import LoginPage from "./components/LoginPage"
import RegistrationPage from './components/RegistrationPage';

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
        <Route path="/FeaturePage" element={<FeaturePage />} />
        <Route path='/PricingPage' element={<PricingPage />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />



        {/* 없는주소일경우 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;