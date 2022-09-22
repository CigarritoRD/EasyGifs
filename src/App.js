import SearchBar from "./components/SearchBar";
import Home from "./pages/Home";
import Searched from "./pages/Searched";
import { Route, Link } from "wouter";
import Gif from "./pages/Gif";

const styles = {
  Header: "text-5xl font-bold text-center py-5 bg-black text-white",
};
function App() {
  return (
    <div className='App h-screen bg-slate-900 '>
      <Link href='/'>
        <button className='mx-auto w-full'>
          <h1 className={styles.Header}>Easy Gifs</h1>
        </button>
      </Link>
      <SearchBar />
      <Route path='/' component={Home} />
      <Route path='/Searched/:keyword' component={Searched} />
      <Route path='/Gif/:id' component={Gif} />
    </div>
  );
}

export default App;
