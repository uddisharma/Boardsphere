"use client";
import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/loading";
import { useTheme } from "next-themes";
import { useEffect } from "react";
interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("white");
  }, []);
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;
