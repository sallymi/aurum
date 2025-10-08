import zhCN from '../locales/zh-CN.json';
import enUS from '../locales/en-US.json';

export type Locale = 'zh-CN' | 'en-US';

const texts = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

// 默认语言
const DEFAULT_LOCALE: Locale = 'en-US';

// 获取当前语言设置（可以从localStorage、URL参数等获取）
export function getCurrentLocale(): Locale {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('locale') as Locale;
    if (saved && texts[saved]) {
      return saved;
    }
  }
  return DEFAULT_LOCALE;
}

// 设置语言
export function setLocale(locale: Locale) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', locale);
    window.location.reload(); // 重新加载页面以应用新语言
  }
}

// 获取文字内容
export function getText(path: string, locale?: Locale): any {
  const currentLocale = locale || getCurrentLocale();
  const textData = texts[currentLocale];
  
  const keys = path.split('.');
  let result: any = textData;
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      console.warn(`Text not found for path: ${path} in locale: ${currentLocale}`);
      return path; // 返回路径作为fallback
    }
  }
  
  return result;
}

// 简化的hook用法
export function useTexts() {
  const locale = getCurrentLocale();
  
  return {
    t: (path: string) => getText(path, locale),
    locale,
    setLocale,
  };
}

export default texts;