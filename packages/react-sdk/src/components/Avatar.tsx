import Blockies from "react-18-blockies";

export type AvatarProps = {
  /**
   * Are we waiting on an avatar url?
   */
  isLoading?: boolean;
  /**
   * What, if any, avatar url is there?
   */
  url?: string;
  /**
   * What is the address associated with this avatar?
   */
  address?: string;
};

export const Avatar: React.FC<AvatarProps> = ({ url, isLoading, address }) => {
  if (isLoading) {
    return (
      <div className="animate-pulse flex">
        <div className="rounded-full bg-gray-200 h-10 w-10" />
      </div>
    );
  }

  if (url) {
    return (
      <div>
        <div className="w-10 h-10 rounded-full border border-n-80" />
        <img
          className="w-10 h-10 rounded-full z-10 -mt-10"
          src={url}
          alt={address}
        />
      </div>
    );
  }

  return (
    <div data-testid="avatar">
      <Blockies
        seed={address || ""}
        scale={5}
        size={8}
        className="rounded-full"
      />
    </div>
  );
};
