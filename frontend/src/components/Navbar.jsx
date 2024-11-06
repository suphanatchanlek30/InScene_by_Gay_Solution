import React from 'react';
import { HiOutlineHome } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLists = [
        { name: "Home", path: "/", icon: <HiOutlineHome className="text-2xl" /> },
        { name: "Community", path: "/community", icon: <IoCalendarOutline className="text-2xl" /> },
        { name: "Search", path: "/search", icon: <BsSearch className="text-2xl" /> },
        { name: "Messages", path: "/messages", icon: <AiOutlineMessage className="text-2xl" /> },
        { name: "Profile", path: "/profile", icon: <HiOutlineUser className="text-2xl" /> },
    ];

    return (
        <nav>
            <ul className="flex flex-row font-body border justify-center items-center gap-6 fixed bottom-0 w-full bg-white py-4 shadow-md">
                {
                    navLists.map((list, index) => (
                        <li key={index}>
                            <NavLink
                                to={list.path}
                                className={({ isActive }) =>
                                    isActive ? "text-[#24BAEC]" : "text-[#7D848D]"
                                }
                            >
                                <div className="flex flex-col items-center gap-2">
                                    {list.icon}
                                    <span className='text-[12px]'>{list.name}</span>
                                </div>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;
