function Resume() {
    const workExperiences = [
        {
            title: "Land and Titling Support Officer",
            startDate: "January 2022",
            endDate: "Present",
            company: "NSW Land Registry Services",
            location: "Sydney, NSW",
            duties: [
                "Reviewed and prepared documents for registration, ensuring compliance with operational and legislative requirements.",
                "Assembled land information and contributed to excellence in customer service.",
                "Demonstrated strong problem-solving abilities to address operational challenges."
            ],
        },
        {
            title: "Respiratory Collector Team Leader",
            startDate: "August 2021",
            endDate: "January 2022",
            company: "Laverty Pathology",
            location: "Mascot, NSW",
            duties: [
                "Managed a team to ensure efficient specimen collection and safe work environment.",
                "Trained new team members in protocols and procedures, ensuring compliance with quality standards.",
                "Resolved operational issues promptly, maintaining high productivity levels."
            ],
        },
        {
            title: "Team Member",
            startDate: "December 2019",
            endDate: "December 2021",
            company: "Grill'd Healthy Burgers",
            location: "Macquarie Park, NSW",
            duties: [
                "Kept work areas clean, organized, and safe to promote efficiency and team safety.",
                "Operated register to process payments and collect cash payment for order totals.",
                "Instructed junior team members on protocols, safety requirements, and procedures of each station to maximize contributions.",
                "Maintained productive, efficient approach to all tasks.",
                "Resolved issues quickly to maintain productivity goals.",
                "Developed strong cooperative relationships with coworkers and manager."
            ],
        }
    ];

    const educationDetails = [
        {
            degree: "Bachelor’s of Computer Science",
            university: "University of New South Wales",
            startDate: "September 2023",
            endDate: "March 2025",
            details: "-Major in Embedded Systems",
        },
        {
            degree: "The Coding Bootcamp",
            university: "University of Sydney",
            startDate: "May 2023",
            endDate: "October 2023",
            details: "Learn fundamental concepts of web development, including HTML, CSS, and JavaScript. Work with servers, databases, and other back end technologies, such as MySQL database, Node.js, and more. Grow your skills using NoSQL databases, convert traditional applications into progressive web applications, and learn React.",
        },
    ];

    return (
        <section id="resume" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mx-auto inline-block w-6 h-6 mb-4">
                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                </svg>

                <div className="flex flex-col w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Andy Su</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Sydney, NSW 2000</p>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Phone: 0469314495 | Email: andy.su7117@gmail.com</p>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">LinkedIn: <a href="https://linkedin.com/in/andysu7117" target="_blank" rel="noopener noreferrer"  className="underline text-gray-400 hover:text-white">www.linkedin.com/in/andysu7117</a></p>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">GitHub: <a href="https://github.com/Andysu7117" target="_blank" rel="noopener noreferrer" className="underline text-gray-400 hover:text-white">https://github.com/Andysu7117</a></p>
                </div>

                <div className="flex flex-col w-full mb-20">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">SUMMARY</h2>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Passionate and detail-oriented aspiring software engineer with a focus on backend development and web technologies. 
                    Proficient in Python, SQL, HTML, CSS, JavaScript, React and many other prograemming languages and libraries. Experienced in collaborative projects and dedicated to delivering high-quality solutions. Eager to learn and expand my knowledge in the constantly growing tech field.</p>
                </div>

                <div className="flex flex-col w-full mb-20">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">SKILLS</h2>
                    <ul>
                        {['Python', 'SQL', 'HTML, CSS, JavaScript', 'Node.js', 'Version Control: Git', 'Problem-Solving', 'Communication', 'Team Collaboration', 'React', 'MongoDB and Mongoose', 'C'].map(skill => (
                            <li key={skill}>- {skill}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col w-full mb-20">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">WORK EXPERIENCE</h2>
                    {workExperiences.map((experience, index) => (
                        <WorkExperience key={index} {...experience} />
                    ))}
                </div>

                <div className="flex flex-col w-full mb-20">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">EDUCATION</h2>
                    {educationDetails.map((education, index) => (
                        <Education key={index} {...education} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const WorkExperience = ({ title, startDate, endDate, company, location, duties }) => {
    return (
        <div className="mb-4">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{startDate}–{endDate}</p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{company}, {location}</p>
            <ul>
                {duties.map(duty => (
                    <li key={duty}>- {duty}</li>
                ))}
            </ul>
        </div>
    );
};

const Education = ({ degree, university, startDate, endDate, details }) => {
    return (
        <div className="mb-4">
            <h3 className="text-xl font-semibold text-white">{degree}</h3>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{university}</p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{startDate}–{endDate}</p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{details}</p>
        </div>
    );
}

export default Resume;