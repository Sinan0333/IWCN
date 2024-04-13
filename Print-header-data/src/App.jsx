import { useEffect, useState } from "react"


function App() {
const [headers,setHeaders] = useState([""])


useEffect(()=>{

  const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({phonenumber: '1234567890'})
  };

  fetch('https://chimpu.xyz/api/post.php', options).then((res)=>{
    const headersData = Array.from(res.headers.entries())
      .map(([key, value]) => `${key}: ${value}`)
      setHeaders(headersData)
  })

},[])


  return (
    <>
     {
      headers.map((data)=>{
        return(
          <p key={data}>{data}</p>
        )
      })
     }
    </>
  )
}

export default App
