import TableViewBodyTr from './TableViewBodyTr';
import { useContext } from 'react';
import { ApiDataContext } from '../../contexts/ApiDataContext';
import { objectInterface } from '../../interfaces_types/interfaces_types';

const TableViewBody = () => {
  const dataContext: { near_earth_objects: objectInterface[] } = useContext(ApiDataContext);

  return (
    <tbody>
      {dataContext.near_earth_objects?.map((object: objectInterface) => {
        return <TableViewBodyTr key={object.id} object={object} />;
      })}
    </tbody>
  );
};

export default TableViewBody;
