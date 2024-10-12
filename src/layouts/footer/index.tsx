function Footer() {
    return (
        <footer className="text-gray-600 mt-12">
            <div className="container px-5 py-8 mx-auto flex items-center justify-center md:flex-row flex-col">
                <a className="flex title-font font-semibold items-center md:justify-start justify-center text-orange-500 dark:text-orange-400">
                    <span className="ml-3 text-lg md:text-xl">Kaya's Installatietechniek</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 md:border-l-2 md:border-gray-200 dark:text-gray-200 md:dark:border-slate-700 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
                    © {new Date().getFullYear()} &nbsp;Kaya's Installatietechniek &nbsp; — &nbsp;
                    <a
                        href="https://instagram.com/nesathanozturk"
                        className="text-gray-600 ml-1 hover:underline dark:text-gray-200"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @nesathanozturk
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
