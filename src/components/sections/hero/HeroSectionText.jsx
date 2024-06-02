const HeroSectionText = ({context, setHover}) => {

    return (
        <div className="group block" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div
                className="absolute top-80 left-40 px-12 py-4 border-2 group-hover:border-violet-900 group-hover:border-2 group-hover:bg-violet-700 group-hover:bg-opacity-50 transition">
                <h1 className="inline-flex uppercase text-white leading-tight font-thin tracking-wider max-w-lg text-7xl">
                    {context.title}
                </h1>
            </div>
        </div>
    )
}
export default HeroSectionText;