import puppeteer from "puppeteer";
import fs from "fs";

const generatePDF = async () => {
  const outputPath1 = "public/cv_SamuelLoaiza.pdf";
  const outputPath2 = "../tarjetaPersonal/public/cv_SamuelLoaiza.pdf";

  // 👇 borra si ya existen
  [outputPath1, outputPath2].forEach((path) => {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
      console.log(`🗑️ Archivo anterior eliminado: ${path}`);
    }
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:5173", {
    waitUntil: "networkidle0",
  });

  // 👇 agrega CSS antes de sacar el PDF
  await page.addStyleTag({
    content: `.no-print { display: none !important; }`,
  });

  // 👇 genera el PDF en ambas rutas
  await page.pdf({
    path: outputPath1,
    format: "A4",
    printBackground: true,
    margin: {
      top: "20mm",
      right: "15mm",
      bottom: "20mm",
      left: "15mm",
    },
  });

  await page.pdf({
    path: outputPath2,
    format: "A4",
    printBackground: true,
    margin: {
      top: "20mm",
      right: "15mm",
      bottom: "20mm",
      left: "15mm",
    },
  });

  console.log("✅ PDFs generados en:");
  console.log("   →", outputPath1);
  console.log("   →", outputPath2);

  await browser.close();
};

generatePDF();
