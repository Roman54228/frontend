'use client';

import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

export const BackgroundGradientAnimation = ({
  firstColor = '249, 115, 22', // orange-500
  secondColor = '251, 146, 60', // orange-400
  thirdColor = '253, 186, 116', // orange-300
  fourthColor = '254, 215, 170', // orange-200
  fifthColor = '249, 115, 22', // orange-500
  pointerColor = '234, 88, 12', // orange-600
  size = '80%',
  blendingValue = 'hard-light',
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  // Use refs to store animation values instead of state
  const curXRef = useRef(0);
  const curYRef = useRef(0);
  const tgXRef = useRef(0);
  const tgYRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  const [isSafari, setIsSafari] = useState(false);

  // Set up gradient background colors - white theme
  const gradientBackgroundStart = '#ffffff';
  const gradientBackgroundEnd = '#fafafa';

  // Set up CSS variables
  useEffect(() => {
    document.body.style.setProperty(
      '--gradient-background-start',
      gradientBackgroundStart,
    );
    document.body.style.setProperty(
      '--gradient-background-end',
      gradientBackgroundEnd,
    );
    document.body.style.setProperty('--first-color', firstColor);
    document.body.style.setProperty('--second-color', secondColor);
    document.body.style.setProperty('--third-color', thirdColor);
    document.body.style.setProperty('--fourth-color', fourthColor);
    document.body.style.setProperty('--fifth-color', fifthColor);
    document.body.style.setProperty('--pointer-color', pointerColor);
    document.body.style.setProperty('--size', size);
    document.body.style.setProperty('--blending-value', blendingValue);
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ]);

  // Set up Safari detection
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  // Set up animation loop
  useEffect(() => {
    if (!interactive) return;

    function animateMovement() {
      if (!interactiveRef.current) {
        animationFrameRef.current = requestAnimationFrame(animateMovement);
        return;
      }

      // Calculate new position with easing
      curXRef.current =
        curXRef.current + (tgXRef.current - curXRef.current) / 20;
      curYRef.current =
        curYRef.current + (tgYRef.current - curYRef.current) / 20;

      // Apply transform directly to DOM element
      interactiveRef.current.style.transform = `translate(${Math.round(curXRef.current)}px, ${Math.round(curYRef.current)}px)`;

      // Continue animation loop
      animationFrameRef.current = requestAnimationFrame(animateMovement);
    }

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animateMovement);

    // Clean up animation loop on unmount
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [interactive]);

  // Handle mouse movement
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;

    const rect = interactiveRef.current.getBoundingClientRect();
    // Update target position directly in ref (no state update)
    tgXRef.current = event.clientX - rect.left;
    tgYRef.current = event.clientY - rect.top;
  };

  return (
    <div
      className={classNames(
        'relative overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]',
        containerClassName,
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={classNames('relative z-10', className)}>{children}</div>
      <div
        className={classNames(
          'gradients-container h-full w-full blur-lg absolute inset-0',
          isSafari ? 'blur-2xl' : '[filter:url(#blurMe)_blur(40px)]',
        )}
      >
        <div
          className={classNames(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--first-color),_0.4)_0,_rgba(var(--first-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`,
          )}
        ></div>
        <div
          className={classNames(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.4)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`,
          )}
        ></div>
        <div
          className={classNames(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.4)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`,
          )}
        ></div>
        <div
          className={classNames(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.4)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`,
          )}
        ></div>
        <div
          className={classNames(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.4)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-100`,
          )}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={classNames(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.5)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-70`,
            )}
          ></div>
        )}
      </div>
    </div>
  );
};


