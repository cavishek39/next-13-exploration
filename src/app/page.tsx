import TodoItem from '@/components/TodoItem'
import { prisma } from '@/dev'
import Link from 'next/link'

export default async function Home() {
  const todos = await prisma.tODO.findMany()

  async function handleToggleDone(id: string, checked: boolean) {
    'use server'

    console.log('handleToggleDone', id, checked)

    await prisma.tODO.update({
      where: {
        id,
      },
      data: {
        done: checked,
      },
    })
  }

  return (
    <>
      <header className='flex justify-between mb-4 items-center'>
        <h1 className='text-2xl'>Todos</h1>
        <Link
          href='/new'
          className='border  border-slate-300 p-2 rounded-lg
        hover:bg-slate-800 hover:text-slate-200
        '>
          New Todo
        </Link>
      </header>
      <ul className='pl-4'>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleDone={handleToggleDone} />
        ))}
      </ul>
    </>
  )
}
