import React from "react";

export interface KanbanboardProps {
  title?: string;
  desc?: string;
}

export const Kanbanboard: React.FC<KanbanboardProps> = ({
  title,
  desc,
  children,
}) => {
  return (
    <div id="Kanbanboard">
      {title && <div className="title">{title}</div>}
      {desc && <div className="desc">{desc}</div>}
      {children && <div className="board-contents-wrapper">{children}</div>}
    </div>
  );
};
