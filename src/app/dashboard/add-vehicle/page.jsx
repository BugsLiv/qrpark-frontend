import { MdContactMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function AddVehiclePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-primary/10 p-2 rounded-full">
            <MdContactMail className="text-primary" size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Add New Vehicle</h1>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Name / Model</label>
            <input
              type="text"
              placeholder="e.g., Honda Civic 2022"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">License Plate Number</label>
            <input
              type="text"
              placeholder="ABC-1234"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
            <input
              type="text"
              placeholder="e.g., Black, White"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none"
            />
          </div>
          <button className="w-full bg-buttonbg hover:bg-buttonbg/90 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2">
            <MdContactMail size={18} /> Register Vehicle
          </button>
        </form>
      </div>
    </div>
  );
}