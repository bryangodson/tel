import React from "react";
import GridRow from "./grid_row";
import GridCol from "./grid_col";
interface masonryChunkProps {
  masonryChunk: Array<{ image: string; index: number }>;
}

export default function MasonryGrid({ masonryChunk }: masonryChunkProps) {
  const rowChunks = [masonryChunk.slice(0, 2), masonryChunk.slice(5)];

  const colChunks = masonryChunk.slice(2, 5);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 md:gap-4 w-full h-auto my-4 mt-10">
      {/* first column */}
      <GridRow GridRowSubChunk={rowChunks[0]} />

      {/* middle column */}
      {colChunks.map(({ image, index }, colChunksIndex) => (
        <GridCol
          image={image}
          index={index}
          key={colChunksIndex}
          isFifthItem={colChunksIndex == 2}
        />
      ))}
      {/* last column */}
      <GridRow GridRowSubChunk={rowChunks[1]} isFifthItem />
    </div>
  );
}
