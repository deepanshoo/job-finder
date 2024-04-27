const Loader = () => {
  return (
    <div className="bg-opacity-75 bg-gradient-r from-sky-100 to-dkjett fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-dkjett animate-spin">
            </div>
        </div>
    </div>
  );
};

export default Loader;
