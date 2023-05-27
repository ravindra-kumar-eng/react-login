export const getUsers=()=>{
    const usersJSON=localStorage.getItem('users');
    return usersJSON? JSON.parse(usersJSON):[];
};
 export const addUser=(user)=>{
    const users=getUsers();
     users.push(user);
     localStorage.setItem("users",JSON.stringify(users));
 };

 export const getUserByUsername=(username)=>{
    const users =getUsers();
    return users.find((user)=>user.username === username);
 }

 export const updateUser=(updatedUser)=>{
    const users=getUsers();
    const updatedUsers=users.map((user)=>{
        if(user.username === updateUser.username){
            return {...user,...updateUser};
        }
        return user;
    });
    localStorage.setItem('users',JSON.stringify(updatedUsers));
 }

 export const deleteUser= (username)=>{
    const users=getUsers();
    const updatedUsers=users.filter((user)=>user.username !==username);
    localStorage.setItem("users",JSON.stringify(updatedUsers));
 };