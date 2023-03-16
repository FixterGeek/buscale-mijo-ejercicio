import { useState, useEffect } from 'react'
import Table from './components/Table'
import getPeople from './utils/getPeople'
import SearchBar from './components/SearchBar';

const users = getPeople();

function App() {
  const [dataUsers, setDataUsers] = useState([])
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    const search = e.target.value; 
    setSearch(search)
    console.log(e.target.value)
  }

  const results = !search ? dataUsers : dataUsers.filter( (data) => { 
    const {firstName, lastName, email, amount} = data;
    /*const regex = RegExp(/^\$\.MXN/$/); 
    const validarAmount = amount.includes(search);
    const found = validarAmount.match(regex)
    console.log(validarAmount)*/

    if(firstName.toLowerCase().includes(search.toLowerCase()) || lastName.toLowerCase().includes(search.toLowerCase())
       || email.toLowerCase().includes(search.toLowerCase()) || amount.includes(search)){
      return data
    }
  });
    
  

  useEffect ( () => {
    setDataUsers(users)
  }, [])


  return (
    <>
    <SearchBar onSearch={handleSearch}/>
    <Table>
      {results.map((user,i)=>{
        const isEven = i%2===0
        return (
          <>
            <p className={isEven ? 'even':'odd'}>
              {user.firstName}
            </p>
            <p className={isEven ? 'even':'odd'}>
              {user.lastName}
            </p>
            <p className={isEven ? 'even':'odd'}>
              {user.email}
            </p>
            <p className={isEven ? 'even':'odd'}>
              $ {user.amount} MXN
            </p>
          </>
        )
      })}
    </Table>
    </>
  )
}

export default App
