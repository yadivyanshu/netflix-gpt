export const Validate = (email, password, fullname = "Divyanshu Yadav") => {
  const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  const isFullname =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      fullname
    );

  if (!isFullname) return "FullName is not valid";
  if (!isEmail) return "Email is not valid";
  if (!isPass) return "Password is not valid";

  return null;
};
