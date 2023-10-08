import React from 'react';

const SignUp = () => {
    const [showPassword, SetShowPassword] = useState(true)
    const signUpHandler = () => {

    }
    return (
        <div>
            <div className='mt-[40px] mb-[80px]'>
                <h1 className='text-center text-5xl mb-5'>Create Account</h1>
                <form onSubmit={(e) => e.preventDefault()} className='mx-auto max-w-xs border border-[#590d82] rounded px-5 py-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Your Email</span>
                        </label>
                        <input type="email" className="file-input file-input-bordered border-[#FEACC6] w-full max-w-xs px-2 mb-5" placeholder='Enter your email' />
                    </div>
                    <div className="form-control w-full mb-5 relative">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"} className="file-input file-input-bordered border-[#FEACC6] w-full max-w-xs px-2" placeholder='Password' />
                        {
                            showPassword ?
                                <i onClick={() => SetShowPassword(!showPassword)} className="fa-solid fa-eye-slash absolute end-2 top-[52px]"></i>
                                :
                                <i onClick={() => SetShowPassword(!showPassword)} class="fa-solid fa-eye absolute end-2 top-[52px]"></i>
                        }
                    </div>
                    <div className="form-control w-full mb-5 relative">
                        <label className="label">
                            <span className="label-text font-semibold">Confirm Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"} className="file-input file-input-bordered border-[#FEACC6] w-full max-w-xs px-2" placeholder='Confirm Password' />
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
                        <a className='cursor-pointer hover:underline' href="#">Create Account</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;