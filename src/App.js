import "./App.css";
import Body from "./Component/Body";
import appStore from "./Utils/appStore";
import {Provider} from "react-redux"

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
