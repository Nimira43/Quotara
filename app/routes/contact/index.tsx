const Contact = () => {
  return ( 
    <div className='max-w-3xl mx-auto mt-12 px-6 py-8 bg-t'>
      <h2 className='page-title text-center'>
        Contact Us
      </h2>
      <form className='space-y-6'>
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'
          >
            Full Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='w-full mt-1 px-4 py-2 border border-orange-400 rounded-sm bg-teal-50 text-gray-700 outline-none focus:border-teal-700 transitioning'
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full mt-1 px-4 py-2 border border-orange-400 rounded-sm bg-teal-50 text-gray-700 outline-none focus:border-teal-700 transitioning'
          />
        </div>
        <div>
          <label
            htmlFor='subject'
            className='block text-sm font-medium text-gray-700'
          >
            Subject
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            className='w-full mt-1 px-4 py-2 border border-orange-400 rounded-sm bg-teal-50 text-gray-700 outline-none focus:border-teal-700 transitioning'
          />
        </div>
        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            className='w-full mt-1 px-4 py-2 border border-orange-400 rounded-sm bg-teal-50 text-gray-700 outline-none focus:border-teal-700 transitioning'
          />
        </div>
        <button className='w-full orange-btn transitioning cursor-pointer'>
          Submit Message
        </button>
      </form>
    </div>
  )
}
 
export default Contact