declare global {
  interface TelegramWebApp {
    initData: string;
    initDataUnsafe: string;
    version: string;
    WebApp: any
  }

  interface Window {
    Telegram: TelegramWebApp;
  }
}

export {};