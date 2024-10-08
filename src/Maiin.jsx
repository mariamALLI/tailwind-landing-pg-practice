export default function Maiin(){
    return (
        <main className="flex justify-center w-screen px-4 py-3 mt-16">
            <div className="max-w-4xl w-full">
                <div>
                    <div className="border-b-2 border-indigo-200">
                        <h2 className="mb-2 text-indigo-700 font-bold text-xl">How It Works</h2>
                    </div>
                    <p className="mt-4 text-gray-700 font-medium">
                    Tailwind is designed for rapid development of modern applications. At its core, it is a robust mobile-first design system built with developer experience in mind. After using Tailwind CSS, you will find it difficult to go back to use anything else. Learn all about it in this all-inclusive course.
                    </p>
                </div>

                <div>
                    <div className="border-b-2 border-indigo-200 mt-8">
                        <h2 className=" capitalize mb-2 text-indigo-700 font-bold text-xl">advantage</h2>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row sm:-mx-2 ">
                        <div className="shadow-xl mx-2 sm:w-1/3 px-4 py-10 mb-4 rounded-lg text-indigo-700 bg-white border-b-8 border-pink-500 flex flex-col justify-center items-center">
                            <svg className="fill-current w-20 h-20 border rounded-full bg-gray-300 p-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M18.9 19.7l-6.9 2-6.9-2L3.7 3h16.7c-.5 5.6-1 11.1-1.5 16.7zM19.4 
                                4H4.8l1.3 14.9 5.9 1.7 5.9-1.7L19.4 4zM8.1 13.8h2V15l2 .7 2-.7.1-2.2H9.9l-.1-2h4.5l.1-2H7.7l-.1-2h9l-.2 
                                3.9-.4 5.8-3.9 1.3-3.9-1.3-.1-2.7z" fill-rule="evenodd" clip-rule="evenodd"/>
                            </svg>

                            <h3 className="mt-3 text-gray-900 font-bold text-xl">No Custom CSS</h3>
                            <p className="mt-2 text-gray-700 text-base text-center">Tailwind's advanced class extraction will leave your project free of custom CSS.</p>
                        </div>

                        <div className="shadow-xl mx-2 sm:w-1/3 px-4 py-10 mb-4 rounded-lg text-indigo-700 bg-white border-b-8 border-pink-500 flex flex-col justify-center items-center">
                            <svg className="fill-current w-20 h-20 border rounded-full bg-gray-300 p-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M15.3 3.3c0-.2.1-.3.3-.3h.4c.2 0 .3.1.3.3 0 .2-.1.3-.3.3h-.3c-.2.1-.4-.1-.4-.3zm-5 .4h3.3c.2 0 .3-.1.3-.3.1-.3 0-.4-.2-.4h-3.3c-.3 0-.4.1-.4.3 0 .2.1.4.3.4zm7.4 14.6v2.5c0 .7-.5 1.2-1.2 1.2h-9c-.7 0-1.2-.5-1.2-1.2V3.2c0-.7.6-1.2 1.2-1.2h8.9c.7 0 1.2.5 1.2 1.2v15.1zM7 18h10V4.7H7V18zM7 3.2V4h10v-.8c0-.3-.2-.5-.5-.5h-9c-.3 0-.5.2-.5.5zm10 17.6v-2.1H7v2.1c0 .3.2.5.5.5h8.9c.4 0 .6-.2.6-.5zm-3.7-.9v.2c0 .5-.4.9-.9.9h-.8c-.5 0-.9-.4-.9-.9v-.2c0-.5.4-.9.9-.9h.8c.5 0 .9.4.9.9zm-.6 0c0-.1-.1-.3-.3-.3h-.8c-.1 0-.3.1-.3.3v.2c0 .1.1.3.3.3h.8c.1 0 .3-.1.3-.3v-.2zm3.8 2.5h-9c-.9 0-1.6-.7-1.6-1.6V3.2c0-.9.7-1.6 1.6-1.6h8.9c.9 0 1.6.7 1.6 1.6v17.6c0 .9-.7 1.6-1.5 1.6zM13.4 21h3.1c.1 0 .2-.1.2-.2V19h-3.3c.2.2.3.5.3.9v.2c0 .3-.1.6-.3.9zm-6-2v1.8c0 .1.1.2.2.2h3.1c-.2-.2-.3-.5-.3-.9v-.2c0-.3.1-.6.3-.9H7.4zm0-1.4h9.2V5H7.4v12.6zm6.9-14h.7v-.3V3h-.7c0 .1.1.2.1.3s0 .2-.1.3zm-6.9 0h2.3c0-.1-.1-.2-.1-.3s0-.2.1-.3H7.5c-.1 0-.1.1-.1.2v.4z"/>
                            </svg>

                            <h3 className="mt-3 text-gray-900 font-bold text-xl">Mobile Friendly</h3>
                            <p className="mt-2 text-gray-700 text-base text-center">Modern applications demand mobile-friendly & Tailwind's responsive modifiers make it easy.</p>
                        </div>

                        <div className="shadow-xl mx-2 sm:w-1/3 px-4 py-10 mb-4 rounded-lg text-indigo-700 bg-white border-b-8 border-pink-500 flex flex-col justify-center items-center">
                            <svg className="fill-current w-20 h-20 border rounded-full bg-gray-300 p-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M20.1 4H3.6c-.5 0-.9.4-.9.9v10.5c0 .5.4.9.9.9h6.2v2H7.4c-.5 0-.8.4-.8.8s.3.9.8.9h9c.5 0 .8-.4.8-.8s-.4-.8-.8-.8H14v-2h6.2c.5 0 .9-.4.9-.9V4.9c-.1-.5-.5-.9-1-.9zm-.4 11H4.1V5.4h15.6V15zM6.9 10.7L9.7 12h.2c.1 0 .2 0 .3-.1.2-.1.3-.3.3-.5s-.1-.4-.3-.5l-1.7-.8 1.7-.8c.2-.1.3-.3.3-.5s-.1-.4-.3-.5h-.3c-.1 0-.2 0-.2.1L6.9 9.6c-.2.1-.3.3-.3.5 0 .3.1.5.3.6zm3.6 2.6c.1.1.3.2.4.2.2 0 .4-.2.5-.4l1.8-5.8c.1-.2 0-.4-.1-.5-.1-.1-.3-.2-.4-.2-.2 0-.4.2-.5.4l-1.8 5.8c0 .2 0 .4.1.5zm2.8-4.5c0 .2.1.4.3.5l1.7.8-1.7.9c-.2.1-.3.3-.3.5s.1.4.3.5c.1.1.2.1.3.1.1 0 .2 0 .2-.1l2.8-1.3c.2-.1.3-.3.3-.5s-.1-.4-.3-.5L14 8.3c-.1 0-.1-.1-.2-.1s-.2 0-.3.1c-.1.2-.2.3-.2.5z"/>
                            </svg>

                            <h3 className="mt-3 text-gray-900 font-bold text-xl text-center">Developer Experience</h3>
                            <p className="mt-2 text-gray-700 text-base text-center">Tailwind is designed with your happiness in mind. The ease of performing changes is refreshing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}