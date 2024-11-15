import { MouseEventHandler } from 'react';

const ViewSwitcherButton = ({ text, onClick }: { text: string; onClick: MouseEventHandler }) => {
  return (
    <button onClick={onClick} className="border rounded px-6 py-2 bg-black text-white">
      {text}
    </button>
  );
};

export default ViewSwitcherButton;
