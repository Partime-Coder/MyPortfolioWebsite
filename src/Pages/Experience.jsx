import React from 'react'
import ExperienceCard from '../Components/ExperienceCard';
import Container from '../Components/Container';
function Experience() {
    return (
        <div className='w-full  py-20 border-t-2  border-pink-300'>
            <Container >
                <h2 className="text-4xl font-bold mb-12 skill-color">My Experience</h2>
                <div className='flex flex-col items-center justify-center gap-10'>
                    <ExperienceCard
                        title="QA Analyst at FynTune PVT"
                        date="Sept 2025 – Present"
                        description="Contributing to end-to-end quality assurance for insurance-based digital solutions, with a focus on functional testing, test planning, and ensuring smooth, reliable user experiences. Actively involved in analyzing requirements, identifying edge-case failures, and strengthening product stability through systematic regression and defect tracking."
                    />
                    <ExperienceCard
                        title="QA Analyst Intern at ADS SERVICE TECH"
                        date="Aug 2025 – Sept 2025"
                        description="Worked as a QA Intern focusing on mobile application testing. Created detailed test cases for various modules and executed manual testing to identify functional and UI defects. Reported and tracked bugs using Zoho and collaborated with the development team for issue resolution. Gained hands-on experience in test planning, execution, and documentation"
                    />
                </div>

            </Container>
        </div>

        //    
    );

}

export default Experience