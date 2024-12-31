import React, { useState } from "react";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import SubmitButton from "../submitButton";

const AddMemberStep = ({ minMembers = 1, maxMembers = 5, onSave }) => {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    idCard: null,
  });
  const [errors, setErrors] = useState({});
  const [memberError, setMemberError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateMember = (member) => {
    let tempErrors = {};
    if (!member.name) tempErrors.name = "Name is required.";
    if (!/\S+@\S+\.\S+/.test(member.email))
      tempErrors.email = "Please enter a valid email.";
    if (!/^\+?\d+$/.test(member.phone))
      tempErrors.phone = "Phone number must be valid.";
    if (!member.gender) tempErrors.gender = "Gender is required.";
    if (!member.idCard) tempErrors.idCard = "ID card is required.";
    return tempErrors;
  };

  const handleAddMember = () => {
    const validationErrors = validateMember(newMember);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (members.length >= maxMembers) {
      setMemberError(`You can only add up to ${maxMembers} members.`);
      return;
    }

    setMembers([...members, { ...newMember, id: Date.now() }]);
    setNewMember({
      name: "",
      email: "",
      phone: "",
      gender: "",
      idCard: null,
    });
    setErrors({});
    setMemberError("");
  };

  const handleDeleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
    setMemberError("");
  };

  const handleSubmit = async () => {
    if (members.length < minMembers) {
      setMemberError(
        `You need at least ${minMembers} team members to proceed.`
      );
      return;
    }
    if (members.length > maxMembers) {
      setMemberError(`You can't add more than ${maxMembers} in a team.`);
      return;
    }

    setLoading(true);
    try {
      if (onSave) onSave(members);
      alert("Team members saved successfully!");
    } catch (error) {
      console.error("Error saving members:", error);
      alert("An error occurred while saving members.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="space-y-6 border border-white max-w-2xl m-auto bg-black md:p-12 p-4 rounded-2xl"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold text-white">Add Team Members</h2>
      <p className="text-gray-400 text-sm">
        <strong>Note:</strong> The first member added will be the{" "}
        <span className="text-blue-500 font-bold">Team Leader</span>.
      </p>

      {/* Add New Member Form */}
      <div className="space-y-4">
        <div>
          <Label required>Name</Label>
          <Input
            name="name"
            value={newMember.name}
            onChange={(e) =>
              setNewMember({ ...newMember, name: e.target.value })
            }
            placeholder="Enter member's name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <Label required>Email</Label>
          <Input
            name="email"
            value={newMember.email}
            onChange={(e) =>
              setNewMember({ ...newMember, email: e.target.value })
            }
            placeholder="Enter member's email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Phone and Gender Side by Side */}
        <div className="flex gap-4">
          <div className="flex-1">
            <Label required>Phone</Label>
            <Input
              name="phone"
              value={newMember.phone}
              onChange={(e) =>
                setNewMember({ ...newMember, phone: e.target.value })
              }
              placeholder="Phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          <div className="flex-1">
            <Label required>Gender</Label>
            <select
              name="gender"
              value={newMember.gender}
              onChange={(e) =>
                setNewMember({ ...newMember, gender: e.target.value })
              }
              className="w-full p-2 bg-gray-700 border rounded-md text-white"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender}</p>
            )}
          </div>
        </div>

        {/* ID Card Photo Upload */}
        <div>
          <Label required>ID Card</Label>
          <div className="relative bg-gray-800 border border-gray-700 rounded-md p-2">
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setNewMember({
                  ...newMember,
                  idCard: e.target.files[0],
                })
              }
              className="hidden"
              id="upload-id-card"
            />
            <label
              htmlFor="upload-id-card"
              className="cursor-pointer flex items-center justify-center text-sm bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Upload ID Card
            </label>
            {newMember.idCard && (
              <p className="text-sm mt-1 text-gray-400">
                {newMember.idCard.name}
              </p>
            )}
          </div>
          {errors.idCard && (
            <p className="text-red-500 text-sm">{errors.idCard}</p>
          )}
        </div>

        <button
          type="button"
          onClick={handleAddMember}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Member
        </button>
      </div>

      {/* Added Members Section */}
      <div className="mt-8 space-y-4">
        <h3 className="text-lg font-semibold text-white">
          Team Members ({members.length}/{maxMembers})
        </h3>
        {members.map((member, index) => (
          <div
            key={member.id}
            className={`relative flex items-center justify-between bg-gray-800 p-4 rounded-md text-white group ${
              index === 0 ? "border-l-4 border-blue-500" : ""
            }`}
          >
            <span className={`text-lg ${index === 0 ? "font-bold" : ""}`}>
              {member.name}
              {index === 0 && (
                <span className="ml-2 text-blue-500">(Team Leader)</span>
              )}
            </span>

            {/* Hover Details Card */}
            <div className="absolute top-full left-0 mt-2 w-64 p-4 bg-gray-900 text-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <p className="text-sm font-semibold text-white mb-2">
                Member Details:
              </p>
              <p>
                <span className="font-bold">Name:</span> {member.name}
              </p>
              <p>
                <span className="font-bold">Email:</span> {member.email}
              </p>
              <p>
                <span className="font-bold">Phone:</span> {member.phone}
              </p>
              <p>
                <span className="font-bold">Gender:</span> {member.gender}
              </p>
            </div>
            <button
              onClick={() => handleDeleteMember(member.id)}
              className="text-red-500 hover:text-red-600 transform hover:scale-110 transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="currentColor"
              >
                <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
              </svg>
            </button>
          </div>
        ))}

        {/* Constraint Error */}
        {memberError && (
          <p className="text-red-500 text-sm mt-4">{memberError}</p>
        )}
      </div>

      {/* Submit Button */}
      <SubmitButton loading={loading}></SubmitButton>
      </form>
  );
};

export default AddMemberStep;
