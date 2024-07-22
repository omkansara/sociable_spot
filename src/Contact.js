/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="min-h-screen p-10 flex flex-col items-center">
                <div className="text-center text-black text-3xl font-bold mt-10 mb-8 border-b-2 border-green-800">Contact Us</div>

                <div className="container mx-auto p-4 flex flex-col items-center md:flex-row">
                    <div className="info flex-1 p-4 text-center md:text-left">
                        <h1 className="text-2xl font-bold mb-4 flex-row">Contact Us Today for Personalized Support and Assistance</h1>
                        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.</p>
                        <p className='mb-4'>📞 +91 98345 46986</p>
                        <p className='mb-4'>✉️ sociablespot@gmail.com</p>
                        <p className='mb-4'>📍 Ahmedabad, Gujarat</p>
                    </div>
                    <div className="contact-form flex-1 p-4 bg-white border border-black rounded-md mt-8 md:mt-0 md:ml-4">
                        <form className="space-y-4">
                            <div className="form-group flex space-x-4">
                                <div className="w-1/2">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name:</label>
                                    <input type="text" id="first-name" name="first-name" className="mt-1 block w-full rounded-full bg-[#D2F6D5]" required />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name:</label>
                                    <input type="text" id="last-name" name="last-name" className="mt-1 block w-full rounded-full bg-[#D2F6D5]" required />
                                </div>
                            </div>
                            <div className="form-group flex space-x-4">
                                <div className="w-1/2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-full bg-[#D2F6D5]" required />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="number" className="block text-sm font-medium text-gray-700">Phone Number:</label>
                                    <input type="number" id="number" name="number" className="mt-1 block w-full rounded-full bg-[#D2F6D5]" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
                                <textarea id="message" name="message" className="mt-1 block w-full rounded-md shadow-sm bg-[#D2F6D5]" required></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="px-6 py-2 bg-[#D2F6D5] font-medium text-gray-700 rounded-full">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="text-center text-black text-xl font-semibold mt-10 mb-8">Mapping Out Mental Health Consulting Strategies</div>
                <div className="w-full h-96">
                    <iframe 
                        className="w-full h-full border-white shadow-md rounded-md"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29386.963245651707!
                        2d72.57905569777722!3d22.973402919289338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13
                        .1!3m3!1m2!1s0x395e8f5949391fdb%3A0x1470f51f2439aa59!2sIsanpur%2C%20Ahmedabad%2C%20
                        Gujarat!5e0!3m2!1sen!2sin!4v1716993077878!5m2!1sen!2sin"
                        allowFullScreen="" 
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </>
    );
}

export default Contact;
