import useTheme from '../../hooks/useTheme';
import sunIcon from '../../assets/icon-sun.svg';
import moonIcon from '../../assets/icon-moon.svg';

const Header = () => {
  const [theme, toggleTheme] = useTheme();

 
  return (
    <div className="flex mt-24 mb-6 justify-between items-center">
      <h1>devfinder</h1>
      <button onClick={toggleTheme} className='flex items-center'>{theme === 'dark' ? (
        <>
          <span className='font-bold text-lg uppercase cursor-pointer'>Light</span> 
          <img src={sunIcon} alt="" className='ml-2 inline-block'/>
        </>)
        : (
          <>
            <span className='font-bold text-l uppercase cursor-pointer'>Dark</span>
            <img src={moonIcon} alt="" className='ml-2 inline-block' />
          </>) }</button>
    </div>
  )
}

export default Header
