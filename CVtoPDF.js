import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

const generatePDF = async () => {
  const outputs = [
    {
      lang: "es",
      url: "http://localhost:5173/",
      paths: [
        "public/CV_Samuel_Loaiza_Backend_NET_ES.pdf",
        "../tarjetaPersonal/public/CV_Samuel_Loaiza_Backend_NET_ES.pdf",
        "../portafolio/public/CV_Samuel_Loaiza_Backend_NET_ES.pdf",
      ],
    },
    {
      lang: "en",
      url: "http://localhost:5173/en",
      paths: [
        "public/CV_Samuel_Loaiza_Backend_NET_EN.pdf",
        "../tarjetaPersonal/public/CV_Samuel_Loaiza_Backend_NET_EN.pdf",
        "../portafolio/public/CV_Samuel_Loaiza_Backend_NET_EN.pdf",
      ],
    },
  ];

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    for (const version of outputs) {
      const page = await browser.newPage();
      await page.goto(version.url, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      await page.addStyleTag({
        content: `
          .no-print { display: none !important; }
          .fixed { position: relative !important; }
        `,
      });

      for (const outputPath of version.paths) {
        const dir = path.dirname(outputPath);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        await page.pdf({
          path: outputPath,
          format: "A4",
          printBackground: true,
          margin: {
            top: "10mm", // Margen optimizado
            right: "10mm",
            bottom: "10mm",
            left: "10mm",
          },
        });
        console.log(`✅ Generated: ${outputPath}`);
      }
      await page.close();
    }
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await browser.close();
  }
};

generatePDF();
