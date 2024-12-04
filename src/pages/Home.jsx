import React from "react";
import ProfileImage from "../assets/profile.png"; // Path to your profile image

const Home = () => {
    return (
        <div>
            <section className="h-1028 bg-gray-900 flex items-center justify-inbetween  px-8 text-white">
                {/* Left Side: Text Details */}
                <div className="ml-5 mt-28 relative w-88 h-104 sm:w-208 ">
                    {/* Glowing Effect */}
                    {/* <div className="absolute inset-0 w-full h-full rounded-full bg-teal-400 blur-3xl opacity-80 z-0"></div> */}

                    {/* Hexagon with Image */}
                    {/* <div className="relative w-full h-full clip-hexagon bg-gray-800 z-10"> */}
                    <img
                        src={ProfileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                    {/* </div> */}
                </div>
                <div className="ml-1 max pr-8">
                    <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                        Hello, It's Me <span className="text-teal-400">Apurva Sukale</span>
                    </h1>
                    <h2 className="text-2xl sm:text-3xl text-teal-400 mb-6">
                        And I'm a Frontend Developer
                    </h2>
                    <p className="text-gray-400 mb-10">
                        I specialize in creating dynamic, responsive web applications using React, Redux, and Tailwind CSS.
                    </p>
                    {/* Buttons */}
                    <div className="flex space-x-6">
                        <a
                            href="#"
                            className="px-8 py-3 bg-teal-400 text-gray-900 font-semibold rounded-lg hover:bg-teal-500 transition"
                        >
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border-2 border-teal-400 text-teal-400 font-semibold rounded-lg hover:bg-teal-400 hover:text-gray-900 transition"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Right Side: Profile Image */}

            </section >
        </div >
    );
};

export default Home;
