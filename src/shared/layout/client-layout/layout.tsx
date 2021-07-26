/* This example requires Tailwind CSS v2.0+ */
import { Fragment, Suspense } from "react";
import { TopNav } from "./components/topnav";
// import { Route } from "react-router-dom";
import { ContextLoader } from "../../loaders";
import { RouteProp } from "./navigation/types";
import { routes } from "./navigation";
import PrivateRoute from "../../../services/adapters/protectedRoutes";

export default function AppLayout() {
  return (
    <Fragment>
      {/* top nav bar */}
      <div className="top-0 sticky overscroll-none">
        <TopNav />
      </div>
      <div className="min-h-screen bg-gray-100">
        <div className="py-0">
          <Suspense fallback={ContextLoader()}>
            {routes.map((route: RouteProp, i: number) => {
              return (
                <Fragment key={i}>
                  <PrivateRoute
                    path={route.path}
                    component={route.component as any}
                    exact={route.exact}
                  />
                </Fragment>
              );
            })}
          </Suspense>
        </div>
      </div>
    </Fragment>
  );
}
