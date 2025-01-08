import { useEffect, useState } from "react";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import FormButton from "../FormButton";

import { validate_email, validate_isEmpty, validate_phone, validateMember } from "../utils"; 
import { Select } from "../../ui/select";
import { FileUpload } from '../../ui/file-upload'
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { submit_step2 } from "../../../features/form/formSlice";
import { useAddMemberMutation, useLazyGetMembersQuery, useRemoveMemberMutation } from "../../../app/services/formAPI";

const initialState = {
  id: "",
  name: "",
  email: "",
  phone: "",
  gender: "",
  member_id: "",
  codechef_id: ""
}

const AddMemberStep = ({ event, minMembers = 2, maxMembers = 5, prevStep, nextStep, isPradnya }) => {
  
  const step2 = useSelector(state => state.form.step2)
  const [ getMembers, { data, isSuccess } ] = useLazyGetMembersQuery();
  const [members, setMembers] = useState([]);
  const [newMember, setNewMember] = useState(initialState);
  const [ addMember, { isLoading } ] = useAddMemberMutation()
  const [ removeMember, { isLoading: isRemoveLoading } ] = useRemoveMemberMutation();
  const dispatch = useDispatch()
  
  useEffect(() => {
    const ename = window.localStorage.getItem('event_name');
    const ticket = window.localStorage.getItem('ticket') || '';
    if(event === ename){
      getMembers(ticket);
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      if (data.step_2 && Array.isArray(data.step_2)) {
        setMembers([...data.step_2]);
      }
      else{
        setMembers([...step2])
      }
    }
  }, [data, isSuccess]); 
  
  const handleAddMember = async () => {
    if(validateMember(newMember)){
      toast.error('Fill all the required details correctly!')
      return
    }
    newMember.id = Date.now();
    try{
      const ticket = window.localStorage.getItem('ticket') || ''
      const memberFormData = new FormData();
      memberFormData.append("member_id", newMember.member_id);
      const tempMemberDetails = { ...newMember };
      delete tempMemberDetails.member_id;
      memberFormData.append("body", JSON.stringify(tempMemberDetails));

      const response = await addMember({ event_name: event, ticket, data: memberFormData }).unwrap()
      window.localStorage.setItem('ticket', response.ticket);
      window.localStorage.setItem('event_name', event)
      const clg_id_name = newMember.member_id?.name;
      delete newMember.member_id;
      newMember.member_id = clg_id_name

      setMembers([...members, { ...newMember }])
      toast.success('Added Successfully')
      setNewMember(initialState);
    }
    catch(error){
      console.error(error)
      toast.error(error?.data?.message || error?.message || 'Failed to Add Member')
    }

  };

  const handleDeleteMember = async (id, index=0) => {
    try{
      const ticket = window.localStorage.getItem('ticket') || '';
      // console.log(index)
      await removeMember({ index, ticket }).unwrap()
      setMembers(members.filter((member) => member.id !== id));
      toast.success('Removed Successfully')
    }
    catch(error){
      // console.log(error)
      toast.error(error?.data?.message || error?.message  || 'Failed to Delete Member')
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (members.length < minMembers) {
      toast.info('Min Member must be ' + minMembers)
      return;
    }
    else if (members.length > maxMembers) {
      toast.info('Max allowed Members is ' + maxMembers)
      return;
    }
    else{
      dispatch(submit_step2(members))
      toast.success('Members Saved')
      nextStep()
    } 
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
          <Label htmlFor="codechef_id">Codechef ID</Label>
          <Input
            id="codechef_id"
            name="codechef_id"
            value={newMember.codechef_id}
            onChange={(e) =>
              setNewMember({ ...newMember, codechef_id: e.target.value })
            }
            placeholder="Enter member's Codechef ID"
          />
        </div>

        {/* ID Card Photo Upload */}
        <div className="relative">
          <Label htmlFor="member_id" required>ID Card</Label>
          <FileUpload 
          value={newMember.member_id}
          onChange={
            (files) => {
              setNewMember({...newMember, member_id: files[0]})
            }
          }
          />
          {!newMember.member_id && (
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
          disabled={members.length === maxMembers || isLoading}
          className="bg-black-100 text-white border-[1px] border-secondary px-4 py-2 disabled:opacity-50"
        >
          { isLoading ? 'Adding...' : 'Add Member' }
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
              <p className={`font-bold text-sm ${!isPradnya && 'hidden'}`}>
                CodeChef ID:
                <span className="font-normal">&nbsp;{member.codechef_id}</span> 
              </p>
              <p className="font-bold text-sm">
                College ID:
                <span className="font-normal">&nbsp;{member.member_id || 'uploaded'}</span>
              </p>
            </div>
            <button
              onClick={() => handleDeleteMember(member.id, index)}
              disabled={ isRemoveLoading }
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
        {!isPradnya && <FormButton loading={false} className={``} isPrev onClick={() => prevStep()} />}
        <FormButton loading={false} className={``} onClick={handleSubmit} />
      </div>
      </form>
  );
};

export default AddMemberStep;
