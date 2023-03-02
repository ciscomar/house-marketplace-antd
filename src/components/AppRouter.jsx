import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GeneralLayout } from "./GeneralLayout";
import { Explore } from "../pages/Explore";
import { SignIn } from "../pages/SignIn";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route element={<GeneralLayout />}>
          <Route path="/" element={<Explore />}/>
          <Route path="/sign-in" element={<SignIn />}/>
        </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
