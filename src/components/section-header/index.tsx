type SectionHeaderProps = {
    sectionName: string
    title: string
    subTitle: string
    description: string
    isCenterItems?: boolean
    children: React.ReactNode
}

function SectionHeader({
    sectionName,
    title,
    subTitle,
    description,
    isCenterItems = true,
    children,
}: SectionHeaderProps) {
    return (
        <section
            id={sectionName}
            className={`flex flex-col justify-center px-6 lg:px-0 ${isCenterItems ? 'items-center' : undefined}`}
        >
            <div className="flex flex-col items-center text-center mb-6">
                <h4 className="text-base font-extrabold border py-[6px] sm:py-[7px] px-4 rounded-full shadow-md lg:text-lg text-orange-400 dark:text-white dark:bg-orange-500 dark:border-orange-500">
                    {title}
                </h4>
                <h2 className="text-3xl mt-4 mb-6 font-extrabold tracking-tight lg:text-4xl bg-gradient-to-r from-zinc-700 to-gray-400 dark:from-zinc-200 dark:to-gray-500 bg-clip-text text-transparent">
                    {subTitle}
                </h2>
                <div className="lg:w-[900px]">
                    <p className="leading-7 font-medium mb-6 text-zinc-700 dark:text-zinc-400 text-sm lg:text-base">
                        {description}
                    </p>
                </div>
            </div>
            {children}
        </section>
    )
}

export default SectionHeader
