//TODO: My sweet spot is owning solutions from end to end
var data = {
    bio: {
        "name": "Luis A. Rodriguez-Condit",
        "role": "Technical Architect – Embedded & Web Systems",
        "summary": "I'm a Senior Software Engineer with over 20 years of experience building software that ranges from video games for small resource limited mobile devices to web applications used by millions of users. I prioritize user experiences to help them achieve whatever their trying to do in a simpler, quicker fashion. I am capable of being an individual contributor, or leading teams where I use my organizational and emotional skills to deliver what the customer or business needs. In a mentor or lead role, I tend to be empathetic, looking for ways to keep the team's morale up so we can all be more efficient. Overall I love to design, write and deliver software that is not only technically sound, but also meaningful and user-centered."
    },
    skills: [ // languages, system & low level, web & frameworks, leadership
        {
            "name": "Languages",
            "skills": [
                { "name": "C", "v": "80", "y": "0" },
                { "name": "JavaScript", "v": "90", "y": "0" },
                { "name": "TypeScript", "v": "70", "y": "0" },
                { "name": "CSS", "v": "70", "y": "0" },
                { "name": "HTML", "v": "80", "y": "0" },
                { "name": "Java", "v": "50", "y": "0" },
                { "name": "C++", "v": "50", "y": "0" },
                { "name": "Python", "v": "50", "y": "0" },
                { "name": "Objective-C", "v": "50", "y": "0" },
                { "name": "Swift", "v": "50", "y": "0" },
                { "name": "z80 Assembly", "v": "40", "y": "0" },
                { "name": "Brew", "v": "50", "y": "0" },
                { "name": "J2ME", "v": "50", "y": "0" },
            ]
        },
        {
            "name": "System and low level",
            "skills": [
                { "name": "Emscripten", "v": "70", "y": "0" },
                { "name": "Markdown", "v": "80", "y": "0" },
                { "name": "Hardware Emulation", "v": "80", "y": "0" },
                { "name": "WebAssembly", "v": "60", "y": "0" },
                { "name": "OpenAPI/Swagger", "v": "60", "y": "0" },
                { "name": "Java Native Interface", "v": "50", "y": "0" },
                { "name": "WebSerial", "v": "50", "y": "0" },
                { "name": "WebUSB", "v": "50", "y": "0" },
                { "name": "USB Communication", "v": "50", "y": "0" },
                { "name": "Cross-Compilation", "v": "50", "y": "0" },

            ]
        },
        {
            "name": "Mobile/Web/Frameworks",
            "skills": [
                { "name": "Angular", "v": "60", "y": "0" },
                { "name": "Spring Boot", "v": "50", "y": "0" },
                { "name": "Lua", "v": "50", "y": "0" },
                { "name": "Gulp", "v": "50", "y": "0" },
                { "name": "Ant", "v": "50", "y": "0" },
                { "name": "Mocha", "v": "50", "y": "0" },
                { "name": "Jasmine", "v": "50", "y": "0" },
                { "name": "Selenium WebDriver", "v": "50", "y": "0" },
                { "name": "Jest", "v": "50", "y": "0" },
                { "name": "React Testing Library", "v": "50", "y": "0" },

                // { "name": "iOS", "v": "50", "y": "0" },
                // { "name": "Android (NDK, AOSP)", "v": "50", "y": "0" },
            ]
        },
        {
            "name": "Leadership",
            "skills": [
                { "name": "Test-Driven Development", "v": "75", "y": "0" },
                { "name": "Technical Leadership", "v": "50", "y": "0" },
                { "name": "Agile/Scrum", "v": "80", "y": "0" },
                { "name": "Project Coordination", "v": "50", "y": "0" },
                { "name": "Git", "v": "75", "y": "0" }
            ]
        }
    ],
    contacts: {
        "mobile": {
            "text": "+1-972-850-6310",
            "url": "tel://",
            "fa": "fa-phone-square"
        },
        "email": {
            "text": "larc63@gmail.com",
            "url": "mailto://",
            "fa": "fa-envelope-square"
        },
        "linkedin": {
            "text": "larc63",
            "url": "https://www.linkedin.com/in/",
            "fa": "fa-linkedin-square"
        },
        "github": {
            "text": "larc63",
            "url": "https://www.github.com/",
            "fa": "fa-github-square"
        },
        "location": "Dallas, TX"
    },
    work: {
        "jobs": [{
            "employer": "Texas Instruments",
            "title": "Software Architect",
            "location": "Dallas, TX",
            "dates": "Nov 2010 - Sep 2025",
            "brief": "Design and implement functional models of the client's new products and features.",
            "description": "Tenure involved an evolution from rapid functional prototyping (building POCs and starter code, thus, reducing time-to-market) and deep systems engineering to technical leadership roles and architectural oversight. Considered the go-to person for bringing low-level hardware emulation and proprietary communication protocols to desktop and web applications. As part of the metrics task force, designed and met code quality metrics with tools like unit tests, code sanitizers, linters and static analyzers. This career progression was formally recognized with an appointment to the first rung of TI's Technical Ladder.",
            "description_old": "Create functional models for new features to be implemented on future releases of the company's client product lines. The product lines have source code written in different languages and architectures, as a System Engineer, the design and implementation of functionalities often require visiting different layers of the system, be it communicating from devices to desktop software, making portable documents that work on multiple architectures and form factors that the software runs on to creating stand-alone device emulators",
            "url": "http://education.ti.com",
            "roles": [
                {
                    "title": "Open Source Auditing",
                    "date": "2018-2025",
                    "description": "Responsible for reviewing software third party library lists to determine their eligibility for integrating into our products. End result of this per-release activity is a list of attributions that would get appended to the EULA for each shipped product."
                },
                {
                    "title": "Tech Sync Coordinator",
                    "date": "2018-2025",
                    "description": "Coordinated business-wide info sharing sessions and recruited presenters for the same. This weekly series resulted in broader understanding of deep technical topics as well as business-related subjects"
                },
                {
                    "title": "Calculator Web Apps",
                    "date": "2025",
                    "description": "Led team that implemented the functionality for 2 web apps: One for USB connectivity with the calculator and another shell for the emulator of the calculator. Serving functions of development lead, scrum master. Reviewed user requirements and wrote technical requirements. Web apps were written in Angular, with libraries compiled from C via Emscripten. For USB connectivity, used WebSerial API."
                },
                {
                    "title": "Calculator File Transfer Library",
                    "date": "2024-2025",
                    "description": "Designed and implemented functionality for performing file transfers between 1) Web app and physical calculator using WebSerial API and 2) A webapp that contains an emulated calculator, making the API between both libraries match so they can be a drop-in replacement for each other"
                },
                {
                    "title": "Calculator Transformation Graphing",
                    "date": "2024-2025",
                    "description": "Implemented functionality to support animating graphs on new hardware platform written in C, using the APIs provided by the calculator's tools."
                },
                {
                    "title": "Calculator Build Environment",
                    "date": "2020-2025",
                    "description": "Developed and maintained gulp.js scripts that automated the complex process of invoking disparate platform build tools, such as CMake and MSBuild. This build system was later optimized for speed by restructuring the workflow into parallel Jenkins jobs, resulting in a 70% build time speed-up. The task division was actively managed and rebalanced to sustain peak performance."
                },
                {
                    "title": "Calculator Device Emulation",
                    "date": "2020-2025",
                    "description": "Designed and implemented the glue layer for targeting embedded code on the web by transpiling to WebAssembly. Coordinated cross-functional team that did development and test for new features. Designed and implemented an automation entry point using WebSockets."
                },
                {
                    "title": "TI-84 Plus CE Online Calculator",
                    "date": "2022",
                    "url": "https://84plusce.ti.com/8eu",
                    "description": "Implemented Angular application that provides access to an emulator for the TI 84 Plus CE calculator on web browsers. Implemented single-sign-on usage for user authentication (OAuth identity) and license validation (entitlement) via 3rd party provider. This was the first publicly available TI calculator on a web app with *over 1500 users in first month."
                },
                // {
                //     "title": "TI-Nspire Online Calculator",
                //     "description": "Consulted with team implementing the glue layer as well as the application in Angular"
                // },
                {
                    "title": "License Activation Center",
                    "url": "https://activation.ti.com/activate/",
                    "date": "2020-2021",
                    "description": "Designed and implemented a key validation interface in coordination with our DBA to provide users a means to activate license codes. Front end implementation written in Angular with a RESTful middleware implemented in Java+SpringBoot communicating with an Oracle database."
                },
                {
                    "title": "TI-84 Plus CE Chrome App",
                    "date": "2020",
                    "description": "In reaction to the covid pandemic, led the team that worked to support remote learning on Chrome OS allowing students coming back from spring break to have a TI calculator to work with. To date, the application has been used by over 3.5 million users. -- written in angular reusing previous work from the ExamCalc product."
                },
                {
                    "title": "Automated Test Framework Prototype",
                    "date": "2019",
                    "description": "Prototyped automation framework for interacting with calculator libraries in the browser using Node.js, CucumberJS, Mocha and Selenium Web Driver."
                },
                {
                    "title": "Web Apps Server-Side",
                    "date": "2019",
                    "description": "Led team in determining Tomcat and Apache Web server configuration changes needed to address concerns brought up by IT security scans. Changes included modifying HTTP headers and additions to meta tags in the web app's HTML"
                },
                {
                    "title": "TI-Nspire Connect",
                    "url": "https://nspireconnect.ti.com/nsc/",
                    "date": "2019",
                    "description": "Designed and implemented Angular shell to run the web app, as well as the JavaScript and C glue layers for cross-compiling NavNet, the TI-Nspire line of calculator's communication library with Emscripten to enable communicating with a TI-Nspire CX II device via WebUSB. 28k on it's first year."
                },
                {
                    "title": "ExamCalc Accessibility",
                    "date": "2017-2018",
                    "url": "https://education.ti.com/en/product-resources/examcalc-software#:~:text=WCAG%2Dcompliant%20accessibility",
                    "description": "Implemented  code needed in both z80 assembly and javascript to support market needs to make calculator emulators interact correctly with a screen reader for the vision impaired. Due to the nature of the calculator emulators, no _aria_ element is readily available, so the emulator needs to provide the messages to be fed to a screen reader."
                },
                {
                    "title": "TI Connect For Chrome OS",
                    "url": "https://education.ti.com/en/products/computer-software/ti-connect-ce-chrome-os",
                    "date": "2015-2016",
                    "description": "Ported the communications layer on a utility that talks to TI calculators using Chrome's USB API. Implemented user-facing features in AngularJS in combination with Chrome APIs."
                },
                {
                    "title": "TI Connect CE",
                    "url": "https://education.ti.com/en/products/computer-software/ti-connect-ce-sw",
                    "date": "2013-2015",
                    "description": "Delivered cross-platform compatibility for a proprietary CARS communication protocol by porting the codebase to generate platform-native libraries (Windows/macOS). Established the USB communication architecture using an abstraction layer and integrated the functionality into the application via Java Native Interface (JNI)."
                },
                {
                    "title": "TI SmartView (Hardware Emulation)",
                    "date": "2013-2016",
                    "url": "https://education.ti.com/en/us/products/computer_software/ti-smartview-software/ti-smartview-ce-emulator-software-for-the-ti-84-plus-family/tabs/overview",
                    "description": "Wrote and reviewed user requirements. Designed and implemented features related to interacting with emulated hardware. Helped the development team solve memory and performance issues."
                },
                {
                    "title": "TI 84 Plus CE ExamCalc",
                    "date": "2013",
                    "url": "https://education.ti.com/en/product-resources/examcalc-software#:~:text=TI%2D84%20Plus%20CE%20graphing%20calculator",
                    "description": "Implemented emulators for ez80-based devices which have gone through our client's pilots involving 800k users without any reported issues."
                },
                {
                    "title": "ExamCalcs",
                    "date": "2012-2013",
                    "url": "https://education.ti.com/en/product-resources/examcalc-software",
                    "description": " TI calculators that are approved for use on *ACT®, SAT®, and AP® exams*, as well as most *state assessments.* . Ported and implemented calculator emulators to the web. Adapted z80 opcodes and emulated the TI-84 Silver Edition and TI-84 Plus C's ASICs. Ported Toshiba T4 cpu emulation from Java and implemented the TI-108 and TI-30MV's ASICs. Pilots involving 800k users without any reported issues. https://education.ti.com/en/us/about/press-center/press-listing-content-module/6-20-2013-ccss"
                },
                {
                    "title": "Document Display Standardization",
                    "date": "2012",
                    "description": "Given the strong desire for documents to display with the same word-wrapping and character counts on all supported devices (iPad being a new addition): researched and developed guidelines and layout rules for document rendering when being displayed on different screen resolutions."
                },
                {
                    "title": "Lua Glue",
                    "date": "2011",
                    "description": "Designed and implemented the infrastructure for creating new classroom activities using the Lua scripting language. The C counterpart for the Lua bindings, as well as the Lua engine itself gets cross-compiled to run on different platform including iOS, Nucleus and desktop operating systems."
                },
                /* Android Investigations */
                //                "Compiled and modified the AOSP to research VNC server possibilities; test target at the time was an OMAP dev board.",
                /* SE work */
                //                "Worked in conjunction with the product managers and development leads to determine software requirements.",
                {
                    "title": "Image Question type",
                    "description": "Designed and implemented some of the infrastructure necessary to create new classroom activities using the Lua scripting language. The C counterpart for the Lua bindings, as well as the Lua engine itself gets cross-compiled to run on different platform including iOS, Nucleus and desktop operating systems. The use of Lua would open up the possibility of expanding TI-Nspire's question types in the future without needing to write them in Java"
                },
                {
                    "title": "Ui And Background Thread Refactor",
                    "description": "Worked in conjunction with the development team to refactor the usage of JNI, improving performance and memory usage."
                }
            ],
        },
        {
            "employer": "Digital Chocolate",
            "title": "Game Engineering Manager",
            "location": "Mexicali, B. C.",
            "dates": "2009-2010",
            "brief": "Managed the team doing porting for the US carriers' devices.",
            "description": "Managed the team doing porting for the US carriers' devices.",
            "description_old": "Coordinating project planning for various carriers in the US, working in conjunction with the sales and marketing teams to reduce production costs and improve revenue. Lead and mentor the engineering team, offering tutorials where needed. Ported a 3D game from the iPhone platform to Brew using OpenGL ES. Created client module for Qualcomm's Application Value Billing API in conjunction with the team in Bangalore, India. Aided the creation team to reduce the footprint for their project; done in j2me, targeting a device with strict hardware constraints.",
            "roles": [
                {
                    "title": "Game Engineering Manager",
                    "date": "2009-2010",
                    "description": "Coordinating project planning for various carriers in the US, working in conjunction with the sales and marketing teams to reduce production costs and improve revenue. Lead and mentor the engineering team, offering tutorials and code deep-dives where needed."
                },
                {
                    "title": "Brew In App Purchase Library",
                    "date": "2010",
                    "description": "Created client module for Qualcomm's Application Value Billing API (C/C++) in conjunction with the team in Bangalore, India. Allowing games to have in-app-purchases as well as promoting code reuse on future game titles"
                },
                {
                    "title": "Star Invasion",
                    "date": "2010",
                    "description": "Supported team that created Alien Invaders by porting for small-screened and resource limited devices. Aided the creation team to reduce the footprint for their project; done in J2ME, targeting small-screened and resource limited devices."
                },
                {
                    "title": "Rollercoaster Rush for iPhone",
                    "date": "2010",
                    "url": "https://itunes.apple.com/us/app/3d-rollercoaster-rush/id319575672",
                    "description": "Ported iPhone implementation of OpenGL ES game to Qualcomm's Brew framework"
                },
            ],
            "url": "http://en.wikipedia.org/wiki/Digital_Chocolate"
        },
        {
            "employer": "LemonQuest",
            "title": "iPhone Lead Programmer",
            "location": "Salamanca, Spain",
            "dates": "April 2008 to June 2009",
            "brief": "Developed 2 published titles for the iPhone platform.",
            "description": "Developing games and applications for the iPhone OS. Coordinated development with a geographically distributed team. Prompted the company to implement updates to infrastructure to improve productivity.",
            "roles": [
                {
                    "title": "Tool Programmer",
                    "date": "2008",
                    "description": "Aided in the development of a stage editor for a game, done in Java."
                },
                {
                    "title": "Circulate and Circulate Prologue",
                    "date": "2008",
                    "url": "https://www.pocketgamer.com/circulate/review/",
                    "url_old": "https://www.pocketgamer.com/circulate-prologue/lemonquest-brings-circulate-prologue-to-the-app-store/",
                    "description": "Originally a PC based game; it was ported to the iPhone platform. Game used every user-friendly feature on the iPhone, including it's 3d sound capabilities with Open AL and it's accelerometer. Ported the DirectX implementation to the iPhone's OpenGL ES, converting 3d models from quads to triangles on the. Translated levels originally designed for desktop/mouse to be usable on a touch device. This game earned a bronze medal from pocketgamer.co.uk."
                },
                {
                    "title": "iFit",
                    "date": "2009",
                    "description": "Wrote and application that provided pedometer functionality as well as fitness tips for the iPhone"
                },
            ],
            "url": "https://www.ign.com/games/producer/lemonquest"
        },
        {
            "employer": "Gameloft",
            "title": "iPhone Programmer",
            "location": "Mexicali, Baja California, Mexico",
            "dates": "August 2005 to March 2008",
            "description": "Various roles, starting from Porting Engineer, Lead Developer, 3d Programmer and R&D Programmer",
            "roles": [
                {
                    "title": "Blockbreaker for iPhone",
                    "date": "2007-2008",
                    "description": "Developed and ported first prototype for the brick-breaker game using the Celestial framework for iPhone. The Mexico studio's team was the first to build a successful prototype which led to the studio being assigned more iPhone projects. Used C-implementation for OpenGL ES as graphics engine and sourced models from other platforms."
                },
                {
                    "title": "Bikini Volleyball Mini Games",
                    "date": "2007",
                    "description": "Implemented mini-games that were included with the main volleyball game when built for devices that would support them"
                },
                {
                    "title": "3d Programmer",
                    "date": "2006-2007",
                    "description": "In charge of porting multiple game titles for resource-limited, but 3d-capable devices. All ports used Java's JSR184 3d implementation for mobile devices and were adapted by tweaking frustum setup and removing bottlenecks in graphics pipelines where possible, resulting in improved performance or, in some more extreme cases reducing models' polygon count to achieve acceptable frames-per-second and keep games playable"
                },
                {
                    "title": "Virgin Mobile Team Lead",
                    "date": "2005-2006",
                    "description": "Led team charged with porting games to Virgin Mobile's catalog of space-constrained devices, often needing to reduce games' scope and swap out graphics with lower-detailed versions in addition to performing micro-optimizations to improve performance"
                },
            ],
            "url": "http://www.gameloft.com"
        }
        ],
        "projects": [{
            "name": "50 Chinese Words",
            "location": "Mexicali, Baja California, Mexico",
            "dates": "2009",
            "description": "Wrote an application that reproduces the strokes necessary for writing chinese characters as well as playing their sound. Developed a Chinese character writing tutor for the iPhone.",
            "url": "https://itunes.apple.com/us/app/50-chinese-words-learn-to/id312982180?mt=8",
            "images": [
                "images/ChineseCharacters/thumb.jpeg",
                "images/ChineseCharacters/01.jpeg",
                "images/ChineseCharacters/02.jpeg",
                "images/ChineseCharacters/03.jpeg",
                "images/ChineseCharacters/04.jpeg",
                "images/ChineseCharacters/05.jpeg"
            ]
        },
        {
            "name": "Big 2 Poker",
            "location": "Mexicali, Baja California, Mexico",
            "dates": "2010",
            "description": "Wrote graphics engine using C and OpenGL ES. Created art for a card game for iPhone OS.",
            "url": "https://itunes.apple.com/us/app/big-2-classic-free/id323375748?mt=8",
            "images": [
                "images/Big2Poker/thumb.jpeg",
                "images/Big2Poker/01.jpeg",
                "images/Big2Poker/02.jpeg",
                "images/Big2Poker/03.jpeg",
                "images/Big2Poker/04.jpeg",
                "images/Big2Poker/05.jpeg"
            ]
        },
        {
            "name": "iAarti for Katha Films",
            "location": "Mexicali, Baja California, Mexico",
            "dates": "2010",
            "description": "Wrote a religious-focused application that shows images, plays sounds and uses the iPhone's accelerometer to interact with the user.",
            "images": []
        }

            // Radio Lobo Business Directory for WebCell 2002
            // Designed and wrote the data-driven web application that was to be a business directory for a local radio station

            // Courthouse reporter for WebCell 2002-2003
            // Wrote a server-side scraper with which users could subscribe for updates from legal cases

            // Server monitoring system for WebCell2001-02
            // Designed and wrote a system that would ping a desired host, sending an SMS if it became unreachable

            // MS2000 Maintenance Manager Translator for RQCT2001-02
            // Refactored and translated Microsoft Access VBA queries and forms

            // Webpage prototype for soyforaneo.com1999
            // Wrote PHP/HTML routines and queries for a data-driven service

        ]
    },
    education: {
        "schools": [
            // {
            //     "name": "Udacity",
            //     "location": "Online",
            //     "degree": "Nanodegree",
            //     "major": "iOS developer",
            //     "dates": "2015",
            //     "url": "http://www.udacity.com/"
            // },
            // {
            //     "name": "Udacity",
            //     "location": "Online",
            //     "degree": "Nanodegree",
            //     "major": "Front-end web developer",
            //     "dates": "2014-2015",
            //     "url": "http://www.udacity.com/"
            // },
            {
                "name": "Centro de Investigación Científica y de Educación Superior de Ensenada (CICESE)",
                "location": "Ensenada, B. C., Mexico",
                "degree": "Completed coursework towards: Master's",
                "major": "Electronics and Telecommunications with specialization in control systems and automation",
                "dates": "2002-2005",
                "url": "http://www.cicese.edu.mx/",
                "projects": [
                    {
                        "title": "Robot Control Over Ethernet",
                        "date": "2004",
                        "description": "Developed RT-Linux kernel modules to communicate a PC that performed the PD control algorithm and a a driver PC that sent control signals and motor positions over TCP sockets with low-latency, minimal-jitter to control a 2-degree-of-freedom robot arm. Control PC had a Java Swing UI connected to the kernel module via Java Native Interface. The driver PC performed I/O operations directly to a data acquisition card from kernel space."
                    },
                ]
            },
            {
                "name": "Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)",
                "location": "Monterrey, N. L.",
                "degree": "Bachelor's",
                "major": "Electronics Systems Engineering",
                "dates": "1997-2001",
                "url": "http://www.itesm.mx/",
                "projects": [
                    {
                        "title": "Control And Automation Seminar",
                        "date": "2021",
                        "description": "Attended summer student exchange at the Unversité de Poitiers, France with a focus on control systems engineering."
                    },
                    {
                        "title": "Robot Watchdog",
                        "date": "2018",
                        "description": "As part of a 2 month internship at CICESE, particiapeted in the design discussions for a watchdog system to avoid wire tangling. Designed the CAD 3d model for the custom enclosure to fit side-by-side on the rack that housed the robot's motor drivers. Performed soldering and validation of the watchdog's PCB."
                    },
                ]
            }
        ],
        "onlineCourses": [
        {
            "title": "AWS Cloud Practitioner Essentials",
            "school": "AWS skill Builder",
            "dates": "2025",
            "url": "https://skillbuilder.aws/learn/94T2BEN85A/aws-cloud-practitioner-essentials/8D79F3AVR7",
            "certificate": ""
        },
        {
            "title": "Next.js Fundamentals",
            "school": "Codecademy",
            "dates": "2025",
            "url": "https://www.codecademy.com/learn/intro-to-next-js",
            "certificate": ""
        },
        {
            "title": "OpenAPI Fundamentals (LFEL1011)",
            "school": "Linux Foundation",
            "dates": "2025",
            "url": "https://trainingportal.linuxfoundation.org/courses/openapi-fundamentals-lfel1011",
            "certificate": ""
        },
        {
            "title": "Learn React Testing",
            "school": "Codecademy",
            "dates": "2025",
            "url": "https://www.codecademy.com/learn/learn-react-testing",
            "certificate": ""
        },
        {
            "title": "Learn React: Lifecycle Methods",
            "school": "Codecademy",
            "dates": "2025",
            "url": "https://www.codecademy.com/learn/learn-react-lifecycle-methods",
            "certificate": ""
        },
        {
            "title": "Learn React",
            "school": "Codecademy",
            "dates": "2025",
            "url": "https://www.codecademy.com/enrolled/courses/react-101",
            "certificate": ""
        },
        {
            "title": "Bluetooth Low Energy Fundamentals",
            "school": "Nordic Developer Academy",
            "dates": "2025",
            "url": "https://academy.nordicsemi.com/courses/bluetooth-low-energy-fundamentals/",
            "certificate": ""
        },
        {
            "title": "A Beginner\'s Guide to Linux Kernel Development (LFD103)",
            "school": "Linux Foundation",
            "dates": "2025",
            "url": "https://training.linuxfoundation.org/training/a-beginners-guide-to-linux-kernel-development-lfd103/",
            "certificate": ""
        },
        {
            "title": "Learn C++",
            "school": "Codecademy",
            "dates": "2025",
            "url": "https://www.codecademy.com",
            "certificate": ""
        },
        {
            "title": "iOS developer nanodegree",
            "school": "Udacity",
            "dates": "2015",
            "url": "",
            "certificate": ""
        },
        // {
        //     "title": "iOS Persistence and Core Data",
        //     "school": "Udacity",
        //     "dates": "2015",
        //     "url": "https://www.udacity.com/course/viewer#!/c-ud325-nd",
        //     "certificate": "#"
        // },
        // {
        //     "title": "iOS Networking with Swift",
        //     "school": "Udacity",
        //     "dates": "2015",
        //     "url": "https://www.udacity.com/course/viewer#!/c-ud421-nd",
        //     "certificate": "#"
        // },
        // {
        //     "title": "UIKit Fundamentals I",
        //     "school": "Udacity",
        //     "dates": "2015",
        //     "url": "https://www.udacity.com/course/viewer#!/c-ud788b-nd",
        //     "certificate": "#"
        // },
        // {
        //     "title": "UIKit Fundamentals II",
        //     "school": "Udacity",
        //     "dates": "2015",
        //     "url": "https://www.udacity.com/course/viewer#!/c-ud788a-nd",
        //     "certificate": "#"
        // },
        // {
        //     "title": "Intro to iOS App Development Swift",
        //     "school": "Udacity",
        //     "dates": "2015",
        //     "url": "https://www.udacity.com/course/ud585",
        //     "certificate": "#"
        // },

        {
            "title": "Front-end web developer nanodegree",
            "school": "Udacity",
            "dates": "2014-2015",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011",
            "certificate": ""
        },
        // {
        //     "title": "JavaScript Design Patterns",
        //     "school": "Udacity",
        //     "dates": "2015",
        //     "url": "https://www.udacity.com/course/ud989",
        //     "certificate": "#"
        // },

        {
            "title": "Website Performance Optimization",
            "school": "Udacity",
            "dates": "2014",
            "url": "https://www.udacity.com/course/ud884",
            "certificate": "res//UD884.pdf"
        },
        {
            "title": "Object-Oriented JavaScript",
            "school": "Udacity",
            "dates": "2014",
            "url": "https://www.udacity.com/course/ud015",
            "certificate": "res//UD015.pdf"
        },
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": "2014",
            "url": "https://www.udacity.com/course/ud804",
            "certificate": "res//UD804.pdf"
        },
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "2014",
            "url": "https://www.udacity.com/course/ud304",
            "certificate": "res/UD304.pdf"
        },
        {
            "title": "HTML5 Game Development",
            "school": "Udacity",
            "dates": "2014",
            "url": "https://www.udacity.com/course/cs255",
            "certificate": "res/CS255.pdf"
        },
        {
            "title": "jQuery",
            "school": "Codecademy",
            "dates": "2013",
            "url": "http://www.codecademy.com/tracks/jquery",
            "certificate": "#"
        },
        // {
        //     "title": "JavaScript",
        //     "school": "Codecademy",
        //     "dates": "2013",
        //     "url": "http://www.codecademy.com/tracks/javascript",
        //     "certificate": "#"
        // },
        {
            "title": "Software Testing",
            "school": "Udacity",
            "dates": "2012",
            "url": "https://www.udacity.com/course/cs258",
            "certificate": "res/CS258.pdf"
        },
        {
            "title": "Web Application Engineering",
            "school": "Udacity",
            "dates": "2012",
            "url": "https://www.udacity.com/course/cs253",
            "certificate": "res/CS253.pdf"
        },
        {
            "title": "Artificial Intelligence for Robotics",
            "school": "Udacity",
            "dates": "2012",
            "url": "https://www.udacity.com/course/cs373",
            "certificate": "res/CS373.pdf"
        },
        {
            "title": "Introduction to Artificial Intelligence",
            "school": "Stanford",
            "dates": "2011",
            "url": "http://www.ai-class.com",
            "certificate": "res/AI_letter_signed.pdf"
        }
        ]
    }
};
exports.data = data;