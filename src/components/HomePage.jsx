import React from 'react'

export const HomePage = (props) => {
  const {setFile, setAudioStream} = props

  return (
    <main className='flex-1 flex flex-col gap-3 justify-center items-center p-4 pb-20 sm:gap-4 md:gap-5'>
      <div className='font-bold text-5xl sm:6xl md:7xl'>
        <h1 >
          Tran<span className='text-blue-400'> Scribe</span>
        </h1>
      </div>
      <div className='flex flex-wrap items-center gap-2 font-medium text-sm sm:text-base md:text-xl'>
        <p>Record</p>
        <i class="fa-solid fa-arrow-right text-blue-400"></i>
        <p>Transcribe</p>
        <i class="fa-solid fa-arrow-right text-blue-400"></i>
        <p>Translate</p>
      </div>
      <div>
        <button className='flex specialBtn px-4 py-2 rounded-xl items-center justify-between gap-4 mx-auto w-50 max-w-full my-4 text-sm sm:text-base md:text-xl sm:w-60 md:w-72'>
          <p className='text-blue-400'>Record</p>
          <i className="fa-solid duration-200 fa-microphone "></i>
        </button>
      </div>
      <div>
        <p className='text-sm sm:text-base md:text-xl'>Or
          <label className='text-blue-400 cursor-pointer hover:text-blue-600 duration-200'> upload 
          <input 
            onChange={(e) => 
              setFile(e.target.files[0])
            }
            className='hidden' type='file' accept='.mp3,.wave, .m4a' 
          />
          </label> a mp3 file
        </p>
      </div>
      <div>
        <p className='italic text-slate-400 text-lg'>Free now free forever</p>
      </div>
    </main>
  )
}