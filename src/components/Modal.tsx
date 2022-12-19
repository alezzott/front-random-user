import { ModalProps } from '../models/PageModel';
import { ModalTop, ModalBody } from './ModalStyled';

export function ModalComponent({ setShowModal, currentUser }: ModalProps) {
  return (
    <>
      <section
        onClick={() => setShowModal(false)}
        className="z-[50] fixed backdrop-blur-sm backdrop-grayscale-0 backdrop-opacity-60 top-0 left-0 right-0 justify-center flex  p-4  overflow-y-auto  w-full overflow-x-hidden h-full md:h-full"
      >
        <section className="z-[100] md:h-auto mr-5 max-w-md  max-h-md h-full w-full ">
          <article className="border border-gray-700 bg-[#1f2937] rounded-lg shadow dark:bg-gray-700">
            <ModalTop
              currentUser={currentUser}
              setShowModal={setShowModal}
              closeDropdown={undefined}
              refIs={undefined}
            />
            <ModalBody
              currentUser={currentUser}
              setShowModal={setShowModal}
              closeDropdown={undefined}
              refIs={undefined}
            />
          </article>
        </section>
      </section>
    </>
  );
}
