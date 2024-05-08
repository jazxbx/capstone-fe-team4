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
          {/* TODO: how to display this? */}
          <section>
            <h2>Recently added</h2>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
