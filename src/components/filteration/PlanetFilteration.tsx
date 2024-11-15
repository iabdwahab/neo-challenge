import { useContext } from 'react';
import { ViewedDataContext } from '../../contexts/ViewedDataContext';
import { ApiDataContext } from '../../contexts/ApiDataContext';
import { objectInterface } from '../../interfaces_types/interfaces_types';

const planets: planetObjectType[] = [
  {
    planetName: 'All',
    planetValue: '',
  },
  {
    planetName: 'Earth',
    planetValue: 'earth',
  },
  {
    planetName: 'Juptr',
    planetValue: 'juptr',
  },
  {
    planetName: 'Mars',
    planetValue: 'mars',
  },
  {
    planetName: 'Merc',
    planetValue: 'merc',
  },
  {
    planetName: 'Venus',
    planetValue: 'venus',
  },
];

interface planetObjectType {
  planetName: string;
  planetValue: string;
}

const PlanetFilteration = () => {
  const apiData = useContext(ApiDataContext);
  const { setViewedData } = useContext(ViewedDataContext);

  function filterByPlanet(value: string) {
    if (value !== '') {
      const filtered = apiData.filter((object: objectInterface) => {
        const objectOrbitingBody = object.close_approach_data[0].orbiting_body.toLowerCase();

        return objectOrbitingBody === value;
      });

      setViewedData(filtered);
    } else {
      setViewedData(apiData);
    }
  }

  return (
    <>
      <select className="border rounded p-3" onChange={(e) => filterByPlanet(e.target.value)}>
        {planets.map((planet: planetObjectType) => (
          <option key={planet.planetValue} value={planet.planetValue}>
            {planet.planetName}
          </option>
        ))}
      </select>
    </>
  );
};

export default PlanetFilteration;
