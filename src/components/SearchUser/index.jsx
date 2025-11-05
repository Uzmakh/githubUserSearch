import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import SearchIcon from "../../assets/icon-search.svg";


const SearchUser = () => {
  const { state, setUsername, searchUser } = useContext(UserContext);

  //track user input
  const handleOnChange = (e) => {
    console.log(state.username);
    setUsername(e.target.value);
  };


  return (
    <div className="w-full h-[50px] flex items-center shadow-lg px-4 mb-8 sm:h-[70px] rounded-lg search-bar">
      <img
        src={SearchIcon}
        alt=""
        className="inline-block mr-1 w-5 sm:w-8 sm:mr-4"
      />
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={state.username}
        className="w-full text-[1rem] tracking-tight sm:text-2xl focus:outline-0"
        onChange={handleOnChange}
      />
      {state.error && <p className="text-red-500 w-48 mr-2">{state.error}</p>}
      <button
        disabled={state.loading}
        onClick={searchUser}
        className="btn disabled:bg-gray-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchUser;
