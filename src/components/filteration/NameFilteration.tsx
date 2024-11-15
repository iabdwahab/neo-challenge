import { ChangeEvent, useContext } from 'react';
import { ApiDataContext } from '../../contexts/ApiDataContext';
import { ViewedDataContext } from '../../contexts/ViewedDataContext';

const NameFilteration = () => {
  const apiData = useContext(ApiDataContext);
  const { setViewedData } = useContext(ViewedDataContext);

  // Filter Function
  function filterByName(value: string) {
    const filteredData = apiData.filter((object) => {
      // Make User Value & ObjectName => Lowercase to match each other.
      value = value.toLowerCase();
      const objectName = object.name.toLowerCase();

      return objectName.includes(value);
    });

    setViewedData(filteredData);
  }

  return (
    <>
      <input placeholder="Search By Name..." className="border rounded p-3" onChange={(e: ChangeEvent<HTMLInputElement>) => filterByName(e.target.value)} />
    </>
  );
};

export default NameFilteration;
