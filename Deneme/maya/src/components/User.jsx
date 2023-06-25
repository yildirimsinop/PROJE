function User ({name, surname, isLoggedIn, age}) {
    // console.log(props)

  return (  
  <h1>
    {isLoggedIn ? `${name} ${surname} (${age})` : "Giris Yapmadiniz"}
    
 </h1>
)
}


export default User
