import logo from "@/assets/sbuforce-logo.png";
import { company } from "@/lib/company";

// Full-site maintenance screen. Rendered by the root route in place of <Outlet />
// when VITE_MAINTENANCE_MODE="true" — see src/routes/__root.tsx. Keep this
// component self-contained (no router/query dependencies) so it can render
// before any route-specific code runs.
export function Maintenance() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary px-6 text-center text-primary-foreground">
      <img
        src={logo}
        alt={`${company.name} winged shield logo`}
        width={64}
        height={54}
        className="h-14 w-auto"
      />
      <span className="gold-rule mt-8" />
      <h1 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">
        Website Temporarily Unavailable
      </h1>
      <p className="mt-4 max-w-md text-base text-primary-foreground/70">
        This website is currently undergoing maintenance.
        <br />
        Please check back soon.
      </p>
    </div>
  );
}
