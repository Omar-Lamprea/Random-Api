import React, { useEffect, useState } from 'react'

const User = () => {

  const [user, setUser] = useState({
    name: "",
    gender: ""
  })
  const url = 'https://randomuser.me/api/'

  useEffect(()=>{
    fetch(url)
      .then(response => response.json())
      .then((data) =>{
        console.log(data);
        const name = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
        const gender = data.results[0].gender
        setUser({...user, name});
        // setUser({...user, gender});
      })
  },[])

  console.log(user);
  return (
    <div>
      <h2>{user.name}</h2>
      {/* <h2>{user.gender}</h2> */}
    </div>
  )
}

export default User