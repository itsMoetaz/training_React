import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { search } from './Ecmascript/fonction'

function App() {
  const [count, setCount] = useState(0)

  // let somme = (a, b) => {
  //   return a + b;
  // }
  // console.log(somme(1, 2));
  // const tab = [1, 2, 3, 4, 5];
  // const tab2 = tab.map((e) => e * 2);
  // console.log(tab2);
  const words = ['spray', 'limit', 'elite', 'exuberantaaaaaa', 'destruction', 'present'];
  // const result = words.filter(word => word.length > 6);
  // console.log(result);
  // var i = 0;
  // const tabSomme = tab.reduce((acc, e) => acc + e, i);
  // console.log(tabSomme);
  // let person = { name: 'John', age: 30, city: 'New York' };
  // person = { ...person, age: 31 };
  // console.log(person);
  const findsLongestWord = (words) => {
    let newTabLong= words.map(e=>{return {"nom":e,"long":e.length}});
    return newTabLong.reduce((acc, curr) => acc.long > curr.long ? acc : curr);
  }
  
  console.log(findsLongestWord(words));
  const input = [
    ["a","b","c"],
    ["d","c","f"],
    ["c","f","i"]
  ];
  const exercie2 = (input) => { 
    return input.flat().reduce((acc, curr)=>{
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
  }
  console.log(exercie2(input));

  let students = [
    { name: "John", age: 20, score: 45 },
    { name: "Jane", age: 22, score: 90 },
    { name: "Jim", age: 21, score: 89 },
    { name: "Bob", age: 21, score: 20 }
  ];

  const exercice3 = (students) => {
    return students.map(e => e.score < 50? e.score + 15 : e.score).filter(e => e > 50).reduce((acc, curr) => acc + curr, 0);
  }
  console.log(exercice3(students));

  
  let id = 0;
  const generateId = () => id++;
  let tab = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
  ];
  tab.push({id: generateId(), name: "John", age: 20 });
  console.log(tab);
  tab = tab.map(e => e.id? e : {id: generateId(), ...e});
  console.log(tab);
  const exercice4 =  search(1, tab).then((e) => console.log(e.name));
  



  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
