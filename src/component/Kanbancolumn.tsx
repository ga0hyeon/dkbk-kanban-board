import React from "react";

export interface KanbancolumnProps {
  title?: string;
  desc?: string;
}

const Kanbancolumn: React.FC<KanbancolumnProps> = ({
  title,
  desc,
  children,
}) => {
  return (
    <div id="Kanbancolumn">
      {title && <div className="title">{title}</div>}
      {desc && <div className="desc">{desc}</div>}
      {children && <div className="column-content-wrapper">{children}</div>}
    </div>
  );
};

export default Kanbancolumn;
