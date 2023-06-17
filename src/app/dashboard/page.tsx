import Link from 'next/link'

export default function Page() {
  return (
    <>
      <header className='flex justify-between mb-4 items-center'>
        <h1 className='text-2xl'>Dashboard</h1>
      </header>
      <div className='flex justify-end p-4'>
        <Link
          href='..'
          className='border border-slate-300 p-2 m-2 rounded-lg bg-transparent text-slate-100'>
          Back
        </Link>
      </div>
    </>
  )
}
