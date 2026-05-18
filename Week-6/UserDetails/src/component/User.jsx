function User(props){
    let {user}=props
    return(
        <div className="text-center p-5 shadow-2xl w-2xl mx-10 my-5 grid grid-cols-1">
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <img src={user.image}/>
            
        </div>
    )
}
export default User;