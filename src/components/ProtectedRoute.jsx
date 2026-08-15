import { useAuth } from "@clerk/clerk-react";
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth();
  // wait until Clerk finishes checking login status
  if (!isLoaded) return null;
  // not signed in -> send back to home
  if (!isSignedIn) return <Navigate to="/" replace />;
  // signed in -> show the actual page
  return children;
  
};

export default ProtectedRoute;
