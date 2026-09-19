import { useMemo, useState } from "react";
import { FaFlask, FaLeaf, FaCheckCircle } from "react-icons/fa";

import IngredientChip from "./IngredientChip";
import BrixSelector from "./BrixSelector";
import { recetasLab, ingredientes } from "../data/laboratorio";

export default function SensorialLab() {
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(
    recetasLab[0]
  );

  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState(
    []
  );

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
    setIngredientesSeleccionados((actuales) => {
      if (actuales.includes(nombre)) {
        return actuales.filter((ingrediente) => ingrediente !== nombre);
      }

      return [...actuales, nombre];
    });
  }

  const progreso = useMemo(() => {
    const ingredientesCorrectos =
      recetaSeleccionada.ingredientesCorrectos;

    const correctos = ingredientesCorrectos.filter((ingrediente) =>
      ingredientesSeleccionados.includes(ingrediente)
    ).length;

    if (ingredientesCorrectos.length === 0) {
      return 0;
    }

    return Math.round(
      (correctos / ingredientesCorrectos.length) * 100
    );
  }, [ingredientesSeleccionados, recetaSeleccionada]);

  function prepararReceta() {
    const ingredientesOK =
      recetaSeleccionada.ingredientesCorrectos.every((ingrediente) =>
        ingredientesSeleccionados.includes(ingrediente)
      ) &&
      ingredientesSeleccionados.length ===
        recetaSeleccionada.ingredientesCorrectos.length;

    const brixOK =
      recetaSeleccionada.brix === brixSeleccionado;

    setResultado({
      success: ingredientesOK && brixOK,
      ingredientesOK,
      brixOK,
    });
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-violet-900 to-purple-800 px-6 py-28">
      <div className="mx-auto w-full max-w-7xl rounded-3xl bg-white p-6 text-gray-900 shadow-xl md:p-10">

        {/* ENCABEZADO */}

        <div className="text-center">
          <span className="text-3xl font-bold text-purple-950">
            Laboratorio Sensorial
          </span>

          <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
            Crea tu receta de saúco
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-purple-100">
            Ponte en el papel de un investigador gastronómico.
            Escoge una preparación, selecciona los ingredientes
            correctos y descubre cuál concentración de °Brix pertenece
            a esa receta.
          </p>
        </div>

        {/* PASO 1 */}

        <div className="mt-16">
          <p className="mb-6 text-sm font-bold uppercase tracking-[.25em] text-purple-200">
            Paso 1 · Escoge una receta
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {recetasLab.map((receta) => {
              const seleccionada =
                recetaSeleccionada.id === receta.id;

              return (
                <button
                  key={receta.id}
                  type="button"
                  onClick={() => cambiarReceta(receta)}
                  className={`
                    group overflow-hidden rounded-[2rem]
                    border text-left
                    transition-[transform,box-shadow,border-color]
                    duration-300 ease-out
                    hover:-translate-y-1
                    ${
                      seleccionada
                        ? "border-fuchsia-400 shadow-[0_0_30px_rgba(192,132,252,.25)] ring-2 ring-fuchsia-400"
                        : "border-purple-100 hover:border-fuchsia-300 hover:shadow-lg"
                    }
                  `}
                >
                  <img
                    src={receta.imagen}
                    alt={receta.nombre}
                    loading="lazy"
                    decoding="async"
                    className="
                      h-52 w-full object-cover
                      transition-transform duration-500
                      group-hover:scale-[1.02]
                    "
                  />

                  <div className="bg-white p-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-purple-600">
                      Preparación
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-purple-950">
                      {receta.nombre}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {receta.descripcion}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* PANEL PRINCIPAL */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* IMAGEN */}

          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white shadow-2xl">
            <img
              src={recetaSeleccionada.imagen}
              alt={recetaSeleccionada.nombre}
              loading="lazy"
              decoding="async"
              className="
                min-h-[620px]
                h-full
                w-full
                object-cover
              "
            />
          </div>

          {/* CONTROLES */}

          <div
            className="
              rounded-[2.5rem]
              border border-white/10
              bg-white/10
              p-8
              text-white
              backdrop-blur-md
            "
          >
            <div className="flex items-center gap-3">
              <FaFlask className="text-xl text-fuchsia-300" />

              <span className="text-sm font-bold uppercase tracking-[.2em] text-purple-200">
                Preparación seleccionada
              </span>
            </div>

            <h3 className="mt-4 text-4xl font-black">
              {recetaSeleccionada.nombre}
            </h3>

            {/* PROGRESO */}

            <div className="mt-8">
              <div className="flex justify-between text-sm text-purple-200">
                <span>Progreso del laboratorio</span>
                <span>{progreso}%</span>
              </div>

              <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    from-fuchsia-400
                    to-violet-300
                    transition-[width]
                    duration-300
                    ease-out
                  "
                  style={{
                    width: `${progreso}%`,
                  }}
                />
              </div>
            </div>

            {/* PASO 2 */}

            <div className="mt-10">
              <p className="text-sm font-bold uppercase tracking-[.2em] text-purple-200">
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
              <p className="text-sm font-bold uppercase tracking-[.2em] text-purple-200">
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
              <button
                type="button"
                onClick={prepararReceta}
                className="
                  rounded-2xl
                  bg-gradient-to-r
                  from-fuchsia-500
                  to-violet-500
                  px-8
                  py-4
                  font-bold
                  shadow-lg
                  transition-[transform,box-shadow]
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  active:translate-y-0
                "
              >
                Preparar receta
              </button>

              <button
                type="button"
                onClick={reiniciarJuego}
                className="
                  rounded-2xl
                  border
                  border-white/20
                  px-8
                  py-4
                  transition-[background-color,transform]
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-white/10
                  active:translate-y-0
                "
              >
                Reiniciar
              </button>
            </div>

            {/* RESULTADO */}

            {resultado && (
              <div
                className={`
                  mt-10
                  rounded-[2rem]
                  border
                  p-6
                  ${
                    resultado.success
                      ? "border-green-400/30 bg-green-500/15"
                      : "border-red-400/30 bg-red-500/15"
                  }
                `}
              >
                {resultado.success ? (
                  <>
                    <FaCheckCircle className="text-5xl text-green-300" />

                    <h4 className="mt-4 text-3xl font-black">
                      ¡Excelente!
                    </h4>

                    <p className="mt-3 leading-7 text-green-100">
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

                    <p className="mt-5 text-sm leading-7 text-purple-200">
                      Intenta nuevamente comparando los ingredientes
                      utilizados en la preparación seleccionada.
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* INGREDIENTES ESPERADOS */}

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <div className="mb-5 flex items-center gap-3 text-purple-400">
            <FaLeaf />

            <span className="text-sm font-bold uppercase tracking-[.2em]">
              Ingredientes esperados para esta receta
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {recetaSeleccionada.ingredientesCorrectos.map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-purple-300/20
                  bg-purple-500/20
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-purple-400
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}