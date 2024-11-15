import { objectInterface } from '../../interfaces_types/interfaces_types';
import TableViewBodyTd from './TableViewBodyTd';

const TableViewBodyTr = ({ object }: { object: objectInterface }) => {
  return (
    <tr className="even:bg-[#eee]">
      <TableViewBodyTd text={object.name} classNames="font-medium" />
      <TableViewBodyTd text={object.estimated_diameter.kilometers.estimated_diameter_min} />
      <TableViewBodyTd text={object.estimated_diameter.kilometers.estimated_diameter_max} />
      <TableViewBodyTd text={object.close_approach_data[0].orbiting_body} />
    </tr>
  );
};

export default TableViewBodyTr;
