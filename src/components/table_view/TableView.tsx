import TableViewBody from './TableViewBody';
import TableViewHead from './TableViewHead';

const TableView = () => {
  return (
    <div className="overflow-scroll">
      <table className="border w-full table-auto">
        <TableViewHead />
        <TableViewBody />
      </table>
    </div>
  );
};

export default TableView;
