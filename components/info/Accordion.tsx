import React from 'react'

const Accordion = () => {
  return (
    <section className="text-white">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-red-700">
              Ex orci laoreet egestas sapien magna egestas scelerisque?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:white">
              Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam
              taciti at adipiscing est.{' '}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-red-700">
              Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna
              porttitor egestas tincidunt neque vehicula potenti.{' '}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-red-700">
              Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit
              erat?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">
              Justo libero tellus integer tincidunt justo semper consequat
              venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
              pretium sodales vel magna et massa euismod vulputate sed.{' '}
            </p>
          </details>
        </div>
      </div>
    </section>
  )
}

export default Accordion
