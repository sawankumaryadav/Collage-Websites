
const TopHeader = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
        <div className="flex space-x-6">
          <a href="#" className="text-lime-400 font-semibold hover:text-white transition">
            CUET (UG) 2025
          </a>
          <span className="text-gray-600">|</span>
          <a href="#" className="text-lime-400 font-semibold hover:text-white transition">
            CUET (PG) 2025
          </a>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">Shobhit University Gangoh</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
