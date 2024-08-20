import { Navigate, Route, Routes } from "react-router-dom";
import WorkspaceHome from "./workspace-home/workspace-home";
import WorkspaceNotFound from "./workspace-not-found/worksapce-not-found";
import WorkspaceService from "./workspace-service/workspace-service";
import WorkspaceCertificates from "./workspace-certificates/workspace-certificates";
import WorkspaceGallery from "./workspace-galery/workspace-gallery";
import WorkspaceSchedule from "./workspace-schedule/workspace-schedule";

const Workspace = (): React.JSX.Element => {
  return (
    <Routes>
      <Route>
        {/* <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<WorkspaceHome />} />
        <Route path="/service" element={<WorkspaceService />} />
        <Route path="/certificates" element={<WorkspaceCertificates />} />
        <Route path="/schedule" element={<WorkspaceSchedule />} />
        <Route path="/gallery" element={<WorkspaceGallery />} />
        <Route path="*" element={<WorkspaceNotFound />} /> */}
        <Route path="/" element={<WorkspaceNotFound />} />
        <Route path="/home" element={<WorkspaceNotFound />} />
        <Route path="/service" element={<WorkspaceNotFound />} />
        <Route path="/certificates" element={<WorkspaceNotFound />} />
        <Route path="/schedule" element={<WorkspaceNotFound />} />
        <Route path="/gallery" element={<WorkspaceNotFound />} />
        <Route path="*" element={<WorkspaceNotFound />} />
      </Route>
    </Routes>
  );
};

export default Workspace;
