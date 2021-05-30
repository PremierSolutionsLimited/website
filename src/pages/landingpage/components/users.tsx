import { Fragment } from "react";
import HeaderSvg from "../../../components/svgs/header";

const UsersComponent = () => {
  return (
    <Fragment>
      <div className="bg-white">
        <div className="-mt-20">
          <HeaderSvg />
        </div>
        <div className="mx-auto sm:mt-6 md:-mt-24 pb-10 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pb-20">
          <div className="space-y-12">
            <div className="space-y-5  sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl mt-10 sm:mt-10 md:mt-0 text-center font-extrabold tracking-tight sm:text-4xl">
                Who can use Hire a Driver?
              </h2>
              <p className="text-xl text-center pb-12 text-gray-500">
                Every can use;
              </p>
            </div>
            <ul className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
              <li>
                <div className="space-y-4">
                  <div className="aspect-w-3 relative aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src="https://images.unsplash.com/photo-1604261155087-6872de077de9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljaWFufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 text-amber-900 font-medium space-y-1">
                      <h3>Musicians</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src="https://images.unsplash.com/photo-1522648485144-849409408aee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d3JpdGVyfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg leading-6 text-amber-900  font-medium space-y-1">
                      <h3>Writers</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src="https://images.unsplash.com/photo-1543347150-cc060bd84845?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBob3RvZ3JhcGhlcnN8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      alt=""
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 text-amber-900  font-medium space-y-1">
                      <h3>Photographers</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="object-cover shadow-lg rounded-lg"
                      src="https://images.unsplash.com/photo-1549499090-5fa12865059c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
                      alt=""
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 text-amber-900  font-medium space-y-1">
                      <h3>Artists</h3>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UsersComponent;
