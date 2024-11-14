import { objectInterface } from '../../interfaces_types/interfaces_types';

const TableViewBodyTr = ({ object }: { object: objectInterface }) => {
  return (
    <tr>
      <td>{object.name}</td>
      <td>{object.estimated_diameter.kilometers.estimated_diameter_min}</td>
      <td>{object.estimated_diameter.kilometers.estimated_diameter_max}</td>
      <td>Earth</td>
    </tr>
  );
};

export default TableViewBodyTr;
