const TableViewHead = () => {
  const headTitles: string[] = ['name', 'min diameter (km)', 'max diameter (km)', 'orbital body'];

  return (
    <thead>
      <tr>
        {headTitles.map((headTitle: string) => (
          <th>{headTitle.toUpperCase()}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableViewHead;
