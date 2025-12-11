import React from "react";
import { FiFileText } from "react-icons/fi";
import Container from "../Components/Container";
import webcoin from "../assets/webcoin.png";
import pram from "../assets/Pram.png";
import educase from "../assets/Educase.webp";



const qaProjects = [
  {
    id: "01",
    title: "Websites.co.in — Registration & Dashboard Flow",
    desc: "Manual testing of sign-up, login, field validations, and dashboard navigation. Includes defect logging and execution summary.",
    image: webcoin,
    link: ""
  },
  {
    id: "02",
    title: "PRAM Edu Application Testing",
    desc: "Tested student/teacher login, course management, and defect tracking. Performed internship-based live project testing.",
    image: pram,
    link: "#"
  },
  {
    id: "03",
    title: "Educase Application Testing",
    desc: "Functional & UI testing on registration, authentication, and course dashboard. Includes detailed defect logs.",
    image: educase,
    link: "#"
  }
];

function Project() {
   return (
    <Container>
    <div className="my-20">
      <h2 className="text-4xl font-bold skill-color mb-16 ">
        My Projects
      </h2>

      <div className="space-y-20">
        {qaProjects.map((p, i) => (
          <div
            key={p.id}
            className={`project-anim flex flex-col lg:flex-row items-start gap-10 ${
              i % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-xl  border border-gray-200 p-4">
                <img
                  src={p.image}
                  alt={p.title}
                  className="rounded-lg w-full h-64 object-contain"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl font-bold skill-color mb-2">
                {p.id}
              </h3>

              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                {p.title}
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                {p.desc}
              </p>

              <a
                href={p.link}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-500 transition"
              >
                <FiFileText className="text-lg" />
                View Test Cases + Report
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Container>
  );
}

export default Project