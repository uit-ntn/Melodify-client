import "./App.css";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import { publicRoutes, privateRoutes, adminRoutes } from "./routes/routes";
import "tailwindcss/tailwind.css";


function App() {
  // dành cho người dùng chưa signin
  const userID = 0;
  const accType = 0;


  const user = localStorage.getItem('user');
  // Set data nếu người dùng đã đăng nhập
  if (user != null) {
    const userJson = JSON.parse(user);
    userID = userJson.user_id;
    accType = userJson.accountTypeID;
  }
  return (
      <Router>
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
      </Router>
  );
}

export default App;
