// Validation functions
const isValidName = (name) => {
    // Name can be 2-30 characters, only alphabets and spaces allowed
    return /^[a-zA-Z ]{2,30}$/.test(name);
  };
  
  const isValidEmail = (email) => {
    // General regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const isValidPassword = (password) => {
    // Password should contain 6-16 characters, at least one number and one special character
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
  };
  
  // Validation message helper
  const getValidationMessage = (field, isValid, message) => {
    return isValid ? null : `Please provide a valid ${field}. ${message || ""}`;
  };
  
  // Sign-up data validation
  export const checkValidSignUpData = (name, email, password) => {
    const nameError = getValidationMessage("name", isValidName(name));
    const emailError = getValidationMessage("email", isValidEmail(email));
    const passwordError = getValidationMessage("password", isValidPassword(password), "It must contain 6-16 characters with at least one number and one special character.");
  
    return nameError || emailError || passwordError || null;
  };
  
  // Sign-in data validation
  export const checkValidSignInData = (email, password) => {
    const emailError = getValidationMessage("email", isValidEmail(email));
    const passwordError = getValidationMessage("password", isValidPassword(password), "It must contain at least one number and one special character.");
    
    return emailError || passwordError || null;
  };
  