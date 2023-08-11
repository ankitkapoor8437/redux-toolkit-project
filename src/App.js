import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getAllData } from './feature/gitUserSlice';

function App() {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.app);
  // console.log(datas);

if (datas.loading) {
  return (
    <h1>Loading...</h1>
  )
}

if (datas.error != null) {
  return <h3>{datas.error}</h3>
}
  return (
    <div className="App">
      <h2></h2>
      <button onClick={() => dispatch(getAllData())}>Get GitHub User</button>
      {datas.users.map((data) => (
        <li key={data.key}>{data.login}</li>
      ))}
    </div>
  );
}

export default App;
