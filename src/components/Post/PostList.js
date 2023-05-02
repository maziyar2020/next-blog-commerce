
const PostList = ({ blogs }) => {
    const posts = blogs.docs

    return (
        <>
            {posts.map((item, index) =>
                <div
                    key={index}
                    className="
                col-span-6 
                md:col-span-3 
                lg:col-span-2 
                shadow-2xl
                p-4 
                rounded-2xl
                flex flex-col
                bg-white
                "
                >
                    {/* blog image */}
                    <div className='aspect-w-16 aspect-h-9'>
                        <img
                            src={item.coverImage}
                            className="object-center object-cover h-full w-full"
                        />
                    </div>
                    {/* blog content */}
                    <div className='rounded-2xl bg-gray-50 p-2 mt-2 flex flex-col w-full justify-between flex-1'>
                        <h2 className='font-bold'>{item.title}</h2>
                        <div className='flex align-middle justify-between mt-3 px-1'>
                            {/* author detail */}
                            <div className='flex items-center'>
                                <img src='/images/next.png' className='rounded-full w-6 h-6 ring ring-violet-100' />
                                <span className='mr-2 text-sm'>{item.author.name}</span>
                            </div>
                            {/* tag  */}
                            <span className='text-xs px-2 py-1 
                      rounded-xl 
                      bg-blue-100 
                      text-blue-500 
                      hover:text-blue-100 
                      hover:bg-blue-500
                      transition-all ease-in cursor-pointer duration-300'
                            >
                                ریکت
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default PostList;