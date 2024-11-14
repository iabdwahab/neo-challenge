import { useEffect, useState } from 'react';
import Filteration from './components/filteration/Filteration';
import Header from './components/Header';
import TableView from './components/table_view/TableView';
import { ApiDataContext } from './contexts/ApiDataContext';

const App = () => {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    // This is NASA API Link, but I reached the limit of requests.
    // fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY')

    // This File Hostinger (alt of NASA API Link).
    fetch('https://api.jsonsilo.com/public/ef6864ab-1bd7-4b74-a232-4d4ebeda4d6d')
      .then((res) => res.json())
      .then((result) => {
        setApiData(result);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="container py-6">
        <ApiDataContext.Provider value={apiData}>
          <div>
            <Filteration />
          </div>
          <div className="mt-5">
            <TableView />
          </div>
        </ApiDataContext.Provider>
      </div>
    </div>
  );
};

export default App;
