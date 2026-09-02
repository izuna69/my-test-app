import axios from "axios";
import { stringify } from "postcss";
import { useState } from "react";

const RegistrationPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {

        if (password != repassword) {
            alert("recomfirm password")
            return
        }
        try {
            e.preventDefault();
            const response = await axios
                .post("http://localhost:8080/api/auth/register",
                    { email: email, password: password, rePassword: repassword, }
                )
            if (response.data.token) {
                console.log("seikou")
                alert("sinnki tourokukannryou")

                if (response.data.token) {
                    console.log("token seikou")

                }

                else {
                    console.log("token sippai")
                }
            }
        } catch (error: any) {
            if (error.response?.status === 400) {
                alert("sudeni aru me-rudesu");
            } else {
                alert("Serverni era-gahasseisimasita.");
            }
        }
    }




    return (
        <main className="px-4 md:px-8 min-h-screen flex flex-col items-center bg-white dark:bg-gray-900 justify-center">
            <div className="max-w-md w-full">
                <div
                    className="p-6 rounded-lg bg-white border border-slate-300 shadow-xs md:p-6 dark:bg-gray-800 dark:border-neutral-700">
                    <h1 className="text-slate-900 text-center text-2xl font-bold dark:text-slate-50">Create an account</h1>

                    <form onSubmit={handleSubmit} className="space-y-6 mt-10">
                        <div>
                            <label htmlFor="email"
                                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required
                                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600" />
                        </div>
                        <div>
                            <label htmlFor="password"
                                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)}
                                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600" />
                        </div>
                        <div>
                            <label htmlFor="repassword"
                                className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Confirm
                                password</label>
                            <input value={repassword} onChange={(e) => setRepassword(e.target.value)}
                                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600" />
                        </div>

                        <div className="flex items-start flex-wrap gap-2">
                            <label className="flex items-center group has-[input:checked]:text-slate-900">
                                <input id="tmc" name="tmc" type="checkbox" required className="sr-only" />
                                {/* Custom box */}
                                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 dark:outline-neutral-600
                              bg-white dark:bg-neutral-700
                              group-has-[input:checked]:bg-blue-600
                              group-has-[input:checked]:outline-blue-600
                              group-focus-within:outline-2
                              group-focus-within:outline-blue-600" aria-hidden="true">
                                    {/* Checkmark */}
                                    <svg className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100" viewBox="0 0 12 10"
                                        fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 5l3 3 7-7" />
                                    </svg>
                                </span>
                                <span className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                                    I accept the
                                </span>
                            </label>

                            <a href="#"
                                className="ml-1 text-sm font-medium text-blue-700 dark:text-blue-500 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                                Terms and Conditions
                            </a>
                        </div>

                        <button type="submit"
                            className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                            Create an account</button>
                    </form>

                    <div className="mt-6 text-slate-900 text-sm text-center dark:text-slate-50">Already have an account? <a href="/LoginPage"
                        className="text-blue-700 hover:underline ml-1 font-medium dark:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                        Login here</a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default RegistrationPage;