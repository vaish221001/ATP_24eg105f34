import { useContext } from "react";
import { counterContextObj } from "../context/contextProvider";

function EditCounter3() {
  const { counter, increment, decrement } = useContext(counterContextObj);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-56 text-center hover:shadow-2xl transition duration-300">
      
      <h1 className="text-xl font-bold text-gray-800 mb-4">
        Counter 3
      </h1>

      <div className="bg-blue-600 text-white rounded-2xl p-6">
        <h1 className="text-5xl font-bold mb-6">{counter}</h1>

        <div className="flex justify-center gap-6">
          <button
            onClick={increment}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl shadow-lg transition duration-200 text-xl font-bold"
          >
            +
          </button>

          <button
            onClick={decrement}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg transition duration-200 text-xl font-bold"
          >
            -
          </button>
        </div>
      </div>

    </div>
  );
}

export default EditCounter3;