function Navbar(){
    return(
        <div className="flex justify-between items-center p-5 bg-amber-800 text-white">
            <hi>LOGO</hi>
            
            <ul className="flex gap-10 text-lg font-medium">
                <li>
                    <a href="">HOME</a>
                </li>
                <li>
                    <a href="">CONTENT</a>
                </li>
                <li>
                    <a href="">LOGIN</a>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;