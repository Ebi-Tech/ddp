// page.tsx
"use client";
import { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import logo from '@/public/assets/images/logo.png'
import new_request from '@/public/assets/images/new_request.png'
import settings from '@/public/assets/images/settings.png'

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <main className="container mx-[6rem] mb-[3rem] w-screen h-screen bg-White flex items-center justify-center xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16
    mobile:p-0
    mobileBig:p-0">
    <div className="flex flex-col sticky top-0 z-40 backdrop-blur flex-none justify-between content-normal w-screen h-screen p-0 bg-Gray">
      {/* Head Section */}
      <div className= 'flex items-center bg-White w-screen p-1'>
        <Image src={logo} alt='logo' width={70} priority className='mr-2 ml-[3rem]'/>
        <h1 className= 'text-Blue text-md font-black bg-White'>
          Intelligent Due Dilligence Tool
        </h1>
      </div>

{/* Left Section */}
<div className="flex-shrink-0 bg-White border-t-2 border-Gray shadow hover:shadow-lg relative top-0 h-[35rem] w-[15rem] pr-20 py-5 z-20">
  {/* Top Buttons */}
  <div className="flex flex-col mt-2 w-[13rem]">
    <button 
    onClick={handleClick}
    className='flex relative flex-row w-full p-1 font-semibold items-left hover:bg-Gray focus:bg-Gray ml-[2rem]'>
      <Image src={new_request} alt='new_request' width={20} priority className='mr-2'/>
      <p className='text-[15px] text-left'>{isClicked ? 'New Request' : 'New Request'}</p>
    </button>
    <br/>
    <button 
    onClick={handleClick}
    className='flex flex-row w-full p-1 font-semibold items-left hover:bg-Gray focus:bg-Gray ml-[2rem]'>
      <Image src={settings} alt='react' width={20} priority className='mr-4'/>
      <p className='text-[15px] text-left'>{isClicked ? 'Settings' : 'Settings'}</p>
    </button>
  </div>

<br/>
            {/* Bottom Buttons */}
      <div className="flex flex-col mt-30 w-[13rem]">
      <button 
    onClick={handleClick}
    className='flex flex-row w-full p-1 font-semibold items-left hover:bg-Gray focus:bg-Gray ml-[2rem]'>
      <Image src={settings} alt='react' width={20} priority className='mr-4'/>
      <p className='text-[15px] text-left'>{isClicked ? 'Settings' : 'Settings'}</p>
    </button>
            </div>
      </div>

{/* Header 2 */}
<div className="flex flex-row items-center bg-White w-full p-3 relative bottom-[92%] border-Gray">
      <h1 className='text-Blue text-md font-normal bg-White ml-[20rem]'>New DDT Search</h1>
    </div>
      

      {/* Right Section */}
      <div className="flex-shrink-0 bg-White  p-10 items-stretch rounded-3xl shadow hover:shadow-lg relative bottom-[85%] h-[70%] w-[75%] left-[22%]">
        <p></p>
      </div>

     </div>
     </main>
  );
}
