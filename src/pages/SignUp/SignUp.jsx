import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Firebase/AuthProvider';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const navigate = useNavigate();
    const {updateUserProfile, createUser} = useContext(AuthContext)
    const [showPassword, SetShowPassword] = useState(false)
    const { register, handleSubmit } = useForm();

    const imgUploadToken = import.meta.env.VITE_imgBBToken;
    const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imgUploadToken}`;
    // console.log(imgUploadToken)

    const signUpHandler = data => {
        console.log(data)

        const formImg = new FormData();
        formImg.append('image', data.profileImg[0])

        fetch(imgHostingUrl, {
            method: 'POST',
            body: formImg
        })
        .then(res => res.json())
        .then( imgUrl =>{
            createUser(data.email, data.password)
            .then(result => {
                updateUserProfile(imgUrl.data.display_url)
                .then(() =>{
                    navigate('/')
                })
            })
        })

    }
    return (
        <div>
            <div className='mt-[40px] mb-[80px]'>
                <h1 className='text-center text-5xl mb-5'>Create Account</h1>
                <form onSubmit={handleSubmit(signUpHandler)} className='mx-auto max-w-xs border border-[#590d82] rounded px-5 py-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Your Email</span>
                        </label>
                        <input name='email' {...register('email')} type="email" className="file-input file-input-bordered border-[#FEACC6] w-full max-w-xs px-2 mb-5" placeholder='Enter your email' required />
                    </div>
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input {...register("password")} name='password' type={showPassword ? "text" : "password"} className="file-input file-input-bordered border-[#FEACC6] w-full max-w-xs px-2" placeholder='Password' required />
                    </div>
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text font-semibold">Confirm Password</span>
                        </label>
                        <input name='confirmPassword' type={showPassword ? "text" : "password"} className="file-input file-input-bordered border-[#FEACC6] w-full max-w-xs px-2" placeholder='Confirm Password' required />
                    </div>
                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text font-semibold">Profile Picture</span>
                        </label>
                        <input type="file" {...register('profileImg')} className="file-input file-input-bordered w-full max-w-xs border-[#FEACC6]" required />
                    </div>
                    <button type="submit" className='w-full mb-3 bg-[#7912b0] hover:bg-[#9816df] py-2 px-5 rounded font-semibold text-white'>Sign Up to Continue</button>
                    <div className=''>
                        <span className='mr-2'>Have An Account?</span>
                        <Link to={"/login"} className='cursor-pointer hover:underline text-[#ff85ac]' href="#">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;