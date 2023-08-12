const VehicleTypesComponent = () => {
  return (
    <div className="my-2">
      <div className="px-2 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gold-1">Class A:</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-50 sm:col-span-3 sm:mt-0">
          Motocycles with or without sidecar
        </dd>
      </div>
      <div className="px-2 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gold-1">Class B:</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-50 sm:col-span-3 sm:mt-0">
          Cars, Cross country, Mini Buses and Pick-up Vehicles
        </dd>
      </div>
      <div className="px-2 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gold-1">Class C:</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-50 sm:col-span-3 sm:mt-0">
          Buses and Medium goods carrying vehicles
        </dd>
      </div>
      <div className="px-2 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gold-1">Class D:</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-50 sm:col-span-3 sm:mt-0">
          Buses, Coaches and Heavy Goods Vehicles
        </dd>
      </div>
      <div className="px-2 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gold-1">Class E:</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-50 sm:col-span-3 sm:mt-0">
          Agricultural, Earth-Moving and Industrual Equipment
        </dd>
      </div>
      <div className="px-2 sm:grid sm:grid-cols-4 sm:gap-2 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gold-1">Class F:</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-50 sm:col-span-3 sm:mt-0">
          Buses, Coaches and Heavy Goods Carrying Vehicles
        </dd>
      </div>
    </div>
  );
};

export default VehicleTypesComponent;
