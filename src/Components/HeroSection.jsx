import React, { useState } from 'react'
import HeroImage from '../assets/IMG_0210-Photoroom.png'
import CartoonImage from '../assets/Gemini_Generated_Image_vnzo9svnzo9svnzo-Photoroom.png'

function HeroSection() {
    const [ImgSrc, SetImgSrc] = useState(CartoonImage);
    const [isFading, setIsFading] = useState(false);


    function changeImage(newImg) {
        setIsFading(true);

        setTimeout(() => {
            SetImgSrc(newImg);
            setIsFading(false);
        }, 300);
    }
    return (
        <div className=' w-full h-full flex flex-col lg:flex-row'>
            <div className='Hero-Left flex flex-col justify-center items-center w-full lg:w-1/2 h-[40%] lg:h-full gap-2.5 top-7 relative sm:top-0'>
                <div className="name">Hey! <span className='bold name'>I'm Manashri,</span><br />
                    <span className='bold name'>Software Quilty</span> Assurance.</div>
                <p className='Hero-para'>B.Sc (IT) graduate passionate about software testing — manual & automation. Skilled in STLC, defect lifecycle, and test case design.</p>
                <a
                    href="https://www.linkedin.com/in/manashri-vaishampayan-81892a395/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mt-2 name font-semibold underline hover:text-pink-500 transition duration-300"
                >
                    Visit me on LinkedIn
                </a>
            </div>
            <div className='Hero-Right w-full lg:w-1/2 h-[60%] lg:h-full justify-center items-end    '>
                <div className="Hero-circle-img flex justify-center mx-auto relative ">
                    <img className={`heroimage fade ${isFading ? "fade-changing" : ""}`}
                        src={ImgSrc}
                        onMouseEnter={() => changeImage(HeroImage)}
                        onMouseLeave={() => changeImage(CartoonImage)}

                        onClick={() => {
                            changeImage(prev =>
                                prev === CartoonImage ? HeroImage : CartoonImage
                            );
                        }}

                        alt="Hero-img" />
                    <div className="bigcricle "></div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection