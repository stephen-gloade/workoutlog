import Landing from './Landing';
import Header from './Header';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Profile from './Profile';

function App() {

//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

// useEffect(() => {
//     const fetchData = async () => {
//         try {
//             // Fetch data from the server
//             const response = await fetch('/data');
            
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             setData(data);
//         } catch (error) {
//             setError('An error occurred while fetching data');
//             console.error('Error fetching data:', error);
//         }
//     };

//     fetchData();
// }, []);
  

const [data, setData] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
    // // Fetch data from the server
    // const dataFetch = async => {
    //   fetch('/api/data')
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.json();
    //     })
    //     .then(data => setData(data))
    //     .catch(error => {
    //         setError('An error occurred while fetching data');
    //         console.error('Error fetching data:', error);
    //     });

    //     console.log(data)

    async function fetchData() {
        try {
            const response = await fetch('/api/data');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData)
            console.log(jsonData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    fetchData();
    
}, []);

  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
