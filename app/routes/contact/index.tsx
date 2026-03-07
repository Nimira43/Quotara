import type { Route } from './+types'
import { Form } from 'react-router' 

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('submit') as string
  const message = formData.get('message') as string

  const errors: Record<string, string> = {}

  if (!name) errors.name = 'Name is required.'
  if (!email) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Invalid email format.'
  }
  if (!subject) errors.subject = 'Subject is required.'
  if (!message) errors.message = 'Message is required.'

  if (Object.keys(errors).length > 0) {
    return {errors}
  }

  const data = {
    name,
    email,
    subject,
    message
  }

  return { message: 'Form submitted successfully.', data}
}

const Contact = ({ actionData }: Route.ComponentProps) => {
  const errors = actionData?.errors || {}

  return ( 
    <div className='max-w-3xl mx-auto mt-12 px-6 py-8 bg-t'>
      <h2 className='page-title text-center'>
        Contact Us
      </h2>
      
      {actionData?.message
        ? (
          <p className='mb-6 text-teal-700 text-center p-4'>{actionData.message}</p>
        ) : (
          null
        )
      }
      
      <Form
        method='POST'
        className='space-y-6'
      >
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
          {errors.name && (
            <p className='text-orange-400 text-sm mt-1'>
              {errors.name}
            </p>
          )}
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
          {errors.email && (
            <p className='text-orange-400 text-sm mt-1'>
              {errors.email}
            </p>
          )}
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
          {errors.subject && (
            <p className='text-orange-400 text-sm mt-1'>
              {errors.subject}
            </p>
          )}
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
          {errors.message && (
            <p className='text-orange-400 text-sm mt-1'>
              {errors.message}
            </p>
          )}
        </div>
        <button className='w-full orange-btn transitioning cursor-pointer'>
          Submit Message
        </button>
      </Form>
    </div>
  )
}
 
export default Contact