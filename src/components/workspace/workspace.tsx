import { Navigate, Route, Routes } from "react-router-dom";
import WorkspaceHome from "./workspace-home/workspace-home";
import WorkspaceNotFound from "./workspace-not-found/worksapce-not-found";
import WorkspaceService from "./workspace-service/workspace-service";
import WorkspaceCertificates from "./workspace-certificates/workspace-certificates";
import WorkspacePrice from "./workspace-price/workspace-price";
import WorkspaceGallery from "./workspace-galery/workspace-gallery";
import WorkspaceSchedule from "./workspace-schedule/workspace-schedule";

const Workspace = (): React.JSX.Element => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<WorkspaceHome />} />
        <Route path="/service" element={<WorkspaceService />} />
        <Route path="/certificates" element={<WorkspaceCertificates />} />
        <Route path="/schedule" element={<WorkspaceSchedule />} />
        <Route path="/price" element={<WorkspacePrice />} />
        <Route path="/gallery" element={<WorkspaceGallery />} />
        <Route path="*" element={<WorkspaceNotFound />} />
      </Route>
    </Routes>
  );
};

export default Workspace;
