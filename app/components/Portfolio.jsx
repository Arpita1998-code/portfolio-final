import React from 'react';

const Portfilio = () => {
  return (
    <div className='max- w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
        <img src='https://media.istockphoto.com/id/1491882990/photo/procida-island-italy.jpg?s=2048x2048&w=is&k=20&c=H6mOh7CXuSrbb8qjZe7i7tpyzbUIZBJO2XS5OFjPs7s=' 
        alt='/' layout='responsive'
        width='677' height='451'/>
      </div>
      <div className='w-full h-full'>
        <img src='https://media.istockphoto.com/id/507959606/photo/traditional-indian-houseboat-in-kerala-india.jpg?s=1024x1024&w=is&k=20&c=2RakeTCzdGPwofek3AcI4dcYfg6t533CVs5weRYoazI='
        alt='/' layout='responsive'
        width='215' height='217' objectFit='cover'/>
      </div>
      <div className='w-full h-full'>
        <img src='https://media.istockphoto.com/id/1154558180/photo/iron-mosque-putrajaya-sunrise.jpg?s=1024x1024&w=is&k=20&c=HL0UxaIPo-3m_jIybbo1Rkd73flD_gwysSh6mUEf_rg='
        alt='/' layout='responsive'
        width='215' height='217' objectFit='cover'/>
      </div>
      <div className='w-full h-full'>
        <img src='https://media.istockphoto.com/id/658337352/photo/ghats-on-the-ganges-river.jpg?s=1024x1024&w=is&k=20&c=CP_wRoY7wXG3bGvwHgZXJqRSneeEvN_lkQ0yAPeKFfk='
        alt='/' layout='responsive'
        width='215' height='217' objectFit='cover'/>
      </div>
      <div className='w-full h-full'>
        <img src='https://media.istockphoto.com/id/183038097/photo/san-luca-by-night.jpg?s=1024x1024&w=is&k=20&c=9-JjD2_m0X7EXJRDpWf0cy4ShlNEsWDwQ-XLvMozZaU='
        alt='/' layout='responsive'
        width='215' height='217' objectFit='cover'/>
      </div>
    </div>
    </div>
  )
}

export default Portfilio;
