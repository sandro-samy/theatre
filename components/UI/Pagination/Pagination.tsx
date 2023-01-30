import { url } from "inspector";
import { useRouter } from "next/router";
import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";

const Pagination = ({
  currentPage,
  pages,
}: {
  currentPage: number;
  pages: number;
}) => {
  let pagesArray = [];
  const router = useRouter();

  for (let i = 1; i <= pages; i++) {
    pagesArray.push(i);
  }

  const { width } = useWindowSize();
  const limit = width && width < 768 ? 7 : 10;

  let start = currentPage - Math.floor((limit - 2) / 2);
  let end = currentPage + Math.floor((limit - 2) / 2);

  if (currentPage > 2 && currentPage < pages - 2) {
    pagesArray = [
      ...pagesArray.slice(start >= 1 ? start : 0, end <= pages ? end : pages),
    ];
  } else if (currentPage <= 2) {
    pagesArray = pagesArray.slice(start >= 1 ? start : 1, limit - currentPage);
  } else if (currentPage >= pages - 2) {
    pagesArray = pagesArray.slice(pages - (limit - 1), pages);
  }

  const routerHandler = (page: number = 1) => {
    let query = router.query || { page: page.toString() };
    if (page > 1) {
      query.page = page.toString();
    } else {
      delete query.page;
    }

    router.push({
      pathname: router.pathname,
      query,
    });
  };

  return (
    <>
      {pages > 1 ? (
        <div className="w-100 flex justify-center items-center p-5 mb-5">
          <div className="flex justify-center items-center gap-2">
            {!pagesArray.includes(1) ? (
              <>
                <button
                  className={`backdrop-blur p-5 ${
                    currentPage === 1
                      ? "bg-white text-black"
                      : "bg-white/10 text-white"
                  } relative rounded-md ${
                    !pagesArray.includes(1) ? "mr-2" : "mr-0"
                  } hover:scale-110 transition-transform duration-100 ease-in hover:drop-shadow-lg`}
                  onClick={() => routerHandler(1)}
                >
                  <span className="absolute inset-0 flex justify-center items-center text-xl">
                    1
                  </span>
                </button>
              </>
            ) : null}
            {pagesArray.map((page) => (
              <button
                className={`backdrop-blur p-5 ${
                  currentPage === page
                    ? "bg-white text-black"
                    : "bg-white/10 text-white"
                } relative rounded-md hover:scale-110 transition-transform duration-100 ease-in hover:drop-shadow-lg`}
                key={"page " + page}
                onClick={() => routerHandler(page)}
              >
                <span className="absolute inset-0 flex justify-center items-center text-xl">
                  {page}
                </span>
              </button>
            ))}
            {!pagesArray.includes(pages) ? (
              <>
                <button
                  className={`backdrop-blur p-5 ${
                    currentPage === pages
                      ? "bg-white text-black"
                      : "bg-white/10 text-white"
                  } relative rounded-md ${
                    !pagesArray.includes(pages) ? "ml-2" : "ml-0"
                  } hover:scale-110 transition-transform duration-100 ease-in hover:drop-shadow-lg`}
                  onClick={() => routerHandler(pages)}
                >
                  <span className="absolute inset-0 flex justify-center items-center text-xl">
                    {pages}
                  </span>
                </button>
              </>
            ) : null}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Pagination;
