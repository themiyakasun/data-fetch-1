import React from 'react';

const App = () => {
  return (
    <div className='bg-[#d5d5d5]'>
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center'>
        <h1 className='text-2xl mb-10'>Student's Details</h1>
        <button className='px-5 py-3 rounded-[10px] bg-[#82a1f0] text-white'>
          Show Details
        </button>

        <div className='mt-10 flex'>
          <div className='flex-[0_0_50%] max-w-[50%] px-[15px]'>
            <div className='bg-white rounded-[10px] shadow-lg text-center p-5'>
              <img src='' alt='' className='w-[200px] h-[200px] rounded-full' />
              <h5 className='text-lg'>Name</h5>
              <p>Age</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
