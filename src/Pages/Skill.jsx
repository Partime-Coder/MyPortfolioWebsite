import React from "react";
import { FiCode, FiCheckCircle, FiDatabase, FiZap, FiLayers, FiTool } from "react-icons/fi";
import Container from "../Components/Container";


const skills = [
    {
        title: "Java",
        icon: <FiCode className="text-3xl skill-color" />,
        points: [
            "Core Java principles",
            "OOP concepts",
            "Loops, arrays, functions",
            "Exception handling"
        ]
    },
    {
        title: "Manual Testing",
        icon: <FiCheckCircle className="text-3xl skill-color" />,
        points: [
            "STLC process",
            "Test case creation",
            "Bug reporting",
            "Test planning & execution"
        ]
    },
    {
        title: "SQL",
        icon: <FiDatabase className="text-3xl skill-color" />,
        points: [
            "Joins & subqueries",
            "CRUD operations",
            "Database validation",
            "Data filtering & sorting"
        ]
    },
    {
        title: "Agile Methodology",
        icon: <FiLayers className="text-3xl skill-color" />,
        points: [
            "Scrum process",
            "Sprint planning",
            "Daily stand-ups",
            "Collaboration & reporting"
        ]
    },
    {
        title: "Automation (Selenium)",
        icon: <FiZap className="text-3xl skill-color" />,
        points: [
            "Selenium WebDriver basics",
            "Locators & elements",
            "Writing test scripts",
            "Executing test automation"
        ]
    },
     {
    title: "QA Tools",
    icon: <FiTool className="text-3xl skill-color" />,
    points: [
      "JIRA for bug tracking",
      "TestRail for test management",
      "Postman for API testing",
      "Performance testing basics"
    ]
  }
];

function Skill() {
    return (
        
        <div className=" border-t-2  border-pink-300 ">
            <Container className="my-20 ">


                <p className="text-sm text-gray-500 mb-1">My Skills</p>
                <h2 className="text-4xl font-bold mb-12 skill-color">My Expertise</h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-xl bg-linear-to-b from-white to-blue-50 
                       border border-blue-100 shadow-sm hover:shadow-md 
                       transition-all duration-300 card-anim"
                        >

                            <div className="mb-4">{skill.icon}</div>


                            <h3 className="text-xl font-semibold text-blue-700 mb-3">
                                {skill.title}
                            </h3>


                            <ul className="space-y-2 text-gray-700 text-sm">
                                {skill.points.map((p, idx) => (
                                    <li key={idx} className="flex gap-2">
                                        <span className="text-blue-600 mt-0.5">•</span>
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>

        </div>
    );
}

export default Skill;
