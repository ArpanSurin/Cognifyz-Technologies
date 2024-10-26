import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const Form = ({ closeForm }) => {
    const [formType, setFormType] = useState('login');
    const nav = useNavigate('/login');
    const registerLink = () => {
        setFormType('register');
    };

    const loginLink = () => {
        setFormType('login');
    };

    return (
        <div className='fixed inset-0 bg-opacity-80 flex justify-center items-center z-50 transition ease-in-out duration-500'>
            <div className='relative bg-transparent text-white flex justify-center items-center overflow-hidden p-8 rounded-xl'>
                {/* Close Button */}
                <button onClick={closeForm} className='absolute top-2 right-2 text-white text-2xl'>
                    <AiOutlineClose />
                </button>

                {/* Login Form  */}
                {formType === 'login' ? (
                    <div className='login-form flex justify-center items-center backdrop-blur-md height-auto border-2 border-gray rounded-xl'>
                        <form className='space-y-6 py-14 px-20 w-[450px]'>
                            <h1 className='font-bold text-4xl pb-8 flex justify-center'>Login</h1>
                            <div className="flex border-b-4 relative">
                                <input
                                    className='w-full h-12 bg-transparent'
                                    type="email"
                                    name="Email"
                                    placeholder="Email"
                                />
                                <MdEmail className='absolute right-1 top-1/2 transform -translate-y-1/2 size-7' />
                            </div>
                            <div className="flex border-b-4 relative">
                                <input
                                    className=' w-full h-12 bg-transparent'
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                                <FaLock className='absolute right-1 top-1/2 transform -translate-y-1/2 size-7' />
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <label>
                                    <input type="checkbox" name="rememberMe" id="rememberMe" />
                                    Remember Me
                                </label>
                                <a className='underline' href="">Forgot Password?</a>
                            </div>
                            <div className="flex justify-center">
                                <button onClick={() => nav("/frontpage")} className='text-xl py-4 px-4 w-full border-4 border-white rounded-xl hover:bg-white hover:text-black transition duration-300 ease-in-out' type='submit'>
                                    Login
                                </button>
                                    
                            </div>
                            <div>
                                <p className='flex justify-between'>Don't have an account?
                                    <a href="#" onClick={registerLink} className='underline transition duration-300 ease-in-out'> Register </a>
                                </p>
                            </div>
                        </form>
                    </div>
                ) : (
                    // Registration form
                    <div className='register-form flex justify-center items-center backdrop-blur-md height-auto border-2 border-gray rounded-xl'>
                        <form className='space-y-7 py-14 px-24 w-auto'>
                            <h1 className='font-bold text-4xl pb-8 flex justify-center'>Registration</h1>
                            <div className="flex border-b-4 relative">
                                <input className="w-full h-12 bg-transparent pr-10" type="text" name="name" placeholder="Username" />
                                <FaUser className="absolute right-1 top-1/2 transform -translate-y-1/2 size-7" />
                            </div>
                            <div className="flex border-b-4 relative">
                                <input className='w-full h-12 bg-transparent pr-10' type="email" name="email" placeholder="Email" />
                                <MdEmail className='absolute right-1 top-1/2 transform -translate-y-1/2 size-7' />
                            </div>
                            <div className="flex border-b-4 relative">
                                <input className='w-full h-12 bg-transparent' type="password" name="password" placeholder="Password" required />
                                <FaLock className='absolute right-1 top-1/2 transform -translate-y-1/2 size-7' />
                            </div>
                            <div className="flex justify-center">
                                <label>
                                    <input type="checkbox" name="terms" id="terms" />
                                    I agree to the terms & conditions
                                </label>
                            </div>
                            <div className="flex justify-center">
                                <button className='text-xl py-4 px-10 w-full border-4 border-white rounded-xl hover:bg-white hover:text-black transition duration-300 ease-in-out' type='submit'>
                                    <Link to="/frontpage">
                                        Register
                                    </Link>
                                </button>
                            </div>
                            <div>
                                <p className='flex justify-between'>Already have an account?
                                    <a href="#" onClick={loginLink} className='underline'> Login </a>
                                </p>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Form;
