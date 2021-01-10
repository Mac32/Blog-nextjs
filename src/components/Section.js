import React from "react";
import SectionProject from "./SectionProject";
import SectionPost from "./SectionPost";
import SectionSkills from "./SectionSkills";

export default function Section() {
    return (
      <div>
        <SectionPost />
	<SectionProject />
        <SectionSkills />
      </div>
    );
}
