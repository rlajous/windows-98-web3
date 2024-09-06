import { Windows98Button } from "@/components/Windows98/Windows98Button";
import { ProjectInfo } from "fuul-sdk";
import { Copy } from "lucide-react";

export const ReferralWindow =
  (referralLink: string, projectInfo: ProjectInfo) =>
  (id: number, onClose: (id: number) => void) => ({
    title: "Referral Program",
    component: (
      <ReferralWindowComponent
        onClose={() => onClose(id)}
        referralLink={referralLink}
        projectInfo={projectInfo}
      />
    ),
  });

const ReferralWindowComponent = ({
  onClose,
  referralLink,
  projectInfo,
}: {
  onClose: () => void;
  referralLink: string;
  projectInfo: ProjectInfo;
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
  };

  return (
    <div className="w-full ">
      <div className="p-4 space-y-4">
        <div>
          <label htmlFor="referralLink" className="block mb-1 text-sm">
            Your Referral Link:
          </label>
          <div className="flex">
            <input
              type="text"
              id="referralLink"
              value={referralLink}
              readOnly
              className="flex-grow px-2 py-1 bg-white border-[1px] border-gray-600 shadow-[inset_1px_1px_#888,_inset_-1px_-1px_#dfdfdf] focus:outline-none"
            />
            <Windows98Button
              onClick={copyToClipboard}
              className="ml-2 flex items-center"
            >
              <Copy size={16} />
              <span className="ml-1">Copy</span>
            </Windows98Button>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold">Project Info:</h3>
          <p>
            <span className="font-bold">Name:</span> {projectInfo.name}
          </p>
          <p>
            <span className="font-bold">Public API Key:</span>{" "}
            {projectInfo.publicApiKey}
          </p>
          <p>
            <span className="font-bold">Referral Reward:</span>{" "}
            {projectInfo.referralReward} {projectInfo.tokenSymbol}
          </p>
        </div>
        <div className="bg-white border-[1px] border-gray-600 shadow-[inset_1px_1px_#888,_inset_-1px_-1px_#dfdfdf] p-2">
          <p className="text-sm">
            Share your referral link with friends and earn{" "}
            {projectInfo.referralReward} {projectInfo.tokenSymbol} for each
            successful referral!
          </p>
        </div>
      </div>
      <div className="flex justify-end space-x-2 p-4">
        <Windows98Button onClick={onClose}>OK</Windows98Button>
      </div>
    </div>
  );
};
