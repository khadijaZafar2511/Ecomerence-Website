import { createPortal } from "react-dom";

export default function createportal12({ open }) {
   
  console.log(open.open)
    if (open.open) return null;
    
    return createPortal(
      <div
        onClick={() => {open.setOpen(true);}}
        className="fixed top-16   left-0 w-screen h-full bg-[rgba(0,0,0,0.5)]  flex  justify-center  "
      >
            <div className=" w-3/4 h-3/4 bg-white p-20 border rounded mt-10">
            <img></img></div>
      </div>,
      document.getElementById("portal-root"),
    );

}

