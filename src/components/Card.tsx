import { useState } from 'react'
import { CardProps } from '../models/PageModel';
import { User } from '../models/UserModel';
import { FormatPhone } from '../utils/format'
import { ModalComponent } from './Modal';

export function Card({ item, index }: CardProps) {
    const [showModal, setShowModal] = useState(false)
    const [currentUser, setCurrentUser] = useState<User>()

    function handleShowDetails(user: User) {
        setShowModal(true);
        setCurrentUser(user);
    }

    return (
        <div key={index} className=" bg-[#374151] w-full max-w-sm  border border-slate-600 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
                <img className="mt-4 w-24 h-24 mb-3 rounded-full shadow-lg" src={item.picture.large} alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium">{item.name.first} {item.name.last}</h5>
                <span className="text-sm">{item.email}</span>
                <span className="text-sm">{FormatPhone(item.cell)}</span>
                <span className="text-sm">{item.location.city}, {item.location.country}</span>
                <div className="flex mt-4 space-x-3 md:mt-5">
                    <>
                        <button
                            className="block border-solid border-2 border-slate-600 text-white bg-[#374151] hover:bg-[#111827] focus:ring-4 focus:outline-non font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button"
                            onClick={() => {
                                handleShowDetails(item)
                            }}
                        >
                            Details
                        </button>
                        {showModal ? (
                            <ModalComponent
                                setShowModal={setShowModal}
                                currentUser={currentUser}
                            />
                        ) : null}
                    </>
                </div >
            </div >
        </div >
    )
}