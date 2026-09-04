import { lazy } from "react";
import { Route, Routes } from "react-router";
import KasirPOS from "../pages/kasirpos";
import MyTSel from "../pages/mytsel";
// import Pesantren from "../pages/pesantren";
// import Growlab from "../pages/growlab";
// import Subgame from "../pages/subgame";
const LandingPage = lazy(() => import("../components/landingPage"));
const Growlab = lazy(() => import("../pages/growlab"));
const Pesantren = lazy(() => import("../pages/pesantren"));
const Subgame = lazy(() => import("../pages/subgame"));

function Approutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/project/maqis" element={<Pesantren />} />
      <Route path="/project/growlab" element={<Growlab />} />
      <Route path="/project/subgame" element={<Subgame />} />
      <Route path="/project/kasirpos" element={<KasirPOS />} />
      <Route path="/project/mytsel" element={<MyTSel />} />
    </Routes>
  );
}

export default Approutes;
