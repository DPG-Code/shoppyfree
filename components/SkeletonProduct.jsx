export default function SkeletonProduct() {
  return (
    <div className='animate-pulse bg-white p-4 w-full flex flex-col gap-2 rounded-xl drop-shadow-lg   lg:gap-4'>
      <div className='bg-gray-200 h-52 w-full rounded-lg   lg:h-72'></div>
      <div className='bg-gray-200 h-4 w-full rounded-lg'></div>
      <div className='bg-gray-200 h-6 w-full rounded-lg'></div>
      <div className='bg-gray-200 h-8 w-full rounded-lg'></div>
    </div>
  )
}
