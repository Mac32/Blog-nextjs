import React from "react";
import dynamic from 'next/dynamic'

const SectionPost = dynamic(import ('./SectionPost'))

export default function Section() {
  return (
      <SectionPost />
  );
}
