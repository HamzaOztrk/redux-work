import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
// import { legacy_createStore as createStore } from "redux"
import {Provider} from "react-redux"
// import reducer from "./redux"
import {store} from "./redux"

function App() {
  
  
  return (
    <div className="app">
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
      
    </div>
  );
}

export default App;
