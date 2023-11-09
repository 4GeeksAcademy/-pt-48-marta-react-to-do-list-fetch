import React, {useState} from "react";

let nextId = 0;

const Home = () => {
	const [thing, setThing] = useState('');
	const [pends, setPends] = useState([]);
  
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
			{ id: nextId++, thing: thing}
		  ]);
		}}>Add</button>
		</div>
		<ul>
		  {pends.map(pend => (
			<li key={pend.id}>{pend.thing}{' '}
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
