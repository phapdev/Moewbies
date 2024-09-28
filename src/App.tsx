import Logo from "./assets/logo.svg";
import Meow from "./assets/icon-meow.svg";
import Hero from "./assets/hero.svg";
import BgX from "./assets/bg-x.svg";
import ConnectButton from "./pages/home/Connect";

function App() {
  return (
    <div className='h-screen w-screen bg-primary overflow-hidden no-wrap'>
      <div className="grid grid-rows-[20%_10%_15%_20%_35%] h-full">
        {/* Hàng 1: Logo */}
        <div className="flex justify-center items-center">
          <img src={Logo} alt="Logo" className="h-[50%] object-contain" />
        </div>
        
        {/* Hàng 2: 3 buttons */}
        <div className=" flex items-center justify-center gap-36">
        <button className="bg-dark text-text-btn px-4 py-2 rounded-md uppercase font-bold hover:bg-text-btn-hover hover:text-secondary border-solid border-[1px] border-light shadow-md lg:text-lg flex items-center gap-2 transition-all duration-300">
          <img src={Meow} alt="connect" className="w-4 h-4" />
          Connect
        </button>
          <button className="bg-dark text-text-btn px-4 py-2 rounded-md uppercase font-bold hover:bg-text-btn-hover hover:text-secondary border-solid border-[1px] border-light shadow-md lg:text-lg flex items-center gap-2 transition-all duration-300">
          <img src={Meow} alt="eligibilities" className="w-4 h-4" />
          ELIGIBILITIES
        </button>
          <button className="bg-dark text-text-btn px-4 py-2 rounded-md uppercase font-bold hover:bg-text-btn-hover hover:text-secondary border-solid border-[1px] border-light shadow-md lg:text-lg flex items-center gap-2 transition-all duration-300">
          <img src={Meow} alt="claim" className="w-4 h-4" />
          CLAIM
        </button>
        </div>
        
        {/* Hàng 3: 1 component */}
        <div className="h-full">
          <ConnectButton />
        </div>
        
        {/* Hàng 4 */}
        <div className="">
          {/* Nội dung cho hàng 4 */}
        </div>
        
        {/* Hàng 5: 2 ảnh */}
        <div className="grid grid-cols-2 gap-4 overflow-hidden content-center relative">
          <div className="flex h-[90%] items-center">
            <img src={BgX} alt="BgX" className="object-contain absolute bottom-0 left-0" />
          </div>
          <div className="flex h-[90%] items-center">
            <img src={Hero} alt="Hero" className="object-contain absolute bottom-0 right-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
