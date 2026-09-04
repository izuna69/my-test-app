import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import { UserCard2 } from './tests/test';
import FullPageDemo from './components/Maincontents';
import PricingPage from './pages/PricingPage';
import FeaturePage from './pages/FeaturePage';
import ErrorPage from "./pages/ErrorPage"
import LoginPage from "./pages/LoginPage"
import RegistrationPage from './pages/RegistrationPage';
import SettingPage from "./pages/SettingPage"
import ProtectedRoute from "./layouts/ProtectedRoute";

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
        {/* 로그인 필요없는 곳 */}
        <Route path="/" element={<FullPageDemo />} />
        <Route path="/user-card" element={<UserCard2 />} />
        <Route path="/FeaturePage" element={<FeaturePage />} />
        <Route path='/PricingPage' element={<PricingPage />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />

        {/* 로그이 필요한 주소  */}
        <Route element={<ProtectedRoute />}>
          <Route path="/SettingPage" element={<SettingPage />} />
        </Route>


        {/* 없는주소일경우 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />

    </BrowserRouter>
  );
}

export default App;