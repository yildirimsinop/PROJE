function User ({name, surname, isLoggedIn, age, friends}) {
    // console.log(props)

  return (  
    <>
  <h1>
    {isLoggedIn ? `${name} ${surname} (${age})` : "Giris Yapmadiniz"}
    
 </h1>

 {friends.map((friend, index)=> (

    <div key = {index}>
        {index}. {friend}
    </div>

 ))
 }
    
    </>
)
}


export default User
