import { Header } from './common/Header';
import { Navbar } from './common/Navbar';
import { Card } from './components/Card';
import { Search } from './components/Search';
import { Footer } from './pages/Footer';

export function App() {
  return (
    <div className='container'>
      <div className='layout'>
        <Header />
        <Navbar />
        <div className='searchContainer'>
          <Search />
        </div>
        <h2 className='heading'>Recently added</h2>
        <main className='content'>
          <Card />
        </main>
      </div>
      <Footer />
    </div>
  );
}
