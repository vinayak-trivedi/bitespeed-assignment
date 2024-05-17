import { DragEvent } from "react";

export type node = {
  icon: string;
  node: string;
  onDragStart: (event: DragEvent<HTMLDivElement>, nodeType: string, content: string) => void;
}