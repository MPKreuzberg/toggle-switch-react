import profile from "./assests/profile.jpeg"
import { useState } from "react";
import "./App.css";
import {
  Card,
  CardHeader,
  Switch,
  CardContent,
  Box,
  Container,
  Typography,
  FormGroup,
  FormControlLabel,
  CssBaseline,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// defining theme settings

const light = {
  palette: {
    mode: "light",
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#3ea6ff",
    },
  },
};

const dark = {
  palette: {
    mode: "dark",
    primary: {
      main: "#f44336",
    },
    secondary: {
      main: "#3ea6ff",
    },
  },
};

function App() {
  //set the light theme default theme
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  //function switched with toggle button
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <div className="App">
      <ThemeProvider
        theme={isDarkTheme ? createTheme(dark) : createTheme(light)}
      >
        <CssBaseline />
        <Container>
          <div classname="App">
            <Box component="div" p={4}>
              {" "}
            </Box>
            <Card>
              <CardHeader
                action={
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch checked={isDarkTheme} onChange={changeTheme} />
                      }
                      label="Dark Theme"
                    />
                  </FormGroup>
                }
              />
              <Typography variant="h3" component="h3">
                <div className="container">
                  <div className="hPage">Hi i'm Igor !</div>
                  
                </div>
              </Typography>
              <img src = {profile} alt="profile" className = "App-logo" />
              <Typography className="body1" variant="body1" >
                Dark mode is { isDarkTheme ? "ON" : "OFF" }
              </Typography>
            </Card>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
