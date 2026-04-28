import { useState } from 'react';

function App() {
  // isLoggedIn নামে একটা state বানালাম
  // শুরুতে false — মানে login নেই
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Conditional Rendering
          isLoggedIn true হলে → Welcome Sajib দেখাও
          isLoggedIn false হলে → Please Login দেখাও */}
      {isLoggedIn ? <h1>Welcome Sajib!</h1> : <h1>Please Login</h1>}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {/* Button click করলে isLoggedIn এর উল্টো হয়
            false থাকলে → true হয় (Login)
            true থাকলে → false হয় (Logout) */}

        {/* Button এর নামও পরিবর্তন হয়
            isLoggedIn true হলে → "Logout" দেখাও
            isLoggedIn false হলে → "Login" দেখাও */}
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;