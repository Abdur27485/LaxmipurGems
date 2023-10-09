import React from 'react';

const Footer = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-y-8 bg-[#390854] px-5 py-8 mt-[80px]'>
            <div className=''>
                <h2 className='bold text-white text-[16px] mb-3 uppercase font-bold'>About Us</h2>
                <ul className='flex flex-col gap-2 text-white'>
                    <li>
                        <a className='hover:text-[#FEACC6] cursor-pointer'>Managing Director's Profile</a>
                    </li>
                    <li>
                        <a className='hover:text-[#FEACC6] cursor-pointer'>About</a>
                    </li>
                    <li>
                        <a className='hover:text-[#FEACC6] cursor-pointer'>Our Certifications</a>
                    </li>
                    <li>
                        <a className='hover:text-[#FEACC6] cursor-pointer'>Stores</a>
                    </li>
                    <li>
                        <a className='hover:text-[#FEACC6] cursor-pointer'>Jewellery Loan</a>
                    </li>
                    <li>
                        <a className='hover:text-[#FEACC6] cursor-pointer'>Customized Jewellery</a>
                    </li>
                </ul>
            </div>
            <div className=''>
                <h2 className='bold text-white text-[16px] mb-3 uppercase font-bold'>Customer Delights</h2>
                <ul className='flex flex-col gap-2 text-white'>
                    <li>
                        <a className='hover:text-[#FEACC6] cursor-pointer'>How To Order</a>
                    </li>
                    <li>
                        <a className='hover:text-[#FEACC6] cursor-pointer'>Blogs</a>
                    </li>
                    <li>
                        <a className='hover:text-[#FEACC6] cursor-pointer'>Ring Size</a>
                    </li>
                    <li>
                        <a className='hover:text-[#FEACC6] cursor-pointer'>Stores</a>
                    </li>
                </ul>
            </div>
            <div className=''>
                <h2 className='text-white text-[16px] mb-3 uppercase font-bold'>Policies</h2>
                <ul className='flex flex-col gap-2 text-white'>
                    <li>
                        <a className='hover:text-[#FEACC6] cursor-pointer'>FAQ</a>
                    </li>
                    <li>
                        <a className='hover:text-[#FEACC6] cursor-pointer'>Online EMI Facility</a>
                    </li>
                    <li>
                        <a className='hover:text-[#FEACC6] cursor-pointer'>Franchisee</a>
                    </li>
                    <li>
                        <a className='hover:text-[#FEACC6] cursor-pointer'>Privacy Policy</a>
                    </li>
                    <li>
                        <a className='hover:text-[#FEACC6] cursor-pointer'>Terms & Conditions</a>
                    </li>
                </ul>
            </div>
            <div className=''>
                <h2 className='bold text-white text-[16px] mb-3 font-bold'>Call Us On +880 01728913008</h2>
                <div>
                    <p className='text-white font-medium'>Join Our Email List</p>
                    <form>
                        <input className='rounded px-4 py-2' type="email" name="emailSubscribe" id="emailSubscribe" placeholder='Enter Your Email' />
                        <button type="submit" className='bg-[#7912b0] hover:bg-[#9816df] py-2 px-5 rounded mt-2 text-white font-semibold'>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='text-white'>
                <img className=' w-[300px] h-[100px] mb-7' src=".\logo.png" alt="site-logo" />
                <div>
                    <p>Tower Of Akash, 54 Gulshan Avenue, Road No.132, Gulshan-1</p>
                    <p>Dhaka-1212, Hotline +880 01728913008</p>
                    <p>Info@laxmipurGemsltd.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;