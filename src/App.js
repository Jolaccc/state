import "./App.css";
import ClassComponent from "./components/classComponent/ClassComponent";
import UserComponent from "./components/classComponent/ClassComponent1";
import FuncComponent from "./components/functionComponent/FuncComponent";
import UserProfile from "./components/userProfile/UserProfile";

function App() {
  const user = {
    firstname: "John",
    lastname: "Doe",
  };

  return (
    <div className="App">
      <ClassComponent />
      <FuncComponent />
      <br></br>
      <UserProfile firstname={user.firstname} lastname={user.lastname} />
      <UserComponent />
    </div>
  );
}

export default App;
