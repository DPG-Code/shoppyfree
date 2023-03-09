import { IconSearch } from './Icons'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Loader from './Loader'
import { lazy, Suspense } from 'react'
import SkeletonProduct from './SkeletonProduct'

const ProductLazy = lazy(() => import('./Product'))

export default function ProductsPage({
  keyword,
  setKeyword,
  titlePage,
  categories,
  filterCategories,
  productsByCategory,
  products,
  loading
}) {
  const [productsRef] = useAutoAnimate()

  return (
    <main className='px-10 py-16 w-full h-auto flex flex-col items-center justify-start gap-8   lg:px-32 lg:py-20 lg:gap-12'>
      <div className='w-64 flex items-center relative   lg:w-96'>
        <input
          className='py-1 w-full border-b-[1px] border-black outline-0   lg:py-2 lg:text-xl'
          type='text'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Shoes, Clothes, etc...'
        />
        <IconSearch className='absolute right-0' />
      </div>
      <h2 className='w-full text-left font-medium text-2xl   lg:text-3xl'>
        {titlePage.toUpperCase()}
      </h2>
      <div className='categories pb-4 w-full flex gap-6 overflow-x-scroll snap-x   lg:gap-16'>
        {categories.map((category) => (
          <button
            className={`whitespace-nowrap snap-start ${
              titlePage === category
                ? 'text-black border-black'
                : 'text-gray-400 border-transparent'
            } font-semibold text-sm pt-1.5 border-t-2 hover:text-black hover:border-black transition hover:duration-200 ease-in-out   lg:text-lg`}
            onClick={() => filterCategories(category)}
            key={category}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
      {loading ? (
        <Loader />
      ) : (
        <section
          ref={productsRef}
          className='w-full grid grid-cols-products gap-10   lg:gap-12'
        >
          {productsByCategory.length > 0
            ? productsByCategory.map((product) => (
                <div key={product._id}>
                  <Suspense fallback={<SkeletonProduct />}>
                    <ProductLazy {...product} />
                  </Suspense>
                </div>
              ))
            : products.map((product) => (
                <div key={product._id}>
                  <Suspense fallback={<SkeletonProduct />}>
                    <ProductLazy {...product} />
                  </Suspense>
                </div>
              ))}
        </section>
      )}
    </main>
  )
}
