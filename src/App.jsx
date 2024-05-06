import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { HomePage } from './components/HomePage'
import { FileDisplay } from './components/FileDisplay'

function App() {
  const [file, setFile] = useState(null)
  const [audioStream, setAudioStream] = useState(null)

  const isAudioAvailable = file || audioStream

  const handleAudio = () => {
    setFile(null)
    setAudioStream(null)
  }

  return (
    <>
      <div className='w-full max-w-[1000px] flex flex-col mx-auto min-h-screen p-4'>
        <Header />
        {
          isAudioAvailable? 
          (
            <FileDisplay 
              file={file}
              handleAudio={handleAudio}
            />
          ): 
          (
            <HomePage 
              setFile={setFile} 
              setAudioStream={setAudioStream} 
            />
          )
        }
        <footer></footer>
      </div>
    </>
  )
}

export default App
