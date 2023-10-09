import { useEffect, useState } from "react"

function useGetUsers() {
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchName, setSearchName] = useState('');
    const [matchedUser, setMatchedUser] = useState(null);
    
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((data) => {setUsers(data); 
          setLoading(false); 
        })
    }, []);

    useEffect(() => {
      const foundUser = users.find((user) =>
        user.name.toLowerCase() === searchName.toLowerCase()
      );
      setMatchedUser(foundUser);
    }, [searchName, users]);


    return{ users, loading, searchName, matchedUser, setSearchName}
}

export default useGetUsers;