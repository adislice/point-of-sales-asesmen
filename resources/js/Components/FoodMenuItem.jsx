
const FoodMenuItem = ({menu, addMenuToOrders}) => {

  return (
    <div className="w-40 m-2 rounded-lg bg-white shadow overflow-hidden hover:cursor-pointer active:scale-95 transition-transform duration-300  " onClick={() => {addMenuToOrders(menu)}} >
      <div className="h-40">
        <img
          src={menu.image}
          className="w-full h-full object-cover"
          alt="Cumi Tepung"
        />
      </div>
      <div className="h5 py-1 px-2 font-semibold text-overflow-ellipsis text-center">
        {menu.name}
      </div>
    </div>
  )
}

export default FoodMenuItem