import { useState } from 'react'
import {URL} from  './constant'

function App() {
  const [question, setQuestion] = useState('');

  const handleAskQuestion = async() =>{
    let response = await fetch(URL, {
      method:"POST",
      payload:
    })

  }

  return (
    <>
    <div className='grid grid-cols-5 h-screen text-center'>
      <div className='col-span-1 bg-zinc-400'>

      </div>

      {/* main container consist answers and input box for question  */}
      <div className='col-span-4 p-10'>
        <div id="constainer" className='h-120 lg:h-135'>

        </div>
        <div className="flex mx-auto w-1/2 h-16 bg-zinc-800 p-1 pr-5 text-white rounded-4xl border border-zinc-700">
          <input onChange={(e)=>setQuestion(e.target.value)} value={question} type="text" className="w-full h-full p-3 outline-none" placeholder='Ask me anything'/>
          <button onClick={() => handleAskQuestion()} className='text-lg p-2'>Ask</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
