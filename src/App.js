// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { getTrains, getTrain } from './api';

const App = () => {
const [trains, setTrains] = useState([]);
const [train, setTrain] = useState(null);

const handleTrainChange = (event) => {
setTrain(event.target.value);
};

const handleGetTrains = async () => {
const trainsData = await getTrains();
setTrains(trainsData);
};

const handleGetTrain = async () => {
const trainData = await getTrain(train.id);
setTrain(trainData);
};

return (
<div>
<h1>Trains Schedule</h1>
<input type="text" placeholder="Enter train ID" value={train.id} onChange={handleTrainChange} />
<button type="button" onClick={handleGetTrain}>Get Train</button>
<table>
<thead>
<tr>
<th>Train ID</th>
<th>Train Name</th>
<th>Departure Time</th>
<th>Price</th>
<th>Seat Availability</th>
</tr>
</thead>
<tbody>
{trains.map((train, index) => (
<tr key={index}>
<td>{train.id}</td>
<td>{train.name}</td>
<td>{train.departureTime}</td>
<td>{train.price}</td>
<td>{train.seatAvailability}</td>
</tr>
))}
</tbody>
</table>
</div>
);
};

export default App;