import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase.init";
import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";


// provider google 
const googleProvider = new GoogleAuthProvider();


const SignIn = () => {
    const [user, setUser] = useState(null)
    const [show, setShow] = useState(false);

    // sign in with google 
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
                console.log(result.user)
                toast.success("Google Sign In Success")
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
            })
        console.log('google btn clicked');

    }

    // sign in email password 
    const handleSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
                setUser(result.user)
                toast.success('Log In SuccessFully')
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
            })
        // console.log('signin btn clicked', email, password)

    }
    console.log(user)

    // sign out 
    const handleSignOut = () => {
        console.log('sign out btn clicked')
        signOut(auth)
            .then(() => {
                toast.success('sign Out Success');
                setUser(null)
            })
            .catch(err => {
                // console.log(err);
                toast.error(err.message)
            })
    }
    return (
        <div className="min-h-[calc(100vh-20px)] flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute inset-0">
                <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
                <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
                {/* Left Section */}
                <div className="max-w-lg text-center lg:text-left">
                    <h1 className="text-5xl font-extrabold drop-shadow-lg">
                        Welcome Back
                    </h1>
                    <p className="mt-4 text-lg text-white/80 leading-relaxed">
                        Sign in to continue your journey. Manage your account, explore new
                        features, and more.
                    </p>
                </div>

                {/* Login Card */}
                <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
                    {
                        user ? (
                            <div className="text-center space-y-3">
                                <img className="h-20 w-20 rounded-full mx-auto" src={user?.photoURL || "https://via.placeholder.com/88"} alt="" />
                                <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                                <p className="text-white/80 font-semibold">{user?.email}</p>
                                <button onClick={handleSignOut} className="my-btn">Sign Out</button>

                            </div>
                        ) : (<form onSubmit={handleSignIn} className="space-y-5">
                            <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                                Sign In
                            </h2>

                            <div>
                                <label className="block text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium mb-1">
                                    Password
                                </label>
                                <input
                                    type={show ? "text" : "password"}
                                    name="password"
                                    placeholder="••••••••"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                                <span onClick={() => setShow(!show)} className="absolute right-[8px] top-[36px] cursor-pointer z-50">
                                    {show ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>

                            <button type="button" className="hover:underline cursor-pointer">
                                Forget password?
                            </button>

                            <button
                                type="submit"
                                className="my-btn"
                            >
                                Login
                            </button>


                            {/* Divider */}
                            <div className="flex items-center justify-center gap-2 my-2">
                                <div className="h-px w-16 bg-white/30"></div>
                                <span className="text-sm text-white/70">or</span>
                                <div className="h-px w-16 bg-white/30"></div>
                            </div>

                            {/* Google Signin */}
                            <button onClick={googleSignIn} className="btn w-full bg-white text-black border-[#e5e5e5] cursor-pointer">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>



                            <p className="text-center text-sm text-white/80 mt-3">
                                Don’t have an account?{" "}
                                <Link
                                    to="/signup"
                                    className="text-pink-300 hover:text-white underline"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </form>)
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignIn;
