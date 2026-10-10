const Notification = ({ message, type }) => {
  if (!message || !type) return null;

  let notificationClass = 'animate-fly-in py-3 px-4 rounded-xl shadow-xl ease-in-out transition-all duration-1000 ';
  if (type === 'error') {
    notificationClass += 'bg-red-100 text-red-900';
  } else if (type === 'notification') {
    notificationClass += 'bg-blue-100 text-blue-900';
  } else if (type === 'success') {
    notificationClass += 'bg-green-100 text-green-900';
  } else {
    return null;
  }

  return (
    <div className="fixed bottom-8 left-1/2 z-50 w-max max-w-[calc(100vw-2rem)] -translate-x-1/2">
      <div className={notificationClass}>{message}</div>
    </div>
  );
};

export default Notification;
