import { Route, Routes } from "react-router-dom";
import pages from "./utils/pages";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get("home").path} element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
