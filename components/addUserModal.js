import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { UserAddIcon, PencilAltIcon } from '@heroicons/react/outline';
import Form from './form';

const AddUserModal = ({ icon, user }) => {
    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef(null);

    return (
        <>
            {/* Button */}
            {icon === 'add' ? (
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    onClick={() => setOpen(true)}
                >
                    Add user
                </button>
            ) : (
                <a
                    href="#"
                    onClick={() => setOpen(true)}
                    className="text-indigo-600 hover:text-indigo-900"
                >
                    Edit
                </a>
            )}

            {/* Modal UI */}
            {open ? (
                <Transition.Root show={open} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-10"
                        initialFocus={cancelButtonRef}
                        onClose={setOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                                        <div>
                                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                                {icon === 'add' ? (
                                                    <UserAddIcon
                                                        className="h-6 w-6 text-green-600"
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <PencilAltIcon
                                                        className="h-6 w-6 text-green-600"
                                                        aria-hidden="true"
                                                    />
                                                )}
                                            </div>
                                            <div className="mt-3 text-center sm:mt-5">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg leading-6 font-medium text-gray-900"
                                                >
                                                    {icon === 'add'
                                                        ? 'Add User'
                                                        : 'Edit User'}
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <Form
                                                        open={open}
                                                        setOpen={setOpen}
                                                        icon={icon}
                                                        user={user}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                            {/* <button
                                                type="button"
                                                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                                                onClick={() => setOpen(false)}
                                                ref={cancelButtonRef}
                                            >
                                                Cancel
                                            </button> */}
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            ) : null}
        </>
    );
};

export default AddUserModal;
