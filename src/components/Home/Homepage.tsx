import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { getCookie } from "../../utils/Auth/signupUtils";
import LandingPage from "./LandingPage";

interface IIsLoggedIn {
  isLoading: boolean;
  isLoggedIn: boolean;
}

const Homepage: React.FC = () => {

  const navigate = useNavigate();
  const [isLogIn, setIsLogIn] = useState<IIsLoggedIn>({
    isLoading: true,
    isLoggedIn: false,
  });

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        if (!getCookie("email")) {
          navigate("/auth/signin");
          setIsLogIn({ isLoading: false, isLoggedIn: false });
          toast.dismiss();
          toast.error("Not authorized");
          return;
        }
        setIsLogIn({ isLoading: false, isLoggedIn: true });
      } catch (error) {
        navigate("/auth/signin");
        setIsLogIn({ isLoading: false, isLoggedIn: false });
        toast.dismiss();
        toast.error("something went wrong!!!");
        console.log(error);
      }
    };

    checkAuthentication();
  }, []);

  if (isLogIn.isLoading) return <p>Loading...</p>;
  else if (isLogIn.isLoggedIn) return <LandingPage />;
  else return <p>redirectin...</p>;
};

export default Homepage;