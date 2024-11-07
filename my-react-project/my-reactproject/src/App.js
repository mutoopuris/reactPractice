
import './App.css';
import User from'./User';
import User2 from './User2';

function App() {
  let userInfo = [
      {
        id: 30,
        name: 'John',
        age: 30,
        place: 'Switzerland'
      },
      {
        id: 32,
        name: 'Smith',
        age: 39,
        place: 'London'
      },
      {
        id: 43,
        name: 'Ivan',
        age: 40,
        place: 'Sofia'
      }
  ]
  return (

    <div className="App">
      <p>Hello World</p>
      {
        userInfo.map((item) =>{
          return <User key={item.id} id={item.id} name={item.name}/>
        })
      }
      <User2 />
      
    </div>
    
  );
}

export default App;
