import React, { useState } from "react";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import FormButton from "../FormButton";

import { validate_email, validate_isEmpty, validate_phone, validateMember } from "../utils"; 
import { Select } from "../../ui/select";
import { FileUpload } from '../../ui/file-upload'

const initialState = {
  id: "",
  name: "",
  email: "",
  phone: "",
  gender: "",
  codechefID: "",
  collegeID: null,
}

const AddMemberStep = ({ minMembers = 1, maxMembers = 5, prevStep, nextStep, isPradnya }) => {
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState(initialState);
  
  const [errors, setErrors] = useState({});
  const [memberError, setMemberError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddMember = () => {
    
    if(validateMember(newMember)){
      return
    }

    if (members.length >= maxMembers) {
      setMemberError(`You can only add up to ${maxMembers} members.`);
      return;
    }

    setMembers([...members, { ...newMember, id: Date.now() }]);

    setNewMember(initialState);

    console.log(newMember, members)
  };

  const handleDeleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  const handleFileUpload = (newFile) => {
    setNewMember({ ...newMember, collegeID: newFile })
    console.log(newMember, newFile)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (members.length < minMembers) {
      return;
    }
    if (members.length > maxMembers) {
      return;
    }
    console.log(members)
    return
    try {
      alert("Team members saved successfully!");
    } catch (error) {
      console.error("Error saving members:", error);
      alert("An error occurred while saving members.");
    } finally {
      setLoading(false);
    }
    nextStep()
  };

  return (
    <form
      className="w-full bg-tertiary p-4 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-8"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-bold text-white-100">Add Team Members</h2>
      <p className="text-gray-400 text-sm">
        <strong>Note:</strong> The first member added will be the{" "}
        <span className="text-blue-500 font-bold">Team Leader</span>.
      </p>

      {/* Add New Member Form */}
      <div className="space-y-8">
        <div>
          <Label htmlFor="name" required>Name</Label>
          <Input
            name="name"
            id="name"
            value={newMember.name}
            onChange={(e) =>
              setNewMember({ ...newMember, name: e.target.value })
            }
            validate={validate_isEmpty.bool}
            errorMessage={validate_isEmpty.message()}
            placeholder="Enter member's name"
          />
        </div>

        <div>
          <Label htmlFor="email" required>Email</Label>
          <Input
            id="email"
            name="email"
            value={newMember.email}
            onChange={(e) =>
              setNewMember({ ...newMember, email: e.target.value })
            }
            validate={validate_email.bool}
            errorMessage={validate_email.message()}
            placeholder="Enter member's email"
          />
        </div>

        {/* Phone and Gender Side by Side */}
        <div className="sm:flex gap-4 max-sm:space-y-8">
          <div className="flex-1">
            <Label htmlFor="phone" required>Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={newMember.phone}
              onChange={(e) =>
                setNewMember({ ...newMember, phone: e.target.value })
              }
              validate={validate_phone.bool}
              errorMessage={validate_phone.message()}
              placeholder="Phone number"
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="gender" required>Gender</Label>
            <Select
              id="gender"
              name="gender"
              value={newMember.gender}
              onChange={(e) =>
                setNewMember({ ...newMember, gender: e.target.value })
              }
              options={[
                { value: "", label: "Select Gender" },
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
              ]}
              validate={validate_isEmpty.bool}
              errorMessage={validate_isEmpty.message()}
            />
          </div>
        </div>

        <div className={!isPradnya && 'hidden'}>
          <Label htmlFor="codechefID">Codechef ID</Label>
          <Input
            id="codechefID"
            name="codechefID"
            value={newMember.codechefID}
            onChange={(e) =>
              setNewMember({ ...newMember, codechefID: e.target.value })
            }
            placeholder="Enter member's Codechef ID"
          />
        </div>

        {/* ID Card Photo Upload */}
        <div className="relative">
          <Label htmlFor="collgeID" required>ID Card</Label>
          <FileUpload 
          value={newMember.collegeID}
          onChange={
            (files) => {
              setNewMember({...newMember, collegeID: files[0]})
              console.log(newMember)
            }
          }
          />
          {!newMember.collegeID && (
            <div className="absolute mt-[1px] flex items-center gap-2 px-2 pt-1 text-sm text-red-600 bg-tertiary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 3h.01m-6.938 4h13.856c1.054 0 1.987-.816 2.052-1.87L21.942 10c.065-1.054-.724-1.918-1.788-1.918H4.846c-1.054 0-1.787.84-1.722 1.87L4.92 19.13C4.985 20.184 5.918 21 6.972 21z"
                />
              </svg>
              <p>{`College ID is Required`}</p>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleAddMember}
          disabled={members.length === maxMembers}
          className="bg-black-100 text-white border-[1px] border-secondary px-4 py-2 disabled:opacity-50"
        >
          Add Member
        </button>
      </div>

      {/* Added Members Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-white">
          Team Members ({members.length}/{maxMembers})
        </h3>
        {members.sort((a, b) => new Date(a.id) - new Date(b.id)).map((member, index) => (
          <div
            key={member.id}
            className={`relative flex items-center justify-between bg-slate-800 p-4 text-white group ${
              index === 0 ? "border-l-4 border-secondary" : ""
            }`}
          >
            <span className={`text-lg ${index === 0 ? "font-bold" : ""}`}>
              {member.name}
              {index === 0 && (
                <span className="ml-2 text-orange-100">(Team Leader)</span>
              )}
            </span>

            {/* Hover Details Card */}
            <div className="absolute top-full left-0 mt-2 w-[280px] p-4 bg-black-100 text-gray-300 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
              <p className="font-semibold text-white mb-2">
                Member Details
              </p>
              <p className="font-bold text-sm">
                Name:
                <span className="font-normal">&nbsp;{member.name}</span>
              </p>
              <p className="font-bold text-sm">
                Email:
                <span className="font-normal">&nbsp;{member.email}</span>
              </p>
              <p className="font-bold text-sm">
                Gender:
                <span className="font-normal">&nbsp;{member.gender}</span>
              </p>
              <p className="font-bold text-sm">
                Phone:
                <span className="font-normal">&nbsp;{member.phone}</span> 
              </p>
              <p className="font-bold text-sm">
                College ID:
                <span className="font-normal">&nbsp;{member.collegeID.name}</span>
              </p>
            </div>
            <button
              onClick={() => handleDeleteMember(member.id)}
              className="text-red-600 hover:text-red-700 transform hover:scale-110 transition duration-200"
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
      </div>

      <div className={`sm:col-span-2 ${isPradnya ? 'justify-self-end' : 'flex items-center justify-between'}`}>
        {!isPradnya && <FormButton loading={loading} className={``} isPrev onClick={() => prevStep()} />}
        <FormButton loading={loading} className={``} onClick={() => nextStep()} />
      </div>
      </form>
  );
};

export default AddMemberStep;
