const SubmitButton = ({ loading, onClick }) => (
  <div className="flex justify-end">
    <button
      type="submit"
      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 disabled:opacity-50 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition-all focus:ring-2 focus:ring-cyan-300"
      disabled={loading}
      onClick={onClick}
    >
      {loading ? "Sending..." : "Next"}
    </button>
  </div>
);
export default SubmitButton;
