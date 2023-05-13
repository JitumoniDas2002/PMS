import React from "react";

import { useContext, createContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
  getAdditionalUserInfo,
  updateProfile,
} from "firebase/auth";
import { auth } from "../config/firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const getAdditionalInfo = (user) => {
    return getAdditionalUserInfo(user);
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const verifyEmail = (user) => {
    sendEmailVerification(user);
  };

  const updateUserPassword = (user, password) => {
    return updatePassword(user, password);
  }

  const updateUserInfo = (user, info) => {
    updateProfile(user, info);
  }

  const logoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <UserContext.Provider
      value={{
        user,
        createUser,
        loginUser,
        logoutUser,
        verifyEmail,
        resetPassword,
        updateUserPassword,
        getAdditionalInfo,
        updateUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(UserContext);
};
