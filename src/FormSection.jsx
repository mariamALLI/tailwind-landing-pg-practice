import { useState } from "react"

export default function FormSection(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)


    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(`First Name: ${firstName}, Last Name: ${lastName}, Email: ${email}, Title: ${title}`)
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
            setFirstName('')
            setLastName('')
            setEmail('')
            setTitle('')
        }, 5000)
    }

    return(
        <footer className="bg-indigo-700 flex justify-center w-screen h-full px-4 py-8 mt-12">
            <div className="max-w-4xl w-full">
                <div>
                    <h3 className="text-center text-xl text-indigo-200 font-bold">Sign up to download the free PDF</h3>
                </div>
                
                <div className="mt-6 flex sm:flex-col items-center">
                    {isSubmitted ? (
                        <div className="text-pink-500 flex flex-col justify-center items-center">
                         <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M43.171,10.925L24.085,33.446l-9.667-9.015l1.363-1.463l8.134,7.585L41.861,9.378C37.657,4.844,31.656,2,25,2 
                            C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23C48,19.701,46.194,14.818,43.171,10.925z">                                
                            </path>
                        </svg>   
                        <p className="text-indigo-100 font-bold text-2xl text-center my-4 capitalize">Account Created. Check your mail!</p>
                        </div>
                    ) : (
                    <form onSubmit={handleSubmit} className="max-w-xl py-6 w-full flex flex-col items-center" action="#" method="post">
                        <div className="my-3 sm:flex justify-center items-center sm:ml-0 sm:-mr-4">
                            <label htmlFor="first_name" id="first-name" className="sr-only">First Name</label>
                            <input className="shadow-xl bg-indigo-100 text-gray-600 font-medium w-full border-2 border-pink-500 outline-none rounded-lg px-12 py-3 sm:-mb-4" 
                            id="first_name" 
                            placeholder="First Name" 
                            type="text"
                            name="fname" 
                            value={firstName}
                            onChange={(event)=> setFirstName(event.target.value)}/>

                            <label htmlFor="last_name" id="last-name" className="sr-only">Last Name</label>
                            <input className="shadow-xl mt-4 bg-indigo-100 text-gray-600 font-medium w-full border-2 border-pink-500 outline-none rounded-lg px-12 py-3 sm:mx-4" 
                            id="last_name" 
                            placeholder="Last Name" 
                            type="text"
                            name="lname"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)} />
                        </div>

                        <div className="my-3 sm:flex justify-center items-center sm:ml-0 sm:-mr-4">
                            <label htmlFor="email" id="mail" className="sr-only">Email</label>
                            <input className="shadow-xl bg-indigo-100 text-gray-600 font-medium w-full border-2 border-pink-500 outline-none rounded-lg px-12 py-3 sm:-mb-4" 
                            id="email" 
                            placeholder="may@gmail.com" 
                            type="text" 
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}/>

                            <label htmlFor="title" id="title-name" className="sr-only">Title</label>
                            <input className="shadow-xl mt-4 bg-indigo-100 text-gray-600 font-medium w-full border-2 border-pink-500 outline-none rounded-lg px-12 py-3 sm:mx-4" 
                            id="title" 
                            placeholder="Title" 
                            type="text"
                            name="title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}/>
                        </div>
                        <button type="submit" className="shadow-xl border-none rounded-lg px-2 py-3 bg-pink-500 text-indigo-200 font-bold text-lg w-full hover:bg-pink-700">Create Account</button>

                    </form>
                    )}
                </div>

                <p className="my-4 text-center text-indigo-200 font-medium">Copyright © 2019 Scrimba</p>
            </div>
        </footer>
    )
}