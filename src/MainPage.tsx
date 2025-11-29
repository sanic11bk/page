import "./App.css";
import { Footer } from "./ui/Footer";
import { Header } from "./ui/Header";
import { PageTitle } from "./ui/PageTitle";
import { SidebarMenu } from "./ui/SidebarMenu";
import { TrackDetail } from "./ui/TrackDetail";
import { TrackList } from "./ui/TrackList";
import { useTrackSelection } from "./bll/useTrackSelection";

export function MainPage() {
  const { trackId, setTrackId } = useTrackSelection();

  const handleTrackSelect = (id: string | null): void => {
    setTrackId(id);
  };

  return (
    <div>
      <Header />
      <SidebarMenu />
      <PageTitle />
      <div style={{ display: "flex", gap: "40px" }}>
        <TrackList
          onTrackSelect={handleTrackSelect}
          selectedTrackId={trackId}
        />
        <TrackDetail trackId={trackId} />
      </div>
      <Footer />
    </div>
  );
}
