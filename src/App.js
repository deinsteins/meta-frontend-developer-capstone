import { Route, Routes } from "react-router-dom";
import pages from "./utils/pages";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";
import Bookings from "./components/pages/Bookings/index";
import ConfirmedBooking from "./components/pages/Bookings/ConfirmedBooking";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get("home").path} element={<Home />} />
          <Route path={pages.get("bookings").path} element={<Bookings />} />
          <Route
            path={pages.get("confirmedBooking").path}
            element={<ConfirmedBooking />}
          />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
