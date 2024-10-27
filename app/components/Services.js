'use client';
import React from 'react';

const Services = () => {
    return (
<div className="text-center py-16">
                    <h2 className="text-2xl text-green-400 italic">Our Services</h2>
                    <h1 className="text-4xl font-bold mt-2">Service We Provide</h1>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                    </p>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex justify-center -mt-12">
                                <div className="bg-gray-800 p-4 rounded-full">
                                    <i className="fas fa-rocket text-white text-3xl"></i>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Logo Design</h3>
                            <p className="text-gray-500 mt-2">
                                look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum, and a search for
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex justify-center -mt-12">
                                <div className="bg-gray-800 p-4 rounded-full">
                                    <i className="fas fa-laptop-code text-white text-3xl"></i>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Web Design</h3>
                            <p className="text-gray-500 mt-2">
                                look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum, and a search for
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex justify-center -mt-12">
                                <div className="bg-gray-800 p-4 rounded-full">
                                    <i className="fas fa-mobile-alt text-white text-3xl"></i>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Mobile Apps</h3>
                            <p className="text-gray-500 mt-2">
                                look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum, and a search for
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <div className="flex justify-center -mt-12">
                                <div className="bg-gray-800 p-4 rounded-full">
                                    <i className="fas fa-bullhorn text-white text-3xl"></i>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Digital Marketing</h3>
                            <p className="text-gray-500 mt-2">
                                look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum, and a search for
                            </p>
                        </div>
                    </div>
                </div>
    );
};

export default Services;