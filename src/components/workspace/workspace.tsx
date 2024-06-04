import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import WorkspaceHome from "./workspace-home/workspace-home";
import WorkspaceNotFound from "./workspace-not-found/worksapce-not-found";
import WorkspaceService from "./workspace-service/workspace-service";
import WorkspaceCertificates from "./workspace-certificates/workspace-certificates";
import WorkspacePrice from "./workspace-price/workspace-price";
import WorkspaceGalery from "./workspace-galery/workspace-galery";

const Workspace = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<WorkspaceHome />} />
          <Route path="/service" element={<WorkspaceService />} />
          <Route path="/certificates" element={<WorkspaceCertificates />} />
          <Route path="/price" element={<WorkspacePrice />} />
          <Route path="/galery" element={<WorkspaceGalery />} />
          <Route path="*" element={<WorkspaceNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Workspace;
