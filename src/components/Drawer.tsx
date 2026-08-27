import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

interface DrawerProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const Drawer: React.FC<DrawerProps> = ({ open, setOpen }) => {
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
                                    <DialogTitle className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                                        Navigation
                                    </DialogTitle>
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
                                                to="/"
                                                onClick={() => setOpen(false)}
                                                className="flex items-center px-4 py-3 text-base font-medium rounded-xl text-slate-200 hover:bg-slate-800/80 hover:text-white transition"
                                            >
                                                Home / Gallery
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/"
                                                onClick={() => setOpen(false)}
                                                className="flex items-center px-4 py-3 text-base font-medium rounded-xl text-slate-200 hover:bg-slate-800/80 hover:text-white transition"
                                            >
                                                Pages
                                            </Link>
                                        </li>
                                        <li>
                                            <a
                                                href="#account"
                                                onClick={() => setOpen(false)}
                                                className="flex items-center px-4 py-3 text-base font-medium rounded-xl text-slate-200 hover:bg-slate-800/80 hover:text-white transition"
                                            >
                                                Account
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#blocks"
                                                onClick={() => setOpen(false)}
                                                className="flex items-center px-4 py-3 text-base font-medium rounded-xl text-slate-200 hover:bg-slate-800/80 hover:text-white transition"
                                            >
                                                Blocks
                                            </a>
                                        </li>
                                        <li>
                                            <Link
                                                to="/user-card"
                                                onClick={() => setOpen(false)}
                                                className="flex items-center px-4 py-3 text-base font-medium rounded-xl text-slate-200 hover:bg-slate-800/80 hover:text-white transition"
                                            >
                                                Docs
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>

                                {/* Footer CTA */}
                                <div className="pt-6 border-t border-slate-800">
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition shadow-lg shadow-blue-600/30 cursor-pointer"
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default Drawer;
