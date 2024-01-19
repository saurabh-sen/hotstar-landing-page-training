export default function HeroItemInfo() {
    return <div className="flex gap-2 items-center font-bold text-sm md:text-lg flex-wrap">
        <InfoItem title="2024" />
        •
        <InfoItem title="8 Seasons" />
        •
        <InfoItem title="Hindi" />
        •
        <InfoButton />
    </div>
}

export function InfoItem({ title }: { title: string }) {
    return <p className="w-max">{title}</p>
}

export function InfoButton() {
    return <p className=" p-1 px-2 rounded-md bg-white bg-opacity-30">U/A 16+</p>
}