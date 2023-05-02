import PostList from '../components/Post/PostList'
import { ChevronDownIcon, AdjustmentsIcon } from '@heroicons/react/outline'
import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'


export default function Home({ blogsData, postCategory }) {
  const { data: blogs } = blogsData
  const { data: category } = postCategory

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
                <Link href={"/blogs"} className="flex hover:bg-purple-50 py-2 pr-4 mb-1" >همه مقالات</Link>
                {category.map(item => {
                  return (
                    <Link href={`/blogs/${item.englishTitle}`}
                      className="bg-red-100 flex hover:bg-purple-50 py-2 pr-4 mb-1"
                      key={item._id}
                    >{item.englishTitle}</Link>
                  )
                })}
              </div>

            </div>
          </div>
          {/* mobile category */}
          <div className='flex md:hidden gap-x-4 overflow-auto pb-5'>
            {category.map(item => {
              return (
                <Link href={`/blogs/${item.englishTitle}`}
                  className="flex items-center text-sm whitespace-nowrap border border-gray-400 text-gray-400 bg-white rounded-3xl px-3 py-1"
                  key={item._id} >{item.englishTitle}</Link>
              )
            })}
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
            <PostList blogs={blogs} />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {

  const { data: blogsData } = await axios.get("http://localhost:5000/api/posts?limit=6&page=1")
  const { data: postCategory } = await axios.get("http://localhost:5000/api/post-category")
  return {
    props: {
      blogsData,
      postCategory
    }
  }
}