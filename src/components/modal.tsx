import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";

type ModalType = {
  title?: string;
  content?: string;
  isOpen: boolean;
  setIsOpen: (_: boolean) => void;
  actions?: ReactNode;
};

const Modal = ({ title, content, isOpen, setIsOpen, actions }: ModalType) => {
  return (
    <div className={isOpen ? "block" : "hidden"}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="w-1/3 min-h-10 rounded-3xl bg-white px-12 py-10 shadow-2xl">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold text-slate-700 text-center">
              {title}
            </h2>
            <button onClick={() => setIsOpen(false)} className="cursor-pointer">
              <IoMdClose size={22} />
            </button>
          </div>
          <p>{content}</p>
          <div className="flex justify-between mt-4">{actions}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
