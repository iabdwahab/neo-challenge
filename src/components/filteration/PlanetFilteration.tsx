const PlanetFilteration = () => {
  type planetObjectType = {
    planetName: string;
    planetValue: string;
  };

  const planets: planetObjectType[] = [
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

  return (
    <>
      <select className="border rounded p-3">
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
