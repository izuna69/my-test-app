import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, MenuButton } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { button } from '@heroui/theme';
import DropdownMenu from './DropdownMenu';

interface DrawerProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}



const Drawer: React.FC<DrawerProps> = ({ open, setOpen }) => {

    const token = localStorage.getItem("accessLoginToken");
    const isLogined = !!token;

    const logoutHandle = () => {
        localStorage.removeItem("accessLoginToken");
        window.location.assign("/")
    }



    return (
        <Dialog open={open} onClose={setOpen} className="relative z-[100000]">
            {/* Backdrop overlay */}
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 ease-in-out data-closed:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel
                            transition
                            className="pointer-events-auto relative w-screen max-w-xs transform transition duration-300 ease-in-out data-closed:translate-x-full"
                        >
                            {/* Drawer Content */}
                            <div className="flex h-full flex-col bg-slate-900 border-l border-slate-800 text-white shadow-2xl p-6">
                                {/* Header */}
                                <div className="flex items-center justify-between pb-5 border-b border-slate-800">

                                    {isLogined ? (<DialogTitle className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        <div className="flex items-center justify-center text-xl mt-3 me-3 text-white">
                                            <div className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    alt="Profile"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    className="size-10 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/20 shadow-md hover:ring-2 hover:ring-white/50 transition object-cover"
                                                />
                                            </div>
                                        </div>
                                        namae tuika yotei
                                    </DialogTitle>) :
                                        (<DialogTitle className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                            <div className="flex items-center justify-center text-xl mt-3 me-3 text-white">Login sitekudasai</div>
                                        </DialogTitle>)}

                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                                    >
                                        <span className="sr-only">Close</span>
                                        <XMarkIcon className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Menu Links */}
                                <nav className="mt-6 flex-1">
                                    <ul className="flex flex-col gap-2">
                                        <li>
                                            <Link
                                                to="/FeaturePage"
                                                onClick={() => setOpen(false)}
                                                className="flex items-center px-4 py-3 text-base font-medium rounded-xl text-slate-200 hover:bg-slate-800/80 hover:text-white transition"
                                            >
                                                機能
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/PricingPage"
                                                onClick={() => setOpen(false)}
                                                className="flex items-center px-4 py-3 text-base font-medium rounded-xl text-slate-200 hover:bg-slate-800/80 hover:text-white transition"
                                            >
                                                料金
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                href="/ErrorPage"
                                                onClick={() => setOpen(false)}
                                                className="flex items-center px-4 py-3 text-base font-medium rounded-xl text-slate-200 hover:bg-slate-800/80 hover:text-white transition"
                                            >
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="user-card"
                                                onClick={() => setOpen(false)}
                                                className="flex items-center px-4 py-3 text-base font-medium rounded-xl text-slate-200 hover:bg-slate-800/80 hover:text-white transition"
                                            >
                                                FAQ
                                            </a>
                                        </li>
                                        {isLogined ? (<li>
                                            <a
                                                href="#blocks"
                                                onClick={() => window.location.assign("/SettingPage")}
                                                className="flex items-center px-4 py-3 text-base font-medium rounded-xl text-slate-200 hover:bg-slate-800/80 hover:text-white transition"
                                            >
                                                Setting
                                            </a>
                                        </li>) : (null)}
                                    </ul>
                                </nav>

                                {/* Footer CTA */}

                                {isLogined ? (
                                    <button
                                        onClick={() => { logoutHandle() }}
                                        className='w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition shadow-lg shadow-blue-600/30 cursor-pointer'
                                    >
                                        Logout
                                    </button>
                                ) : (<div className="pt-6 border-t border-slate-800">
                                    <button
                                        onClick={() => window.location.assign("/LoginPage")}
                                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition shadow-lg shadow-blue-600/30 cursor-pointer"
                                    >
                                        Login
                                    </button>
                                </div>)}

                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default Drawer;
