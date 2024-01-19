import toast from "react-hot-toast";

const validateSignInInput = (email: string, password: string) => {
  // Define regex patterns
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?!\s*$).+/;

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  if (!isEmailValid) {
    toast.error("Email is badly formatted");
    return false;
  }
  if (!isPasswordValid) {
    toast.error("Password cannot be empty.");
    return false;
  }
  return true;
};

const checkCred = (emailClient: string, passwordClient: string) => {
  return new Promise((res : (value: string) => void, rej : (value: string) => void) => {
    try {

      const userData = localStorage.getItem('user');
      if(!userData){
        rej('Please Signup first')
        return;
      }
      const {email, password} = JSON.parse(userData);
      if(email === emailClient && password === passwordClient){
        res('Login Successfully');
        return;
      }
      rej('Invalid Credentials')
    } catch (error) {
      rej("something went wrong");
    }
  });
};

export { validateSignInInput, checkCred };
