import React, { useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';
function App() {
  const [query, setQuery] = useState(''); // State to hold the query input
  const [response, setResponse] = useState(''); // State to hold the API response

  // Function to handle input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Function to call the API
  const callAPI = async () => {
    try {
      const res = await fetch(`${apiUrl}/query?query=${query}`);
      const data = await res.json(); // Assuming API returns a JSON object
      setResponse(data.answer); // Update response state with API result
    } catch (error) {
      console.error('Error calling the API', error);
      setResponse('Error retrieving data'); // Handle error case
    }
  };

  return (
    <div className="App">
      <h1>Query API</h1>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Enter your query"
      />
      <button onClick={callAPI}>Submit</button>
      <div style={{ marginTop: '20px' }}>
        <h2>Response:</h2>
        <div
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            width: '300px',
            minHeight: '50px',
            whiteSpace: 'pre-wrap',
            backgroundColor: '#f9f9f9',
          }}
        >
          {response}
        </div>
      </div>
    </div>
  );
}

export default App;