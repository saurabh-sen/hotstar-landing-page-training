import HeroItemImage from "./HeroItemImage"
import HeroItemInfo from "./HeroItemInfo"
import HeroItemDesc from "./HeroItemDesc"
import HeroItemCategory from "./HeroItemCategory"
import HeroItemButton from "./HeroItemButton"

export function HeroSection() {
    return (
        <section className="herosection flex flex-col gap-2 justify-start w-full pl-32 pt-10 md:pt-24 ">
            <HeroItemImage />
            <HeroItemInfo />
            <HeroItemDesc />
            <HeroItemCategory />
            <HeroItemButton />
        </section>
    )
}

export default HeroSection;