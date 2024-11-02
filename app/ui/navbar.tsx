'use client';

import { Globe, Menu, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="p-4">
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="mb-4 rounded-full p-2 hover:bg-gray-100"
                    >
                        <X className="size-6 text-gray-600" />
                    </button>
                    <nav className="space-y-4">
                        <Link href="#" className="block text-gray-600 hover:text-gray-900">หน้าแรก</Link>
                        <Link href="https://pantip.com/home/feed" className="block text-gray-600 hover:text-gray-900">My Feed</Link>
                        <Link href="https://pantip.com/home/pick" className="block text-gray-600 hover:text-gray-900">Pantip Pick</Link>
                        <Link href="https://pantip.com/home/hitz" className="block text-gray-600 hover:text-gray-900">Pantip Hitz</Link>
                        <Link href="https://pantip.com/home/communities" className="block text-gray-600 hover:text-gray-900">Explore</Link>
                    </nav>
                </div>
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50"
                    onClick={() => setIsSidebarOpen(false)}
                >
                </div>
            )}

            <header className="border-b">
                <div className="container mx-auto flex items-center justify-between p-4">
                    <div className="flex items-center gap-8">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="rounded-full p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Open menu"
                        >
                            <Menu className="size-6 text-gray-600" />
                        </button>
                        <Link href="/">
                            <h1 className="text-2xl font-bold text-blue-600">Pantip</h1>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="rounded-full p-2 hover:bg-gray-100">
                            <Globe className="size-5 text-gray-600" />
                        </button>
                        <div className="relative">
                            <div
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                <User className="size-5 text-gray-600" />
                            </div>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                    <div className="py-1">
                                        <p className="text-center p-2 text-lg">Guest</p>
                                        <Link href="https://pantip.com/login">
                                            <button
                                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                <p className="">เข้าสู่ระบบ / สมัครสมาชิก</p>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}