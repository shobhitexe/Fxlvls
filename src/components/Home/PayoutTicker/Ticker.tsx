"use client";

// import useResizeObserver from "@react-hook/resize-observer";
import React, {
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type TickerProps = PropsWithChildren<{
  duration: KeyframeAnimationOptions["duration"];
  easing?: KeyframeAnimationOptions["easing"];
  delay?: KeyframeAnimationOptions["delay"];
  reverse?: boolean;
}>;

export const HorizontalTicker: React.FC<TickerProps> = ({
  children,
  duration,
  easing,
  delay,
  reverse = false,
}) => {
  const track1 = useRef<HTMLDivElement>(null);
  const track2 = useRef<HTMLDivElement>(null);
  const options = useMemo<KeyframeAnimationOptions>(
    () => ({
      duration,
      easing,
      delay,
      iterations: 1,
      fill: "forwards",
      direction: reverse ? "reverse" : "normal",
    }),
    [duration, easing, delay, reverse]
  );

  const { width: trackWidth } = useElementSize(track1);

  useEffect(() => {
    if (!trackWidth || !track1.current || !track2.current) {
      return;
    }

    const width = trackWidth;
    const track1El = track1.current;
    const track2El = track2.current;
    const controller = new AbortController();

    async function toggle(): Promise<void> {
      const zeroToMinusOne = [
        { transform: "translateX(0px)" },
        { transform: `translateX(${-1 * width}px)` },
      ];

      const oneToZero = [
        { transform: `translateX(${width}px)` },
        { transform: `translateX(${0}px)` },
      ];

      const minusOneToMinusTwo = [
        { transform: `translateX(${-1 * width}px)` },
        { transform: `translateX(${-2 * width}px)` },
      ];

      const promise1 = animate(
        track1El,
        zeroToMinusOne,
        options,
        controller.signal
      ).then(() => animate(track1El, oneToZero, options, controller.signal));

      const promise2 = animate(
        track2El,
        zeroToMinusOne,
        options,
        controller.signal
      ).then(() =>
        animate(track2El, minusOneToMinusTwo, options, controller.signal)
      );

      return Promise.all([promise1, promise2]).then(() => toggle());
    }

    toggle();

    return () => {
      controller.abort();
    };
  }, [trackWidth, options]);

  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexWrap: "nowrap",
        width: "100%",
      }}
    >
      <div
        ref={track1}
        style={{
          display: "flex",
        }}
      >
        {children}
      </div>
      <div
        ref={track2}
        style={{
          display: "flex",
        }}
      >
        {children}
      </div>
    </div>
  );
};

function animate(
  element: HTMLElement,
  keyframes: Keyframe[],
  options: KeyframeAnimationOptions,
  signal: AbortSignal
): Promise<void> {
  return new Promise((resolve) => {
    const animation = element.animate(keyframes, options);

    const onAbort = () => {
      animation.cancel();
    };

    const onFinish = () => {
      signal.removeEventListener("abort", onAbort);
      animation.removeEventListener("finish", onFinish);
      resolve();
    };

    signal.addEventListener("abort", onAbort);
    animation.addEventListener("finish", onFinish);
  });
}

type ElementSize = {
  width: number | undefined;
  height: number | undefined;
};

function useElementSize(
  element: React.RefObject<HTMLDivElement | null>
): ElementSize {
  const [size, setSize] = useState<ElementSize>({
    width: undefined,
    height: undefined,
  });

  useLayoutEffect(() => {
    if (!element.current) return;

    if (element.current) {
      const { width, height } = element.current.getBoundingClientRect();
      setSize({ width, height });
    }
  }, [element]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (element.current) {
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect;
          setSize({ width, height });
        }
      });
      observer.observe(element.current);

      return () => observer.disconnect();
    }
  }, [element]);
  return size;
}
