import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
// import TextField from "@material-ui/core/TextField"
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      error: null,
    };
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const { loadUser, onRouteChange } = this.props;
    const res = await fetch(
      "https://radiant-forest-01776.herokuapp.com/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      }
    );
    const data = await res.json();

    if (res.status !== 200) {
      this.setState({ error: data });
    } else {
      loadUser(data);
      onRouteChange("home");
    }
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <ValidatorForm
          noValidate
          method="POST"
          onSubmit={this.onSubmit}
          style={{
            marginTop: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar style={{ backgroundColor: "#64b3f4", margin: "8px auto" }}>
            <LockOutlinedIcon style={{ color: "#fff" }} />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            style={{ fontFamily: "Nunito", fontWeight: "bold" }}
          >
            Register
          </Typography>
          <div
            style={{
              width: "100%", // Fix IE 11 issue.
              marginTop: "8px",
            }}
          >
            <TextValidator
              required
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={this.onNameChange}
              value={this.state.name}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <TextValidator
              required
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.onEmailChange}
              value={this.state.email}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />
            <TextValidator
              required
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.onPasswordChange}
              value={this.state.password}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{
                color: "#ffffff",
                margin: "24px 0 16px 0",
                backgroundColor: "#64b3f4",
                fontFamily: "Nunito",
              }}
            >
              Register
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  style={{ cursor: "pointer", fontFamily: "Nunito" }}
                  variant="body2"
                  onClick={() => onRouteChange("signin")}
                >
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>

            <Typography style={{ color: "#f94144", margin: "20px 0" }}>
              {this.state.error}
            </Typography>
          </div>
        </ValidatorForm>
      </Container>
    );
  }
}

export default Register;
