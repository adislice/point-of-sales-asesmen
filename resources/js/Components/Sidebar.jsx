import { Link } from "@inertiajs/react"
import { AddSquare, Box1, Category } from "iconsax-react"

function Sidebar() {
  console.log()
  return (
    <div className="flex flex-col w-24 print:hidden">
  
      <Link href={route('orders.create')} className={`flex flex-col items-center px-2 justify-center text-center h-24  ${route().current('orders.create') ? 'text-white bg-sky-500' : ''}`}>
        <AddSquare size="32" className="mb-1" />
        <div className="text-sm">Order Baru</div></Link>
      <Link href={route('menus.index')} className={`flex flex-col items-center p-2 text-center justify-center h-24  ${route().current('menus.*') ? 'text-white bg-sky-500' : ''}`} >
        <Category size="32" className="mb-1" />
        <div className="text-sm">Kelola Menu</div></Link>

    </div>
  )
}

export default Sidebar