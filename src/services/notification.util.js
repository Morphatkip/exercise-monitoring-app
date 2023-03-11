import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function showNotification(title, color, position) {
  if (color === "success") {
    toast.success(title, {
      position: position || "top-right",
    });
  } else if (color === "warning") {
    toast.warn(title, { position: position || "top-right" });
  } else {
    toast.error(title, { position: position || "top-right" });
  }
}
