import React, { useState } from 'react';
import { calcularExtracto } from '../data/laboratorio';
import BrixChart from './BrixChart';
import SensorialChart from './SensorialChart';

export default function SensorialLab() {
  const [cantMaduras, setCantMaduras] = useState(5);
  const [cantInmaduras, setCantInmaduras] = useState(2);
  const [presionPrensa, setPresionPrensa] = useState(1);

  const resultado = calcularExtracto(cantMaduras, cantInmaduras, presionPrensa);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-slate-900 text-white rounded-2xl shadow-xl border border-slate-800">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-400">
        Laboratorio de Extracción y Concentración
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Panel de Controles */}
        <div className="space-y-6 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <h3 className="text-xl font-semibold text-slate-200">1. Selección de Bayas</h3>

          <div>
            <label className="block text-sm font-medium text-purple-300 mb-2">
              Bayas Maduras (Moradas): <span className="font-bold text-lg">{cantMaduras}</span>
            </label>
            <input
              type="range"
              min="0"
              max="20"
              value={cantMaduras}
              onChange={(e) => setCantMaduras(parseInt(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-300 mb-2">
              Bayas Inmaduras (Verdes): <span className="font-bold text-lg">{cantInmaduras}</span>
            </label>
            <input
              type="range"
              min="0"
              max="20"
              value={cantInmaduras}
              onChange={(e) => setCantInmaduras(parseInt(e.target.value))}
              className="w-full accent-green-500 cursor-pointer"
            />
          </div>

          <h3 className="text-xl font-semibold text-slate-200 pt-4">2. Método de Prensado</h3>

          <div>
            <label className="block text-sm font-medium text-blue-300 mb-2">
              Nivel de Presión de Extracción: <span className="font-bold text-lg">{presionPrensa === 1 ? 'Suave' : presionPrensa === 2 ? 'Media' : 'Intensa'}</span>
            </label>
            <input
              type="range"
              min="1"
              max="3"
              step="1"
              value={presionPrensa}
              onChange={(e) => setPresionPrensa(parseInt(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Muestra de Resultados Resumidos */}
        <div className="flex flex-col justify-between bg-slate-800/50 p-6 rounded-xl border border-slate-700">
          <h3 className="text-xl font-semibold text-slate-200 mb-4">Muestra del Extracto Obtenido</h3>

          <div className="grid grid-cols-2 gap-4 my-auto">
            <div className="p-4 bg-slate-900 rounded-lg text-center border border-slate-700">
              <span className="text-xs text-slate-400 uppercase">Volumen Obt.</span>
              <p className="text-2xl font-bold text-purple-400">{resultado.volumenml} ml</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg text-center border border-slate-700">
              <span className="text-xs text-slate-400 uppercase">Grados Brix</span>
              <p className="text-2xl font-bold text-amber-400">{resultado.brix} °Bx</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg text-center border border-slate-700">
              <span className="text-xs text-slate-400 uppercase">Acidez Titulable</span>
              <p className="text-2xl font-bold text-green-400">{resultado.acidez} %</p>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg text-center border border-slate-700">
              <span className="text-xs text-slate-400 uppercase">Ratio Madurez</span>
              <p className="text-2xl font-bold text-indigo-400">{resultado.ratioMadura || 0} %</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gráficas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BrixChart brix={resultado.brix} acidez={resultado.acidez} />
        <SensorialChart perfil={resultado.perfilSensorial} />
      </div>
    </div>
  );
}