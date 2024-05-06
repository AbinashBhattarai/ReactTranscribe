import React from 'react'

export const FileDisplay = (props) => {
  const {file, handleAudio} = props
  console.log(file);

  return (
    <main className='flex-1 flex flex-col gap-3 justify-center items-center p-4 pb-20 sm:gap-4 md:gap-5'>
      <div className='font-bold text-5xl sm:6xl md:7xl'>
        <h1 >
          Your<span className='text-blue-400'> File</span>
        </h1>
      </div>
      <div className='my-4 text-sm sm:text-base md:text-lg'>
        <h3 className='font-semibold bg-gradient-to-r from-blue-200 to-transparent px-2 rounded-lg'>File Name</h3>
        <p>{file.name}</p>
      </div>
      <div className='text-lg flex flex-wrap gap-8 font-medium sm:gap-16 md:gap-20'>
        <button onClick={handleAudio}
          className='text-slate-600 specialBtn px-3 py-2 rounded-lg'>
          Reset
        </button>
        <button className='text-blue-400 specialBtn px-3 py-2 rounded-lg flex items-center gap-2'>
          Transcribe
          <i class="fa-solid fa-feather"></i>
        </button>
      </div>
      </main>

    // <main className='flex-1 flex flex-col gap-3 justify-center items-center p-4 pb-20 sm:gap-4 md:gap-5'>
    //   <div className='font-bold text-5xl sm:6xl md:7xl'>
    //     <h1 >
    //       Your
    //       <span className='text-blue-400'> File</span>
    //     </h1>
    //   </div>
    //   <div className='text-lg my-4 w-fit flex flex-col text-left'>
    //     <h3 className='font-semibold'>Name</h3>
    //     <p>{file.name}</p>
    //   </div>
    //   <div className='flex gap-5 items-center'>
    //     <button className='specialBtn text-slate-400 px-3 py-2 rounded-lg text-sm sm:text-base md:text-xl cursor-pointer'>
    //       Reset
    //     </button>
    //     <button className='flex specialBtn px-4 py-2 rounded-xl items-center justify-between gap-4 mx-auto w-72 max-w-full my-4 text-sm sm:text-base md:text-xl'>
    //       <p className='text-blue-400'>{file.name}</p>
    //       <i className="fa-solid duration-200 fa-microphone "></i>
    //     </button>
    //     <div className='flex items-center specialBtn rounded-xl w-72 mx-4'>
    //       <input className='text-sm sm:text-base md:text-xl'
    //         type="text" value={file.name}
    //       />
    //       <i className="fa-solid duration-200 fa-microphone "></i>
    //     </div>
    //     <button className='specialBtn px-3 py-2 rounded-lg text-sm sm:text-base md:text-xl text-blue-400 cursor-pointer'>
    //       Transcribe
    //     </button>
    //   </div>
    // </main>
  )
}
