import { useState } from 'react';
import ParasolToken from "../../assets/parasol-token.svg";
import ParasolTokenRight from "../../assets/right-parasol-token.svg";
import Meow from "../../assets/icon-meow.svg";

const Connect = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // Thêm logic kết nối ở đây
    // Sau khi kết nối xong, đặt setIsLoading(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col bg-light border-b rounded-lg border-gray-900 w-3/4 mx-auto">
      <div className="flex flex-row gap-4 ">
        <img src={ParasolToken} alt="Parasol Token" className="self-start" />
        <button 
          onClick={handleClick}
          className="m-auto bg-text-btn text-light rounded-md uppercase font-bold hover:bg-primary hover:text-text-btn lg:text-lg flex items-center gap-2 self-center 
          border-2 border-gray-700 px-6 py-2 transition-all duration-300 font-weight-900 text-lg font-size-lg"
        >
          <img 
            src={Meow} 
            alt="Connect" 
            className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} 
          />
          <span className={"font-weight-900 text-lg font-size-lg"}>{isLoading ? 'Connecting...' : 'Connect'}</span>
        </button>
        <img src={ParasolTokenRight} alt="Parasol Token" className="w-48 h-auto self-end mb-10" />
      </div>
    </div>
  )
}

export default Connect