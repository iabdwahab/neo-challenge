const TableViewHead = () => {
  const headTitles: string[] = ['name', 'min diameter (km)', 'max diameter (km)', 'orbital body'];

  return (
    <thead>
      <tr>
        {headTitles.map((headTitle: string, index: number) => (
          <th key={index} className="text-start px-4 py-3 bg-black text-white">
            {headTitle.toUpperCase()}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableViewHead;
