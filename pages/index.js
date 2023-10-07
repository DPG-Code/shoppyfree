import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title='Shoppyfree'>
      <main className='pb-16 flex flex-col gap-2'>
        <Link className='w-full h-auto' href='/products/woman'>
          <img
            className='w-full min-h-[280px] object-cover'
            src='/images/woman.webp'
            alt='woman section'
          />
        </Link>
        <Link className='w-full h-auto' href='/products/man'>
          <img
            className='w-full min-h-[280px] object-cover'
            src='/images/man.webp'
            alt='home section'
          />
        </Link>
        <img
          className='w-full h-auto object-cover xl:h-[572px]'
          src='/images/promo.webp'
          alt='promotion'
        />
      </main>
    </Layout>
  )
}
