'use client'

import { PropsWithChildren } from 'react'

type TodoItemProps = {
  id: string
  title: string
  done: boolean
  toggleDone: (id: string, checked: boolean) => Promise<void>
} & PropsWithChildren

export default function TodoItem({
  id,
  title,
  done,
  toggleDone,
  children,
}: TodoItemProps) {
  return (
    <li className='flex gap-1 items-center'>
      <input
        id={id}
        type='checkbox'
        className='cursor-pointer peer'
        defaultChecked={done}
        onChange={(e) => toggleDone(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className='cursor-pointer peer-checked:line-through peer-checked:text-slate-400 '>
        {children}
      </label>
      {title}
    </li>
  )
}
