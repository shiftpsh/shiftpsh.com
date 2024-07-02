"use client";

import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";

const DATA_ATTRIBUTE_ID = "data-observer-id";

interface ContextValues {
  register: (
    key: string,
    element: HTMLElement,
    callback: (entry: IntersectionObserverEntry) => void
  ) => void;
  deregister: (key: string) => void;
}

export const IntersectionObserverContext = createContext<ContextValues>({
  register: () => {
    // To be filled by the provider
  },
  deregister: () => {
    // To be filled by the provider
  },
});

export const IntersectionObserverProvider = ({
  children,
}: PropsWithChildren) => {
  const callbacks = useRef<
    Map<string, (entry: IntersectionObserverEntry) => void>
  >(new Map());
  const elements = useRef<Map<string, HTMLElement>>(new Map());
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute(DATA_ATTRIBUTE_ID);
          if (!id) return;
          const callback = callbacks.current.get(id);
          if (!callback) return;
          callback(entry);
        });
      },
      {
        rootMargin: "120px",
        threshold: 0.1,
      }
    );
    return () => {
      observer.current?.disconnect();
    };
  });

  const register = useCallback(
    (
      key: string,
      element: HTMLElement,
      callback: (entry: IntersectionObserverEntry) => void
    ) => {
      if (!observer.current) return;
      element.setAttribute(DATA_ATTRIBUTE_ID, key);
      callbacks.current.set(key, callback);
      elements.current.set(key, element);
      observer.current.observe(element);
    },
    []
  );

  const deregister = useCallback((key: string) => {
    if (!observer.current) return;
    const element = elements.current.get(key);
    if (element) {
      element.removeAttribute(DATA_ATTRIBUTE_ID);
      observer.current.unobserve(element);
    }
    callbacks.current.delete(key);
  }, []);

  const contextValues = useMemo(
    () => ({ register, deregister }),
    [register, deregister]
  );

  return (
    <IntersectionObserverContext.Provider value={contextValues}>
      {children}
    </IntersectionObserverContext.Provider>
  );
};

let componentIdCounter = 0;

export const useIntersectionObserver = () => {
  const uniqueComponentId = useRef<string>(
    `shiftpsh-observer-${componentIdCounter++}`
  );
  const { register, deregister } = useContext(IntersectionObserverContext);

  const wrappedContextValues = useMemo(
    () => ({
      register: (
        element: HTMLElement,
        callback: (entry: IntersectionObserverEntry) => void
      ) => register(uniqueComponentId.current, element, callback),
      deregister: () => deregister(uniqueComponentId.current),
    }),
    [register, deregister]
  );

  return wrappedContextValues;
};
