import { ReactNode, useState } from "react";
import styles from "./textBlock.module.scss";

interface TextBlockProps {
  children: ReactNode;
  isComplete: boolean;
  isDate?: boolean;
}

const TextBlock = ({
  children,
  isComplete,
  isDate = false,
}: TextBlockProps) => {
  const isTextBlockComplete = isComplete ? styles.textBlock__complete : "";
  const isTextBlockDate = isDate ? styles.textBlock__date : styles.textBlock;

  return (
    <p className={`${isTextBlockDate} ${isTextBlockComplete}`}>{children}</p>
  );
};

export default TextBlock;
