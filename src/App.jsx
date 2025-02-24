import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route,Link} from 'react-router-dom';
import './App.css'
import  search  from './Ecmascript/fonction.js'
import ClassComponents from './CourseComponents/Components/ClassComponents.jsx'
import FunctionalComponent from './CourseComponents/Components/FunctionalComponent.jsx'
import Methods from './CourseComponents/ClassComponentLifeCycle/Methods.jsx'
import Mouting from './CourseComponents/ClassComponentLifeCycle/Mounting.jsx'
import { Update } from './CourseComponents/ClassComponentLifeCycle/Update.jsx'
import Unmouting from './CourseComponents/ClassComponentLifeCycle/Unmount.jsx'
import { use } from 'react'
import Counter from './exercicePropsState/Counter.jsx'
import ListeManager from './exercicePropsState/ListeManager.jsx'
import ColorChanger from './exercicePropsState/ColorChanger.jsx'
import ListeDesNotes from './exercicePropsState/ListeDesNotes.jsx'
import TodoList from './exercicePropsState/TodoList.jsx'
import Event from './CourseComponents/Components/Event.jsx'
import Events from './CourseComponents/Components/Events.jsx'
import NotFound from './CourseComponents/Components/NotFound.jsx';
import NavigationBar from './CourseComponents/Components/Navbar.jsx';
import EventDetails from './CourseComponents/Components/EventDetails.jsx';

function App() {
  const [count, setCount] = useState(0)

  const nom = "moetaz";
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
//   const findsLongestWord = (words) => {
//     let newTabLong= words.map(e=>{return {"nom":e,"long":e.length}});
//     return newTabLong.reduce((acc, curr) => acc.long > curr.long ? acc : curr);
//   }
  
//   console.log(findsLongestWord(words));
//   const input = [
//     ["a","b","c"],
//     ["d","c","f"],
//     ["c","f","i"]
//   ];
//   const exercie2 = (input) => { 
//     return input.flat().reduce((acc, curr)=>{
//       acc[curr] = (acc[curr] || 0) + 1;
//       return acc;
//     }, {});
//   }
//   console.log(exercie2(input));

//   let students = [
//     { name: "John", age: 20, score: 45 },
//     { name: "Jane", age: 22, score: 90 },
//     { name: "Jim", age: 21, score: 89 },
//     { name: "Bob", age: 21, score: 20 }
//   ];

//   const exercice3 = (students) => {
//     return students.map(e => e.score < 50? e.score + 15 : e.score).filter(e => e > 50).reduce((acc, curr) => acc + curr, 0);
//   }
//   console.log(exercice3(students));


// const etudiants = 
//   { name: "Alice", age: 25 };

  
//   let id = 0;
//   const generateId = () => id++;
//   let tab = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 }
//   ];
//   tab.push({id: generateId(), name: "John", age: 20 });
//   console.log(tab);
//   tab = tab.map(e => e.id? e : {id: generateId(), ...e});
//   console.log(tab);
//   console.log(search(1, tab));
  
//   var parent ;
      const [{color,backgroungColor}, setColors] = useState({color:'black',backgroungColor:'white'});
      useEffect(() => {
        console.log('useEffect');

      },[
        count
      ]);

      const listIems = ["angular","react","vue"];
      const initialColor = '#FF0000'; // Rouge
      const colorOptions = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
      const notes = [12, 15, 9, 18, 14];
      const todoList =
      [
        { name: 'Finir le projet React', priority: 'Haute', completed: false },
        { name: 'Préparer le repas', priority: 'Moyenne', completed: false },
        { name: 'Aller courir', priority: 'Basse', completed: true },
      ];
  return (
    <>
      <NavigationBar />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <Methods />
      <Unmouting />
      <ClassComponents name="oumaima"/>
      <FunctionalComponent name="oumaima" /> */}


      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    
      <Routes >
        <Route path="/" element={<Counter step={1} />} />
        <Route path="/list-manager" element={<ListeManager lists={listIems} placeholder="Ajouter une liste" />} />
        <Route path="/color-changer" element={<ColorChanger initialColor={initialColor} colorOptions={colorOptions} />} />
        <Route path="/notes" element={<ListeDesNotes initialNotes={notes} />} />
        <Route path="/todo-list" element={<TodoList todoList={todoList} />} />
        <Route path="/event" element={<Events />} />
        <Route path="/event/:eventName" element={<EventDetails />} />
        <Route path="*" element={<NotFound />} /> {/* Route pour les pages non trouvées */}
      </Routes >

      </>
  )
}

export default App
