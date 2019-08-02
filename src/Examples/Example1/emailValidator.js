
export const emailValidator = email => {
  // const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  // const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\w{2,3})+$/);
  const emailRegex = new RegExp(/^\w+([-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  return emailRegex.test(email);
};