import TableViewBodyTr from './TableViewBodyTr';
import { useContext } from 'react';
import { objectInterface } from '../../interfaces_types/interfaces_types';
import { ViewedDataContext } from '../../contexts/ViewedDataContext';

const TableViewBody = () => {
  const { viewedData } = useContext(ViewedDataContext);

  return (
    <tbody>
      {viewedData.map((object: objectInterface) => {
        return <TableViewBodyTr key={object.id} object={object} />;
      })}
    </tbody>
  );
};

export default TableViewBody;
