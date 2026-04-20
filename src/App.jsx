import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Navbar title="আমার নতুন চ্যানেল"/>
      <Hero title="Code By Sajib"
       description = "Welcome to my channel, this is my coding channel, where i share my coding journey" />
      <Footer title="© 2026 Code By Sajib" />
    </div>
  );
}

export default App;
