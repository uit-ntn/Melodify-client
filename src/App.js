import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { LoggedContext } from "./Components/Login-SignUp/LoggedContext";
import { publicRoutes, privateRoutes, adminRoutes } from "./routes/routes";
import SideBar from "./Components/SideBar/SideBar";
import SideBarForAdmin from "./Components/SideBar/SideBarForAdmin";
import SideBarForDistributor from "./Components/SideBar/SideBarForDistributor";
import "./App.css";
import "tailwindcss/tailwind.css";


function App() {

  const { logged } = useContext(LoggedContext)


  // dành cho người dùng chưa signin
  let userID = 0;
  let accType = 0;


  const user = localStorage.getItem('user');
  // Set data nếu người dùng đã đăng nhập
  if (user != null) {
    const userJson = JSON.parse(user);
    userID = userJson.user_id;
    accType = userJson.accountTypeID;
  }
  return (
    <Router>
      <div className="relative flex">
        {logged ?
          (accType === 3 ? <SideBarForAdmin /> :
            accType === 4 ? <SideBarForDistributor /> : null)
          :
          <SideBar />}
        <div className="flex-1 flex flex-col bg-black">
          <div className="flex-1 pb-40">
            {
              (userID === 0) ?
                <Routes>
                  {publicRoutes.map((route, index) => {
                    const Element = route.element;
                    return (
                      <Route
                        key={index}
                        path={route.path}
                        element={<Element />}
                      />
                    );
                  })}
                </Routes>
                :
                (accType === 3) ?
                  <Routes>
                    {privateRoutes.map((route, index) => {
                      const Element = route.element;
                      return (
                        <Route
                          key={index}
                          path={route.path}
                          element={<Element />}
                        />
                      );
                    })}
                  </Routes>
                  :
                  (accType === 4) ?
                    <Routes>
                      {adminRoutes.map((route, index) => {
                        const Element = route.element;
                        return (
                          <Route
                            key={index}
                            path={route.path}
                            element={<Element />}
                          />
                        );
                      })}
                    </Routes>
                    :
                    <Routes>
                    </Routes>
            }
          </div>
        </div>
        {/* <div className="fixed bottom-0 w-full">
        <Play setPlayingID={setPlayingID} setPlayingTrack={setPlayingTrack} playingData={playingData} play={play} isPlaying={isPlaying} setPlayingData={setPlayingData} playingTrack={playingTrack} trackInAlbum={trackInAlbum} setIsPlaying={setIsPlaying} setStatus={setStatus} setProgressMs={setProgressMs} setDevice={setDevice} />
      </div> */}
      </div>
    </Router>


  );
}

export default App;
