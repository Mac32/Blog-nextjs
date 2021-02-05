import React from "react";
import loadable from '@loadable/component'

const SectionPost = loadable(() => import ('./SectionPost'))

export default function Section() {
  return (
      <SectionPost />
  );
}
