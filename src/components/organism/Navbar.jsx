import React from 'react'

export const Navbar = () => {
    return (


        <nav className="  bg-gray-200 border-b-2 border-gray-800">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Note Maker</span>
                </a>

            </div>
        </nav>

    )
}
