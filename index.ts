import axios from 'axios';


const url = 'http://jsonplaceholder.typicode.com/todos/1'

interface Todo{
    id: number;
    title: string;
    completed: boolean;
}
axios.get(url).then(response =>{
    
    const todo = response.data as Todo

    const id = todo.id 
    const title = todo.title;
    const finished = todo.completed;

    console.log(`The todo with id : ${id}
    with the title of : ${title}
    and finished? : ${finished}`)
})
    
