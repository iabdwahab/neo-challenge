import { useContext, useEffect, useState } from 'react';
import Filteration from './components/filteration/Filteration';
import Header from './components/Header';
import TableView from './components/table_view/TableView';
import { ApiDataContext } from './contexts/ApiDataContext';
import ViewSwitcher from './components/view_switcher/ViewSwitcher';
import { ViewTypeContext } from './contexts/ViewTypeContext';
import ChartView from './components/chart_view/ChartView';

const App = () => {
  const [apiData, setApiData] = useState({});
  const [viewType, setViewType] = useState('table');

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

          <ViewTypeContext.Provider value={{ viewType, setViewType }}>
            <div className="my-5">
              <ViewSwitcher />
            </div>
          </ViewTypeContext.Provider>

          <div>{viewType === 'table' ? <TableView /> : <ChartView />}</div>
        </ApiDataContext.Provider>
      </div>
    </div>
  );
};

export default App;
