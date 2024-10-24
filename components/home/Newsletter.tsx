import { ArrowRight } from 'lucide-react'
import React from 'react'

const Newsletter = () => {
  return (
    <section>
      <div className="w-full max-w-6xl mx-auto flex items-center flex-col md:flex-row px-7 py-16 gap-10">
        <div className='w-full md:w-1/2'>
          <h2 className="text-3xl sm:text-4xl text-gradient font-semibold leading-slug lg:text-nowrap">Subscribe to our Newsletter</h2>
          <p className="text-foreground/60 pt-3">Stay in the Loop with Newton Academy!</p>
        </div>
        <div className="relative w-full md:w-[45%]">
          <div className="w-full bg-gradient p-0.5 rounded-full">
            <input className="w-full h-[86px] inline-flex gap-1.5 items-center bg-background  rounded-full py-2 px-5" placeholder="example@gmail.com"/>
          </div>
          <div className="absolute top-1.5 right-1.5  bg-gradient h-20 w-20 rounded-full flex items-center justify-center text-background">
            <ArrowRight/>
          </div>          
        </div>
      </div>
    </section>
  )
}

export default Newsletter