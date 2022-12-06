import { ModalProps } from '../models/PageModel';
import { ModalTop, ModalBody } from './ModalStyled';


export function ModalComponent({ setShowModal, currentUser }: ModalProps) {
  return (
    <>
      <div className="backdrop-blur-sm backdrop-grayscale-0 backdrop-opacity-60 fixed top-0 left-0 right-0 z-50 justify-center flex w-full p-4 overflow-x-hidden overflow-y-auto h-modal md:h-full">
        <div className=" relative w-full h-full max-w-md md:h-auto">
          <div className="border border-gray-700 relative bg-[#1f2937] rounded-lg shadow dark:bg-gray-700">
            <ModalTop currentUser={currentUser} setShowModal={setShowModal} />
            <ModalBody currentUser={currentUser} setShowModal={setShowModal} />
          </div>
        </div>
      </div>
    </>
  );
}
