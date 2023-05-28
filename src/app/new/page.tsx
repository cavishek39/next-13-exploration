import { prisma } from '@/dev'
import Link from 'next/link'
import { NextResponse } from 'next/server'

/** createNewTodo is a server-side function that can be called from the
 * client side using the action attribute on a form element.
 */
async function createNewTodo(data: FormData) {
  'use server'

  const title = data.get('title')?.valueOf() as string

  if (typeof title !== 'string' || !title) {
    throw new Error('Title is required')
  }

  const newTodo = await prisma.tODO.create({
    data: {
      title,
      done: false,
    },
  })

  if (!!newTodo?.id) {
    NextResponse.redirect('/')
  }
}

export default function Page() {
  return (
    <>
      <header className='flex justify-between mb-4 items-center'>
        <h1 className='text-2xl'>New</h1>
      </header>
      <form className='flex gap-2 flex-col' action={createNewTodo}>
        <input
          name='title'
          type='text'
          className='border border-slate-300 p-2 rounded-lg bg-transparent text-slate-100'
          placeholder="What's on your mind?"
        />
      </form>
      <div className='flex justify-end p-4'>
        <Link
          href='..'
          className='border border-slate-300 p-2 m-2 rounded-lg bg-transparent text-slate-100'>
          Back
        </Link>
        <button
          type='submit'
          className='border border-slate-300 p-2 m-2 rounded-lg bg-transparent text-slate-100'>
          Save
        </button>
      </div>
    </>
  )
}
