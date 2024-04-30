import { createContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';
import { fetchQueue } from '../api/queue';

interface QueueContextProps {
  queue: string[];
  addToQueue: (action: string) => Promise<void>;
}

interface QueueProviderProps {
  children: ReactNode;
}

const initialValue: QueueContextProps = {
  queue: [],
  addToQueue: (async () => {
    console.warn('addToQueue function should not be called directly from the context');
  }),
};

export const QueueContext = createContext<QueueContextProps>(initialValue);

export const QueueProvider = ({ children }: QueueProviderProps) => {
  const [queue, setQueue] = useState<string[]>([]);
  const fetchQueueData = async () => {
    const data = await fetchQueue();
    setQueue(data);
  };

  useEffect(() => {
    fetchQueueData();
  }, [queue]);

  const addToQueue = useCallback(async (action: string) => {
    setQueue([...queue, action]);
  }, [queue]);

  const value: QueueContextProps = useMemo(() => ({ queue, addToQueue }), [queue, addToQueue]);

  return <QueueContext.Provider value={value}>{children}</QueueContext.Provider>;
};