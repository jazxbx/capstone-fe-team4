import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';
import { Footer } from './pages/Footer';

export function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <Navbar />
        <main className='main'>
          <div className='searchContainer'>
            <Search />
          </div>
          <div>Hello this is APP</div>
          <div>Test div</div>
        </main>
      </div>
      <Footer />
    </>
  );
}
