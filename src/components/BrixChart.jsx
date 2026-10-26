import React from 'react';

export default function BrixChart({ brix, acidez }) {
  const maxBrix = 20;
  const porcentajeBrix = Math.min(100, (brix / maxBrix) * 100);

  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
      <h4 className="text-lg font-semibold mb-4 text-amber-300">Concentración de Solutos (°Brix vs Acidez)</h4>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Grados Brix (°Bx)</span>
            <span className="font-bold">{brix} °Bx</span>
          </div>
          <div className="w-full bg-slate-900 rounded-full h-4 overflow-hidden border border-slate-700">
            <div 
              className="bg-amber-500 h-full transition-all duration-500 ease-out" 
              style={{ width: `${porcentajeBrix}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Porcentaje de Acidez Orgánica</span>
            <span className="font-bold">{acidez} %</span>
          </div>
          <div className="w-full bg-slate-900 rounded-full h-4 overflow-hidden border border-slate-700">
            <div 
              className="bg-emerald-500 h-full transition-all duration-500 ease-out" 
              style={{ width: `${Math.min(100, acidez * 15)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}