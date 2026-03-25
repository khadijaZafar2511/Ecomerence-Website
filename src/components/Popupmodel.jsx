import { createPortal } from "react-dom";
import { useContext } from "react";
import { PopupContext } from "../Context/popupcontext";
import Login from "./Login";
import Register from "./Register";
export default function Popupmodel() {
  // console.log(props)
  const { state } = useContext(PopupContext);
  console.log(state)
  if (!state.open) return null;
  return createPortal(
    <>
      <div className="flex fixed z-50 inset-0 bg-black/50  items-center justify-center w-full min-h-screen">
        <div className="w-full min-h-screen">
          {state.islogin ? <Login /> : <Register />}
        </div>
      </div>
    </>,
    document.body,
  );
}
