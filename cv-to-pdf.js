import puppeteer from "puppeteer";

const generatePDF = async () => {
  // 👇 abre navegador headless
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 👇 carga tu CV (puede ser localhost o deploy en la web)
  await page.goto("http://localhost:5173", {
    waitUntil: "networkidle0", // espera a que todo cargue
  });

  // 👇 genera el PDF
  await page.pdf({
    path: "cv.pdf", // nombre del archivo de salida
    format: "A4", // tamaño hoja
    printBackground: true, // incluye colores y fondos
    margin: {
      top: "20mm",
      right: "15mm",
      bottom: "20mm",
      left: "15mm",
    },
  });

  await browser.close();
  console.log("✅ PDF generado: cv.pdf");
};

generatePDF();
