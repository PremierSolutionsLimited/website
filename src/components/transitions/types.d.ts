export type TransitionContextProps = {
  parent: {
    show?: boolean;
    isInitialRender?: boolean;
    appear?: boolean;
  };
};

export interface TransitionProps {
  show?: boolean;
  enter?: string;
  enterFrom?: string;
  enterTo?: string;
  leave?: string;
  leaveFrom?: string;
  leaveTo?: string;
  appear?: boolean;
  className?: string;
  children: React.ReactNode;
}
