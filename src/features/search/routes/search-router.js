import { createBrowserRouter } from "react-router-dom";

import { SearchQueryPage } from "features/search/pages/search-query";

const searchRouter = createBrowserRouter([
  {
    path: "/",
    element: <SearchQueryPage />,
  },
]);

export default searchRouter;