declare module '*build' {
  const sb: import('@remix-run/server-runtime').ServerBuild
  export const assets: typeof sb.assets
  export const entry: typeof sb.entry
  export const routes: typeof sb.routes
}
