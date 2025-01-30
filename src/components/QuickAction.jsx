const QuickAction = ({ label, onClick }) => {
    return (
      <div
        onClick={onClick}
        className="flex items-center justify-between p-4 bg-gradient-to-br from-[#F3E9E8] to-[#96B9D9] shadow-md rounded-xl cursor-pointer hover:opacity-80 transition"
      >
        <span className="font-medium">{label}</span>
        <span className="text-blue-500 font-bold">&rarr;</span>
      </div>
    );
  };
  
  export default QuickAction;
  