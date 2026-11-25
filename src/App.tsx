import { useState } from 'react'
import MainNav from './components/MainNav'
import MobileNav from './components/MobileNav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="sm:hidden">
        <MobileNav />
      </div>
      <div className="hidden sm:block">
        <MainNav />
      </div>

      <section className="mt-[20%] md:mt-[15%] lg:mt-[10%] mx-1 md:mx-[5%] lg:mx-[10%] flex flex-col md:flex-row justify-center">
        <div className="md:mr-[-10%] lg:mr-0">
          {/* <p className="text-center tracking-widest uppercase mb-2">Hey, I'm Cindy</p> */}
          <h1 className="font-display text-[38px] md:text-[44px] xl:text-[80px] text-center md:text-left leading-[1.2] mb-1">I make the internet <span className="text-[#00945b] italic">less frustrating</span></h1>
          <p className="text-center md:text-left font-display text-[24px] md:text-[36px] xl:text-[56px] leading-[1.2]">by building friendlier web pages, one component at a time.</p>
        </div>
        <div className="flex justify-center md:justify-end lg:justify-center pt-[5%]">
          <img src="/images/cindy-hero.png" className="w-[80%] lg:w-[100%]" />
        </div>
      </section>

      <section className="mt-4">
        <div className="flex justify-center">
          <p
            className="group inline-flex flex-col items-center gap-2 text-[#00945b] focus-visible:outline-2 focus-visible:outline-offset-4
             transition-colors text-[20px] uppercase"
          >
            <span>Let me show you</span>
            <svg
              aria-hidden="true"
              className="h-5 w-5 animate-bounce motion-reduce:animate-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </p>
        </div>
      </section>
    </>
  )
}

export default App
