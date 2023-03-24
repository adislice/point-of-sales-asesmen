import { useEffect, useState } from "react"
import { formatCurrency } from "../Utils"

function ChargeModal({ total, onCloseClick }) {
  const [uangBayar, setUangBayar] = useState(0)
  const [kembalian, setKembalian] = useState(0)

  useEffect(() => {
    let kembali = uangBayar - total
    setKembalian(kembali)
  }, [uangBayar])

  return (
    <div id="staticModal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-black/50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
      <div className="relative w-full h-full max-w-2xl md:h-auto">

        <div className="relative bg-white rounded-lg shadow ">

          <div className="flex items-start justify-between px-4 py-3 border-b rounded-t ">
            <h3 className="text-xl font-bold text-gray-900 font-raleway">
              Charge
            </h3>
            <button type="button" onClick={onCloseClick} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-hide="staticModal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="p-6">

            <div className="text-xl">TOTAL</div>
            <div className="font-bold text-3xl mb-6">{formatCurrency(total)}</div>

            <div className="flex gap-4">
              <div className="mb-6 grow">
                <label htmlFor="uang_bayar" className="block mb-2 text-sm font-medium text-gray-900 ">Uang Bayar (Rp.)</label>
                <input type="number" id="uang_bayar" name="price" value={uangBayar} onChange={e => setUangBayar(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required />
              </div>
              <div className="mb-6 grow">
                <label htmlFor="uang_kembali" className="block mb-2 text-sm font-medium text-gray-900 ">Uang Kembalian (Rp.)</label>
                <input type="number" disabled id="uang_kembali" name="price" value={kembalian} onChange={e => setKembalian(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required />
              </div>
            </div>
          </div>


          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
            <button data-modal-hide="staticModal" type="button" onClick={onCloseClick} className="ml-auto bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">Tutup</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChargeModal