import "bootstrap/dist/css/bootstrap.min.css";
import AuthUser from './components/AuthUser';
import Login from './components/login';
import Guest from './navbar/guest';
import Auth from './navbar/auth';
import Admin from './navbar/Admin';
import { PostProvider } from "./context/PostContext";

function App() {
  const { getToken, getUser } = AuthUser();
  if (!getToken()) {
    return <Guest />
  }
  return (


    getUser().type =='user' ? <PostProvider><Auth/></PostProvider> : <PostProvider><Admin/></PostProvider>


  );
}

export default App;
