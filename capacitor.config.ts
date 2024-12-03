import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.mywebviewapp',
  appName: 'my-webview-app',
  webDir: 'dist', // این دایرکتوری محلی برای فایل‌های وب شماست
  // bundledWebRuntime: false
};

export default config;
