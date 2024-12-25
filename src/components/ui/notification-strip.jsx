
const NotificationStrip = ({words}) => {
  return (
    <div
      className={`bg-transparent text-white`}
    >
      <div className="overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          {
            words.map((word, index) => (
                <span key={index} className='mr-10 backdrop-blur-sm rounded-xl px-2'>{word}</span>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default NotificationStrip;
