import { useState } from "react";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    businessAddress: "",
    businessType: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    zip: "",
    industry: "",
    website: "",
    currency: "",
    iban: "",
    phoneNumber: "",
    authCode: "",
  });

  const handleNext = () => {
    if (currentStep < 6) {
      if (isValidStep(currentStep)) {
        setCurrentStep((prev) => (prev < 6 ? ((prev + 1) as Step) : prev));
      } else {
        alert("Please fill all required fields.");
      }
    } else {
      // Сохранение данных в localStorage при завершении формы
      localStorage.setItem("formData", JSON.stringify(formData));
      alert("Data successfully saved to localStorage!");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidStep = (step: Step) => {
    if (step === 1) {
      return formData.businessAddress && formData.businessType;
    }
    if (step === 2) {
      return formData.addressLine1 && formData.city && formData.zip;
    }
    if (step === 3) {
      return formData.industry && formData.website;
    }
    if (step === 4) {
      return formData.currency && formData.iban;
    }
    if (step === 5) {
      return formData.phoneNumber && formData.authCode;
    }
    return true;
  };

  return (
    <div className="p-6 container mx-auto">
      <div className="flex justify-between">
        <div className="w-1/4">
          <ul className="timeline timeline-vertical">
            {/* Timeline items */}
          </ul>
        </div>
        <div className="w-1/2 border p-4">
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl mb-4">Business Address</h2>
              <select
                name="businessAddress"
                onChange={handleChange}
                className="border w-full rounded-xl mb-4 p-2"
              >
                <option value="">Registered business address</option>
                <option value="address1">Address 1</option>
                <option value="address2">Address 2</option>
              </select>
              <h2 className="text-xl mb-4">Type</h2>
              <select
                name="businessType"
                onChange={handleChange}
                className="rounded-xl border w-full mb-4 p-2"
              >
                <option value="">Type of business</option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
              </select>
              <h2 className="text-xl mb-4">Address</h2>
              <input
                name="addressLine1"
                placeholder="Address line 1"
                onChange={handleChange}
                className="border rounded-xl w-full mb-4 p-2"
              />
              <input
                name="addressLine2"
                placeholder="Address line 2"
                onChange={handleChange}
                className="border rounded-xl w-full mb-4 p-2"
              />
              <input
                name="city"
                placeholder="City"
                onChange={handleChange}
                className="border rounded-xl w-full mb-4 p-2"
              />
              <input
                name="zip"
                placeholder="Zip"
                onChange={handleChange}
                className="border rounded-xl w-full mb-4 p-2"
              />
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-xl mb-4">Name</h2>
              <div className="flex rounded-xl justify-between items-center gap-3">
                <input
                  name="firstName"
                  placeholder="First name"
                  onChange={handleChange}
                  className="border rounded-xl w-full mb-4 p-2"
                />
                <input
                  name="lastName"
                  placeholder="Last name"
                  onChange={handleChange}
                  className="border rounded-xl w-full mb-4 p-2"
                />
              </div>
              <h2 className="text-xl mb-4">Email</h2>
              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="border rounded-xl w-full mb-4 p-2"
              />
              <h2 className="text-xl mb-4">Address</h2>
              <input
                name="addressLine1"
                placeholder="Address line 1"
                onChange={handleChange}
                className="border rounded-xl w-full mb-4 p-2"
              />
              <input
                name="addressLine2"
                placeholder="Address line 2"
                onChange={handleChange}
                className="border rounded-xl w-full mb-4 p-2"
              />
              <input
                name="city"
                placeholder="City"
                onChange={handleChange}
                className="border rounded-xl w-full mb-4 p-2"
              />
              <input
                name="zip"
                placeholder="Zip"
                onChange={handleChange}
                className="border rounded-xl w-full mb-4 p-2"
              />
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-xl mb-4">VAT</h2>
              <input
                name="vat"
                placeholder="VAT number"
                onChange={handleChange}
                className="border rounded-xl w-full mb-4 p-2"
              />
              <h2 className="text-xl mb-4">Industry</h2>
              <input
                name="industry"
                placeholder="Industry"
                onChange={handleChange}
                className="border rounded-xl w-full mb-4 p-2"
              />
              <h2 className="text-xl mb-4">Website</h2>
              <input
                name="website"
                placeholder="Website"
                onChange={handleChange}
                className="border rounded-xl w-full mb-4 p-2"
              />
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h2 className="text-xl mb-4">Currency</h2>
              <select
                name="currency"
                onChange={handleChange}
                className="border rounded-xl w-full mb-4 p-2"
              >
                <option value="">Please select your currency</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
              <h2 className="text-xl mb-4">IBAN</h2>
              <input
                name="iban"
                placeholder="IBAN number"
                onChange={handleChange}
                className="border rounded-xl w-full mb-4 p-2"
              />
            </div>
          )}

          {currentStep === 5 && (
            <div>
              <h2 className="text-xl mb-4">Phone Number</h2>
              <input
                name="phoneNumber"
                placeholder="Phone number"
                onChange={handleChange}
                className="border rounded-xl w-full mb-4 p-2"
              />
              <h2 className="text-xl mb-4">Authentication Code</h2>
              <input
                name="authCode"
                placeholder="Authentication code"
                onChange={handleChange}
                className="border rounded-xl w-full mb-4 p-2"
              />
            </div>
          )}

          {currentStep === 6 && (
            <div>
              <h2 className="text-xl mb-4">Overview</h2>
              <p>Check your details before submission</p>
              <ul className="list-disc">
                <li>Business Address: {formData.businessAddress}</li>
                <li>Business Type: {formData.businessType}</li>
                <li>Address Line 1: {formData.addressLine1}</li>
                <li>Address Line 2: {formData.addressLine2}</li>
                <li>City: {formData.city}</li>
                <li>Zip: {formData.zip}</li>
                <li>Industry: {formData.industry}</li>
                <li>Website: {formData.website}</li>
                <li>Currency: {formData.currency}</li>
                <li>IBAN: {formData.iban}</li>
                <li>Phone Number: {formData.phoneNumber}</li>
                <li>Authentication Code: {formData.authCode}</li>
              </ul>
            </div>
          )}

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => setCurrentStep((prev) => (prev > 1 ? ((prev - 1) as Step) : prev))}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-500 text-white p-2 rounded"
            >
              {currentStep === 6 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepForm;
