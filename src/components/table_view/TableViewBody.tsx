import TableViewBodyTr from './TableViewBodyTr';
import { useContext } from 'react';
import { ApiDataContext } from '../../contexts/ApiDataContext';
import { objectInterface } from '../../interfaces_types/interfaces_types';

const TableViewBody = () => {
  const apiData: objectInterface[] = useContext(ApiDataContext);

  return (
    <tbody>
      {apiData.map((object: objectInterface) => {
        return <TableViewBodyTr key={object.id} object={object} />;
      })}
    </tbody>
  );
};

export default TableViewBody;
