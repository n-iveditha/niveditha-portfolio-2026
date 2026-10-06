import { createPortal } from "react-dom"

type IntroLoaderProps = {
  isExiting: boolean
}

function IntroLoader({ isExiting }: IntroLoaderProps) {
  return createPortal(
    <div
      className={`intro-loader${isExiting ? " is-exiting" : ""}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="intro-loader-content">
        <div className="intro-loader-dots" aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => (
            <span className="intro-loader-dot" key={index} />
          ))}
        </div>
        <p className="intro-loader-name">Niveditha</p>
        <p className="intro-loader-tagline">
          Designing thoughtful digital experiences.
        </p>
      </div>
    </div>,
    document.body,
  )
}

export default IntroLoader
