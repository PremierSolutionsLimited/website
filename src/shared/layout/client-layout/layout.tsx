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
        <div className={"flex flex-col bottom-6 absolute items-center w-full"}>
          <span className="mt-1 text-xs text-center font-light text-gray-400">
            All Rights Reserved Copyright &copy; {new Date()?.getFullYear()}
          </span>
          <i className="mt-2 text-xs text-center font-light sm:text-sm md:text-base text-gray-700">
            Powered by Polymorph Labs Ghana Limited
          </i>
        </div>
      </div>
    </Fragment>
  );
}
