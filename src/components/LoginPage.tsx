import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { FaFlutter } from "react-icons/fa6";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";

const LoginPage = (() => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const passwordLenghtSize = () => {
        let result = "";
        for (let i = 0; i < password.length; i++) {
            if (i < password.length - 2) {
                result += "*";
            } else {
                result += password[i];
            }
        }
        return result;
    };




    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                });
            if (response.ok) {
                const data = await response.json();

                if (data.token) {
                    alert("login seikou")
                    localStorage.setItem('accessLoginToken', data.token);
                    navigate("/");

                } else {
                    console.log("token sippai");
                }
            } else if (response.status === 401) {
                alert("id or password matigatteimasu")

            } else {
                alert("server error")
            }
        } catch (error) {
            navigate("/ErrorPage")
        }
    }






    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 h-full bg-white dark:bg-gray-900 h-full">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <FaFlutter className="mx-auto h-10 w-auto mt-30" color="white" />

                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                                Password
                            </label>
                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                                >
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-gray-400">
                    Not a member?{' '}
                    <a
                        href="/RegistrationPage"
                        className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                        Start a 14 day free trial
                    </a>
                </p>
            </div>
        </div>
    )
});
export default LoginPage;
