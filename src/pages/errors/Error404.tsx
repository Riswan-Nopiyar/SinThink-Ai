import React from 'react';
import Button from '../../components/tags/Button';

const Error404: React.FC = () => {
  return (
    <>
    <section className="bg-gradient-to-t from-white via-[#F6EAFFFF] to-[#E5DEFFFF] text-gray-800 dark:bg-gradient-to-t dark:from-[#10141B] dark:via-[#0B1016] dark:to-[#280D3D] h-screen">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-sm text-center">
      <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl bg-gradient-to-r from-purple-600 to-blue-600 dark:bg-gradient-to-r dark:from-purple-700 dark:to-blue-700 text-transparent bg-clip-text">
        404
      </h1>
      <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
        Something's missing.
      </p>
      <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
        Sorry, we can't find that page. You'll find lots to explore on the home
        page.
      </p>
      <Button
        href="/">
        Back to Homepage
      </Button>
    </div>
  </div>
</section>

    </>
  )
}

export default Error404;