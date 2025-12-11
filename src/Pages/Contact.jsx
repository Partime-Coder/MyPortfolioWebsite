import React from "react";
import Container from "../Components/Container";
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from "react-icons/fi";

function Contact() {
  return (
    <>
      <Container>
        <div className="h-[80vh] flex flex-col justify-center items-center text-center">

          <h2 className="text-4xl font-bold skill-color mb-6">Contact Me</h2>

          <p className="text-gray-600 max-w-md mb-10">
            Feel free to reach out for opportunities, project collaborations, or any queries.
          </p>

          <div className="space-y-5 text-lg">

            {/* Email */}
            <div className="flex items-center gap-3 justify-center">
              <FiMail className="text-blue-600 text-2xl" />
              <span className="text-gray-700 font-medium">
                manashrivaishampayan@gmail.com
              </span>
            </div>

           

            {/* Location */}
            <div className="flex items-center gap-3 justify-center">
              <FiMapPin className="text-blue-600 text-2xl" />
              <span className="text-gray-700 font-medium">
                Mumbai, India
              </span>
            </div>
            {/* LinkedIn */}
            <div className="flex items-center gap-3 justify-center">
              <FiLinkedin className="text-blue-600 text-2xl" />
              <a
                href="https://www.linkedin.com/in/manashri-vaishampayan-81892a395/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 font-medium hover:text-pink-500 transition"
              >
                LinkedIn
              </a>
            </div>

          </div>

        </div>
      </Container>
      <footer className="w-full py-6  mt-10 backgroundColor">
        <div className="text-center skill-color text-sm">
          © {new Date().getFullYear()} Manashri Vaishampayan — All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Contact;
