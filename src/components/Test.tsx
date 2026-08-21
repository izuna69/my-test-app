import { useState, useEffect } from "react";

function Test() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted once!");
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-8 max-w-md mx-auto bg-slate-800/90 backdrop-blur-md rounded-3xl border border-slate-700 shadow-2xl text-center">
            <span className="text-xs uppercase tracking-widest font-bold text-pink-400 mb-2">Interactive Counter</span>
            <h2 className="text-4xl font-black text-white mb-6">Counter: {count}</h2>
            <div className="flex gap-3">
                <button 
                    className="px-6 py-3 bg-pink-600 hover:bg-pink-500 active:scale-95 text-white font-bold rounded-xl shadow-lg shadow-pink-600/30 transition cursor-pointer" 
                    onClick={() => setCount(count + 1)}
                >
                    + Count
                </button>
                <button 
                    className="px-6 py-3 bg-slate-700 hover:bg-slate-600 active:scale-95 text-slate-200 font-semibold rounded-xl transition cursor-pointer" 
                    onClick={() => setCount(0)}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Test;