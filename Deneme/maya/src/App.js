
import User from "./components/User"
function App() {
  return (
    <>
      <User 
      name= "Mehmet" 
      surname = "yilmaz" 
      isLoggedIn = {true} 
      age= {29}
      friends = {["Ahmet", "Tayfun", "Gokhan","Ayse","Fatma",]}
      />
    </>
  )
}

export default App
