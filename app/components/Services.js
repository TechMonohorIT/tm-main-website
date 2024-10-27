'use client';
import React from 'react';
import { FaCode } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { RiSurroundSoundFill } from "react-icons/ri";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";



const Services = () => {
    return (
<div className="text-center py-16">
                    <h2 className="text-2xl text-indigo-600 italic">Our Services</h2>
                    <h1 className="text-4xl font-bold mt-2">Service We Provide</h1>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                    We provide custom web design and development services to create engaging, user-friendly websites. Our offerings include e-commerce solutions, SEO optimization, and ongoing support to help your business thrive online.
                    </p>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex justify-center -mt-12">
                                <div className="bg-gray-800 p-4 rounded-full">
                                  <SiAntdesign className='text-white'/>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Ui/Ux Design</h3>
                            <p className="text-gray-500 mt-2">
                            We create user-friendly and attractive websites that look great and are easy to navigate. Our UI/UX design services focus on making every visitor’s experience enjoyable.                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex justify-center -mt-12">
                                <div className="bg-gray-800 p-4 rounded-full">
                                  <MdDesignServices className='text-white'/>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Web Design</h3>
                            <p className="text-gray-500 mt-2">
                            We create stunning websites tailored to your needs. Our web design service combines creativity and functionality to ensure your site looks great and works smoothly.                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex justify-center -mt-12">
                                <div className="bg-gray-800 p-4 rounded-full">
                                <RiSurroundSoundFill className='text-white'/>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Digital Marketing</h3>
                            <p className="text-gray-500 mt-2">
                            We provide digital marketing services to enhance your online visibility and connect with customers. From social media to SEO, we help grow your business online.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex justify-center -mt-12">
                                <div className="bg-gray-800 p-4 rounded-full">
                                   <FaCode className='text-white'/>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Web Develoment</h3>
                            <p className="text-gray-500 mt-2">
                            We develop custom websites that are fast, secure, and easy to use. Our goal is to create reliable online solutions that help your business succeed
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex justify-center -mt-12">
                                <div className="bg-gray-800 p-4 rounded-full">
                                <HiOutlineDevicePhoneMobile className='text-white'/>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Mobile Apps Development</h3>
                            <p className="text-gray-500 mt-2">
                            We create user-friendly mobile apps for iOS and Android that meet your business needs. Our apps are designed to be fast, engaging, and easy to navigate                            </p>
                        </div>
                    </div>
                </div>
    );
};

export default Services;