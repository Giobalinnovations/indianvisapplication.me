'use client';
import { useRef } from 'react';

const Banner = () => {
  const ref = useRef(null);

  return (
    <div className="relative">
      <div
        className="relative mt-20 bg-no-repeat bg-cover transition-all duration-500 ease-in-out overflow-hidden
          min-h-[600px] md:min-h-[calc(100vh-5rem)]"
        style={{
          backgroundImage: 'url("/assets/images/india/home/banner.png")',
          backgroundPosition: 'center',
        }}
      >
        {/* Enhanced Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Responsive Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
        </div>

        {/* Responsive Content */}
        <div className="relative h-full text-white">
          <div className="container h-full p-4 md:p-6 lg:p-8">
            <div className="flex flex-col items-center justify-center w-full h-full space-y-6 md:space-y-8 text-center">
              <div className="max-w-4xl">
                <h1 className="mb-4 md:mb-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Online Portal for{' '}
                  <span className="relative">
                    <span className="relative z-10 text-orange">
                      Visa Application
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange/50 to-primary/50 blur-sm"></span>
                  </span>{' '}
                  to India
                </h1>
                <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                  All foreign nationals entering India are required to possess a
                  valid international travel document in the form of a national
                  passport with a valid visa from an Indian Mission/Post or
                  eVisa.
                </p>
              </div>

              {/* Responsive Decorative Shapes */}
              <div className="absolute left-0 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-br from-orange/20 via-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>
              <div className="absolute right-0 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-bl from-primary/20 via-orange/10 to-transparent rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Announcement Bar */}
      <div className="absolute bottom-0 w-full bg-gradient-to-r from-black/90 via-black/80 to-black/90 backdrop-blur-sm border-t border-white/5">
        <div className="container py-3 md:py-4">
          <div className="flex items-center justify-between text-white">
            <div className="w-full overflow-hidden">
              <marquee
                className="text-xs sm:text-sm md:text-base font-medium tracking-wide"
                behavior="scroll"
                direction="left"
                scrollamount="5"
              >
                <span className="inline-flex items-center">
                  <span className="w-1.5 md:w-2 h-1.5 md:h-2 mr-3 md:mr-4 bg-orange rounded-full"></span>
                  Avail Indian Visa plus services through &quot;Official app
                  Indian Visa Su-Swagatam&quot; mobile App for 60 countries
                  <span className="mx-6 md:mx-8">•</span>
                  One stop solution for all Visa related services
                  <span className="w-1.5 md:w-2 h-1.5 md:h-2 ml-3 md:ml-4 bg-orange rounded-full"></span>
                </span>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
