import Header from "./Header"
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
      <Header />
      <div className="main-h-screen px-20 bg-amber-100">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
