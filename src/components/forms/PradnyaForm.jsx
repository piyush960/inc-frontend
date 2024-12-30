import React, { useState, useRef } from "react";

import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { styles } from "../../styles";

// abstract
// :
// "sdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf dhfdf dfdhfdf dfhdfd dfhdfdf dfhdsdfhdf dfhdfjdhkfds ffdf "
// company
// :
// ""
// demo
// :
// "0"
// domain
// :
// "ML"
// guide_email
// :
// "pmalu9211@gmail.com"
// guide_name
// :
// "pratham"
// guide_phone
// :
// "8668856662"
// hod_email
// :
// "pmalu9211@gmail.com"
// nda
// :
// "0"
// project_type
// :
// "Open Hardware/Firmware"
// reason_of_demo
// :
// ""
// sponsored
// :
// "0"
// title
// :
// "prathamesh"

const Register = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <div className="flex flex-col overflow-hidden">
      <p className={styles.sectionSubText}>Register Now</p>
      <h3 className={styles.sectionHeadText}>Fill the Form.</h3>
      <motion.div
        variants={fadeIn("left", "spring", 0.2, 1)}
        className="bg-black-100 p-8 rounded-2xl"
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 grid md:grid-cols-2 grid-cols-1 gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Team Name</span>
            <input
              type="team_name"
              name="team_name"
              value={form.team_name}
              onChange={handleChange}
              placeholder="Enter your team_name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Mobile no.</span>
            <input
              type="mobile"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col md:col-span-2">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Register, "register");
