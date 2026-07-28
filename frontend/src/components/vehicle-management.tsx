import React, { useState, useEffect } from "react";
import { Edit, Trash, Plus, Calendar, Car, User, Phone, Mail, Wrench, X } from "lucide-react";

interface Vehicle {
  id?: number;
  vehicleType: string;
  vehicleNumber: string;
  ownerName: string;
  phoneNo: string;
  email: string;
  issueWithVehicle: string;
  arrivalDate: string;
}

const emptyForm: Vehicle = {
  vehicleType: "",
  vehicleNumber: "",
  ownerName: "",
  phoneNo: "",
  email: "",
  issueWithVehicle: "",
  arrivalDate: "",
};

export default function VehicleManagement() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Vehicle>(emptyForm);

  // read
  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/vehicles");
      if (response.ok) {
        const data = await response.json();
        setVehicles(data);
      }
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = (vehicle?: Vehicle) => {
    if (vehicle) {
      setFormData(vehicle);
      setIsEditing(true);
    } else {
      setFormData(emptyForm);
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  // create & update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = isEditing
        ? `http://localhost:8080/api/vehicles/${formData.id}`
        : "http://localhost:8080/api/vehicles";
    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchVehicles();
        setIsModalOpen(false);
        setFormData(emptyForm);
      }
    } catch (error) {
      console.error("Error saving vehicle:", error);
    }
  };

  // delete
  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this vehicle record?")) return;
    try {
      const response = await fetch(`http://localhost:8080/api/vehicles/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchVehicles();
      }
    } catch (error) {
      console.error("Error deleting vehicle:", error);
    }
  };

  return (
      <div className="p-2 sm:p-6 w-full h-full">
        {/* Header Area */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-100">Vehicle Service List</h1>
            <p className="text-gray-400 mt-1">Manage incoming vehicles and service requests</p>
          </div>
          <button
              onClick={() => openModal()}
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 px-5 rounded-lg flex items-center transition-colors shadow-lg shadow-blue-500/20"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Vehicle
          </button>
        </div>

        {/* list area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.length === 0 ? (
              <div className="col-span-full text-center py-16 bg-gray-800 rounded-xl border border-dashed border-gray-600">
                <Car className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                <p className="text-gray-400 text-lg">No vehicles in the system.</p>
                <p className="text-gray-500 text-sm mt-1">Click 'Add Vehicle' to create your first record.</p>
              </div>
          ) : (
              vehicles.map((vehicle) => (
                  <div key={vehicle.id} className="bg-gray-800 rounded-xl shadow-md border border-gray-700 overflow-hidden hover:border-gray-500 transition-colors">
                    <div className="p-5 border-b border-gray-700 flex justify-between items-start">
                      <div>
                        <span className="inline-block px-2.5 py-1 bg-blue-900/50 text-blue-300 border border-blue-800 text-xs font-semibold rounded-full mb-2">
                          {vehicle.vehicleType}
                        </span>
                        <h3 className="text-lg font-bold text-gray-100">{vehicle.vehicleNumber}</h3>
                      </div>
                      <div className="flex space-x-2">
                        <button onClick={() => openModal(vehicle)} className="p-1.5 text-gray-400 hover:text-blue-400 hover:bg-gray-700 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(vehicle.id!)} className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-gray-700 rounded-lg transition-colors">
                          <Trash className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="p-5 space-y-3 bg-gray-900/50">
                      <div className="flex items-center text-sm text-gray-300">
                        <User className="w-4 h-4 mr-2.5 text-gray-500" />
                        {vehicle.ownerName}
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <Phone className="w-4 h-4 mr-2.5 text-gray-500" />
                        {vehicle.phoneNo}
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <Mail className="w-4 h-4 mr-2.5 text-gray-500" />
                        {vehicle.email}
                      </div>
                      <div className="flex items-start text-sm text-gray-300">
                        <Wrench className="w-4 h-4 mr-2.5 text-gray-500 mt-0.5 shrink-0" />
                        <span className="line-clamp-2">{vehicle.issueWithVehicle}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-400 pt-3 mt-1 border-t border-gray-700/50">
                        <Calendar className="w-4 h-4 mr-2.5 text-gray-500" />
                        Arrival: {vehicle.arrivalDate}
                      </div>
                    </div>
                  </div>
              ))
          )}
        </div>

        {/* popup form */}
        {isModalOpen && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className="bg-gray-800 rounded-xl shadow-2xl w-full max-w-xl overflow-hidden border border-gray-700">
                <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center bg-gray-800/80">
                  <h2 className="text-xl font-semibold text-gray-100">
                    {isEditing ? "Edit Vehicle Data" : "Register New Vehicle"}
                  </h2>
                  <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-200 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-300">Vehicle Type</label>
                      <select name="vehicleType" value={formData.vehicleType} onChange={handleInputChange} required className="w-full bg-gray-900 border border-gray-600 text-gray-100 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                        <option value="">Select Type</option>
                        <option value="Car">Car</option>
                        <option value="Bike">Bike</option>
                        <option value="Truck">Truck</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-300">Vehicle Number</label>
                      <input type="text" name="vehicleNumber" value={formData.vehicleNumber} onChange={handleInputChange} required placeholder="e.g. JH12 05C 1234" className="w-full bg-gray-900 border border-gray-600 text-gray-100 placeholder-gray-500 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-300">Owner Name</label>
                      <input type="text" name="ownerName" value={formData.ownerName} onChange={handleInputChange} required placeholder="Full Name" className="w-full bg-gray-900 border border-gray-600 text-gray-100 placeholder-gray-500 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-300">Phone Number</label>
                      <input type="tel" name="phoneNo" value={formData.phoneNo} onChange={handleInputChange} required placeholder="10-digit number" className="w-full bg-gray-900 border border-gray-600 text-gray-100 placeholder-gray-500 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-300">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="adress@email.com" className="w-full bg-gray-900 border border-gray-600 text-gray-100 placeholder-gray-500 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-300">Arrival Date</label>
                      <input type="date" name="arrivalDate" value={formData.arrivalDate} onChange={handleInputChange} required className="w-full bg-gray-900 border border-gray-600 text-gray-100 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none style-color-scheme-dark" />
                    </div>
                    <div className="md:col-span-2 space-y-1">
                      <label className="text-sm font-medium text-gray-300">Issue with Vehicle</label>
                      <textarea name="issueWithVehicle" value={formData.issueWithVehicle} onChange={handleInputChange} required placeholder="Describe the mechanical issues or service request..." rows={3} className="w-full bg-gray-900 border border-gray-600 text-gray-100 placeholder-gray-500 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"></textarea>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end space-x-3">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 text-sm font-medium text-gray-300 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                      Cancel
                    </button>
                    <button type="submit" className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20">
                      {isEditing ? "Update Vehicle" : "Save Vehicle"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
        )}
      </div>
  );
}