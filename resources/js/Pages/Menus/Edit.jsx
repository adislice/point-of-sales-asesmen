import { Head, useForm } from "@inertiajs/react"
import Layout from "../../Components/Layout"
import { router } from '@inertiajs/react'

function MenusEdit({menu, errors}) {
  const { data, setData, post, progress } = useForm({
    name: menu.name,
    price: menu.price,
    image: '',
    _method: 'put'
  })

  function submit(e) {
    e.preventDefault()
    post(`/menus/${menu.id}`)
  }
  
  return (
    <Layout>
      <Head title="Edit Menu" />
      <div className="bg-gray-100 min-h-screen p-5">
        <h1 className='text-xl font-bold mb-5 font-raleway'>Ubah Menu</h1>
        <div className='bg-white min-h-screen rounded-lg p-10'>
          <div>
            <form onSubmit={submit}>

              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Nama</label>
                <input type="text" id="name" name="name" value={data.name} onChange={e => setData('name', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
              </div>
              <div className="mb-6">
                <label htmlFor="harga" className="block mb-2 text-sm font-medium text-gray-900 ">Harga (Rp.)</label>
                <input type="number" id="harga" name="price" value={data.price} onChange={e => setData('price', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 " htmlFor="user_avatar">Upload Gambar</label>
                <input name="image" accept="image/png, image/gif, image/jpeg" onChange={e => setData('image', e.target.files[0])} className="block w-full text-sm text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50  focus:outline-none 0 " aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                {errors.image && (
                  <div className="text-red-500">{errors.image}</div>
                )}
              </div>
              {progress && (
              <div className="w-full bg-gray-200 rounded-full h-2.5  mb-6">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: progress.percentage+"%" }}></div>
              </div>
              )}
            
              <button type="submit" className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default MenusEdit