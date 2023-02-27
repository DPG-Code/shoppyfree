import Layout from '@/components/Layout'

export default function Custom404() {
  return (
    <Layout>
      <main className='py-16 w-full h-auto flex items-center justify-center'>
        <img className='w-72' src='/error.svg' alt='error-404' />
      </main>
    </Layout>
  )
}
