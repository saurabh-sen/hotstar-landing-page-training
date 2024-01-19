import { InfoItem } from "./HeroItemInfo";

export default function HeroItemCategory() {
    return <div className="flex gap-2 items-center font-bold text-sm md:text-lg my-4 flex-wrap">
        <InfoItem title="Reality" />
        |
        <InfoItem title="Competition" />
        |
        <InfoItem title="Dance" />
        |
        <InfoItem title="Mind-Blowing" />
    </div>
}