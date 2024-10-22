interface ImportMetaEnv {
    readonly VITE_API_URL: string; // Add your custom variables here
    // Add more environment variables as needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}