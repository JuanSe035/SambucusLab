import React from 'react';

export default function SensorialChart({ perfil }) {
  const metricas = [
    { etiqueta: "Dulzor", valor: perfil.dulzor, color: "bg-purple-500" },
    { etiqueta: "Acidez", valor: perfil.acidez, color: "bg-green-500" },
    { etiqueta: "Astringencia", valor: perfil.astringencia, color: "bg-yellow-600" },
    { etiqueta: "Aroma", valor: perfil.aroma, color: "bg-pink-500" }
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
      <h4 className="text-lg font-semibold mb-4 text-purple-300">Perfil Sensorial del Extracto</h4>
      
      <div className="space-y-3">
        {metricas.map((item) => (
          <div key={item.etiqueta}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">{item.etiqueta}</span>
              <span className="font-bold">{item.valor} / 100</span>
            </div>
            <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-slate-700">
              <div 
                className={`${item.color} h-full transition-all duration-500 ease-out`}
                style={{ width: `${item.valor}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}