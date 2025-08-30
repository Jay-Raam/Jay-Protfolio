import SongCard from "./SongCard";
import { moreSongs, SongProps } from "./songDetails";
import "../animations/animate.css";

const SongCarousel2 = () => {
  return (
    <div className="animate-reverse absolute mt-60 -bottom-15 flex w-[1100%] border-[1px] border-[#0E1016] sm:w-[680%] md:w-[710%] lg:w-[600%] xl:w-[400%]">
      <div className="mx-auto flex w-[50%] justify-around gap-1 lg:my-[1px]">
        {moreSongs.map((song: SongProps, index) => (
          <SongCard
            key={index}
            title={song.title}
            artist={song.artist}
            image={song.image}
            link={song.link}
          />
        ))}
      </div>
      <div className="mx-auto flex w-[50%] justify-around gap-1 lg:my-[1px]">
        {moreSongs.map((song: SongProps, index) => (
          <SongCard
            key={index}
            title={song.title}
            artist={song.artist}
            image={song.image}
            link={song.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SongCarousel2;
