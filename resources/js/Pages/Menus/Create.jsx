import { Head, useForm } from "@inertiajs/react"
import Layout from "../../Components/Layout"

function MenusCreate({errors}) {

  const { data, setData, post, progress } = useForm({
    name: '',
    price: '',
    image: ''
  })

  function submit(e) {
    e.preventDefault()
    post('/menus')
  }

  return (
    <Layout>
      <Head title="Tambah Menu" />
      <div className="bg-gray-100 min-h-screen p-5">
        <h1 className='text-xl font-bold mb-4'>Tambah Menu</h1>
        <div className='bg-white min-h-screen rounded-lg p-3'>
          <div>
            <form onSubmit={submit}>

              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                <input type="text" id="name" name="name" value={data.name} onChange={e => setData('name', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="mb-6">
                <label htmlFor="harga" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Harga (Rp.)</label>
                <input type="number" id="harga" name="price" value={data.price} onChange={e => setData('price', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload file</label>
                <input name="image" accept="image/png, image/gif, image/jpeg" onChange={e => setData('image', e.target.files[0])} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                {errors.image && (
                  <div className="text-red-500">{errors.image}</div>
                )}
              </div>
              {progress && (
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-6">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: progress.percentage+"%" }}></div>
              </div>
              )}
            
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default MenusCreate