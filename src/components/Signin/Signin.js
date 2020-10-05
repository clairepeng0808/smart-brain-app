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
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      signInEmail: "",
      signInPassword: "",
      error: null,
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { signInEmail, signInPassword } = this.state;
    const { loadUser, onRouteChange } = this.props;
    const res = await fetch(
      "https://radiant-forest-01776.herokuapp.com/signin",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: signInEmail,
          password: signInPassword,
        }),
      }
    );
    const data = await res.json();

    if (res.status !== 200) {
      this.setState({ error: data });
    } else {
      loadUser(data);
      onRouteChange("home");
      console.log(data.name);
    }
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <ValidatorForm
          noValidate
          ref="form"
          method="POST"
          style={{
            marginTop: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={this.onSubmit}
        >
          <Avatar
            style={{
              backgroundColor: "#64b3f4",
              margin: "8px auto",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            style={{ fontFamily: "Nunito", fontWeight: "bold" }}
          >
            Sign In
          </Typography>
          <div
            style={{
              width: "100%", // Fix IE 11 issue.
              marginTop: "8px",
            }}
          >
            <TextValidator
              variant="outlined"
              onChange={this.onEmailChange}
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={this.state.signInEmail}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
              autoComplete="email"
              // autoFocus
            />
            <TextValidator
              required
              variant="outlined"
              onChange={this.onPasswordChange}
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.signInPassword}
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
              color="primary"
              style={{
                margin: "24px 0 16px 0",
                backgroundColor: "#64b3f4",
                fontFamily: "Nunito",
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  style={{ cursor: "pointer", fontFamily: "Nunito" }}
                  variant="body2"
                  onClick={() => onRouteChange("register")}
                >
                  {"Don't have an account? Sign Up"}
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

export default SignIn;
