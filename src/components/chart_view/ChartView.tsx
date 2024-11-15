import { useContext } from 'react';
import { ViewedDataContext } from '../../contexts/ViewedDataContext';
import Chart from 'react-google-charts';
import { objectInterface } from '../../interfaces_types/interfaces_types';

const ChartView = () => {
  const { viewedData } = useContext(ViewedDataContext);

  const visualizedData: [string, number | string, number | string][] = [['Object', 'Min Diameter', 'Max Diameter']];

  viewedData.forEach((object: objectInterface) => {
    const minDiameter = object.estimated_diameter.kilometers.estimated_diameter_min;
    const maxDiameter = object.estimated_diameter.kilometers.estimated_diameter_max;

    visualizedData.push([object.name, minDiameter, maxDiameter]);
  });

  const options = {
    title: 'NEO Diameter Visualization',
    hAxis: {
      title: 'Diameter (km)',
      minValue: 0,
    },
    vAxis: {
      title: 'NEO',
    },
  };

  return <Chart chartType="BarChart" width="100%" height="400px" data={visualizedData} options={options} />;
};

export default ChartView;
