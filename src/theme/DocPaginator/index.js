import React from "react";
import OriginalDocPaginator from "@theme-original/DocPaginator";

export default function DocPaginator(props) {
  return (
    <div className="pg-gradient">
      <OriginalDocPaginator {...props} />
    </div>
  );
}