declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_S3_HOST: string;
    NEXT_PUBLIC_ENVIRONMENT: "development" | "production";
  }
}
