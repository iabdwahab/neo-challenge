const TableViewHead = () => {
  const headTitles: string[] = ['name', 'min diameter (km)', 'max diameter (km)', 'orbital body'];

  return (
    <thead>
      <tr>
        {headTitles.map((headTitle: string, index: number) => (
          <th key={index}>{headTitle.toUpperCase()}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableViewHead;
