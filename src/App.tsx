import Filteration from './components/filteration/Filteration';
import Header from './components/Header';
import TableView from './components/table_view/TableView';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container py-6">
        <div>
          <Filteration />
        </div>
        <div className="mt-5">
          <TableView />
        </div>
      </div>
    </div>
  );
};

export default App;
