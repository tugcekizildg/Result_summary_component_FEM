import { useState } from 'react';
import data from './data.json';



export default function App() {

  const [items] = useState(data);
  return (
    <div className='md:flex md:items-center md:justify-center md:h-screen md:max-w-3xl md:mx-auto md:p-8 '>
      <section className='md:flex bg-white shadow-lg rounded-3xl md:overflow-hidden'>
      <div className='bg-gradient-to-b from-customGradientStart to-customGradientEnd p-8 text-center text-white rounded-b-3xl md:flex-1 md:py-10 md:rounded-3xl'>
        <h3 className='mb-6'>Your Result</h3>
        <p className='bg-gradient-to-b from-customGradientEnd to-customGradientRound w-36 h-36 md:w-48 md:h-48 rounded-full mx-auto line-height font-light light'><span className='block text-5xl md:text-6xl lg:text-6xl vertical-align-middle py-4 md:p-8 text-white font-extrabold'>76</span> of 100</p>
        <h2 className='my-6 text-3xl'>Great</h2>
        <p className='w-3/4 mx-auto light'>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      <div className='p-8 md:flex-1'>
        <h2 className='mb-6 text-slate-700 text-lg font-bold'>Summary</h2>
        <div>
          {items.map((item, index) => (
            <div key={index} style={{
              backgroundColor: item.backgroundColor,
            }}
            className='flex items-center justify-between p-4 m-2 rounded-lg'>
              <h3 style={{
                color: item.color,
              }}
              className='flex items-center gap-2'>
                <img src={item.icon} alt={item.category} />
                {item.category}
              </h3>
              <p className='flex items-center gap-2 text-slate-500'><span className='text-slate-700 font-bold'>{item.score}</span> / 100</p>
            </div>
          ))}
        </div>
        <button className='bg-slate-700 text-white w-full p-4 rounded-full mt-8 hover:bg-gradient-to-b hover:from-customGradientStart hover:to-customGradientEnd transition-all duration-300'>Continue</button>
      </div>
    </section>
    </div>
  );
}