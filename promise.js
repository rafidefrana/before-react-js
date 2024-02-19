const fetchdata = async() => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        if(!response.ok){
            throw new Error(response.status)
        }
        const result = await response.json();
        return result
    } catch(err){
        console.log(err)
    }
}