
import useGetUsers from '../../Hook/useGetUsers'
import './UsersList.scss'

function UsersList() {
  

  const {users, loading, searchName, matchedUser, setSearchName} = useGetUsers()

    
 

    return (
        <div className="userContainer">
      <input
        className="inputUser"
        type="text"
        placeholder="Search by name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <ul>
        {users.map((user) => (
          <li className="userList">
            {user.name}
          </li>
        ))}
      </ul>

      {loading ? (
        <p>Loading...</p>
      ) : matchedUser ? (
        <div>
          <h2>User Data</h2>
          <ul>
            <li className="userData"><b>Name:</b> {matchedUser.name}</li>
            <li className="userData"><b>Email:</b> {matchedUser.email}</li>
            <li className="userData"><b>Username:</b> {matchedUser.username}</li>
            <li className="userData"><b>Address:</b> {matchedUser.address.city} | {matchedUser.address.street} | {matchedUser.address.suite}</li>
            <li className="userData"><b>Phone:</b> {matchedUser.phone}</li>
            <li className="userData"><b>Company-Name:</b> {matchedUser.company.name}</li>
            <li className="userData"><b>Website:</b> {matchedUser.website}</li>
            
          </ul>
          
        </div>
      ) : (
        <p>No user found with that name.</p>
      )}

        </div>

    )
}

export default UsersList