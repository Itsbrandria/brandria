import React from 'react'

export default function page() {
  return (
    <main className="py-36 flex flex-col gap-20">
      <div className="flex px-14 flex-col gap-16 ">
        <div className='leading-loose flex flex-col justify-center gap-6'>
          <p className='lg:max-w-5xl mx-auto space-y-4 '>Contact Us</p>
          <h1 className='text-2xl font-bold ltr:tracking-wider sm:text-5xl md:text-4xl text-center'>Lets talk about <br /> your project</h1>
          <h5 className='lg:max-w-5xl mx-auto space-y-4 '>Drop us a line through the form below and we will get back to you</h5>
        </div>
        <form className='grid grid-cols-8 gap-4 mx-52'>
          <div className='p-4 col-span-4'>
            <input
              id="1"
              type="text"
              placeholder="First Name"              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className='p-4 col-span-4'>
            <input
              id="2"
              type="text"
              placeholder="Last Name"              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className='p-4 col-span-8'>
            <input
              id="3"
              type="email"
              placeholder="Email"              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className='p-4 col-span-4'>
            <input
              id="4"
              type="tel"
              placeholder="Phone Number"              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className='p-4 col-span-4'>
            <input
              id="5"
              type="tel"
              placeholder="Phone Number"              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>          
          <div className='p-4 col-span-8'>
            <textarea name="Message" id="6" rows={4} cols={50} 
            
              placeholder="tell us a bit about your goals, what are you hoping to achieve"              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          
        </form>
      </div>
    </main>
  )
}
