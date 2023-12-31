import Head from 'next/head'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import {SliderData} from './components/SliderData';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Head>
        <title>Photography Next App</title>
        <meta name='description' content='Generated by create next app'/>
        <link rel='icon' href='/favicon.icon'/>
      </Head>
      <Hero heading='Capture Photography' message='I capture moments in 
      nature and keep them alive.'/>
      <Slider slides={SliderData}/>
    </div>
  )
}
