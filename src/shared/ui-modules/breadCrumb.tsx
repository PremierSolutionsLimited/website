import { ChevronRightIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

export interface BreadCrumbProp {
  name: string;
  href: string;
}
interface Props {
  pages: BreadCrumbProp[];
}

export const BreadCrumb: FC<Props> = ({ pages }) => {
  const { pathname } = useLocation();

  return (
    <div className="w-full   py-4 px-4">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-4">
          <li>
            <div>
              <Link to="/" className="text-gray-600 hover:text-gray-700">
                <HomeIcon
                  className="flex-shrink-0 h-5 w-5"
                  aria-hidden="true"
                />
                <span className="sr-only">Home</span>
              </Link>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name}>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <Link
                  to={page.href}
                  className="ml-4 text-xl font-medium text-gray-600 hover:text-gray-700"
                  aria-current={pathname === page.href ? "page" : undefined}
                >
                  {page?.name}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};
