import React from 'react'

const HeroSection = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center'>
            <section>
                <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>Hello, I am Sergio Daguil III</h1>
                <p className='text-[#ADB7BE] text-lg lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dicta asperiores repellendus nemo quod eligendi, 
                    consectetur iusto aliquid recusandae dolor in labore ipsum sapiente fugiat odit numquam omnis temporibus non.</p>
            </section>
        </div>
    </div>
  );
}

export default HeroSection
