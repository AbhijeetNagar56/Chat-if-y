export default function Navbar() {
    return (
        <div className="">
            <div className="navbar bg-base-300 shadow-sm px-10">
                
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl">Chat-if-y</a>
                </div>
                <div className="flex-none">
                    <div className="drawer w-fit">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <li><a>Profile</a></li>
                            <li><a>Setting</a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
