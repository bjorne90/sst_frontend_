import React from 'react';

const SignupForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For simplicity, let's just log a message
    console.log('Form submitted');
    onClose();
  };

  return (
    <div className="signup-form">
      <h2>Sign Up for a Course</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div>
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        {/* Add more form fields as needed */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
