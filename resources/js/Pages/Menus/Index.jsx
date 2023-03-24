import { Head, Link, usePage } from '@inertiajs/react'
import { Add } from 'iconsax-react'
import React, { useEffect, useState } from 'react'
import DeleteConfirmation from '../../Components/DeleteConfirmation'
import Layout from '../../Components/Layout'
import Toast from '../../Components/Toast'
import { formatCurrency } from '../../Utils'
import { router } from '@inertiajs/react'

function MenusIndex({ menus }) {
  const { flash } = usePage().props
  const [deleteModal, setDeleteModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  function deleteMenu() {
    console.log("delete " + selectedItem.name)
    var p = router.delete(`/menus/${selectedItem.id}`)
    console.log(p)
  }

  function openModal(menu) {
    setSelectedItem(menu)
    setDeleteModal(true)
  }

  function closeModal() {
    setDeleteModal(false)
  }

  return (
    <Layout>
      <Head title="Kelola Menu" />
      <div className='bg-gray-100 min-h-screen p-5'>
        {deleteModal && (
        <DeleteConfirmation onYesClick={deleteMenu} onCloseClick={closeModal} message={`Apakah Anda yakin akan menghapus ${selectedItem.name}?`} />
        )}
        <h1 className='text-xl font-bold mb-5 font-raleway'>Kelola Menu</h1>
        <div className='bg-white min-h-screen rounded-lg p-3'>

          <Link href={route('menus.create')} className='w-fit m-2 bg-blue-500 text-white mb-4 rounded px-3 py-2 flex items-center'><Add size={24} />Tambah</Link>
          {flash.success && (
            <Toast message={flash.success} />
          )}
          <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 w-32">
                    Gambar
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Harga
                  </th>
                  <th scope="col" className="px-6 py-3 text-end">
                    Aksi
                  </th>

                </tr>
              </thead>
              <tbody>
                {menus.map((menu, i) => (
                  <tr key={menu.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 w-32">
                      <img src={menu.image} alt={menu.name} className="w-16 h-16 object-cover rounded" />

                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {menu.name}

                    </th>

                    <td className="px-6 py-4">
                      {formatCurrency(menu.price)}
                    </td>

                    <td className="px-6 py-4 text-end">
                      <Link href={route('menus.edit', {menu: menu.id})} className="font-medium text-blue-600 hover:underline mx-1">Edit</Link>
                      <button onClick={() => {openModal(menu)}} className="font-medium text-red-600 hover:underline mx-1">Hapus</button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MenusIndex