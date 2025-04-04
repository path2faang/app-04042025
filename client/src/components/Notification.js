import { Toaster, toast } from 'sonner';

function Notification() {
  return <Toaster />;
}

Notification.success = (message) => {
  toast.success(message);
};

Notification.error = (message) => {
  toast.error(message);
};

export default Notification;