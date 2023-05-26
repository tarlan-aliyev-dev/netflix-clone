import React from 'react';
import { useRouter } from 'next/router';
import { FaPlay } from 'react-icons/fa';

interface PlayButtonProps {
  id: any;
}

const PlayButton: React.FC<PlayButtonProps> = ({ id }) => {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push(`/watch/${id}`)}
      className="
      text-black
        bg-white 
        rounded-md 
        py-1 md:py-2 
        px-2 md:px-4
        w-auto 
        text-xs lg:text-lg 
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-neutral-300
        transition
        "
      >
        <FaPlay className="w-4 md:w-7 text-black mr-1" />
        Play
    </button>
  );
}

export default PlayButton;