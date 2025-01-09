import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "../page.module.css";
interface OurProgramsProps {
  title: string;
  description: string;
  icon: StaticImageData;
  background?: string;
}
function OurPrograms({
  icon,
  title,
  description,
  background,
}: OurProgramsProps) {
  return (
    <div
      className={styles.our_programs_component}
      style={{
        background,
      }}>
      <Image src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default OurPrograms;
