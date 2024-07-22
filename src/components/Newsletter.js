import React from 'react'

function Newsletter() {
    return (
        <> <div className="bg-green-300 px-4 py-8 text-center">
            <div className="max-w-7xl mx-auto">
                <div className="text-3xl font-bold text-black mb-4">Join our newsletter</div>
                <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
                <form>
                    <div className="flex flex-col sm:flex-row justify-center">
                        <input className="h-10 rounded-3xl border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 "
                            type="email" placeholder="Email"
                        />
                        <button type="button" className=" px-6 py-2  font-semibold text-black text-xl">Subscribe Us</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Newsletter
