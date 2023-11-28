import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import LayoutWithHeaderSidebar from './LayoutWithHeaderSidebar';
import LayoutWithoutHeaderSidebar from './LayoutWithoutHeaderSidebar';

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LayoutWithHeaderSidebar> <Dashboard /> </LayoutWithHeaderSidebar>} />
          <Route path="/" element={<LayoutWithHeaderSidebar> <Dashboard /> </LayoutWithHeaderSidebar>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes;