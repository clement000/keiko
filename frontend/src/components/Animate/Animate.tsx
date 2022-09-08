import styles from "./Animate.module.css"

export const Animate =
  <P extends object>(animation: "tada" | "wobble") =>
  (BaseComponent: React.ComponentType<P>) =>
    function AnimatedComponent(props: P) {
      return (
        <div
          className={
            animation == "tada"
              ? styles.tadaAnimation
              : animation == "wobble"
              ? styles.wobbleAnimation
              : styles.noAnimation
          }
        >
          <BaseComponent {...props}></BaseComponent>
        </div>
      )
    }
