import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Frame7554 } from "../ui-components";
import awsconfig from '../aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(awsconfig);

const Dashboard1 = () => {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

//  if (!authenticated) {
  // Redirect
//  alert("Not Authenticated in dashboard");
//  return <Navigate replace to="/login" />;
//  } else {
    return (
      <div>
        <p>Welcome to your Dashboard</p>
        <Frame7554 />
      </div>
    );
//  }
};

  export default Dashboard1;