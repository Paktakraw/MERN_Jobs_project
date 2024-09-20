import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../assets/Pages/Home";
import CreateJob from "../assets/Pages/CreateJob";
import MyJobs from "../assets/Pages/MyJobs";
import SalaryEstimatePage from "../assets/Pages/SalaryEstimatePage";
import UpdateJob from "../assets/Pages/UpdateJob";
import Login from "../components/Login";
import JobDetail from "../assets/Pages/JobDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post-job",
        element: <CreateJob />,
      },
      {
        path: "/my-job",
        element: <MyJobs />,
      },
      {
        path: "/salary",
        element: <SalaryEstimatePage />,
      },
      {
        path: "/edit-job/:id",
        element: <UpdateJob />,
        loader: ({params}) => fetch (`http://localhost:5000/all-jobs/${params.id}`)
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/job/:id",
        element: <JobDetail />,
      },
    ],
  },
]);

export default router;
