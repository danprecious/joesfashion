import React from 'react'

const RootError = () => {
    return (
        <div className="flex h-[100vh] justify-center items-center">
            <p>

                Oops, an error occured, please refresh the page or <a className="text-amber-900 underline" href="/">go back to the homepage</a>
            </p>
        </div>
    )
}

export default RootError
