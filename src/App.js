import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

function App() {
  console.log(process.env);

  return (
    <div className="App">
      <Navbar />
      <Signup />
      {/* 
  
  //TODO:Route
  //TODO:Signin
  //TODO:Signup
  //TODO:forgotpassword
  //....
  */}
    </div>
  );
}

export default App;
