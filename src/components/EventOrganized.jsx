import React from 'react';
import Profile from "../assests/profile2.png"

function EventOrganized() {
  return (
    <div className='bg-[#d9d9d9] w-[400px] h-[320px] py-1 flex flex-col justify-center px-4 mt-9 rounded-[16px]'>
        <div className='flex gap-2'>
            <img src={Profile} alt="profile" className='w-[44px] h-[44px]' />
            <div className='flex flex-col'> 
                <span>Organized by:</span>
                <span className='text-[18px]'>Night Club</span>
            </div>
            <div className='pt-[10px]'> 
                <button className='bg-black text-white text-[16px] px-[22px] py-1 rounded-[18px]'>
                    Follow
                </button>
            </div>
        </div>
        
        <div className='pt-4 pl-2'>
            <span  className=''>
            Balloon Nepal Pvt. Ltd. is proud to offer the first-ever commercial hot air balloon flight in Nepal, officially launched in 2018. Since then, our service has been providing unforgettable experiences to tourists in the stunning city of Pokhara, one of Nepal's most popular destinations.
            </span>
        </div>
    </div>
  )
}

export default EventOrganized