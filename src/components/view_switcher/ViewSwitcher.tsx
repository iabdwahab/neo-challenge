import { useContext } from 'react';
import { ViewTypeContext } from '../../contexts/ViewTypeContext';
import ViewSwitcherButton from './ViewSwitcherButton';

const ViewSwitcher = () => {
  const { setViewType } = useContext(ViewTypeContext);

  return (
    <div className="flex justify-between">
      <ViewSwitcherButton text="Chart View" onClick={() => setViewType('chart')} />
      <ViewSwitcherButton text="Table View" onClick={() => setViewType('table')} />
    </div>
  );
};

export default ViewSwitcher;
