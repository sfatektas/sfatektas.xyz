const Home = () => {
    const p="<p>" , p_end="</p>"
    return (
        <div className=" bg-gray-700 h-screen flex flex-col justify-center items-center">
            <h1 className=" text-9xl text-black sm:text-6xl">Sefa <span className="text-white">Tektaş</span></h1>
            <div className="scope flex justify-between sm:mt-4">
                <span className="inline-block text-3xl ml-4 sm:text-xl sm:ml-4">{p}</span>
            <div className="home-body m-16 text-2xl font-bold sm:m-10">
               <p> I am a 3rd year student at Düzce University.
                I want to improve myself in Javascript and web development.
                </p></div>
                <span className="inline-block text-3xl self-end mr-4 sm:text-xl sm:mr-4">{p_end}</span>
            </div>
                
        </div>
    )
}
export default Home; 