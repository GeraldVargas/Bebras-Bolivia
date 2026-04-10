// User business logic services
const userService = {
  validateEmail: (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  generateUserId: () => {
    return 'USER_' + Date.now();
  },

  // Add more service methods here
};

export default userService;
