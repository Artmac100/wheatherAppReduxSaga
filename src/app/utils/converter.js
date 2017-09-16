export const toHgmm = (gectoPascal) => {
  const Hgmm = Math.round((gectoPascal * 100) / 133.3224);
  return Hgmm;
};
