import {BrowserRouter,Routes, Route} from "react-router-dom";
import Header from "./components/header";
import Home from "./views/home";
import {useDispatch, useSelector} from "react-redux";
import {setMode} from "./store/reducers/colorMode";
import PageDetails from "./views/pageDetails";

function App() {
    const {currentMode,colorSettings} = useSelector(store=>store.mode);
    const dispatch = useDispatch();
    const setColorMode = (e)=>{
        e.preventDefault();
        const mode = (currentMode ==='light')?'dark':'light';
        dispatch(setMode(mode))
    }
  return (
      <BrowserRouter>
          <div className={`app ${currentMode}`}>
              <Header  colorMode ={currentMode} colorSettings={colorSettings} changeMode={setColorMode}/>
              <div className="content container">
                  <Routes>
                      <Route path={''} element={<Home/>}></Route>
                      <Route path={'/:slug'} element={<PageDetails/>}></Route>
                  </Routes>
              </div>

          </div>
      </BrowserRouter>

  );
}

export default App;
