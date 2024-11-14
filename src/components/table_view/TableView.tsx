import TableViewBody from './TableViewBody';
import TableViewHead from './TableViewHead';

const TableView = () => {
  return (
    <div>
      <table className="border w-full">
        <TableViewHead />
        <TableViewBody />
      </table>
    </div>
  );
};

export default TableView;
