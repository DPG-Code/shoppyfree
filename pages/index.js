import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title='Shoppyfree'>
      <main className='flex flex-col gap-2'>
        <Link className='w-full h-auto' href='/products/man'>
          <img
            className='w-full min-h-[280px] object-cover'
            src='https://static.bershka.net/4/static/images/home/2023/0224/D_slide_man_tokyorevengers_-1.jpg?20230228021213'
            alt='background home man'
          />
        </Link>
        <Link className='w-full h-auto' href='/products/woman'>
          <img
            className='w-full min-h-[280px] object-cover'
            src='https://static.bershka.net/4/static/images/home/2023/0224/D_slide_woman_trajes_-1.jpg?20230228021212'
            alt='background home woman'
          />
        </Link>
        <img
          className='w-full min-h-[160px] object-cover'
          src='https://static.bershka.net/4/static/images/home/emergency_task/promo/D_slide_promo_30.jpg?20230228021213'
          alt='background footer home'
        />
      </main>
    </Layout>
  )
}
