import Filteration from './components/filteration/Filteration';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container py-6">
        <Filteration />
      </div>
    </div>
  );
};

export default App;
