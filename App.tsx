// import { List } from ...

import { useEffect, useState } from "react";
import TodoList from './components/TodoList';

// Create a list component that is able to render items from the following API.
//
// ---> https://jsonplaceholder.typicode.com/todos <---
//
// The component should:
// 1. Render the items in a list
// 2. Offer a search bar to filter the items
// 3. Offer the engineer a simple way to specify how an item is rendered
//
// Make sure to also handle loading and error states
//
// An example of the component we are trying to build:
//
// <List
//   data={data}
//   onSearch={(term: string) => void | Promise<void>}
//   onRenderItem={(item: typeof data[number]) => React.ReactNode}
// />

function App() {
  const [todo , setTodo] = useState<any[]>([]);
  const [search , setSeacrh] = useState<string>('');
  useEffect(()=>{
    async function fetchData(){
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodo(data);
    }

    fetchData();
  } ,[])
const handleSearch = (key : string) =>{
  setSeacrh(key);
}
  const filteredData = todo.filter((d) => d.title.includes(search));

  return (
    <>
      <h1>List with a Searchbox</h1>
      <TodoList data = {filteredData}  onSearch = {handleSearch} />
    </>
  );
}

export default App;
