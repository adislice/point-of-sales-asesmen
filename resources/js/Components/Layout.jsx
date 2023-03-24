import Sidebar from "./Sidebar"

function Layout({children}) {
  return (
    <div className="flex h-screen">
        <Sidebar />
        <div className="grow overflow-y-auto">{children}</div>

    </div>
  )
}

export default Layout