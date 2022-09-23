export default function Card({ tour }) {
  const { name, city, descriptionShort } = tour
  return (
    <a href="#" className="flex flex-col justify-between block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{descriptionShort}</p>
      </div>
      <div className="mt-3">
        <span className="rounded-sm bg-blue-200 font-normal text-gray-800 p-2 dark:text-gray-400">{city?.name}</span>
      </div>
    </a>
  )
}

