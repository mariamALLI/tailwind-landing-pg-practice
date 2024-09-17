export default function Footer(){
    return(
        <footer className="bg-indigo-700 flex justify-center w-screen h-full px-4 py-8 mt-12">
            <div className="max-w-4xl w-full">
                <div>
                    <h3 className="text-center text-xl text-indigo-200 font-bold">Sign up to download the free PDF</h3>
                </div>
                
                <div className="mt-6 flex sm:flex-col items-center">
                    <form className="max-w-xl py-6 w-full flex flex-col items-center" action="#" method="post">
                        <div className="my-3 sm:flex justify-center items-center sm:-mx-4">
                            <label htmlFor="first_name" className="sr-only">First Name</label>
                            <input className="bg-indigo-100 text-gray-600 font-medium w-full border-2 border-pink-500 outline-none rounded-lg px-8 py-3 sm:-mb-4" id="first_name" placeholder="First Name" type="text" />

                            <label htmlFor="last_name" className="sr-only">Last Name</label>
                            <input className="mt-4 bg-indigo-100 text-gray-600 font-medium w-full border-2 border-pink-500 outline-none rounded-lg px-8 py-3 sm:mx-4" id="last_name" placeholder="Last Name" type="text" />
                        </div>

                        <div className="my-3 sm:flex items-center sm:mx-4">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input className="bg-indigo-100 text-gray-600 font-medium w-full border-2 border-pink-500 outline-none rounded-lg px-8 py-3 sm:-mb-4" id="email" placeholder="may@gmail.com" type="text" />

                            <label htmlFor="title" className="sr-only">Title</label>
                            <input className="mt-4 bg-indigo-100 text-gray-600 font-medium w-full border-2 border-pink-500 outline-none rounded-lg px-8 py-3 sm:mx-4" id="title" placeholder="Title" type="text" />
                        </div>
                        <button className="bg-pink-500 text-indigo-200 font-bold text-lg w-full">Creat Account</button>

                    </form>
                </div>

                <p className="my-4 text-center text-indigo-200 font-medium">Copyright © 2019 Scrimba</p>
            </div>
        </footer>
    )
}