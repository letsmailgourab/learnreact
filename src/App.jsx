
import './App.css'

function App() {


  return (
    <>
<div className="flex justify-center p-8">

  <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">

    {/* Image */}
    <img
      src="/src/assets/kalimpong.webp"
      alt="Kalimpong"
      className="w-full h-52 object-cover"
    />

    {/* Content */}
    <div className="p-5">

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Kalimpong Tour
      </h2>

      <p className="text-gray-600 mb-4">
        Explore the beautiful hills, monasteries and scenic views of Kalimpong.
      </p>

      <div className="flex justify-between items-center">

        <span className="text-xl font-bold text-indigo-600">
          ₹4,999
        </span>

        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
          Buy Now
        </button>

      </div>

    </div>

  </div>

</div>
    </>
  )
}

export default App
