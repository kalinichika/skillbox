import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  childrenClassName?: string;
  nodeId?: string;
}

const NOOP = () => {};

export function Dropdown({
  nodeId = '',
  button,
  children,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP,
  childrenClassName,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => (isDropdownOpen ? onOpen() : onClose()), [
    isDropdownOpen,
  ]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  if (!nodeId) return null;
  const node =
    document.getElementById(nodeId) || document.getElementById('modal-root');
  if (!node) return null;

  return (
    <div className={styles.container} id={nodeId}>
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen &&
        ReactDOM.createPortal(
          <div
            className={classNames(styles.listContainer, {
              [`${childrenClassName}`]: childrenClassName,
            })}
          >
            <div
              className={styles.list}
              onClick={() => setIsDropdownOpen(false)}
            >
              {children}
            </div>
          </div>,
          node
        )}
    </div>
  );
}
