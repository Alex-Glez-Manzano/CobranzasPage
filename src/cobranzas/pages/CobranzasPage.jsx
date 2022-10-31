
import { Route, BrowserRouter} from 'react-router-dom';
import { SideBar } from '../components';
import { Sidebar2 } from '../components/Sidebar2';
import { CobranzasLayout } from '../layout/CobranzasLayout';
import { NothingSelectedView, AlumnosView,CobranzasView,DocumentosView,PortalView,ReferenciasView } from "../views";
const drawerWidth=180;
export const CobranzasPage = () => {
  return (
    <CobranzasLayout>
      {/* <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non impedit eaque officiis in aperiam expedita fugit consequatur placeat, officia minima mollitia omnis quia suscipit debitis sint aliquid, eum tempora!</Typography> */}
      <AlumnosView/>
      {/* <NothingSelectedView /> */}
      {/* <ReferenciasView/>
      <PortalView/>
      <CobranzasView/>
      <DocumentosView/> */}
    </CobranzasLayout>
  )
}
