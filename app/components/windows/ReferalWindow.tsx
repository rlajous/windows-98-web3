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
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      alert("Referral link copied to clipboard!"); // You can replace this with a better UI feedback
    } catch (error) {
      console.error("Failed to copy to clipboard: ", error);
    }
  };

  return (
    <div className="w-full p-4 space-y-4">
      <section>
        <label htmlFor="referralLink" className="block mb-1 font-bold">
          Your Referral Link:
        </label>
        <div className="flex flex-col sm:flex-row">
          <input
            type="text"
            id="referralLink"
            value={referralLink}
            readOnly
            className="flex-grow px-2 py-1 bg-white border border-gray-600 shadow-inner focus:outline-none"
          />
          <Windows98Button
            onClick={copyToClipboard}
            className="mt-2 sm:mt-0 sm:ml-2 flex items-center"
            aria-label="Copy referral link to clipboard"
          >
            <Copy size={16} />
            <span className="ml-1">Copy</span>
          </Windows98Button>
        </div>
      </section>

      <section className="space-y-2">
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
      </section>

      <section className="bg-white border border-gray-600 shadow-inner p-2">
        <p className="text-sm">
          Share your referral link with friends and earn{" "}
          {projectInfo.referralReward} {projectInfo.tokenSymbol} for each
          successful referral!
        </p>
      </section>

      <div className="flex justify-end space-x-2">
        <Windows98Button onClick={onClose}>OK</Windows98Button>
      </div>
    </div>
  );
};
