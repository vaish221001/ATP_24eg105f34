import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router';

function RootLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
