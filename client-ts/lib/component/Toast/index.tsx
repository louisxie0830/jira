import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'sweet-pubsub';
import { uniqueId } from 'lodash';

// import { Container } from './Styles';

export const Toast = () => {
  const [toasts, setToasts] = useState([]);
  useEffect(() => {
    const addToast = ({ type = 'success', title, message, duration = 5 }) => {
      const id = uniqueId('toast-');

      setToasts((currentToasts) => [
        ...currentToasts,
        { id, type, title, message },
      ]);

      if (duration) {
        setTimeout(() => removeToast(id), duration * 1000);
      }
    };

    pubsub.on('toast', addToast);

    return () => {
      pubsub.off('toast', addToast);
    };
  }, []);

  const removeToast = (id) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id),
    );
  };

  return (
    <div>
    </div>
  );
};
