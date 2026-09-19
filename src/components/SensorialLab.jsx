import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFlask, FaLeaf, FaCheckCircle } from "react-icons/fa";

import IngredientChip from "./IngredientChip";
import BrixSelector from "./BrixSelector";
import { recetasLab, ingredientes } from "../data/laboratorio";

export default function SensorialLab() {
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(recetasLab[0]);
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState([]);
  const [brixSeleccionado, setBrixSeleccionado] = useState("");
  const [resultado, setResultado] = useState(null);

  function reiniciarJuego() {
    setIngredientesSeleccionados([]);
    setBrixSeleccionado("");
    setResultado(null);
  }

  function cambiarReceta(receta) {
    setRecetaSeleccionada(receta);
    reiniciarJuego();
  }

  function toggleIngrediente(nombre) {
    if (ingredientesSeleccionados.includes(nombre)) {
      setIngredientesSeleccionados(
        ingredientesSeleccionados.filter((i) => i !== nombre)
      );
    } else {
      setIngredientesSeleccionados([
        ...ingredientesSeleccionados,
        nombre,
      ]);
    }
  }

  const progreso = useMemo(() => {
    const correctos = recetaSeleccionada.ingredientesCorrectos.filter((i) =>
      ingredientesSeleccionados.includes(i)
    ).length;

    return Math.round(
      (correctos / recetaSeleccionada.ingredientesCorrectos.length) * 100
    );
  }, [ingredientesSeleccionados, recetaSeleccionada]);

  function prepararReceta() {
    const ingredientesOK =
      recetaSeleccionada.ingredientesCorrectos.every((i) =>
        ingredientesSeleccionados.includes(i)
      ) &&
      ingredientesSeleccionados.length ===
        recetaSeleccionada.ingredientesCorrectos.length;

    const brixOK = recetaSeleccionada.brix === brixSeleccionado;

    setResultado({
      success: ingredientesOK && brixOK,
      ingredientesOK,
      brixOK,
    });
  }

  return (
    <section className="relative py-28 px-6 bg-gradient-to-br from-purple-950 via-violet-900 to-purple-800 overflow-hidden">

      <div className="w-full rounded-3xl bg-white p-6 text-gray-900 shadow-xl md:p-10">

        <div className="text-center">
          <span className="text-3xl font-bold text-purple-950">
            Laboratorio Sensorial
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white">
            Crea tu receta de saúco
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-purple-100 leading-8">
            Ponte en el papel de un investigador gastronómico.
            Escoge una preparación, selecciona los ingredientes
            correctos y descubre cuál concentración de °Brix pertenece
            a esa receta.
          </p>
        </div>

        {/* PASO 1 */}

        <div className="mt-16">
          <p className="text-purple-200 uppercase tracking-[.25em] text-sm font-bold mb-6">
            Paso 1 · Escoge una receta
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            {recetasLab.map((receta) => (
              <motion.button
                key={receta.id}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: .98 }}
                onClick={() => cambiarReceta(receta)}
                className={`
                  overflow-hidden rounded-[2rem]
                  border transition-all duration-300 text-left
                  ${
                    recetaSeleccionada.id === receta.id
                      ? "border-fuchsia-400 ring-2 ring-fuchsia-400 shadow-[0_0_40px_rgba(192,132,252,.35)]"
                      : "border-white/10"
                  }
                `}
              >
                <img
                  src={receta.imagen}
                  alt={receta.nombre}
                  className="w-full h-52 object-cover"
                />

                <div className="bg-white p-5">
                  <p className="uppercase text-xs tracking-widest text-purple-600 font-bold">
                    Preparación
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-purple-950">
                    {receta.nombre}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    {receta.descripcion}
                  </p>
                </div>

              </motion.button>
            ))}

          </div>
        </div>

        {/* PANEL */}

        <div className="mt-20 grid lg:grid-cols-2 gap-10">

          {/* FOTO */}

          <motion.div
            layout
            className="overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10 bg-white"
          >
            <motion.img
              key={recetaSeleccionada.id}
              src={recetaSeleccionada.imagen}
              alt={recetaSeleccionada.nombre}
              initial={{ scale: 1.15, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: .5 }}
              className="w-full h-full min-h-[620px] object-cover"
            />
          </motion.div>

          {/* CONTROLES */}

          <div className="rounded-[2.5rem] bg-white/10 backdrop-blur-xl border border-white/10 p-8 text-white">

            <div className="flex items-center gap-3">
              <FaFlask className="text-fuchsia-300 text-xl"/>
              <span className="uppercase tracking-[.2em] text-sm text-purple-200 font-bold">
                Preparación seleccionada
              </span>
            </div>

            <h3 className="mt-4 text-4xl font-black">
              {recetaSeleccionada.nombre}
            </h3>

            {/* Barra */}

            <div className="mt-8">
              <div className="flex justify-between text-sm text-purple-200">
                <span>Progreso del laboratorio</span>
                <span>{progreso}%</span>
              </div>

              <div className="mt-3 h-3 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-violet-300"
                  animate={{ width: `${progreso}%` }}
                  transition={{ duration: .4 }}
                />
              </div>
            </div>

            {/* PASO 2 */}

            <div className="mt-10">
              <p className="uppercase tracking-[.2em] text-sm text-purple-200 font-bold">
                Paso 2 · Selecciona los ingredientes
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                {ingredientes.map((item) => (
                  <IngredientChip
                    key={item}
                    nombre={item}
                    activo={ingredientesSeleccionados.includes(item)}
                    onClick={() => toggleIngrediente(item)}
                  />
                ))}

              </div>
            </div>

            {/* PASO 3 */}

            <div className="mt-12">
              <p className="uppercase tracking-[.2em] text-sm text-purple-200 font-bold">
                Paso 3 · Elige la concentración correcta
              </p>

              <div className="mt-6">
                <BrixSelector
                  value={brixSeleccionado}
                  onChange={setBrixSeleccionado}
                />
              </div>
            </div>

            {/* BOTONES */}

            <div className="mt-12 flex flex-wrap gap-4">

              <motion.button
                whileHover={{ scale:1.04 }}
                whileTap={{ scale:.97 }}
                onClick={prepararReceta}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-violet-500 font-bold shadow-lg"
              >
                Preparar receta
              </motion.button>

              <motion.button
                whileHover={{ scale:1.03 }}
                whileTap={{ scale:.97 }}
                onClick={reiniciarJuego}
                className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10"
              >
                Reiniciar
              </motion.button>

            </div>

            {/* RESULTADO */}

            <AnimatePresence>

              {resultado && (
                <motion.div
                  initial={{ opacity:0, y:25 }}
                  animate={{ opacity:1, y:0 }}
                  exit={{ opacity:0 }}
                  className={`
                    mt-10 rounded-[2rem] p-6 border
                    ${
                      resultado.success
                        ? "bg-green-500/15 border-green-400/30"
                        : "bg-red-500/15 border-red-400/30"
                    }
                  `}
                >

                  {resultado.success ? (
                    <>
                      <FaCheckCircle className="text-5xl text-green-300"/>

                      <h4 className="mt-4 text-3xl font-black">
                        ¡Excelente!
                      </h4>

                      <p className="mt-3 text-green-100 leading-7">
                        Has preparado correctamente la receta utilizando
                        la concentración experimental adecuada.
                      </p>
                    </>
                  ) : (
                    <>
                      <h4 className="text-3xl font-black">
                        La receta necesita ajustes
                      </h4>

                      <p className="mt-4 text-purple-100">
                        Ingredientes correctos:
                        <strong className="ml-2">
                          {resultado.ingredientesOK ? "Sí" : "No"}
                        </strong>
                      </p>

                      <p className="mt-2 text-purple-100">
                        Concentración correcta:
                        <strong className="ml-2">
                          {resultado.brixOK ? "Sí" : "No"}
                        </strong>
                      </p>

                      <p className="mt-5 text-purple-200 text-sm leading-7">
                        Intenta nuevamente comparando los ingredientes
                        utilizados en la preparación seleccionada.
                      </p>
                    </>
                  )}

                </motion.div>
              )}

            </AnimatePresence>

          </div>

        </div>

        {/* INGREDIENTES ESPERADOS */}

        <motion.div
          className="mt-16 rounded-[2rem] bg-white/5 border border-white/10 p-8"
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
        >
          <div className="flex items-center gap-3 text-purple-400 mb-5">
            <FaLeaf/>
            <span className="uppercase tracking-[.2em] text-sm font-bold">
              Ingredientes esperados para esta receta
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {recetaSeleccionada.ingredientesCorrectos.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-300/20 text-purple-400 font-semibold text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>

    </section>
  );
}