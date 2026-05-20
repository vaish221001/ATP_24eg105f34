import Navbar from './components/Navbar';
import UsersList from './components/UsersList';
import Footer from './components/Footer';
import { users } from './users';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <section className="assignment-section">
        <div className="layout-box">
          <Navbar />
          <UsersList users={users} />
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
