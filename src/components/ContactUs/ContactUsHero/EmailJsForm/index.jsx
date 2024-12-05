import React, { useState } from "react";
import emailjs from "emailjs-com";

const EmailJsForm = () => {
  // Define the form fields in an array of objects
  const fields = [
    { name: "name", label: "Name", type: "text", placeholder: "Your Name", required: true },
    { name: "email", label: "Email", type: "email", placeholder: "Your Email", required: true },
    { name: "phone", label: "Phone", type: "tel", placeholder: "Your Phone Number", required: false },
    { name: "message", label: "Message", type: "textarea", placeholder: "Your Message", required: true },
  ];

  // Initialize state dynamically based on the fields
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formData,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          // Reset the form fields
          setFormData(fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}));
        },
        (error) => {
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
    <div style={{}} className="w-full" >
      <h2 className="text-center text-xl">May I Help You!</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name} style={{ marginBottom: "10px" }}>
            <label>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                style={{ width: "100%", padding: "8px" }}
              ></textarea>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                style={{ width: "100%", padding: "8px" }}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 15px",
            border: "none",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default EmailJsForm;
