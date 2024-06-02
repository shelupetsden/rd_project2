const InteractiveSectionText = ({context, setHover}) => {

    return (<div
        className="flex items-center justify-center w-full px-32 py-32 lg:relative lg:p-20 bg-white -top-[350px] -right-[700px] h-auto lg:w-[600px] transition duration-500 group hover:bg-violet-400"
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div
            className="text-center lg:text-start  flex flex-col text-black gap-4 max-w-lg  transition duration-500 group-hover:text-white">
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