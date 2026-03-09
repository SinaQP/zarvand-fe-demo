/// <reference types="vite/client" />

interface ImportMetaEnv {
   readonly VITE_DEMO_MODE?: string;
   readonly VITE_APP_BACKEND?: string;
   readonly VITE_APP_SUPPORT_NUMBER?: string;
}

interface ImportMeta {
   readonly env: ImportMetaEnv;
}
