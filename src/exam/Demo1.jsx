import React, { useEffect, useState } from 'react'

export default function Demo1() 
{
    const [data,setData]  = useState([])
    const [error,setError] = useState("")

    useEffect(() =>{
         fetch ("https://dummy-json.mock.beeceptor.com/posts").then((response) => 
        response.json()
        
    ).then((data) =>                      //for conversion we use the two then blocks
        setData(data)
         
    ).catch((err) => {
        setError(err.message)         //message is a key word 
    });

    }, [])       //empty dependency array

   
3
  return (
    <div>
        <h2><u>Fetch API Demo</u></h2>
        {
            error ? <b>{error}</b> : 
            data.length == 0 ? 
                 <b>Loading....</b> :
        
        <table border={1} > 
            <tr>
               <th>UserID</th>
               <th>ID</th>
               <th>TITLE</th>
               <th>BODY</th>
               <th>LINK</th>
            </tr>
            {
                data.map((user,index) => (
                    <tr key={index}>
                        <td>{user.UserId}</td>
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.body}</td>
                        <td>{user.link}</td>
                    </tr>

                ))
            }
        </table>
}
    </div>
  )
}
