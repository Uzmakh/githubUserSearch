
import Header from './components/Header'
import SearchUser from './components/SearchUser'
import UserInfo from './components/UserInfo'
import { UserProvider } from './context/userContext'

const App = () => {
  return (
    <div className='container mx-auto px-4'>
      <Header />
      <UserProvider>
        <SearchUser />
        <UserInfo/>
      </UserProvider>
    </div>
  )
}

export default App
