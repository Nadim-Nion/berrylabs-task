// import { useState } from "react";
import Sidebar from "./Sidebar";

type Option = {
  label: string;
  value: string;
};

const Field = ({
  label,
  hasDropdown = false,
  className = "",
  highlight = false,
  options = [],
}: {
  label: string;
  hasDropdown?: boolean;
  className?: string;
  highlight?: boolean;
  options?: Option[];
}) => (
  <div className={`relative ${className}`}>
    {hasDropdown ? (
      <select
        className={`w-full border rounded px-3 py-2 bg-white text-xs font-medium uppercase
        ${highlight ? "border-red-300" : "border-gray-300"} hover:border-blue-400`}
      >
        <option>{label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    ) : (
      <div
        className={`flex items-center border rounded px-3 py-2 bg-white text-xs text-gray-400 font-medium
        ${highlight ? "border-red-300" : "border-gray-300"} hover:border-blue-400`}
      >
        <span className="flex-1 tracking-wide uppercase">{label}</span>
      </div>
    )}
  </div>
);

const DateField = ({ label }: { label: string }) => (
  <div className="relative">
    <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-white text-xs text-gray-400 font-medium hover:border-blue-400 transition-colors">
      <span className="flex-1 tracking-wide uppercase">{label}</span>
      <span className="text-orange-400 ml-2">📅</span>
    </div>
  </div>
);

const MainComponent = () => {
  //   const [fabricRows] = useState([0]);
  //   const [trimRows] = useState([0]);

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {/* Top bar */}
        <div className="flex justify-end p-3 bg-white border-b border-gray-200 shadow-sm">
          <button className="bg-[#1a4fa0] text-white p-2 rounded hover:bg-blue-800 transition-colors">
            <div className="flex flex-col gap-1 w-5">
              <div className="h-0.5 bg-white rounded" />
              <div className="h-0.5 bg-white rounded" />
              <div className="h-0.5 bg-white rounded" />
            </div>
          </button>
        </div>

        <div className="p-6 space-y-6 max-w-7xl">
          {/* STYLE INFORMATION */}
          <section className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
            <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-4 uppercase border-b border-gray-100 pb-2">
              Style Information
            </h2>

            {/* Row 1 */}
            <div className="grid grid-cols-4 gap-3 mb-3">
              {/*  Company Name */}
              <div className="col-span-2">
                <Field
                  label="Company Name"
                  hasDropdown
                  highlight
                  options={[
                    { label: "BerryLabs", value: "berrylabs" },
                    { label: "ABC Corp", value: "abc" },
                    { label: "XYZ Ltd", value: "xyz" },
                  ]}
                />
              </div>

              <DateField label="Date" />
              <Field label="Item" hasDropdown highlight />
              <div className="col-span-4 flex justify-end -mt-3 -mr-0">
                <button className="bg-[#4a3da0] hover:bg-[#3a2d90] text-white text-xs font-bold px-4 py-2 rounded flex items-center gap-2 transition-colors shadow-md">
                  <span>↑</span> SELECT FILE
                </button>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-4 gap-3 mb-3">
              <Field label="Style Number" />
              <Field label="Season" hasDropdown />
              <Field label="Year" hasDropdown />
              <Field label="Status" hasDropdown />
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-4 gap-3 mb-3">
              <Field label="Department" hasDropdown highlight />
              <Field label="Terms of Sales" hasDropdown highlight />
              <Field label="Division" hasDropdown highlight />
              <Field label="Label/Brand" hasDropdown />
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-white text-xs text-gray-400">
                <span className="flex-1 tracking-wide uppercase">Quantity</span>
                <span className="text-gray-400 text-sm">🗓</span>
              </div>
              <Field label="Costing By" hasDropdown highlight />
              <Field label="Currency" hasDropdown highlight />
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-2 gap-3">
              <Field label="Access To" hasDropdown />
            </div>
          </section>

          {/* CREDENTIAL */}
          <section className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
            <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-4 uppercase border-b border-gray-100 pb-2">
              Credential
            </h2>

            {/* Row 1 */}
            <div className="flex gap-3 mb-3 items-center">
              <div className="flex items-center border border-gray-300 rounded bg-white text-xs text-gray-600">
                <select className="px-2 py-2 outline-none bg-transparent">
                  <option>TIN</option>
                </select>
              </div>
              <div className="flex-1 border border-gray-300 rounded px-3 py-2 bg-white text-xs text-gray-400"></div>
              <button className="bg-teal-500 hover:bg-teal-600 text-white w-8 h-8 rounded flex items-center justify-center font-bold text-lg transition-colors shadow">
                +
              </button>
              <div className="flex-1 border border-gray-300 rounded px-3 py-2 bg-white text-xs text-gray-400 uppercase tracking-wide">
                Courier Acc. No:
              </div>
              <div className="flex-1 border border-gray-300 rounded px-3 py-2 bg-white text-xs text-gray-400 uppercase tracking-wide">
                Carrier
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-3 items-center">
              <div className="flex items-center border border-gray-300 rounded bg-white text-xs text-gray-600">
                <select className="px-2 py-2 outline-none bg-transparent">
                  <option>BIN</option>
                </select>
              </div>
              <div className="flex-1 border border-gray-300 rounded px-3 py-2 bg-white text-xs text-gray-400"></div>
              <button className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded flex items-center justify-center font-bold text-lg transition-colors shadow">
                🗑
              </button>
              <div className="flex-1 border border-gray-300 rounded px-3 py-2 bg-white text-xs text-gray-400 uppercase tracking-wide">
                Source
              </div>
              <div className="flex-1 flex items-center border border-gray-300 rounded px-3 py-2 bg-white text-xs text-gray-400">
                <span className="flex-1">Access To</span>
                <span>▾</span>
              </div>
            </div>
          </section>

          {/* FABRIC COST */}
          <section className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
            <h2 className="text-xs font-bold text-gray-700 tracking-widest mb-4 uppercase border-b border-gray-100 pb-2">
              Fabric Cost
            </h2>

            {/* Header */}
            <div className="grid grid-cols-12 gap-2 mb-2 text-xs font-bold text-gray-500 uppercase tracking-widest px-1">
              <div className="col-span-2">Ref</div>
              <div className="col-span-5">Fabric Name</div>
              <div className="col-span-2">Unit</div>
              <div className="col-span-1">Unit Price</div>
              <div className="col-span-2">Total</div>
            </div>

            {/* Row */}
            <div className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-2">
                <input
                  className="w-full border border-gray-200 rounded px-2 py-2 text-xs text-gray-400 outline-none focus:border-blue-400"
                  placeholder="Ref"
                />
              </div>
              <div className="col-span-5">
                <div className="border border-gray-200 rounded px-2 py-2 bg-white text-xs text-gray-500 leading-tight">
                  <div>
                    Single Jersey, 50% linen, 40% cotton, 19% lurex, 240oz,
                    110x76/45x45 (CMIA), 60"
                  </div>
                  <div className="text-gray-400">
                    Single Jersey, 50% linen, 40% cotton, 19% lurex, 240oz,
                    110x76/45x45 (CMIA), 60"
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex items-center border border-gray-200 rounded px-2 py-2 bg-white text-xs text-gray-400 gap-2">
                <span className="flex-1">Unit</span>
                <span className="text-gray-400">🗓</span>
              </div>
              <div className="col-span-1">
                <input
                  className="w-full border border-gray-200 rounded px-2 py-2 text-xs text-gray-400 outline-none focus:border-blue-400"
                  placeholder="Unit Price"
                />
              </div>
              <div className="col-span-2">
                <input
                  className="w-full border border-gray-200 rounded px-2 py-2 text-xs text-gray-400 outline-none focus:border-blue-400"
                  placeholder="Total"
                />
              </div>
            </div>
          </section>

          {/* TRIM COST/DZ */}
          <section className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
              <h2 className="text-xs font-bold text-gray-700 tracking-widest uppercase">
                Trim Cost/Dz
              </h2>
              <button className="bg-teal-500 hover:bg-teal-600 text-white w-7 h-7 rounded flex items-center justify-center font-bold text-base transition-colors shadow">
                +
              </button>
            </div>

            {/* Header */}
            <div className="grid grid-cols-10 gap-2 mb-2 text-xs font-bold text-gray-500 uppercase tracking-widest px-1">
              <div>S.N.</div>
              <div>Ref.</div>
              <div className="col-span-2">Name</div>
              <div>Unit</div>
              <div>Qty</div>
              <div>Unit Price</div>
              <div>Excs[%]</div>
              <div>Total</div>
              <div>Depend</div>
            </div>

            <div className="text-xs text-gray-300 text-center py-4">
              No trim rows added yet
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
