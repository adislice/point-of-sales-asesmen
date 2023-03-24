import { TickCircle } from "iconsax-react"
import { useState } from "react"

function SaveBillModal({handleClose}) {

  return (
    <div className="absolute z-50 left-0 right-0 top-0 bottom-0 w-full h-full flex justify-center items-center bg-black/50">
        <div className="rounded-lg bg-white shadow-lg w-96 min max-w-md p-5 flex flex-col items-center justify-center">
        <TickCircle size="54" color="#4ade80" />
        <div className="p-3">Saved</div>
        <button className="bg-white hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded" onClick={handleClose}>Tutup</button>

        </div>
    </div>
  )
}

export default SaveBillModal