import "./App.css";
import { Typography, AppBar } from "@material-ui/core";

import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

function App() {
  return (
    <div>
      <AppBar position="static" color="inherit">
        <Typography variant="h4" align="center">
          Video Chat
        </Typography>
      </AppBar>
      <VideoPlayer></VideoPlayer>
      <Options>
        <Notifications></Notifications>
      </Options>
    </div>
  );
}

export default App;
