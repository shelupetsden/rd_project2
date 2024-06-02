const InteractiveSectionText = ({context, setHover}) => {

    return (
        <div
            className="relative bg-white -top-[350px] -right-[700px] h-auto w-[600px] p-20 transition duration-500 group hover:bg-violet-400"
            onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div
                className="flex flex-col text-black gap-4 max-w-lg  transition duration-500 group-hover:text-white">
                <h2 className="leading-tight font-thin tracking-wider max-w-lg text-5xl">
                    {context.title}
                </h2>
                <div className="text-gray-400 transition duration-500 group-hover:text-white">
                    {context.description}
                </div>
            </div>
        </div>)
}
export default InteractiveSectionText;