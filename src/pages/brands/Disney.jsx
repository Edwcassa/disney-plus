import { useState } from 'react'
import brands from '../../json/brands.json'

export default function Disney() {
  const [videoEnded, setVideoEnded] = useState(false)
  const videoPath = brands[0].bg_video
  const imagePath = brands[0].bg_image
  return (
    <>
      <div className='fixed z-0'>
        <video
          muted
          autoPlay='autoplay'
          preload='auto'
          onEnded={() => setVideoEnded(true)}
          src={videoPath}
          className={videoEnded ? 'opacity-0' : 'opacity-100'}
        />
      </div>
      <div className='fixed z-0 w-full'>
        <img
          className={videoEnded ? ' opacity-100' : 'opacity-0'}
          src={imagePath}
          alt=''
          width='100%'
        />
      </div>
      <div className='relative z-0 pt-[12rem] sm:pt-[20rem] md:pt-[18rem] lg:pt-[24rem]'>
        <div className='fixed inset-0 bg-gradient-to-t from-[#1a1d29] via-transparent to-transparent -z-10 opaci' />
        <div className='fixed inset-0 bg-gradient-to-b from-[#0009] via-transparent to-transparent  -z-10' />
      </div>
    </>
  )
}
