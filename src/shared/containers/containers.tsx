import { ReactNode } from "react";
import styles from "./containers.module.scss";

interface ContainerProps {
  children: ReactNode;
}

export const SceneContainer = ({ children }: ContainerProps) => {
  return (
    <div className={styles.sceneContainer}>
      <section className={styles.scene}>{children}</section>
    </div>
  );
};

export const BaseContainer = ({ children }: ContainerProps) => {
  return <div className={styles.baseContainer}>{children}</div>;
};

export const UIContainer = ({ children }: ContainerProps) => {
  return <div className={styles.uiContainer}>{children}</div>;
};

export const TextContainer = ({ children }: ContainerProps) => {
  return <div className={styles.textContainer}>{children}</div>;
};

export const ImageContainer = ({ children }: ContainerProps) => {
  return <div className={styles.imageContainer}>{children}</div>;
};
