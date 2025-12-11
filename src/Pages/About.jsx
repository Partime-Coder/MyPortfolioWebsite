import React from "react";
import Container from "../Components/Container";

function About() {
  return (
    <div className=" border-t-2 border-b-2 border-pink-300 ">
    <Container className="py-20">
      <h2 className="text-4xl font-bold skill-color mb-10">About Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* LEFT SIDE – ABOUT TEXT */}
        <div className="p-6 rounded-xl bg-white shadow-md about-anim backgroundColor">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Who I Am
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            I’m a passionate Software QA Engineer dedicated to delivering
            high-quality applications through structured manual and automation
            testing. With experience in STLC, bug reporting, test case writing,
            and Selenium automation, I enjoy turning complex scenarios into
            clean, testable solutions.
          </p>

          <p className="text-gray-700 leading-relaxed">
            My goal is to build reliable, user-friendly products while growing
            my expertise in automation, API testing, and Agile methodologies.
          </p>
        </div>

        {/* RIGHT SIDE – EDUCATION */}
        <div className="space-y-6">

            
          
          <div className="p-5 rounded-xl bg-blue-50 border border-blue-100 shadow-sm edu-anim backgroundColor">
            <h4 className="text-xl font-semibold text-blue-700">
              B.Sc in Information Technology
            </h4>
            <p className="text-gray-600">Mumbai University – 2024</p>
          </div>

          <div className="p-5 rounded-xl bg-blue-50 border border-blue-100 shadow-sm edu-anim backgroundColor">
            <h4 className="text-xl font-semibold text-blue-700">
              Quality assurance course
            </h4>
            <p className="text-gray-600">Excelr</p>
          </div>

          <div className="p-5 rounded-xl bg-blue-50 border border-blue-100 shadow-sm edu-anim backgroundColor">
            <h4 className="text-xl font-semibold text-blue-700">
              Online MBA Course
            </h4>
            <p className="text-gray-600">Amity University </p>
          </div>

        </div>
      </div>
    </Container>
    </div>
  );
}

export default About;
