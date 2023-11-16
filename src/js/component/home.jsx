import React, {useState, useEffect} from "react";

let nextId = 0;

const SERVER_URL =
  'https://playground.4geeks.com/apis/fake/todos/user/martaml';
const GET_HTTP_METHOD = 'GET';
const PUT_HTTP_METHOD = 'PUT';

const Home = () => {
	const [thing, setThing] = useState('');
	const [pends, setPends] = useState([]);

	const getInfoAPI = async () => {
		const response = await fetch(SERVER_URL, { method: GET_HTTP_METHOD });
		const PendsState = await response.json();
		setPends(PendsState);
	};

	const createNewTodo = async (label) => {
		const newTodo = { label, id: '', done: false };
		const state = [...pends, newTodo];
		await fetch(SERVER_URL, {
		  method: PUT_HTTP_METHOD,
		  body: JSON.stringify(state),
		  headers: {
			'Content-Type': 'application/json',
		  },
		});
		await getInfoAPI();
	  };
    
	useEffect (() => {
		getInfoAPI()

	}, []);

	return (
	  <> <div className="List__container">
		<h3>ArtistAs pendientes:</h3>
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
		<p> {pends.length} artistAs pendientes por descubrir</p>
		</div>
	  </>
	);
  }

export default Home;
