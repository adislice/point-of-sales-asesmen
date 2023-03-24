import { ArrowDown2 } from 'iconsax-react';
import { Head } from "@inertiajs/react";
import FoodMenuItem from "../Components/FoodMenuItem";
import { useEffect, useState } from 'react';
import { formatCurrency } from '../Utils';
import SaveBillModal from '../Components/SaveBillModal';
import Layout from '../Components/Layout';
import ChargeModal from '../Components/ChargeModal';




function CreateOrder({ products }) {
  const [orders, setOrders] = useState([])
  const [subtotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [saveBillModalOpen, setSaveBillModalOpen] = useState(false)
  const [chargeModalOpen, setChargeModalOpen] = useState(false)

  useEffect(() => {
    var subt = orders.reduce((n, { price, quantity }) => n + (price * quantity), 0)
    setSubtotal(subt)
  }, [orders])

  useEffect(() => {
    setTotal(subtotal)
  }, [subtotal])

  function addMenuToOrders(menu) {
    const checkIndex = orders.findIndex(item => item.id == menu.id)
    if (checkIndex !== -1) {
      const p = orders.filter(item => item.id === menu.id)
      // item sudah ada
      setOrders(orders.map(el => el.id == menu.id ? { ...el, quantity: el.quantity + 1 } : el))
    } else {
      // item belum ada
      setOrders(prevState => [...prevState, {
        id: menu.id,
        name: menu.name,
        price: menu.price,
        quantity: 1
      }])
    }

  }

  function clearOrders() {
    setOrders([])
  }

  return (
    <Layout>
      <Head title="Order Baru" />
      {saveBillModalOpen && <SaveBillModal handleClose={() => setSaveBillModalOpen(false)} />}

      {chargeModalOpen && <ChargeModal total={total} onCloseClick={() => setChargeModalOpen(false)} /> }
      <div className="flex bg-gray-100 min-h-screen print:min-h-fit">
        <div className="w-8/12 p-5 print:hidden">

          <div className="grid grid-menu place-items-center gap-5">
            {products.map(menu => (
              <FoodMenuItem menu={menu} addMenuToOrders={addMenuToOrders} key={menu.id} />
            ))}
          </div>
        </div>
        <div className="w-4/12 print:w-96 print:border print:border-gray-500 p-5 h-full print:h-fit max-h-screen fixed right-0 print:relative">
          <div className="bg-white rounded-lg shadow-lg print:shadow-none flex flex-col h-full">
            <div className="flex items-center border-b border-gray-200 p-3">
              <div className='font-semibold text-2xl mx-auto print:hidden'>New Customer</div>
              <div className='font-semibold text-2xl mx-auto hidden print:block'>Bill</div>
            </div>
            <div className="flex items-center border-b border-gray-200 p-1">
              <button className="flex items-center justify-center w-full rounded px-3 py-2 hover:bg-gray-200">Dine In <ArrowDown2 size="16" color="#226BC5" className='print:hidden' /></button>
            </div>
            <div className="p-3  border-gray-200 overflow-y-auto">
              {orders.length > 0 ? (
                <table className='w-full'>
                  <tbody>
                    {orders.map(item => (
                      <tr key={item.id}>
                        <td className="py-2">{item.name}</td>
                        <td>{item.quantity > 1 ? `x${item.quantity}` : ""}</td>
                        <td className='text-end'>{formatCurrency(item.price * item.quantity)}</td>

                      </tr>
                    ))}
                  </tbody>

                </table>
              ) : (
                <div className='text-center'>Order Masih Kosong</div>
              )}


            </div>
            <div className="p-3 border-t border-gray-200 mt-auto">
              <div className='flex flex-row justify-between py-2'>
                <div>Sub-Total :</div>
                <div>{formatCurrency(subtotal)}</div>
              </div>
              <div className='flex flex-row justify-between py-2'>
                <div>Total :</div>
                <div>{formatCurrency(total)}</div>
              </div>
            </div>
            <div className='p-1 border-b border-t border-gray-200 print:hidden'>
              <button className='text-gray-800 p-2 text-center w-full rounded hover:bg-gray-200' onClick={clearOrders}>Clear Sale</button>
            </div>
            <div className='border-b p-1 border-gray-200 flex gap-1 print:hidden'>
              <button className='text-gray-800 p-2 text-center w-full rounded bg-indigo-100 hover:bg-indigo-200 border-r border-white' onClick={() => setSaveBillModalOpen(true)}>Save Bill</button>
              <button className='text-gray-800 p-2 text-center w-full rounded bg-indigo-100 hover:bg-indigo-200' onClick={() => window.print()}>Print Bill</button>

            </div>
            <div className='border-b p-1 border-gray-200 flex gap-1 print:hidden'>
              <button className='text-white p-4 text-2xl text-center rounded w-full bg-indigo-600 hover:bg-indigo-700' onClick={() => setChargeModalOpen(true)}>Charge {formatCurrency(total)}</button>

            </div>
            <div className="hidden print:block text-center text-xl m-2">
              Terima Kasih
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateOrder