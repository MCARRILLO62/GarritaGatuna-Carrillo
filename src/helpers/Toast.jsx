import Toastify from "toastify-js";

import "toastify-js/src/toastify.css";

const Toast = (msg, pos) => {
  Toastify({
    // text: `Unidades máximas en stock: ${stock}.`,
    text: msg,
    duration: 3000,
    close: false,
    gravity: "top",
    position: "center",
    offset: {
      y: 90 + pos,
    },
    stopOnFocus: true,
    style: {
      background: "#74cace",
    },
  }).showToast();
};

export default Toast;
