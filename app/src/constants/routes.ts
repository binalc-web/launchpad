export const ROUTES = {
  DASHBOARD: "/",
  CORPORATION_DIRECTORY: "/corporation-directory",
  COMPANY_DIRECTORY: "/company-directory",
  COMPANY_DETAILS: (id: string) => `/company-directory/${id}`,
} as const
