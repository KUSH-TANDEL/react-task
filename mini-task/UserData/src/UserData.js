export const userData = async () =>{
    try{
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    return data.users
  }
  catch(err){
    return console.log(err); 
  }
}