import NameFilteration from './NameFilteration';
import PlanetFilteration from './PlanetFilteration';

const Filteration = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-2">
      <NameFilteration />
      <PlanetFilteration />
    </div>
  );
};

export default Filteration;
