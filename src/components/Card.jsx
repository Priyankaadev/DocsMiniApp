import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

function Card({ data }) {
    return (
        <div className=" relative w-60 h-72 px-8 py-10 rounded-[45px] overflow-hidden bg-zinc-900/90 text-white">
            <FaRegFileAlt />
            <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}.</p>
            <div className="footer absolute bottom-0 w-full left-0">
                <div className="flex items-center justify-between px-8 py-3 mb-3">

                    <h5>{data.filesize}</h5>

                    <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
                        {data.close ? <IoClose /> : <LuDownload size='1rem' color="white" />}

                    </span>
                </div>
                {
                    data.tag.isOpen ?(
                    <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
                        <h3 className="text-sm font-semibold "> Download Now</h3>
                    </div> )  : null
                }

            </div>

        </div>

    )
}

export default Card;