import Login from "./Login";
import Main from "./Main";
import ModalWindow from "./ModalWindow";
import Weather from "./store/Weather";
import { observer } from "mobx-react-lite";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = observer(() => {
  return (
    <GoogleOAuthProvider clientId="970656174556-2r30fr4pso1dsbcqtt3j09r5mb9rrvgc.apps.googleusercontent.com">
      <Login />
      <Main />
      {Weather.modalWindow && <ModalWindow />}
    </GoogleOAuthProvider>
  );
});

export default App;
