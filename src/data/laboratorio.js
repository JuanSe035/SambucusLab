export const DATOS_EXTRACCION = {
  bayaMadura: {
    nombre: "Baya Madura (Morada)",
    brixAporte: 12.5, // °Brix por unidad/módu
    acidezAporte: 1.2, // % de acidez
    colorHex: "#5B21B6",
    antocianinas: 85, // mg/100g
  },
  bayaInmadura: {
    nombre: "Baya Inmadura (Verde)",
    brixAporte: 4.0,
    acidezAporte: 4.5,
    colorHex: "#15803D",
    antocianinas: 12,
  }
};

export const calcularExtracto = (cantMaduras, cantInmaduras, presionPrensa = 1) => {
  const totalBayas = cantMaduras + cantInmaduras;
  if (totalBayas === 0) {
    return {
      volumenml: 0,
      brix: 0,
      acidez: 0,
      colorResultante: "#E5E7EB",
      perfilSensorial: { dulzor: 0, acidez: 0, astringencia: 0, aroma: 0 }
    };
  }

  const rendimientoBase = 15; // ml por baya
  const volumenml = totalBayas * rendimientoBase * (0.8 + presionPrensa * 0.2);

  const brixTotal = (cantMaduras * DATOS_EXTRACCION.bayaMadura.brixAporte + cantInmaduras * DATOS_EXTRACCION.bayaInmadura.brixAporte) / totalBayas;
  const acidezTotal = (cantMaduras * DATOS_EXTRACCION.bayaMadura.acidezAporte + cantInmaduras * DATOS_EXTRACCION.bayaInmadura.acidezAporte) / totalBayas;

  // Cálculo de perfil sensorial (0 a 100)
  const ratioMadura = cantMaduras / totalBayas;
  const dulzor = Math.min(100, Math.round(ratioMadura * 90 + presionPrensa * 10));
  const acidezSensorial = Math.min(100, Math.round((1 - ratioMadura) * 85 + acidezTotal * 3));
  const astringencia = Math.min(100, Math.round((1 - ratioMadura) * 50 + presionPrensa * 40));
  const aroma = Math.min(100, Math.round(ratioMadura * 80 + presionPrensa * 20));

  return {
    volumenml: Math.round(volumenml),
    brix: parseFloat(brixTotal.toFixed(2)),
    acidez: parseFloat(acidezTotal.toFixed(2)),
    ratioMadura: Math.round(ratioMadura * 100),
    perfilSensorial: { dulzor, acidez: acidezSensorial, astringencia, aroma }
  };
};