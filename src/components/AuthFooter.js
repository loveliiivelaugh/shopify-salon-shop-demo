import React from "react";
import { Link } from "./../util/router.js";
import "./AuthFooter.scss";

function AuthFooter(props) {
  const linkColor = {color:" #e67c99"}
  return (
    <div className="AuthFooter text-center mt-4" style={{textColor:'#000'}}>
      {props.type === "signup" && (
        <>
          Have an account already?
          <Link to="/auth/signin" style={linkColor}>{props.typeValues.linkTextSignin}</Link>
        </>
      )}

      {props.type === "signin" && (
        <>
          <Link to="/auth/signup" style={linkColor}>{props.typeValues.linkTextSignup}</Link>
          <Link to="/auth/forgotpass" style={linkColor}>
            {props.typeValues.linkTextForgotpass}
          </Link>
        </>
      )}
    </div>
  );
}

export default AuthFooter;
