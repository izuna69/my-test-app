import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { RxAvatar } from "react-icons/rx";

const DropdownMenu = () => {
    const token = localStorage.getItem("accessLoginToken");
    const isLogined = !!token;


    if (window.location.pathname === "/LoginPage") {
        return null;
    }


    const handleLogout = () => {
        localStorage.removeItem("accessLoginToken");
        window.location.assign("/");
    }


    return (


        isLogined ? (
            <Menu as="div" className="relative inline-block" >
                <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer">
                    <span className="sr-only">Open user menu</span>
                    <img
                        alt="Profile"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-10 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/20 shadow-md hover:ring-2 hover:ring-white/50 transition object-cover"
                    />
                </MenuButton>

                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                    <div className="py-1">
                        <MenuItem>

                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                            >
                                My profile
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                            >
                                Inbox
                            </a>
                        </MenuItem>
                    </div>
                    <div className="py-1">
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                            >
                                My biling
                            </a>
                        </MenuItem>

                    </div>
                    <div className="py-1">
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                            >
                                Share
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="/SettingPage"
                                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                            >
                                Setting
                            </a>
                        </MenuItem>
                    </div>
                    <div className="py-1">
                        <MenuItem>
                            <a
                                onClick={handleLogout}

                                className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                            >
                                LogOut
                            </a>
                        </MenuItem>
                    </div>
                </MenuItems>
            </Menu >

        ) : (<button className="m-5 mr-10 text-xl size-10" onClick={() => {
            window.location.assign("/LoginPage")
        }}>
            Login
        </button>)



    )
}
export default DropdownMenu;




