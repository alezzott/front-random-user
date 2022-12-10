import { ModalProps } from '../models/PageModel';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export function ModalTop({ setShowModal }: ModalProps) {
  return (
    <>
      <header className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
        <h3 className="text-xl font-semibold  text-white">
          Detalhes do Usuário
        </h3>
        <button
          onClick={() => setShowModal(false)}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-toggle="staticModal"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </header>
    </>
  );
}

export function ModalBody({ currentUser }: ModalProps) {
  return (
    <>
      <article className="p-1 space-y-3 flex flex-col items-center">
        <figure id="user-image">
          <img
            className="flex justify-center h-full w-full rounded-full shadow-lg"
            src={currentUser?.picture.large}
            alt={currentUser?.name.first}
            title="Random User Title"
          />
        </figure>
        <section className="flex" aria-describedby="user">
          <UserCircleIcon className="h-6 w-6" />
          <h1 className="float-none  px-2 text-xl flex text-gray-50 font-bold font-Roboto tracking-wide">
            {currentUser?.name.first} {currentUser?.name.last}
          </h1>
        </section>
        <section className="flex" aria-describedby="user">
          <p className="float-none border mx-2 border-gray-400 rounded-lg px-2 flex text-gray-50 font-Roboto tracking-wide">
            Sexo: {currentUser?.gender}
          </p>
          <p className="float-none border border-gray-400 rounded-lg px-2 flex text-gray-50 font-Roboto tracking-wide">
            Idade: {currentUser?.dob.age}
          </p>
        </section>
        <section className="flex" aria-describedby="user">
          <p className="float-none mx-2 rounded-lg flex text-slate-400 font-Roboto tracking-wide">
            Email:
          </p>
          <p className="rounded-lg flex text-gray-50 font-Roboto tracking-wide">
            <a href={'mailto:' + currentUser?.email}>{currentUser?.email}</a>
          </p>
        </section>
        <section className="" aria-describedby="user">
          <h1 className="mx-2  justify-center  flex text-slate-400 font-Roboto tracking-wide">
            Nome de Usuário:
          </h1>
          <p className=" justify-center  flex text-gray-50 font-Roboto tracking-wide">
            {currentUser?.login.username}
          </p>
          <article className="" aria-describedby="user">
            <h1 className=" justify-center  flex mx-2 text-slate-400 font-Roboto tracking-wide">
              Celular:
            </h1>
            <p className="flex justify-center  text-gray-50 font-Roboto tracking-wide">
              {currentUser?.cell}
            </p>
          </article>
          <h1 className="flex justify-center mx-2 text-slate-400 font-Roboto tracking-wide">
            UUID:
          </h1>
          <p className="flex justify-center text-gray-50 font-Roboto tracking-wide">
            {currentUser?.login.uuid}
          </p>
          <h1 className="flex justify-center mx-2 text-slate-400 font-Roboto tracking-wide">
            Endereço:
          </h1>
          <p className="flex justify-center text-gray-50 font-Roboto tracking-wide">
            {currentUser?.location.street.name},{' '}
            {currentUser?.location.street.number}, {currentUser?.location.city},{' '}
            {currentUser?.location.country}
          </p>
        </section>
        <section className="flex items-center p-2 space-x-2  border-gray-200 rounded-b dark:border-gray-600" />
      </article>
    </>
  );
}
