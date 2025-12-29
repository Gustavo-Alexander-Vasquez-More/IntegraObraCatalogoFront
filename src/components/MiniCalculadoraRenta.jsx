import React from "react";
export default function MiniCalculadoraRenta({ precioDia }) {
  const [dias, setDias] = React.useState(1);

  const handleChange = (e) => {
    const val = e.target.value;
    if (val === "") {
      setDias("");
    } else {
      setDias(Math.max(1, Number(val)));
    }
  };

  const handleBlur = () => {
    if (dias === "" || dias < 1) setDias(1);
  };

  const handleIncrement = () => setDias((prev) => Number(prev) + 1);
  const handleDecrement = () => setDias((prev) => (Number(prev) > 1 ? Number(prev) - 1 : 1));

  // Lógica de descuentos escalonados
  const diasNum = Number(dias) || 0;
  let descuentoPorc = 0;
  if (diasNum >= 3 && diasNum < 6) {
    descuentoPorc = 0.05;
  } else if (diasNum >= 6 && diasNum < 9) {
    descuentoPorc = 0.1;
  } else if (diasNum >= 9 && diasNum < 12) {
    descuentoPorc = 0.15;
  } else if (diasNum >= 12 && diasNum <= 31) {
    descuentoPorc = 0.2;
  } else if (diasNum > 31) {
    descuentoPorc = 0.3;
  }
  const subtotal = diasNum * precioDia;
  const descuento = subtotal * descuentoPorc;
  const total = subtotal - descuento;

  return (
    <div className="mt-2 mb-2 p-4 bg-[#f9f6f3] rounded-lg shadow flex flex-col gap-2 max-w-xs border border-[#F48437]">
      <label className="text-sm font-semibold text-[#066396] mb-1">
        Calcula tu renta por días:
      </label>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handleDecrement}
          className="bg-[#066396] text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold hover:bg-[#F48437] transition"
          aria-label="Restar día"
        >
          –
        </button>
        <input
          type="number"
          min={1}
          value={dias}
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-16 text-center px-2 py-1 border border-[#F48437] rounded focus:outline-none focus:ring-2 focus:ring-[#066396] text-base appearance-none"
          style={{ MozAppearance: "textfield" }}
        />
        <button
          type="button"
          onClick={handleIncrement}
          className="bg-[#066396] text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold hover:bg-[#F48437] transition"
          aria-label="Sumar día"
        >
          +
        </button>
        <span className="text-[#066396] font-semibold">día(s)</span>
      </div>
      <div className="text-base font-bold text-[#066396] mt-1">
        Total: <span className="text-2xl text-[#F48437]">${isNaN(total) ? 0 : total.toLocaleString()}</span> MXN
      </div>
      {descuentoPorc > 0 && (
        <div className="text-[#066396] text-sm font-semibold mt-1 bg-[#F48437]/20 rounded px-2 py-1 text-center">
          ¡Descuento aplicado!<br />
          <span className="line-through text-gray-500">${subtotal.toLocaleString()} MXN</span> -
          <span className="text-[#F48437]">{descuentoPorc * 100}%</span>
        </div>
      )}
    </div>
  );
}
