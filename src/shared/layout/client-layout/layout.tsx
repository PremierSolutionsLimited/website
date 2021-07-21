/* This example requires Tailwind CSS v2.0+ */
import { Fragment, Suspense } from "react";
import { TopNav } from "./components/topnav";
import { Route } from "react-router-dom";
import { ContextLoader } from "../../loaders";
import { RouteProp } from "./navigation/types";
import { routes } from "./navigation";

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
                  <Route
                    path={route.path}
                    component={route.component as any}
                    exact={route.exact}
                  />
                </Fragment>
              );
            })}
          </Suspense>
          {/* <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
           
              <div className="px-4 py-8 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
              </div>
            
            </div>
          </main> */}
        </div>
      </div>
    </Fragment>
  );
}
