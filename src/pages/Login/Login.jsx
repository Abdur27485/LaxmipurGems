import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Firebase/AuthProvider';

const Login = () => {
    const [showPassword, SetShowPassword] = useState(false)
    const { register, handleSubmit } = useForm();

    const {logInUser} = useContext(AuthContext)

    const navigate = useNavigate();

    const LoginFormHandler = (data) => {
        logInUser(data.email, data.password)
        .then( result =>{
            Swal.fire("Logged In");
            navigate('/')
        })
    }
    return (
        <div>
            <div className='mt-[40px] mb-[80px]'>
                <h1 className='text-center text-5xl mb-5'>LOGIN</h1>
                <form onSubmit={handleSubmit(LoginFormHandler)} className='mx-auto max-w-xs border border-[#590d82] rounded px-5 py-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Your Email</span>
                        </label>
                        <input {...register('email')} type="email" className="file-input file-input-bordered border-[#FEACC6] w-full max-w-xs px-2 mb-5" placeholder='Enter your email' />
                    </div>
                    <div className="form-control w-full mb-5 relative">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input {...register('password')} type={showPassword ? "text" : "password"} className="file-input file-input-bordered border-[#FEACC6] w-full max-w-xs px-2" placeholder='Password' />
                        {
                            showPassword ?
                                <i onClick={() => SetShowPassword(!showPassword)} className="fa-solid fa-eye-slash absolute end-2 top-[52px]"></i>
                                :
                                <i onClick={() => SetShowPassword(!showPassword)} class="fa-solid fa-eye absolute end-2 top-[52px]"></i>
                        }
                    </div>
                    <button type="submit" className='w-full mb-3 bg-[#7912b0] hover:bg-[#9816df] py-2 px-5 rounded font-semibold text-white'>Login to continue</button>
                    <div className='flex justify-between text-[#ff85ac]'>
                        <a className='cursor-pointer hover:underline' href="#">Forgot Password</a>
                        <Link to={"/signUp"} className='cursor-pointer hover:underline' href="#">Create Account</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;