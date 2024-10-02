const fs = require("fs");
const templatePath = "nginxtemplate.conf";
const jsonPath = "ccm2/config/cors.json";
const outputPath = "nginx.conf";

const templateData = fs.readFileSync(templatePath, "utf8");
const jsonData = fs.readFileSync(jsonPath, "utf8");
const corsUrls = JSON.parse(jsonData).configResolution.resolved.corsUrls;
const updatedData = templateData.replace("$cors_urls", corsUrls);
fs.writeFileSync(outputPath, updatedData);

console.log("Updated nginx.conf file with CORS value");
