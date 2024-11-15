const TableViewBodyTd = ({ text, classNames }: { text: string | number; classNames?: string }) => {
  return <td className={`${classNames ? classNames : ''} p-4`}>{text}</td>;
};

export default TableViewBodyTd;
