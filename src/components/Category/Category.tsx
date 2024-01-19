import { FaAngleRight } from "react-icons/fa"
import CategoryCarousel from "./CategoryCarousel"
import { useState } from "react"

interface ILatestRelease {
    title: string;
}

const Category = ({title} : ILatestRelease) => {

    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <section className="category pl-32 pt-8 bg-[#0f1014] cursor-pointer" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <div className="flex justify-between py-3">
                <p className="text-xl font-semibold">{title}</p>
                {
                    isHover
                    && <p className="text-xl font-bold flex gap-2 items-center ">
                        <span className="text-gray-400">
                            View All
                        </span>
                        <span className="text-gray-400">
                            <FaAngleRight />
                        </span>
                    </p>
                }
            </div>
            <CategoryCarousel isHover={isHover} />
        </section>
    )
}

export default Category