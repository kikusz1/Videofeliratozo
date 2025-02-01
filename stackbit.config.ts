import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"], // Tartalomkönyvtárak
      models: [
        {
          name: "Page", // Modell neve
          type: "page", // Ez egy oldalmodell
          urlPath: "/{slug}", // Az oldal URL-je
          filePath: "content/pages/{slug}.json", // A fájl elérési útvonala
          fields: [
            { name: "title", type: "string", required: true }, // Cím mező
            { name: "content", type: "markdown", required: true } // Tartalom mező
          ]
        }
      ]
    })
  ]
});
