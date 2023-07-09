
import User from "./components/User"

const friends = [... ];
function App() {
  return (
    <>
      <User 
      name= "Mehmet" 
      surname = "yilmaz" 
      isLoggedIn = {true} 
      age= {29}
      friends = {friends}
      />
    </>
  )
}

export default App
