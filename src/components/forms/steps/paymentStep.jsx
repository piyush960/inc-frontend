import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import FormButton from "../FormButton";
import {
  AlertCircle,
} from "lucide-react";
import EventDetail from "../eventDetail";
import { validate_wordCount } from "../utils";

const PaymentStep = ({ imagePath, amount, prevStep, isInternational = false }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    transactionId: "",
  });

  const validate = () => {
    let tempErrors = {};

    // Check if transaction ID is exactly 12 digits
    if (!formData.transactionId) {
      tempErrors.transactionId = "Transaction ID is required";
    } else if (!/^\d{12}$/.test(formData.transactionId)) {
      tempErrors.transactionId = "Transaction ID must be exactly 12 digits";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Only allow digits and limit to 12 characters
    if (name === "transactionId" && !/^\d*$/.test(value)) return;
    if (name === "transactionId" && value.length > 12) return;

    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Payment verification submitted!", formData);
      alert("Payment verification submitted successfully!");
    }
  };

  return (
    <form
      className="w-full bg-tertiary p-4 sm:p-10 flex flex-col gap-8"
      onSubmit={handleSubmit}
    >
      <div className="space-y-8">
        {/* Event Details Section */}
        <EventDetail amount={amount}/>

        {/* Payment Section */}
        {!isInternational && (
          <div className="space-y-8">
            <div className="bg-blue-900/20 p-6 border border-blue-500/30">
              <h3 className="text-xl font-semibold mb-4 text-center text-blue-100">
                Scan the QR to pay ₹ {amount}/-
              </h3>
              <div className="flex justify-center">
                <div className="bg-white p-6 max-w-xs">
                  <img
                    src={imagePath}
                    alt="Payment QR Code"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Transaction ID Input */}
            <div className="space-y-2">
              <Label required className="text-lg flex items-center gap-2">
                Transaction/UTR ID
                <AlertCircle
                  className="h-4 w-4 text-blue-400"
                  title="12 digit transaction ID required"
                />
              </Label>
              <Input
                type="text"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleInputChange}
                validate={(value) => {
                  return !/^\d*$/.test(value) || !/^\d{12}$/.test(formData.transactionId)
                }}
                errorMessage={"Transaction ID must be exactly 12 digits"}
                placeholder="Please enter the 12-digit Transaction ID received after payment"
                className=""
              />
            </div>
          </div>
        )}

        {/* Show message for international participants */}
        {isInternational && (
          <div className="bg-green-900/20 p-6 border border-green-500/30 text-center">
            <h3 className="text-xl font-semibold text-green-100">
              Free Registration for International Participants
            </h3>
            <p className="text-gray-300 mt-2">
              You can proceed without payment
            </p>
          </div>
        )}

        {/* Submit Button */}
        <div className="mt-6 flex w-full justify-between">
          <FormButton isPrev onClick={() => prevStep()}/>
          <FormButton loading={loading} text={'Submit'} />
        </div>
      </div>
    </form>
  );
};

export default PaymentStep;
