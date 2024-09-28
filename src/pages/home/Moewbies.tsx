import Logo from "../../assets/logo.svg";
import Hero from "../../assets/hero.svg";
import Meow from "../../assets/icon-meow.svg";
import ConnectButton from "./Connect";
import BgX from "../../assets/bg-x.svg";

const Moewbies = () => {
  return (
    <div className="flex flex-col h-screen bg-primary">
      {/* Logo */}
      <img
        src={Logo}
        alt="Logo"
        className="w-48 mb-8 mt-8 z-10 self-center"
      />
      {/* Buttons */}
      <div className="flex flex-row gap-4 justify-center items-center m-5 mt-28" >
        <button className="bg-dark text-text-btn px-4 py-2 rounded-md uppercase font-bold hover:bg-text-btn-hover hover:text-secondary lg:text-lg flex items-center gap-2 transition-all duration-300">
          <img src={Meow} alt="connect" className="w-4 h-4" />
          Connect
        </button>
        <button className="bg-dark text-text-btn px-4 py-2 rounded-md uppercase font-bold hover:bg-text-btn-hover hover:text-secondary lg:text-lg flex items-center gap-2 transition-all duration-300">
          <img src={Meow} alt="eligibilities" className="w-4 h-4" />
          ELIGIBILITIES
        </button>
        <button className="bg-dark text-text-btn px-4 py-2 rounded-md uppercase font-bold hover:bg-text-btn-hover hover:text-secondary lg:text-lg flex items-center gap-2 transition-all duration-300">
          <img src={Meow} alt="claim" className="w-4 h-4" />
          CLAIM
        </button>
      </div>
      {/* Connect */}
      <ConnectButton />
      {/* Hero */}
      <div className="flex justify-between relative bg-primary h-[30%]">
        <img src={BgX} alt="Background" className="w-1/4 absolute bottom-0 left-0" />
        <img src={Hero} alt="Hero" className="w-3/4 mr-28 absolute bottom-0 right-0" />
      </div>
    </div>
  );
};
export default Moewbies;
