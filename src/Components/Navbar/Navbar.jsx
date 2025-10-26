import {useState, useEffect} from "react";

const Navbar = () =>{
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 150) {
                setActive(true)
            }else{
                setActive(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.addEventListener("scroll", handleScroll)
        }
    }, []);

    return(
        <>
            <div className="navbar py-7 flex item-center justify-between">
                <h1 className='text-2xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white'>Portfolio</h1>
                <ul   className={`menu flex items-center sm:gap-10 gap-4 
                                md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 
                                md:opacity-100 
                                bg-white/30 backdrop-blur-md md:bg-transparent md:backdrop-blur-0
                                p-4 rounded-br-2xl rounded-bl-2xl 
                                transition-all duration-300 z-50
                                ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
                    <li>
                        <a href="#Home" className='text-xs font-'>Home</a>
                    </li>
                    <li>
                        <a href="#Project" className='text-xs font-medium'>Project</a>
                    </li>
                    <li>
                        <a href="#Contact" className='text-xs font-medium'>Contact</a>
                    </li>
                </ul>
            </div>
        </>
    );

}
export default Navbar;
