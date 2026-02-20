const Sidebar = () => {
  const navItems = [
    { label: "ONEBOARD", icon: "⌂", hasArrow: false },
    { label: "ONE AIS", icon: "☰", hasArrow: true },
    { label: "ONE HCM", icon: "👥", hasArrow: true },
    { label: "ONE PLM [STYLE]", icon: "🎨", hasArrow: true, active: true },
    { label: "ONE TNA", icon: "⏱", hasArrow: true },
    { label: "BUDGET", icon: "💰", hasArrow: true },
    { label: "ONE PMS", icon: "📊", hasArrow: true },
    { label: "ONE QMS", icon: "✔", hasArrow: true },
    { label: "ONE SCM", icon: "🔗", hasArrow: true },
  ];

  return (
    <div
      className=" hidden md:flex
  md:w-64
  min-h-screen
  bg-linear-to-b from-[#b8e0f7] to-[#d6f0ff]
  flex-col shadow-xl border-r border-blue-200"
    >
      {/* Logo */}
      <div className="px-4 py-3 bg-white border-b border-blue-100 flex items-center gap-2">
        <div className="flex items-center gap-1">
          <span className="text-blue-800 font-black text-2xl tracking-tight leading-none">
            ON
          </span>
          <div className="flex flex-col -ml-0.5">
            <div className="w-4 h-2 bg-blue-600 rounded-sm" />
            <div className="w-4 h-2 bg-blue-400 rounded-sm mt-0.5" />
          </div>
          <span className="text-xs text-blue-500 font-bold -ml-1 self-end mb-0.5">
            ERP
          </span>
        </div>
      </div>

      {/* PREV / NEXT */}
      <div className="flex bg-[#4a9fd4] text-white text-xs font-bold">
        <button className="flex-1 py-2 flex items-center justify-center gap-1 hover:bg-[#3a8fc4] transition-colors">
          <span>◀</span> PREV
        </button>
        <div className="w-px bg-blue-400" />
        <button className="flex-1 py-2 flex items-center justify-center gap-1 hover:bg-[#3a8fc4] transition-colors">
          NEXT <span>▶</span>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-2">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`flex items-center justify-between px-4 py-2.5 mx-1 my-0.5 rounded cursor-pointer transition-all text-sm font-semibold
              ${
                item.active
                  ? "bg-[#1a6fb5] text-white shadow-md"
                  : "text-blue-900 hover:bg-blue-200"
              }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-base">{item.icon}</span>
              <span className="tracking-wide text-xs">{item.label}</span>
            </div>
            {item.hasArrow && <span className="text-[10px] opacity-60">▶</span>}
          </div>
        ))}
      </nav>

      {/* Bottom bar */}
      <div className="border-t border-blue-300 bg-[#b8dff5]">
        <div className="flex items-center gap-2 px-3 py-2 text-xs text-blue-800">
          <div className="flex gap-1">
            <div className="w-7 h-7 bg-blue-500 rounded flex items-center justify-center text-white text-sm">
              ☁
            </div>
            <div className="w-7 h-7 bg-blue-300 rounded flex items-center justify-center text-white text-sm">
              ☁
            </div>
          </div>
          <div className="flex items-center gap-1 ml-auto">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="font-bold">BY : JOHIR1</span>
          </div>
        </div>
        <div className="flex border-t border-blue-300">
          <button className="flex-1 flex items-center justify-center gap-1 py-2 text-xs font-bold text-blue-800 hover:bg-blue-200 transition-colors">
            <span>👤</span> ACCOUNT
          </button>
          <div className="w-px bg-blue-300" />
          <button className="flex-1 flex items-center justify-center gap-1 py-2 text-xs font-bold text-blue-800 hover:bg-blue-200 transition-colors">
            <span>↪</span> LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
