const QuickAction = ({ label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between p-4 bg-blue-200 shadow-md rounded-xl cursor-pointer hover:bg-gray-100 transition"
    >
      <span className="font-medium">{label}</span>
      <span className="text-blue-500 font-bold">&rarr;</span>
    </div>
  );
};

export default QuickAction;
