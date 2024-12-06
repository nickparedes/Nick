import React, { ReactNode } from 'react'

const main:React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <section 
            className=" inset-0"
            style={{
                background: "linear-gradient(90deg, #1f2937 50%, #ffffff 50%)",
            }}
            >
            <div
                className="inset-0"
                style={{
                background:
                    "radial-gradient(circle at right, rgba(0,0,0,0) 50%, rgba(0,0,0,0.5) 50%)",
                }}
            ></div>
            <div className='max-w-screen-2xl mx-auto'>
                {children}
            </div>
        </section>
    )
}

export default main
