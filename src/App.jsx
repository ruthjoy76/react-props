import "./App.css";
import List from "./components/List";

function App() {
  const todos = [
    "Learn React",
    "Learn Redux",
    "Learn GraphQL",
    "Learn MongoDB",
    "Learn NodeJS",
    "Learn Express",
    "Learn AWS",
  ];

  return (
    <div className="container">
      <List items={todos} />
    </div>
  );
}

export default App;










//import "./App.css";
//import List from "./components/List";

//function App() {
//  return (
//    <div className="container">
 //     <List items={["learn react", "learn redux", "learn graphql", "learn mongodb", "learn nodejs", "learn nodeexpress", "learn AWS"]} />
//    </div>
//  );
//}

//export default App;