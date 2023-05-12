const fs = require("fs");
const path = require("path");
const resemble = require("resemblejs");
const { JSDOM } = require("jsdom");

// Ruta de las carpetas de ejecución de pruebas
const folder1Path = "./screenshotsv";
const folder2Path = "./screenshots";

const files1 = fs.readdirSync(folder1Path);
const files2 = fs.readdirSync(folder2Path);

const report = {
  steps: [],
};

// Iterar sobre los archivos de la primera carpeta
files1.forEach((file1, index) => {
  const file2 = files2[index];

  // Obtener los nombres de archivo y las rutas completas
  const fileName = path.basename(file1, ".png");
  const file1Path = path.join(folder1Path, file1);
  const file2Path = path.join(folder2Path, file2);

  // Agregar el paso al reporte
  report.steps.push({
    name: fileName,
    image1: file1Path,
    image2: file2Path,
    diffImage: `diff_${fileName}.png`,
  });

  // Comparar las imágenes utilizando resemble.js
  resemble(file1Path)
    .compareTo(file2Path)
    .onComplete(async (comparison) => {
      // Obtener la imagen de diferencia como buffer
      const diffImageBuffer = await comparison.getBuffer();

      // Guardar la imagen de diferencia en un archivo
      fs.writeFile(`diff_${fileName}.png`, diffImageBuffer, (err) => {
        if (err) {
          console.log(`Error guardando imagens ${err}`);
          return;
        }
      });

      // Obtener la diferencia porcentual
      const diffPercentage = comparison.misMatchPercentage;

      const step = report.steps.find((step) => step.name === fileName);
      step.diffPercentage = diffPercentage;
      const dom = new JSDOM();
      const document = dom.window.document;

      const container = document.createElement("div");
      container.innerHTML = `
      <h3>${fileName}</h3>
      <img src="${file1Path}" alt="Versión 1">
      <img src="${file2Path}" alt="Versión 2">
      <img src="diff_${fileName}.png" alt="Diferencia">
    <p>Diferencia porcentual entre versiones: ${diffPercentage}%</p>
    `;

      fs.writeFile(`${fileName}.html`, container.innerHTML, (err) => {
        if (err) {
          console.error(
            `Error al guardar el archivo HTML para ${fileName}: ${err}`
          );
          return;
        }
      });

      const summaryHTML = report.steps
        .map(
          (step) => `
    <li>
      <a href="${step.name}.html">${step.name}</a> - Diferencia porcentual: ${step.diffPercentage}%
    </li>
  `
        )
        .join("");

      const summaryContainer = `
  <h2>Resumen de Pruebas</h2>
  <ul>${summaryHTML}</ul>
`;

      fs.writeFileSync("summary.html", summaryContainer);
    });
});
