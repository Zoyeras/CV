import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

const generatePDF = async () => {
  // Define paths for both Spanish and English versions
  const outputs = [
    {
      lang: "es",
      url: "http://localhost:5173/",
      paths: [
        "public/cv_SamuelLoaiza.pdf",
        "../tarjetaPersonal/public/cv_SamuelLoaiza.pdf",
        "../portafolio/public/cv_SamuelLoaiza.pdf",
      ],
    },
    {
      lang: "en",
      url: "http://localhost:5173/en",
      paths: [
        "public/cv_SamuelLoaiza_EN.pdf",
        "../tarjetaPersonal/public/cv_SamuelLoaiza_EN.pdf",
        "../portafolio/public/cv_SamuelLoaiza_EN.pdf",
      ],
    },
  ];

  console.log("🚀 Starting PDF generation...");
  console.log("⚠️  Make sure the dev server is running: npm run dev\n");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    for (const version of outputs) {
      console.log(`\n🌐 Generating ${version.lang.toUpperCase()} version...`);

      const page = await browser.newPage();

      // Set viewport for better rendering
      await page.setViewport({ width: 1200, height: 800 });

      console.log(`📄 Navigating to: ${version.url}`);

      // Navigate to the appropriate route
      await page.goto(version.url, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });

      // Wait a bit for any animations or lazy loading
      await page.waitForTimeout(2000);

      // Hide print elements
      await page.addStyleTag({
        content: `
          .no-print { display: none !important; }
          .fixed { position: relative !important; }
        `,
      });

      // Generate PDF for all paths in this language version
      for (const outputPath of version.paths) {
        // Delete existing file
        if (fs.existsSync(outputPath)) {
          fs.unlinkSync(outputPath);
          console.log(`🗑️ Deleted previous file: ${outputPath}`);
        }

        // Create directory if it doesn't exist
        const dir = path.dirname(outputPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
          console.log(`📁 Created directory: ${dir}`);
        }

        await page.pdf({
          path: outputPath,
          format: "A4",
          printBackground: true,
          margin: {
            top: "20mm",
            right: "15mm",
            bottom: "20mm",
            left: "15mm",
          },
        });

        console.log(`✅ Generated: ${outputPath}`);
      }

      await page.close();
    }

    console.log("\n🎉 All PDFs generated successfully!");
    console.log("📄 Spanish: cv_SamuelLoaiza.pdf");
    console.log("📄 English: cv_SamuelLoaiza_EN.pdf");
    console.log("\n📁 Files are available in:");
    console.log("   - /public/");
    console.log("   - ../tarjetaPersonal/public/");
    console.log("   - ../portafolio/public/");
  } catch (error) {
    console.error("❌ Error generating PDFs:", error);
  } finally {
    await browser.close();
  }
};

generatePDF();
