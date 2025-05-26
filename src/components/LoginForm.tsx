import React from 'react'

function LoginForm() {
    return (
        <section className="bg-[#F8F8FB]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow-2xl  md:mt-0  sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6 pt-6 pb-6 pr-3 pl-3" action="#">
                            <div className='pb-2'>
                                <label htmlFor="email" className="block mb-2 text-[16px]  font-[600] text-[#3C4A4E]">
                                    Email ID/Phone Number
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-white border border-[#D9D9D9] text-[#3C4A4E] font-[400]  rounded-sm  block w-full p-2.5"
                                    placeholder="Enter Email ID/Phone Number"
                                    required
                                />
                            </div>
                            <div className='pb-4'>
                                <label htmlFor="password" className="block mb-2 text-[16px]  font-[600]  text-[#3C4A4E]">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    className="bg-white border border-[#D9D9D9] text-[#3C4A4E] font-[400]  rounded-sm  block w-full p-2.5"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full  text-white font-[700]  bg-[#1E1E1E] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300  rounded-sm text-sm px-5 py-3 text-center"
                            >
                                Login In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>)
}

export default LoginForm