import { Label } from "flowbite-react";
import { SetStateAction } from "react";
import { User } from "../models/PageModel";

interface IProps {
    setShowModal: React.Dispatch<SetStateAction<boolean>>;
    currentUser: User | undefined
}

export function ModalComponent({ setShowModal, currentUser }: IProps) {
    return (
        <div className="flex justify-center overflow-x-hidden overflow-y-auto fixed inset-14 outline-none focus:outline-none">
            <div className=" flex max-w-2xl text-white ">
                <div className="border-slate-600 border  relative bg-[#374151]  text-white  rounded-lg shadow ">
                    <div className="flex justify-between items-start p-4 rounded-t border-b  text-white ">
                        <h3 className="text-xl font-semibold text-white ">
                            Detalhes do Usuário
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="staticModal" onClick={() => setShowModal(false)}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="border-slate-600 border  p-6 space-y-6 grid grid-cols-3 gap-4">
                        <p className="text-base leading-relaxed  text-white">
                            <img className='w-50 h-50 rounded-full' src={currentUser?.picture.large} />
                        </p>
                        <div className="text-gray-300">
                            <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                Name
                            </Label>
                            <div className="flex text-gray-300">
                                {currentUser?.name.first} {currentUser?.name.last}
                            </div>
                        </div>
                        <div className="text-gray-300">
                            <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                Gender:
                            </Label>
                            <div className="flex text-gray-300">
                                {currentUser?.gender}
                            </div>
                        </div>
                        <div className="text-gray-300">
                            <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                Age:
                            </Label>
                            <div className="flex text-gray-300">
                                {currentUser?.dob.age}
                            </div>
                        </div>
                        <div className="text-gray-300">
                            <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                Email:
                            </Label>
                            <div className="flex text-gray-300">
                                {currentUser?.email}
                            </div>
                        </div>
                        <div className="text-gray-300">
                            <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                Username:
                            </Label>
                            <div className="text-gray-300">
                                {currentUser?.login.username}
                            </div>
                        </div>
                        <div className="text-gray-300">
                            <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                Cellphone:
                            </Label>
                            <div className="text-gray-300">
                                {currentUser?.cell}
                            </div>
                        </div>
                        <div className="text-gray-300">
                            <Label className='flex font-semibold mb-1 text-base font-Roboto text-white'>
                                UserID:
                            </Label>
                            <div className="text-gray-300">
                                {currentUser?.login.uuid}
                            </div>
                        </div>
                        <div className="text-gray-300">
                            <Label className='flex font-semibold mb-1 2xl text-base font-Roboto text-white'>
                                Location:
                            </Label>
                            <div className='text-white'>
                                {currentUser?.location.street.name}, {currentUser?.location.street.number} / {currentUser?.location.city}, {currentUser?.location.country}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}