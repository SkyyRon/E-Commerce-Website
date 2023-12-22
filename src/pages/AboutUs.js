import React from 'react';
import logo from '../assets/Lets_Shop.png';
import NavBar from '../features/navbar/Navbar';
import Tus from '../assets/team/Tus.jpg'
import Snow from '../assets/team/snow.jpeg'
import Ron from '../assets/team/Ron.jpg'
import Footer from './../features/common/Footer';
function AboutUs() {
  return (
    <>
    <NavBar></NavBar>
    <div className=' mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8'>
      <center>
      {/* <div>
      <img src={logo} alt="Let's Shop Logo" className='object-center -mt-30' />
      </div> */}
      </center>
      <div>
      <h1 className='text-center mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black'>ABOUT US</h1>
      <p className='text-3xl text-center'>
        <strong>Welcome to Let's Shop</strong> - Your Ultimate Destination for Online Shopping! At
        Let's Shop, we believe that shopping should be an enjoyable and seamless
        experience for everyone. Our mission is to provide a diverse and curated
        selection of products that cater to your unique tastes and preferences.
        Whether you're a trendsetter, a tech enthusiast, a fitness fanatic, or
        someone who simply loves the convenience of online shopping, Let's Shop has
        something for everyone.
      </p>
      <div className="container my-24 mx-auto md:px-6">
 
  <section className="mb-32 text-center">
    <h2 className="mb-12 text-3xl font-bold">
      Meet the <u className="text-primary dark:text-primary-400">team</u>
    </h2>

    <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
      <div className="mb-6 lg:mb-0">
        <div
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img src={Snow} className="w-full  rounded-t-lg" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg className="absolute text-white dark:text-neutral-700 left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320">
              <path fill="currentColor"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-bold">Snowhita Saha</h5>
            <ul className="mx-auto flex list-inside justify-center">
             
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6 lg:mb-0">
        <div
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img src={Tus} className="w-full rounded-t-lg" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg className="absolute text-white dark:text-neutral-700  left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320">
              <path fill="currentColor"
                d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-bold">Tusar Manna</h5>
           
            <ul className="mx-auto flex list-inside justify-center">
              <a href="#!" className="px-2">
             
               
              </a>
              <a href="#!" className="px-2">
               
                
              </a>
              <a href="#!" className="px-2">
              
                
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="">
        <div
          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img src={Ron} className="w-full rounded-t-lg" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg className="absolute text-white dark:text-neutral-700 left-0 bottom-0" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320">
              <path fill="currentColor"
                d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
          <div className="p-6">
            <h5 className="mb-4 text-lg font-bold">Ranita Biswas</h5>
           
            <ul className="mx-auto flex list-inside justify-center">
              <a href="#!" className="px-2">
               
                
              </a>
              <a href="#!" className="px-2">
               
             
              </a>
              <a href="#!" className="px-2">
               
               
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>



      </div>
      
      
    </div>
    <Footer></Footer>
    </>
  );
}

export default AboutUs;
