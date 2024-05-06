import React from 'react'

export const Header = () => {
  return (
    <header className='flex flex-wrap gap-5 justify-between items-center p-2 sm:gap-0'>
      <div>
        <a href="#">
          <h1 className='font-medium text-xl'>
            Tran
            <span className='text-blue-400 bold'>
              Scribe
            </span>
          </h1>
        </a>
      </div>
      <div className='flex flex-wrap items-center gap-5 sm:gap-7'>
        <a href="#" className='text-slate-500 text-lg'>
          Donate
        </a>
        <a href="#" className='text-blue-400 text-lg flex items-center gap-2 specialBtn px-3 py-2 rounded-lg'>
          <p>New</p>
          <i class="fa-solid fa-plus"></i>
        </a>
      </div>
    </header>
  )
}
