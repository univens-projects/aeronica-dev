"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, Download } from "lucide-react";

interface DownloadFormProps {
  isOpen: boolean;
  onClose: () => void;
  brochureName: string;
}

export default function DownloadForm({ isOpen, onClose, brochureName }: DownloadFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    organization: "",
    designation: "",
    industry: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hide custom cursor when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
      document.documentElement.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
      document.documentElement.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
      document.documentElement.classList.remove("modal-open");
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - in production, this would POST to your backend
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Store in localStorage for now (replace with actual API in production)
    const submissions = JSON.parse(localStorage.getItem("downloadSubmissions") || "[]");
    submissions.push({
      ...formData,
      brochure: brochureName,
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem("downloadSubmissions", JSON.stringify(submissions));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      organization: "",
      designation: "",
      industry: "",
    });
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
          zIndex: 1,
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          background: "#fff",
          borderRadius: "0.8rem",
          width: "100%",
          maxWidth: "52rem",
          maxHeight: "90vh",
          overflow: "auto",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "2.5rem 3rem",
            borderBottom: "1px solid #e5e5e5",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
            <div
              style={{
                width: "4rem",
                height: "4rem",
                borderRadius: "0.4rem",
                background: "#21389A",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Download style={{ width: "2rem", height: "2rem" }} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: 600, margin: 0 }}>
                Download Brochure
              </h2>
              <p style={{ fontSize: "1.3rem", color: "#888", margin: "0.3rem 0 0" }}>
                {brochureName}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              color: "#888",
            }}
          >
            <X style={{ width: "2.4rem", height: "2.4rem" }} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "3rem" }}>
          {isSubmitted ? (
            /* Success Message */
            <div style={{ textAlign: "center", padding: "3rem 0" }}>
              <div
                style={{
                  width: "6rem",
                  height: "6rem",
                  borderRadius: "50%",
                  background: "#10B981",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 2rem",
                }}
              >
                <CheckCircle style={{ width: "3rem", height: "3rem" }} />
              </div>
              <h3 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>
                Thank You!
              </h3>
              <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: 1.7, marginBottom: "0.5rem" }}>
                Your request has been submitted successfully.
              </p>
              <p style={{ fontSize: "1.5rem", color: "#555", lineHeight: 1.7, marginBottom: "2.5rem" }}>
                Our team will connect with you shortly to share the brochure.
              </p>
              <button
                onClick={handleClose}
                style={{
                  padding: "1.2rem 3rem",
                  background: "#21389A",
                  color: "#fff",
                  border: "none",
                  borderRadius: "0.4rem",
                  fontWeight: 600,
                  fontSize: "1.4rem",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                {/* First Name */}
                <div>
                  <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, marginBottom: "0.6rem", color: "#333" }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "1.2rem",
                      border: "1px solid #e5e5e5",
                      borderRadius: "0.4rem",
                      fontSize: "1.4rem",
                      outline: "none",
                      boxSizing: "border-box",
                      position: "relative",
                      zIndex: 1,
                      cursor: "text",
                    }}
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, marginBottom: "0.6rem", color: "#333" }}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "1.2rem",
                      border: "1px solid #e5e5e5",
                      borderRadius: "0.4rem",
                      fontSize: "1.4rem",
                      outline: "none",
                      boxSizing: "border-box",
                      position: "relative",
                      zIndex: 1,
                      cursor: "text",
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, marginBottom: "0.6rem", color: "#333" }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "1.2rem",
                      border: "1px solid #e5e5e5",
                      borderRadius: "0.4rem",
                      fontSize: "1.4rem",
                      outline: "none",
                      boxSizing: "border-box",
                      position: "relative",
                      zIndex: 1,
                      cursor: "text",
                    }}
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, marginBottom: "0.6rem", color: "#333" }}>
                    Mobile No *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "1.2rem",
                      border: "1px solid #e5e5e5",
                      borderRadius: "0.4rem",
                      fontSize: "1.4rem",
                      outline: "none",
                      boxSizing: "border-box",
                      position: "relative",
                      zIndex: 1,
                      cursor: "text",
                    }}
                  />
                </div>

                {/* Organization */}
                <div>
                  <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, marginBottom: "0.6rem", color: "#333" }}>
                    Organization/Company *
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "1.2rem",
                      border: "1px solid #e5e5e5",
                      borderRadius: "0.4rem",
                      fontSize: "1.4rem",
                      outline: "none",
                      boxSizing: "border-box",
                      position: "relative",
                      zIndex: 1,
                      cursor: "text",
                    }}
                  />
                </div>

                {/* Designation */}
                <div>
                  <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, marginBottom: "0.6rem", color: "#333" }}>
                    Designation/Job Title *
                  </label>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "1.2rem",
                      border: "1px solid #e5e5e5",
                      borderRadius: "0.4rem",
                      fontSize: "1.4rem",
                      outline: "none",
                      boxSizing: "border-box",
                      position: "relative",
                      zIndex: 1,
                      cursor: "text",
                    }}
                  />
                </div>

                {/* Industry */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={{ display: "block", fontSize: "1.2rem", fontWeight: 500, marginBottom: "0.6rem", color: "#333" }}>
                    Industry *
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "1.2rem",
                      border: "1px solid #e5e5e5",
                      borderRadius: "0.4rem",
                      fontSize: "1.4rem",
                      outline: "none",
                      boxSizing: "border-box",
                      background: "#fff",
                      cursor: "pointer",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <option value="">Select Industry</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Defence">Defence</option>
                    <option value="Infrastructure">Infrastructure</option>
                    <option value="Oil & Gas">Oil & Gas</option>
                    <option value="Mining">Mining</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Survey & Mapping">Survey & Mapping</option>
                    <option value="Security">Security</option>
                    <option value="Government">Government</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  padding: "1.4rem",
                  background: isSubmitting ? "#888" : "#21389A",
                  color: "#fff",
                  border: "none",
                  borderRadius: "0.4rem",
                  fontWeight: 600,
                  fontSize: "1.5rem",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  marginTop: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                {isSubmitting ? (
                  <>
                    <span
                      style={{
                        width: "1.8rem",
                        height: "1.8rem",
                        border: "2px solid rgba(255,255,255,0.3)",
                        borderTopColor: "#fff",
                        borderRadius: "50%",
                        animation: "spin 0.8s linear infinite",
                      }}
                    />
                    Submitting...
                  </>
                ) : (
                  "Submit & Download"
                )}
              </button>

              <p style={{ fontSize: "1.2rem", color: "#888", textAlign: "center", marginTop: "1.5rem" }}>
                Our team will connect with you shortly to share the requested brochure.
              </p>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
