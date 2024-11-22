import React, { useState } from 'react';

const LoginOrRegister = () => {
  // State for Login form
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  // State for Register form
  const [registerForm, setRegisterForm] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  // Handle Login input changes
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle Register input changes
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', loginForm);
    // Clear form
    setLoginForm({ email: '', password: '', rememberMe: false });
  };

  // Handle Register form submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register Data:', registerForm);
    // Clear form
    setRegisterForm({ email: '', username: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="mx-auto p-3 mb-10 mt-14  flex flex-col justify-center items-start md:flex-row gap-8">
      {/* Login Form */}
      <div className="bg-white shadow-lg rounded-lg sm:p-12 p-7 pt-10 w-full max-w-full sm:max-w-xl">
        <h2 className="text-4xl font-bold text-[#227179] -mt-5 mb-6">Login</h2>
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div className="mb-7">
            <label
              htmlFor="login-email"
              className="block text-[15px] mb-4 font-medium text-black"
            >
              Username or email *
            </label>
            <input
              type="text"
              id="login-email"
              name="email"
              value={loginForm.email}
              onChange={handleLoginChange}
              required
              placeholder="Email or username"
              className="mt-1 w-full px-4 py-3 border border-gray-200 shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label
              htmlFor="login-password"
              className="block text-[15px] mb-4 font-medium text-black"
            >
              Password *
            </label>
            <input
              type="password"
              id="login-password"
              name="password"
              value={loginForm.password}
              onChange={handleLoginChange}
              required
              placeholder="Password"
              className="mt-1 w-full px-4 py-3 border border-gray-200 shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              name="rememberMe"
              checked={loginForm.rememberMe}
              onChange={handleLoginChange}
              className="h-4 w-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-24 bg-[#3dbca8] text-white py-4 text-sm font-medium hover:bg-emerald-500 focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Login
          </button>
        </form>
      </div>

      {/* Register Form */}
      <div className="bg-white shadow-lg rounded-lg sm:p-12 p-7 pt-10 w-full max-w-full sm:max-w-xl">
        <h2 className="text-4xl font-bold text-[#227179] -mt-5 mb-6">Register</h2>
        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="register-email"
              className="block text-[15px] mb-4 font-medium text-black"
            >
              Email address *
            </label>
            <input
              type="email"
              id="register-email"
              name="email"
              value={registerForm.email}
              onChange={handleRegisterChange}
              required
              placeholder="Email address"
              className="mt-1 w-full px-4 py-3 border border-gray-200 shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label
              htmlFor="register-username"
              className="block text-[15px] mb-4 font-medium text-black"
            >
              Username *
            </label>
            <input
              type="text"
              id="register-username"
              name="username"
              value={registerForm.username}
              onChange={handleRegisterChange}
              required
              placeholder="Username"
              className="mt-1 w-full px-4 py-3 border border-gray-200 shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label
              htmlFor="register-password"
              className="block text-[15px] mb-4 font-medium text-black"
            >
              Password *
            </label>
            <input
              type="password"
              id="register-password"
              name="password"
              value={registerForm.password}
              onChange={handleRegisterChange}
              required
              placeholder="Password"
              className="mt-1 w-full px-4 py-3 border border-gray-200 shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div>
            <label
              htmlFor="register-password-confirm"
              className="block text-[15px] mb-4 font-medium text-black"
            >
              Confirm Password *
            </label>
            <input
              type="password"
              id="register-password-confirm"
              name="confirmPassword"
              value={registerForm.confirmPassword}
              onChange={handleRegisterChange}
              required
              placeholder="Confirm Password"
              className="mt-1 w-full px-4 py-3 border border-gray-200 shadow-sm focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <button
            type="submit"
            className="w-32 bg-[#3dbca8] text-white py-4 text-sm font-medium hover:bg-emerald-500 focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginOrRegister;
