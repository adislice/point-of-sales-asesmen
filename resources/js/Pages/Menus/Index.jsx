import { Head, Link, usePage } from '@inertiajs/react'
import { Add } from 'iconsax-react'
import React from 'react'
import Layout from '../../Components/Layout'
import Toast from '../../Components/Toast'
import { formatCurrency } from '../../Utils'

function MenusIndex({ menus }) {
  const { flash } = usePage().props
  return (
    <Layout>
      <Head title="Kelola Menu" />
      <div className='bg-gray-100 min-h-screen p-5'>
        <h1 className='text-xl font-bold mb-4'>Kelola Menu</h1>
        <div className='bg-white min-h-screen rounded-lg p-3'>

          

          <Link href={route('menus.create')} className='w-fit bg-blue-500 text-white mb-4 rounded px-3 py-2 flex items-center'><Add size={24} />Tambah</Link>
          {flash.success && (
            <Toast message={flash.success} />
          )}
          <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                  <th scope="col" className="px-6 py-3">
                    Aksi
                  </th>

                </tr>
              </thead>
              <tbody>
                {menus.map((menu, i) => (
                  <tr key={menu.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 w-32">
                      <img src={menu.image} alt={menu.name} className="w-16 h-16 object-cover rounded" />

                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {menu.name}

                    </th>

                    <td className="px-6 py-4">
                      {formatCurrency(menu.price)}
                    </td>

                    <td className="px-6 py-4 text-right">
                      <Link href={route('menus.edit', {menu: menu.id})} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
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