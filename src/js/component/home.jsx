import React, {useState, useEffect} from "react";

let nextId = 0;

const Home = () => {
	const [thing, setThing] = useState('');
	const [pends, setPends] = useState([]);

	// const getInfoAPI = async () => {
	// 	const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/martaml",{
	// 		method:'GET'
	// 	} 
	// 	);
	// 	const data = await response.json();

	// 	setPends(data);
	// }
    
	// useEffect (() => {
	// 	getInfoAPI()

	// }, []);

	return (
	  <> <div className="List__container">
		<h1>To do list:</h1>
		<div className="Input__container">
		<input placeholder="Task"
		  value={thing}
		  onChange={e => setThing(e.target.value)}
		/>
		<button className="button-add" onClick={() => {
		  setPends([
			...pends,
			{ id: nextId++, label: thing}
		  ]);
		}}>Add</button>
		</div>
		<ul>
		  {pends.map(pend => (
			<li key={pend.id}>{pend.label}{' '}
			<button className="button-delete" onClick={() => {
              setPends(
                pends.filter(a =>
                  a.id !== pend.id
                )
              );
            }}>
              X
            </button>
			</li>
		  ))}
		</ul>
		<p> {pends.length} pending tasks</p>
		</div>
	  </>
	);
  }

export default Home;
