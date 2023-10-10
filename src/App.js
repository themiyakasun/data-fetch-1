import React, { useState } from 'react';

const URL = 'https://6525476e67cfb1e59ce70146.mockapi.io/students';

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(URL, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((students) => {
        setData(students);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = () => {
    fetchData();
  };
  return (
    <div className='bg-[#d5d5d5]'>
      <div className='text-center'>
        <h1 className='text-2xl mb-10'>Student's Details</h1>
        <button
          className='px-5 py-3 rounded-[10px] bg-[#82a1f0] text-white'
          onClick={handleClick}
        >
          Show Details
        </button>

        <div className='mt-10 flex flex-wrap'>
          {data.map((item) => {
            const { id, name, avatar, Age } = item;
            return (
              <div
                className='flex-[0_0_33.33%] max-w-[33.33%] px-[15px] mb-10'
                key={id}
              >
                <div className='bg-white rounded-[10px] shadow-lg text-center p-5'>
                  <img
                    src={avatar}
                    alt=''
                    className='w-[200px] h-[200px] rounded-full'
                  />
                  <h5 className='text-lg'>{name}</h5>
                  <p>{Age}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
