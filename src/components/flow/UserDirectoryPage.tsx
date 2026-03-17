import { FlowCover } from "./FlowCover";
import { MainWrapper } from "./MainWrapper";

export function UserDirectoryPage() {
  return (
    <div className="flex min-h-screen flex-col items-center overflow-x-auto">
      <FlowCover />
      <div className="flex w-full justify-center p-6">
        <MainWrapper />
      </div>
    </div>
  );
}
