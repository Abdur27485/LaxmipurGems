import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Firebase/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logOutUser()
            .then(() => {
                Swal.fire('Logged Out');
            })
    }

    return (
        <div className='bg-[#590d82]'>
            <img className='mx-auto px-10 py-5' src=".\logo2.png" alt="" />
            {/* For large screen */}
            <div className='bg-white py-5 px-5 sm:flex hidden items-center justify-between'>
                <ul className='flex gap-5'>
                    <Link to={'/'} className='font-semibold hover:text-[#FEACC6] cursor-pointer'>
                        <a>Home</a>
                    </Link>
                    <Link to={'/allJewellery'} className='font-semibold hover:text-[#FEACC6] cursor-pointer'>
                        <a>All Jewellery</a>
                    </Link>
                    {
                        user ?
                            <>
                                <Link to={'/myJewellery'} className='font-semibold hover:text-[#FEACC6] cursor-pointer'>
                                    <a>My Jewellery</a>
                                </Link>
                                <Link to={'/addJewellery'} className='font-semibold hover:text-[#FEACC6] cursor-pointer'>
                                    <a>Add Jewellery</a>
                                </Link>
                            </>
                            :
                            ''
}
                    <Link to={'/blogs'} className='font-semibold hover:text-[#FEACC6] cursor-pointer'>
                        <a>Blogs</a>
                    </Link>
                </ul>
                <div className='flex'>
                    {
                        user ?
                            <div className='flex gap-2'>
                                <img className='rounded-full w-[40px]' src={user?.photoURL} alt="" />
                                <button onClick={handleLogout} className='font-semibold ml-2 rounded hover:bg-[#9816df] hover:text-white px-2 py-2'>Log Out</button>
                            </div>
                            :
                            <div className='flex'>
                                <Link to={"./login"} className='text-white rounded space-x-2 mr-2 px-2 py-2 bg-[#7912b0] hover:bg-[#9816df]'>
                                    <i className="fa-solid fa-user"></i>
                                    <a href="" className='font-semibold'>Login</a>
                                </Link>
                                <p className='inline font-semibold py-2'>|</p>
                                <Link to={'./signUp'} className='font-semibold ml-2 rounded hover:bg-[#9816df] hover:text-white px-2 py-2'>Sign Up</Link>
                            </div>
                    }
                </div>
            </div>

            {/* For small screen */}
            <div className='bg-white py-2 px-5 sm:hidden relative flex justify-between items-center'>
                {
                    isOpen ?
                        <i className="fa-solid fa-xmark cursor-pointer text-xl" onClick={() => setIsOpen(!isOpen)}></i>
                        :
                        <i className="fa-solid fa-bars cursor-pointer text-xl" onClick={() => setIsOpen(!isOpen)}></i>
                }
                <div className='flex'>
                    {
                        user ?
                            <div className='flex gap-2'>
                                <img className='rounded-full w-[40px]' src={user?.photoURL} alt="" />
                                <button onClick={handleLogout} className='font-semibold ml-2 rounded hover:bg-[#9816df] hover:text-white px-2 py-2'>Log Out</button>
                            </div>
                            :
                            <div className='flex'>
                                <Link to={"./login"} className='text-white rounded space-x-2 mr-2 px-2 py-2 bg-[#7912b0] hover:bg-[#9816df]'>
                                    <i className="fa-solid fa-user"></i>
                                    <a href="" className='font-semibold'>Login</a>
                                </Link>
                                <p className='inline font-semibold py-2'>|</p>
                                <Link to={'./signUp'} className='font-semibold ml-2 rounded hover:bg-[#9816df] hover:text-white px-2 py-2'>Sign Up</Link>
                            </div>
                    }
                </div>

                {/* dropdown menu */}
                {
                    isOpen ?
                        <div
                            className="absolute start-0 z-10 mt-[252px] w-56 border border-gray-100 bg-white shadow-lg"
                            role="menu"
                        >
                            <div className="p-2">
                                <Link
                                    to={'/'}
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-[#ffdee9] hover:text-gray-700 font-semibold"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </Link>

                                <Link
                                    to={'/allJewellery'}
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-[#ffdee9] hover:text-gray-700 font-semibold"
                                    onClick={() => setIsOpen(false)}
                                >
                                    All Jewellery
                                </Link>
                                {
                                    user ?
                                        <>
                                            <Link
                                                to={'/myJewellery'}
                                                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-[#ffdee9] hover:text-gray-700 font-semibold"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                My Jewellery
                                            </Link>

                                            <Link
                                                to={'/addJewellery'}
                                                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-[#ffdee9] hover:text-gray-700 font-semibold"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Add Jewellery
                                            </Link>
                                        </>
                                        :
                                        ''
                                }
                                <Link
                                    to={'/blogs'}
                                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-[#ffdee9] hover:text-gray-700 font-semibold"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Blogs
                                </Link>

                            </div>
                        </div>
                        :
                        ""
                }
            </div>
        </div>
    );
};

export default Navbar;