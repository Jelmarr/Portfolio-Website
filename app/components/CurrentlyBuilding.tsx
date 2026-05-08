import { FiActivity } from "react-icons/fi";

const CurrentlyBuilding = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold flex items-center gap-2 ">
        <FiActivity className="text-gray-500" />
        What I’m Currently Building
      </h3>

      <div className="mt-6">
        <p className="text-sm">
          I am currently building the NMI Systems monorepo, centralizing Patient
          Information, Laboratory, Pharmacy, and Billing modules. By
          implementing a shared logic architecture, I’ve reduced code
          duplication by 40% and optimized cross-module data flow, resulting in
          30% faster automated billing cycles.
        </p>
      </div>
    </div>
  );
};

export default CurrentlyBuilding;
