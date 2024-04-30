// apps/frontend/vite.config.ts
import { nxViteTsPaths } from "file:///C:/Users/mathieu/Documents/CODING/test-boilerplate/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
import react from "file:///C:/Users/mathieu/Documents/CODING/test-boilerplate/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/mathieu/Documents/CODING/test-boilerplate/node_modules/vite/dist/node/index.js";
import checker from "file:///C:/Users/mathieu/Documents/CODING/test-boilerplate/node_modules/vite-plugin-checker/dist/esm/main.js";

// apps/frontend/package.json
var scripts = {
  serve: "vite",
  build: "vite build",
  test: "vitest run",
  lint: "eslint src/**/*.{js,jsx,ts,tsx,json}"
};

// apps/frontend/vite.config.ts
var __vite_injected_original_dirname = "c:\\Users\\mathieu\\Documents\\CODING\\test-boilerplate\\apps\\frontend";
var vite_config_default = defineConfig({
  root: __vite_injected_original_dirname,
  cacheDir: "../../node_modules/.vite/apps/frontend",
  server: {
    port: 4200,
    host: "localhost"
  },
  preview: {
    port: 4300,
    host: "localhost"
  },
  plugins: [
    react(),
    nxViteTsPaths(),
    checker({ typescript: true, eslint: { lintCommand: scripts.lint } })
  ],
  build: {
    outDir: "../../dist/apps/frontend",
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  test: {
    globals: true,
    cache: {
      dir: "../../node_modules/.vitest"
    },
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../coverage/apps/frontend",
      provider: "v8"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYXBwcy9mcm9udGVuZC92aXRlLmNvbmZpZy50cyIsICJhcHBzL2Zyb250ZW5kL3BhY2thZ2UuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcImM6XFxcXFVzZXJzXFxcXG1hdGhpZXVcXFxcRG9jdW1lbnRzXFxcXENPRElOR1xcXFx0ZXN0LWJvaWxlcnBsYXRlXFxcXGFwcHNcXFxcZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcImM6XFxcXFVzZXJzXFxcXG1hdGhpZXVcXFxcRG9jdW1lbnRzXFxcXENPRElOR1xcXFx0ZXN0LWJvaWxlcnBsYXRlXFxcXGFwcHNcXFxcZnJvbnRlbmRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2M6L1VzZXJzL21hdGhpZXUvRG9jdW1lbnRzL0NPRElORy90ZXN0LWJvaWxlcnBsYXRlL2FwcHMvZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz0ndml0ZXN0JyAvPlxyXG5pbXBvcnQgeyBueFZpdGVUc1BhdGhzIH0gZnJvbSAnQG54L3ZpdGUvcGx1Z2lucy9ueC10c2NvbmZpZy1wYXRocy5wbHVnaW4nO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IGNoZWNrZXIgZnJvbSAndml0ZS1wbHVnaW4tY2hlY2tlcic7XHJcbmltcG9ydCB7IHNjcmlwdHMgfSBmcm9tICcuL3BhY2thZ2UuanNvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHJvb3Q6IF9fZGlybmFtZSxcclxuICBjYWNoZURpcjogJy4uLy4uL25vZGVfbW9kdWxlcy8udml0ZS9hcHBzL2Zyb250ZW5kJyxcclxuXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiA0MjAwLFxyXG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgfSxcclxuXHJcbiAgcHJldmlldzoge1xyXG4gICAgcG9ydDogNDMwMCxcclxuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gIH0sXHJcblxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBueFZpdGVUc1BhdGhzKCksXHJcbiAgICBjaGVja2VyKHsgdHlwZXNjcmlwdDogdHJ1ZSwgZXNsaW50OiB7IGxpbnRDb21tYW5kOiBzY3JpcHRzLmxpbnQgfSB9KSxcclxuICBdLFxyXG5cclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyOiAnLi4vLi4vZGlzdC9hcHBzL2Zyb250ZW5kJyxcclxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiB0cnVlLFxyXG4gICAgY29tbW9uanNPcHRpb25zOiB7XHJcbiAgICAgIHRyYW5zZm9ybU1peGVkRXNNb2R1bGVzOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICB0ZXN0OiB7XHJcbiAgICBnbG9iYWxzOiB0cnVlLFxyXG4gICAgY2FjaGU6IHtcclxuICAgICAgZGlyOiAnLi4vLi4vbm9kZV9tb2R1bGVzLy52aXRlc3QnLFxyXG4gICAgfSxcclxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gICAgaW5jbHVkZTogWydzcmMvKiovKi57dGVzdCxzcGVjfS57anMsbWpzLGNqcyx0cyxtdHMsY3RzLGpzeCx0c3h9J10sXHJcblxyXG4gICAgcmVwb3J0ZXJzOiBbJ2RlZmF1bHQnXSxcclxuICAgIGNvdmVyYWdlOiB7XHJcbiAgICAgIHJlcG9ydHNEaXJlY3Rvcnk6ICcuLi8uLi9jb3ZlcmFnZS9hcHBzL2Zyb250ZW5kJyxcclxuICAgICAgcHJvdmlkZXI6ICd2OCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iLCAie1xyXG4gIFwidHlwZVwiOiBcIm1vZHVsZVwiLFxyXG4gIFwibmFtZVwiOiBcImZyb250ZW5kXCIsXHJcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4xLjBcIixcclxuICBcInByaXZhdGVcIjogdHJ1ZSxcclxuICBcImRlcGVuZGVuY2llc1wiOiB7fSxcclxuICBcImVuZ2luZXNcIjoge1xyXG4gICAgXCJub2RlXCI6IFwiMTYuMTMuMFwiLFxyXG4gICAgXCJucG1cIjogXCI4LjEuMFwiXHJcbiAgfSxcclxuICBcInNjcmlwdHNcIjoge1xyXG4gICAgXCJzZXJ2ZVwiOiBcInZpdGVcIixcclxuICAgIFwiYnVpbGRcIjogXCJ2aXRlIGJ1aWxkXCIsXHJcbiAgICBcInRlc3RcIjogXCJ2aXRlc3QgcnVuXCIsXHJcbiAgICBcImxpbnRcIjogXCJlc2xpbnQgc3JjLyoqLyoue2pzLGpzeCx0cyx0c3gsanNvbn1cIlxyXG4gIH0sXHJcbiAgXCJicm93c2Vyc2xpc3RcIjoge1xyXG4gICAgXCJwcm9kdWN0aW9uXCI6IFtcclxuICAgICAgXCI+MC4yJVwiLFxyXG4gICAgICBcIm5vdCBkZWFkXCIsXHJcbiAgICAgIFwibm90IG9wX21pbmkgYWxsXCJcclxuICAgIF0sXHJcbiAgICBcImRldmVsb3BtZW50XCI6IFtcclxuICAgICAgXCJsYXN0IDEgY2hyb21lIHZlcnNpb25cIixcclxuICAgICAgXCJsYXN0IDEgZmlyZWZveCB2ZXJzaW9uXCIsXHJcbiAgICAgIFwibGFzdCAxIHNhZmFyaSB2ZXJzaW9uXCJcclxuICAgIF1cclxuICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMscUJBQXFCO0FBQzlCLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGFBQWE7OztBQ01sQixjQUFXO0FBQUEsRUFDVCxPQUFTO0FBQUEsRUFDVCxPQUFTO0FBQUEsRUFDVCxNQUFRO0FBQUEsRUFDUixNQUFRO0FBQ1Y7OztBRGZGLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUVWLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLElBQ2QsUUFBUSxFQUFFLFlBQVksTUFBTSxRQUFRLEVBQUUsYUFBYSxRQUFRLEtBQUssRUFBRSxDQUFDO0FBQUEsRUFDckU7QUFBQSxFQUVBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLHNCQUFzQjtBQUFBLElBQ3RCLGlCQUFpQjtBQUFBLE1BQ2YseUJBQXlCO0FBQUEsSUFDM0I7QUFBQSxFQUNGO0FBQUEsRUFFQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0EsYUFBYTtBQUFBLElBQ2IsU0FBUyxDQUFDLHNEQUFzRDtBQUFBLElBRWhFLFdBQVcsQ0FBQyxTQUFTO0FBQUEsSUFDckIsVUFBVTtBQUFBLE1BQ1Isa0JBQWtCO0FBQUEsTUFDbEIsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K