# React + Vite

## Responsive breakpoints-

    sm:640px
    md:768px
    lg:1024px

## section-01

- I am building this app in React with vite
- Installing Tailwind CSS - V4
- stop your server and then restart, npm run dev
  it will pickup the configuration of tailwind css
- Now start building

### section-02

### UI-Theming/structure of the app

- app is divided into components

  - header
  - user search
  - user data

#### Font-Family Installed

- get the google font-space mono
  copy its link for web and paste in the <head> of index.html
  and in index.css, take html as selector and use this font-family there as,
  < html{
  font-family: "Space Mono", monospace;
  } >
  you can see the font is applied now.

  ### theme

  we set ff, colors, fs

  ### Theme Switch

  I want to run this useEffect, everytime the theme changed.

  ### section 3: Theme Custom Hook

  At this stage, our code needs some refactoring.

  - I want to keep my code in files, organized,maintained and clean.
  - Take off all the logic for theme from Header/index and move to another file- useTheme.js in hooks folder
  - we keep our hooks, separate from our components.

  - The state of theme, we handle here.So,
    const [theme, setTheme] = useState("light");
  - Moreover, useEffect and toggleTheme function we shift here in useTheme file
  - Now this hook will not return JSX, as it is just a function so we return whatever we need, from other files; here we need to access the theme(state) and the function, toggleTheme so we will compact our hook and return an array as,
    return [theme, toggleTheme];
  - and export default useTheme;
  - import useTheme in Header/index component
    and write this line,to access both, theme and toggleTheme
    const [theme, toggleTheme] = useTheme();
  - Custom Hooks - to solve separation of concern.

  ### section-4: Theme unit test(Header component)

we use react-testing-library. It does not replace jest,rather it works with jest.
we install by the command,
npm install --save-dev @testing-library/react @testing-library/dom

Bcz I'm having a mock here,before a test runs,I have to clear whatever mocks were running before,so I have test one running with one mock and test two started; before it starts, clear off whatever mocks were used in the test-one

unit test useTheme Custom hook

52:58 Installing axios- npm i axios

### section 6: Refactor to Reducer & Context Api

The main issue here the separation of concerns.
Usually, we move the logic out of the component. to make focus of component to be rendering; state management
we will have our combination of Context API and Reducer. We will use them together.
Reducer helps us to state manipulation
and the contect Api helps us to access data to other components,as we need to access later and display it in the user Info section that is our third section of the design.

in searchUser function, we can remove noe these separate states,
const [username, setUserName] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState(false);
And use,
// const { state, setUsername, searchUser:contextSearchUser } = useContext(UserContext);

// Previously our searchUser function, now deleted and logic in useContext(saerchUser) will work now,
//Removed from SearchUser component is this
const handleSearchUser = async () => {
setError("");
setLoading(true);
if (!username) {
setError("Enter a valid user name!");
return;
}
try {
const response = await axios.get(
`https://api.github.com/users/${username}`
);
if (response.status === 200) {
//user exists
setError(""); //clear the error message
console.log(response.data);
}
} catch {
{
//user not exist
setError("No Results!");
}
} finally {
setLoading(false);
}

};

### section 8: Build user details component

To have User details in the third section of the design, We create a component-UserInfo-index.jsx

step-1 we import useContext and UserContext
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
step-2
we must have the access to state, to have user data as the button-search is clicked.alert

Timeline:
00:00 requirements & project overview
02:06 section 1: Project Clean up
04:00 add tailwindCSS to create react app project
07:05 section 2: UI structure
07:39 Import Font
09:47 create Header component
12:16 tailwindCSS Configuration
17:10 Switching theme  
27:40 section 3: Theme Custom Hook
32:28 section 4: a-unit test Header Component (32:28 to 47:30)
41:04 b- unit test useTheme Custom hook
47:30 section 5: Github user search
01:01:04 section 6: Refactor to Reducer & context Api
01:19:25 section 7: unit test user search Context
01:28:41 unit test User Search component
01:33:57 section 8: Build user details component
