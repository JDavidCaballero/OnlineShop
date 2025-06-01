const AboutUsPage = () => {
  return (
    <section>
      <div className=" max-w-4xl mx-auto text-gray-800">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">
          About This Project
        </h2>

        <p className="text-lg mb-4">
          This project is a personal initiative aimed at improving my skills as
          a developer. It’s a full-stack web application built with React and
          Vite on the frontend, and Node.js with MongoDB on the backend.
        </p>

        <p className="text-lg mb-4">
          The idea behind this development is to create a simple, accessible,
          shop web page, my idea is to integrate it with payment methods
          evidently for testing purposes.
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-2">Technologies Used:</h3>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>React + Vite (Frontend)</li>
            <li>Node.js (Backend)</li>
            <li>MongoDB (Database)</li>
            <li>Tailwind CSS (Styling)</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold mb-2">
            Vision for the Future:
          </h3>
          <p className="text-lg">
            This is just the beginning. I plan to add new features such as user
            authentication, an admin dashboard, suggested products based on user
            interaction with the app, and more.
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg mb-2">
            This is like a portfolio project for me.
          </p>
          <a
            href="mailto:jdcaballerome@gmail.com"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutUsPage
