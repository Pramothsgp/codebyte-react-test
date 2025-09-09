import { FC } from 'react';
const TodoList: FC<any> = ({ data, onSearch, onRenderItem }) => {
  return (
    <>
      <input type="test" onChange={(e) => onSearch(e.target.value)} />
      <ul>
        {data.map((d: any) => (
          <li key={d.id}>
            <p>{d.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
