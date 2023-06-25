function User (props) {
    // console.log(props)

  return (  
  <h1>
    {props.isLoggedIn ? `${props.name} ${props.surname}` : "Giris Yapmadiniz"}
    
 </h1>
)
}


export default User
