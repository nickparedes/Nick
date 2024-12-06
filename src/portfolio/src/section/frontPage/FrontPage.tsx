import React from 'react'
import img from '../../assets/Nick.jpg'
const FrontPage = ({...props}) => {

    const name: string = 'Nick Paredes';
    const role: string[] = ['Software', 'Engineer']


    return (
        <section 
            {...props} 
            className='flex flex-col justify-center pt-2 h-screen'
            style={{
                background: "linear-gradient(115deg, #1f2937 50%, #ffffff 50%)",
            }}    
        >

            <div className='flex items-center justify-center'>
                <div className="relative">
                    <span className="text-[#5d7185] font-jnthill text-5xl mb-10 absolute top-[-64px]">
                        {name}
                    </span>
                    <h2 className="text-[#fdfcfc] font-jnthill text-9xl">
                        {role[0]}
                    </h2>
                </div>
                
                <img
                    src={img}
                    className="personal-img w-96 h-96 rounded-full object-cover p-3 border-white shadow-2xl  transition duration-300 ease-in-out"
                    style={{
                        background: "linear-gradient(115deg, #fdfcfc 50%, #313c46 50%)",
                    }}
                    alt="Profile"
                />

                <h2 className='font-jnthill text-[#313c46]  text-9xl'>{role[1]}</h2>
            </div>

        </section>
    )
}

export default FrontPage
