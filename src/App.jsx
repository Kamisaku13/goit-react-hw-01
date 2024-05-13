import users from "./users.json"
import Profile from "./components/Profile/Profile"

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
 <Profile users= {users}/> 
 </>
  )
}

export default App
