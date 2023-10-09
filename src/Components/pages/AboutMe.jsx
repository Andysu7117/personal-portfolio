export default function AboutMe() {
    return (
        <section id="about-me" className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Andy.
                </h1>
                <p className="mb-8 leading-relaxed">
                I currently am a Computer Science student at UNSW. My hobbies are basketball, going to the gym, hanging out with friends and coding.
                <br/>
                This is a portfolio of me and the projects I have done. Feel free to have a look through my portfolio.
                </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./coding.svg"
                />
            </div>
            </div>
        </section>
    );  
}