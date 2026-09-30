"use client";

import { useEffect, useRef, useState } from "react";

/* The hero trailer: autoplays muted and looping, like the image it replaced.
   Two small controls sit over the bottom-right corner — play/pause (autoplaying
   motion must be pausable) and sound. Turning sound on the first time restarts
   from the top, because the score and the cuts are timed together. */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const heardFromStart = useRef(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onVolume = () => setMuted(v.muted);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("volumechange", onVolume);
    // Respect reduced motion: sit on the poster until the viewer presses play
    // (the pause listener above flips the button state).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) v.pause();
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("volumechange", onVolume);
    };
  }, []);

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    if (!next) {
      if (!heardFromStart.current) {
        heardFromStart.current = true;
        v.currentTime = 0;
      }
      v.play().catch(() => {});
    }
  };

  return (
    <div className="hero-video">
      <video
        ref={ref}
        src="/video/ivy-trailer-v2.mp4"
        poster="/video/ivy-trailer-v2-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        width={1920}
        height={1080}
        aria-label="Ivy trailer: Ivy answering requests in Teams and email for a family office"
      />
      <div className="hero-video__controls">
        <button type="button" onClick={togglePlay} aria-label={playing ? "Pause video" : "Play video"}>
          {playing ? (
            <svg viewBox="0 0 20 20" aria-hidden="true"><rect x="5" y="4" width="3.2" height="12" rx="1" /><rect x="11.8" y="4" width="3.2" height="12" rx="1" /></svg>
          ) : (
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 4.2v11.6a.8.8 0 0 0 1.2.7l9.2-5.8a.8.8 0 0 0 0-1.4L7.2 3.5A.8.8 0 0 0 6 4.2Z" /></svg>
          )}
        </button>
        <button type="button" onClick={toggleSound} aria-label={muted ? "Turn sound on" : "Mute"} aria-pressed={!muted} className="hero-video__sound">
          {muted ? (
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 7.5h3l4-3.5v12l-4-3.5H3z" /><path d="m13 7.5 5 5m0-5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          ) : (
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 7.5h3l4-3.5v12l-4-3.5H3z" /><path d="M13.2 7a4.2 4.2 0 0 1 0 6M15.6 4.8a7.4 7.4 0 0 1 0 10.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          )}
          <span>{muted ? "Sound on" : "Sound off"}</span>
        </button>
      </div>
    </div>
  );
}
