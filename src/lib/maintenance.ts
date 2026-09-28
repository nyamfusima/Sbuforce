// Single source of truth for the maintenance-mode flag. Read by the root
// route (to swap in the Maintenance screen instead of <Outlet />) and by
// route-level head() functions (to skip emitting full site metadata/JSON-LD
// while it's on). Toggle via VITE_MAINTENANCE_MODE in the environment, then
// redeploy/restart so the build picks up the new value.
export const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === "true";
