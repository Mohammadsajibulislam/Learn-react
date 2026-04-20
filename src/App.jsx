function Navbar() {
  return (
    <nav>
      <h2>Code By Sajib</h2>
    </nav>
  );
}
function Footer() {
  return (
    <p>© 2026 Code By Sajib</p>
  );
}

function Hero() {
  return (
    <div>
      <h1>Code By Sajib</h1>
      <p>Welcome to my channel, this is my coding channel, where i share my coding journey</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;