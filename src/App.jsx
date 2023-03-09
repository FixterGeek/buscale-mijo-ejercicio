import { useId, useState } from 'react'
import SearchBar from './components/SearchBar';
import Table from './components/Table'
import getPeople from './utils/getPeople'

const users = getPeople();

function App() {
  const [filtered,setFiltered] = useState(users);

  // Solución con regex
  const handleSearchWithRegex = (text) => {
    const newRegex = new RegExp(text,'i');
    setFiltered( users.filter(user => 
      user.firstName.match(newRegex) ||
      user.lastName.match(newRegex) ||
      user.email.match(newRegex) ||
      user.amount.match(newRegex) 
      )
    )
  }

    // Solución con includes
  const handleSearch = (searchString) => {
    const filteredUsers = users.filter(user => {
      const lowerSearchString = searchString.toLowerCase();
      return (
        user.firstName.toLowerCase().includes(lowerSearchString)
        || 
        user.lastName.toLowerCase().includes(lowerSearchString)
        ||
        user.email.toLowerCase().includes(lowerSearchString)
        ||
        user.amount.toLowerCase().includes(lowerSearchString)
        )
    })
    setFiltered(filteredUsers);
  }

  return (
    <>
    <SearchBar numberOfResults={filtered.length} onSearch={handleSearchWithRegex} />
    <Table>
      {filtered.map((user,i)=>{
        const isEven = i%2===0
        return (
          <div key={user.email} className="grid-row">
            <p  className={isEven ? 'even':'odd'}>
              {user.firstName}
            </p>
            <p   className={isEven ? 'even':'odd'}>
              {user.lastName}
            </p>
            <p   className={isEven ? 'even':'odd'}>
              {user.email}
            </p>
            <p  className={isEven ? 'even':'odd'}>
              $ {user.amount} MXN
            </p>
          </div>
        )
      })}
    </Table>
    </>
  )
}

export default App
