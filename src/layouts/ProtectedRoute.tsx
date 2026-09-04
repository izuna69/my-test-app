import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";




const ProtectedRoute = () => {


    const [status, setStatus] = useState('');

    useEffect(() => {

        const token = localStorage.getItem("accessLoginToken");
        const isLogined = !!token;


        const checkServer = async () => {
            if (!token) {
                setStatus("토큰없음")
                return
            }

            try {
                await axios.get("http://localhost:8080/api/living", {
                    timeout: 3000

                });

                setStatus("나 잘살아있음")

            } catch (error) {
                setStatus("백엔드 꺼져있거나 빠개짐")

            }
        }
        checkServer();

    }, []);
    if (status === "토큰없음") {

        return <Navigate to="/LoginPage" replace />;
    }
    if (status === "백엔드 꺼져있거나 빠개짐") {

        return <Navigate to="/ErrorPage" replace />;
    }

    return (
        <Outlet></Outlet>
    );
}
export default ProtectedRoute