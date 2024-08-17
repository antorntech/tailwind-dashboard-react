import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export function DeleteConfirmModal({ open, handleOpen }) {
  const handleDelete = () => {
    handleOpen();
    toast.success("Successfully Deleted!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <div className="flex items-center gap-1 p-3">
          <InformationCircleIcon className="h-10 w-10 text-red-500" />
          <h1 className="text-xl font-bold">Do you want to delete this?</h1>
        </div>
        <DialogBody>
          After click the confirm button the data will be deleted parmanently.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleDelete}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
