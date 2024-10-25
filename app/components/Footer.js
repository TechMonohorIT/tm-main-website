import Image from "next/image";
import React from "react";
import images01 from "../public/images/techmonohor.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 text-gray-600">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Logo and Description Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            {/* <img src={images01} alt="Webency Logo" className="w-10 h-10" /> */}
                      <Image
                          className="w-10 h-10"
              src={images01}
              alt="Picture of the author"
              width={500} 
              height={500} 
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            />
            <h2 className="text-2xl font-bold text-black">TechMonohor</h2>
          </div>
          <p className="text-sm">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet.
          </p>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="text-purple-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-purple-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-purple-500">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="text-purple-500">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        {/* Company Links Section */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Our Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <i className="fas fa-envelope mr-2"></i> Info@gmail.com
            </li>
            <li>
              <i className="fas fa-globe mr-2"></i> www.website.com
            </li>
            <li>
              <i className="fas fa-map-marker-alt mr-2"></i> 25 Marion, Columbia
            </li>
            <li>
              <i className="fas fa-phone mr-2"></i> + 00 123 456 789
            </li>
          </ul>
        </div>

        {/* Photo Gallery Section */}
        <div>
          <h3 className="text-xl font-semibold text-black mb-4">
            Photo Gallery
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="https://picsum.photos/200/300"
              alt="Gallery 1"
              className="w-full h-20 object-cover"
            />
            <img
              src="https://picsum.photos/seed/picsum/200/300"
              alt="Gallery 2"
              className="w-full h-20 object-cover"
            />
            <img
              src="https://picsum.photos/200/300?grayscale"
              alt="Gallery 3"
              className="w-full h-20 object-cover"
            />
            <img
              src="https://picsum.photos/200/300/?blur"
              alt="Gallery 4"
              className="w-full h-20 object-cover"
            />
            <img
              src="https://picsum.photos/200/300/?blur"
              alt="Gallery 5"
              className="w-full h-20 object-cover"
            />
            <img
              src="https://picsum.photos/200/300/?blur"
              alt="Gallery 6"
              className="w-full h-20 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm">
        <p>Copyright © 2023 ThemeJunction. All Rights Reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-black">
            Setting & Privacy
          </a>
          <a href="#" className="hover:text-black">
            FAQ
          </a>
          <a href="#" className="hover:text-black">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
