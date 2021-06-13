import React, { useContext, useEffect, useRef } from "react";
import { CSSTransition as ReactCSSTransition } from "react-transition-group";
import { TransitionContextProps, TransitionProps } from "./types";

const TransitionContext = React.createContext<Partial<TransitionContextProps>>({
  parent: {
    show: false,
    isInitialRender: true,
  },
});

function useIsInitialRender() {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

type CSSTransitionProps = TransitionProps;

function CSSTransition({
  show,
  enter = "",
  enterFrom = "",
  enterTo = "",
  leave = "",
  leaveFrom = "",
  leaveTo = "",
  appear,
  children,
}: CSSTransitionProps) {
  const enterClasses = enter.split(" ").filter((s) => s.length);
  const enterFromClasses = enterFrom.split(" ").filter((s) => s.length);
  const enterToClasses = enterTo.split(" ").filter((s) => s.length);
  const leaveClasses = leave.split(" ").filter((s) => s.length);
  const leaveFromClasses = leaveFrom.split(" ").filter((s) => s.length);
  const leaveToClasses = leaveTo.split(" ").filter((s) => s.length);

  function addClasses(node: HTMLElement, classes: string[]) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node: HTMLElement, classes: string[]) {
    classes.length && node.classList.remove(...classes);
  }

  return (
    <ReactCSSTransition
      appear={appear}
      unmountOnExit
      in={show}
      addEndListener={(node: any, done: any) => {
        node.addEventListener("transitionend", done, false);
      }}
      onEnter={(node: any) => {
        addClasses(node, [...enterClasses, ...enterFromClasses]);
      }}
      onEntering={(node: any) => {
        removeClasses(node, enterFromClasses);
        addClasses(node, enterToClasses);
      }}
      onEntered={(node: any) => {
        removeClasses(node, [...enterToClasses, ...enterClasses]);
      }}
      onExit={(node: any) => {
        addClasses(node, [...leaveClasses, ...leaveFromClasses]);
      }}
      onExiting={(node: any) => {
        removeClasses(node, leaveFromClasses);
        addClasses(node, leaveToClasses);
      }}
      onExited={(node: any) => {
        removeClasses(node, [...leaveToClasses, ...leaveClasses]);
      }}
    >
      {children}
    </ReactCSSTransition>
  );
}

function Transition({ show, appear, ...rest }: TransitionProps) {
  const { parent } = useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return (
      <CSSTransition
        appear={parent ? parent.appear || !parent.isInitialRender : false}
        show={parent?.show ? parent.show : false}
        {...rest}
      />
    );
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  );
}

export default Transition;
