import { useState } from 'react';

import { CardProps } from '../models/PageModel';
import { User } from '../models/UserModel';
import { FormatPhone } from '../utils/format';
import { ModalComponent } from './Modal';

import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid';
import { Tooltip } from 'flowbite-react';

export function Card({ currentPosts }: CardProps) {
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>();

  function handleShowDetails(user: User) {
    setShowModal(true);
    setCurrentUser(user);
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
      {currentPosts?.map((item: User, index: number) => (
        <article
          key={index}
          className=" bg-[#374151] w-full max-w-sm  border border-slate-600 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <article className="flex flex-col items-center pb-10">
            <figure id="user-image">
              <img
                className="mt-4 w-24 h-24 mb-3 rounded-full shadow-lg"
                src={item.picture.large}
                alt={item.name.first}
                title="Random User Title"
              />
            </figure>
            <h1 className="mb-1 text-xl font-medium">
              {item.name.first} {item.name.last}
            </h1>
            <p className="text-sm">{item.email}</p>
            <p className="text-sm">{FormatPhone(item.cell)}</p>
            <p className="text-sm">
              {item.location.city}, {item.location.country}
            </p>
            <section className="flex mt-4 space-x-3 md:mt-5">
              <>
                <button
                  className="block border-solid border-2 border-slate-600 text-white bg-[#374151] hover:bg-[#111827] focus:ring-4 focus:outline-non font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="button"
                  onClick={() => {
                    handleShowDetails(item);
                  }}
                >
                  Details
                </button>
                <div className="flex">
                  <Tooltip
                    content="Copy user info"
                    trigger="hover"
                    animation="duration-150"
                  >
                    <button
                      className="block border-solid border-2 border-slate-600 text-white bg-[#374151] hover:bg-[#111827] focus:ring-4 focus:outline-non font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          item.location.country &&
                            item.location.city &&
                            item.name.first &&
                            item.name.last &&
                            item.email
                        );
                        console.log(navigator.clipboard.writeText);
                      }}
                    >
                      <ClipboardDocumentCheckIcon className="h-6 w-6 text-gray-400" />
                    </button>
                  </Tooltip>
                </div>

                {showModal ? (
                  <ModalComponent
                    setShowModal={setShowModal}
                    currentUser={currentUser}
                  />
                ) : null}
              </>
            </section>
          </article>
        </article>
      ))}
    </section>
  );
}
