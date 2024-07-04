import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <div>
          <Helmet>
              <title> Contact | Nafiul Hasan</title>
          </Helmet>
          <h1 className='text-2xl lg:text-3xl font-semibold text-white'>Contact</h1>
          <div className=' rounded-lg border-[#FEC462] w-10 md:w-20 lg:w-24  border-2 my-3 lg:my-6'></div>

          <div>
              {/* map */}
              <div className="overflow-hidden rounded-lg lg:col-span-2 h-96">
                  <iframe width="100%" height="100%" frameBorder="0" title="map" marginHeight="0" marginWidth="0"
                      scrolling="no"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.711580267346!2d89.4997816!3d22.9005573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9bda1d0ff6e5%3A0x123a926908efcd0c!2sKhulna%20University%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen-GB!2sbd!4v1624524517571!5m2!1sen-GB!2sbd">
                  </iframe>
              </div>

          </div>
          {/* contact */}
          <div>
              <section className="min-h-screen border dark:bg-gray-900 lg:flex mt-10 rounded-xl">

                  <div className="flex flex-col justify-center w-full p-8 pt-0  ">
                      <form>
                          <div className="-mx-2 md:items-center md:flex">
                              <div className="flex-1 px-2">
                                  <label className="block mb-2 text-sm text-white dark:text-gray-200">Full Name</label>
                                  <input type="text" placeholder="John Doe"
                                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                              </div>

                              <div className="flex-1 px-2 mt-4 md:mt-0">
                                  <label className="block mb-2 text-sm text-white dark:text-gray-200">Email
                                      address</label>
                                  <input type="email" placeholder="johndoe@example.com"
                                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                              </div>
                          </div>

                          <div className="w-full mt-4">
                              <label className="block mb-2 text-sm text-white dark:text-gray-200">Message</label>
                              <textarea
                                  className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                  placeholder="Message"></textarea>
                          </div>

                          <button
                              className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                              get in touch
                          </button>
                      </form>
                  </div>
              </section>

          </div>
         
      

      </div>
    );
};

export default Contact;