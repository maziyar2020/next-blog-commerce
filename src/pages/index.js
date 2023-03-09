import { ChevronDownIcon, AdjustmentsIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useState } from 'react'


export default function Home() {
  const [isOpen, SetIsOpen] = useState(false)

  return (
    <div className='bg-gray-50'>

      <div className='container m-auto lg:max-w-screen-xl '>
        <div className="grid gap-4 md:grid-cols-12 grid-rows-[70px_minmax(300px,_1fr)] min-h-screen ">

          <div className="hidden md:block md:col-span-3 md:row-span-2 ">

            <div className="accordion rounded-3xl bg-white overflow-hidden">

              {/* accordion header */}

              <div
                className="accordion__header flex justify-between items-center p-4 cursor-pointer bg-purple-200"
                onClick={() => SetIsOpen(!isOpen)}
              >
                <span>دسته بندی مقالات</span>
                <ChevronDownIcon
                  className={`w-6 h-6 stroke-purple-400 transition-all duration-200 ease-in
        ${isOpen ? 'rotate-180' : "rotate-0"}`}
                />
              </div>

              {/* accordion content */}
              <div className={`accordion__content ${isOpen ? "block" : "hidden"}`}>
                <Link href={"#"} className="flex hover:bg-purple-50 py-2 pr-4 mb-1" >1</Link>
                <Link href={"#"} className="flex hover:bg-purple-50 py-2 pr-4 mb-1" >2</Link>
                <Link href={"#"} className="flex hover:bg-purple-50 py-2 pr-4" >3</Link>
              </div>

            </div>
          </div>
          {/* sort section */}
          <div className="hidden md:block md:col-span-9">
            <div className='rounded-3xl bg-white px-4 flex items-center'>
              <div className='flex items-center gap-x-2'>
                <AdjustmentsIcon className='w-6 h-6 stroke-black-300' />
                <span className=''>مرتب سازی : </span>
              </div>
              <ul className='flex items-center gap-x-4 mr-4'>
                <li className='py-4 cursor-pointer text-gray-600'>پربازدید ترین</li>
                <li className='py-4 cursor-pointer text-gray-600'>محبوب ترین</li>
                <li className='py-4 cursor-pointer text-gray-600'>جدید ترین</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-9 grid grid-cols-6 gap-8">
            {[
              "node.png",
              "next.png",
              "vue.png",
              "nuxt.png",
              "next.png",
              "node.png"
            ].map((item, index) =>
              <div
                key={index}
                className="
                col-span-6 
                md:col-span-3 
                lg:col-span-2 
                shadow-2xl
                p-4 
                rounded-2xl"
              >
                {/* blog image */}
                <div className='aspect-w-16 aspect-h-9'>
                  <img
                    src={`images/${item}`}
                    className="object-center object-cover h-full w-full"
                  />
                </div>
                {/* blog content */}
                <div className='rounded-2xl bg-gray-50 p-2 mt-2'>
                  <h2 className='font-bold'>بررسی کامل مطلب</h2>
                  <div className='flex align-middle justify-between mt-3 px-1'>
                    {/* author detail */}
                    <div className='flex items-center'>
                      <img src='/images/next.png' className='rounded-full w-6 h-6 ring ring-violet-100' />
                      <span className='mr-2 text-sm'>مازیار موسوی</span>
                    </div>
                    {/* tag  */}
                    <span className='text-xs px-2 py-1 rounded-xl bg-violet-300'>
                      ریکت
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
