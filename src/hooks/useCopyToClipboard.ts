import { useCallback, useEffect, useRef, useState } from 'react';

const RESET_DELAY_MS = 2000;

interface CopyState {
  copied: boolean;
  failed: boolean;
  copy: (text: string) => Promise<void>;
}

/**
 * Copies text to the clipboard and exposes a short-lived `copied` flag.
 * `failed` is set when the Clipboard API is missing or permission is denied,
 * so the UI can tell the user to copy manually instead of silently failing.
 */
export function useCopyToClipboard(): CopyState {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const copy = useCallback(async (text: string): Promise<void> => {
    if (timer.current) clearTimeout(timer.current);
    try {
      if (!navigator.clipboard) throw new Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(text);
      setFailed(false);
      setCopied(true);
    } catch {
      setCopied(false);
      setFailed(true);
    }
    timer.current = setTimeout(() => {
      setCopied(false);
      setFailed(false);
    }, RESET_DELAY_MS);
  }, []);

  return { copied, failed, copy };
}
