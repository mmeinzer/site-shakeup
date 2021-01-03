import * as React from 'react';

// markup
const IndexPage = () => {
  return (
    <div className="bg-gray-100 text-gray-700 flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col">
        <title>Site Shakeup - Revitalizing Your Website</title>
        <h1 className="font-thin text-3xl px-5 py-5 text-center lg:text-left md:text-left ">
          Site Shakeup
        </h1>
        <div className="flex flex-col justify-center flex-grow">
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col items-center">
              <h2 className="tracking-wider font-bold text-5xl px-5 pb-10">
                Revitalize your website.
              </h2>
              <div className="px-5 pb-10">
                <h3 className="text-3xl font-extralight tracking-wide">
                  Your site should excite new customers, not scare potential
                  leads away.
                </h3>
              </div>
              {/* <p className="text-xl font-light py-3 w-2/3 text-justify">
                Our firm works with you to redesign your website with modern
                technology so you can easily bring in new business while
                focusing on what you do best.
              </p> */}
              {/* <ul className=" text-left">
                <li>Mobile-friendly</li>
                <li>Higher conversions</li>
                <li>Rich analytics</li>
              </ul> */}
              <a href="mailto:hello@siteshakeup.com">
                <div className="bg-blue-600 cursor-pointer rounded-lg focus:outline-none font-light px-4 mt-10 py-3 text-white">
                  Contact Us
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-5 self-center font-light">
        {' '}
        &#169; {new Date().getFullYear()} Site Shakeup
      </footer>
    </div>
  );
};

export default IndexPage;
