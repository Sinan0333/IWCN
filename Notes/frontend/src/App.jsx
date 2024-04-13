import { useEffect, useState } from 'react'
import { getAllNoteApi,deleteNoteApi,addNoteApi } from './api'
import { validate } from './validation'


function App() {
  const [heading,setHeading] = useState("")
  const [note,setNote] = useState("")
  const [notes, setNotes] = useState([])
  const [errMsg,setErrMsg] = useState("")

  useEffect(()=>{
    getAllNoteApi().then((res)=>{
      setNotes(res.data)
    })
  },[])

  const addNote = async()=>{
    const result = validate(heading,note)
    setErrMsg(result)
    if(result) return

    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ')
    const res = await addNoteApi({date:currentDate,heading:heading,note:note})
    setNotes(res.data)
  }

  const deleteNote = async(id)=>{
    const res = await deleteNoteApi(id)
    setNotes(res.data)
  }

  return (
    <div className='bg-blue-300 w-full min-h-screen'>
      <div className='bg-black h-14 w-full flex items-center'>
        <h1 className='text-white font-bold text-3xl ml-6'>Notes</h1>
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-96 h-32 mt-20  rounded-md bg-gray-100'>
          <input placeholder='Heading...' type="text" className='w-full h-12 pl-4  rounded-md bg-gray-100 focus:border-transparent focus:outline-none' onChange={(e)=>setHeading(e.target.value)}/>
          <textarea  placeholder='Take a note...' type="text" className='w-full  pl-4 resize-none  rounded-md bg-gray-100 focus:border-transparent focus:outline-none' onChange={(e)=>setNote(e.target.value)}/>
          <div className='flex justify-center'>
            <p className='text-red-600'>{errMsg}</p>
          </div>
        </div>
          <button className='mt-20 ml-4 rounded-md p-2 font-medium bg-gray-100 ' onClick={addNote}>Add</button>
      </div>
     
      <div className='mt-14 ml-8 mr-10 flex flex-wrap '>
         {
          notes.map((note,i)=>{
            return(
              <div key={i} className='bg-gray-100 max-w-56 pl-2 pt-1 h-full ml-6 rounded-md mb-6 flex flex-col flex-grow '>
                <p className='font-medium'>{note.heading}</p>
                <div className="overflow-auto h-full custom-scroll">
                  <p>{note.note}</p>
                </div>
                <div className='flex justify-between mt-3'>
                  <p>{new Date(note.date).toLocaleDateString()}</p>
                  <img className='cursor-pointer ' width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/filled-trash.png" alt="filled-trash" onClick={()=>deleteNote(note.id)}/>
                </div>
              </div>
            )
          })
         }
      </div>
    </div>
  )
}

export default App
