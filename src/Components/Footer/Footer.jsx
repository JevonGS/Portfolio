const Footer = () =>{
    return(
        <div className="mt-1 pt-5 pb-10 bg-white" id="Contact">
            <hr className="border-black m-auto"/>
            <div>
                <h1 className="mt-10 text-4xl text-black font-bold md:text-right text-center">Contact</h1>
            </div>
            <div className="md:flex md:justify-between md:mt-10">
                <h1 className="text-2xl text-black font-bold md:text-left text-center opacity-0 md:opacity-100">Portfolio</h1>
                <ul className="text-black flex justify-center md:gap-10 gap-5">
                    <li>
                        <a href="https://www.linkedin.com/in/jevon-geraldo-setiawan-186aaa35b/" className="md:text-xl sm:text-base test-xs hover:text-gray-400">LinkedIn</a>
                    </li>
                    <li>
                        <a href="" className="md:text-xl sm:text-base test-xs hover:text-gray-400">E-Mail</a>
                    </li>
                    <li>
                        <a href="" className="md:text-xl sm:text-base test-xs hover:text-gray-400">Instagram</a>
                    </li>
                    <li>
                        <a href="https://github.com/JevonGS" className="md:text-xl sm:text-base test-xs hover:text-gray-400">Github</a>
                    </li>
                </ul>
            </div>
            <h1 className="text-2xl text-black font-bold md:text-left text-center md:opacity-0 opacity-100 md:mt-0 mt-20">Portfolio</h1>
        </div>
    )
}
export default Footer