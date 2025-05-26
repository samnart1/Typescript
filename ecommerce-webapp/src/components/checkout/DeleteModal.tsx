import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
export const DeleteModal = ({
    open,
    setOpen,
    title,
    onDeleteHandler,
    loader,
}) => {
    return (
        <Dialog open={open} onClose={setOpen} className="relative z-50">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[]:"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white px-4"
                    >
                        <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                            <button
                                disabled={loader}
                                type="button"
                                onClick={() => setOpen(false)}
                                className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Close</span>
                                <FaTimes className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center"></div>
                            <FaExclamationTriangle className="text-red-600" />
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <DialogTitle
                                as="h3"
                                className="text-base font-semibold font-metropolis leading-6 text-teal-50"
                            >
                                {title}
                            </DialogTitle>
                            <div className="mt-2">
                                <p className="text-sm text-textColor2 font-metropolis">
                                    Are you sure you want to delete?
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                            <button
                                disabled={loader}
                                type="button"
                                onClick={onDeleteHandler}
                                className="inline-flex w-full red justify-center rounded-md"
                            >
                                {loader ? "Loading..." : "Delete"}
                            </button>
                            <button
                                disabled={loader}
                                type="button"
                                onClick={() => setOpen(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white"
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};
