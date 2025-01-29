const StatCard = ({ title, value, icon, bgColor, textColor }) => {
    return (
      <div
        className={`p-4 rounded-xl shadow-md ${bgColor} text-white flex items-center space-x-4`}
      >
        <div className={`p-3 rounded-full ${textColor} bg-opacity-25`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    );
  };
  
  export default StatCard;
  