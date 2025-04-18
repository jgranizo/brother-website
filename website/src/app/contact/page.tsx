'use client'
import { useState } from "react"

export default function Contact() {
  const [submit, setSubmit] = useState(true)
  return (
    <div>
      {submit ? (
        <div className="max-w-md mx-auto p-8 bg-[#F6EEE1] shadow-lg rounded-lg mt-20">
          <h1 className="text-3xl font-bold text-[#7C6656] mb-2">Contact Us</h1>
          <p className="mb-6 text-[#807060]">
            Give us a call at <a href="tel:973-687-1892" className="text-[#B49D85] hover:underline font-semibold">973-687-1892</a>
          </p>
          <form className="flex flex-col gap-4">
            <label className="font-medium text-[#7C6656]">
              Name:
              <input className="mt-1 block w-full border border-[#dbcfc3] bg-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#dbcfc3]" type="text" />
            </label>
            <label className="font-medium text-[#7C6656]">
              Message:
              <textarea className="mt-1 block w-full border border-[#dbcfc3] bg-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#dbcfc3] resize-none" rows={3}/>
            </label>
            <label className="font-medium text-[#7C6656]">
              Email:
              <input className="mt-1 block w-full border border-[#dbcfc3] bg-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#dbcfc3]" type="email" />
            </label>
            <button
              className="mt-6 bg-[#dbcfc3] hover:bg-[#b49d85] text-[#463F3A] font-bold py-2 px-4 rounded shadow transition-colors"
              onClick={() => setSubmit(false)}
              type="button"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="max-w-md mx-auto p-8 bg-[#E8EFE4] shadow-lg rounded-lg mt-50 text-center">
          <h1 className="text-3xl font-bold text-[#79866B] mb-2">Message Sent</h1>
          <p className="text-[#463F3A]">Our team will respond shortly.</p>
        </div>
      )}
    </div>
  )
}
