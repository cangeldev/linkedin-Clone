// i18n kütüphanesini ve React Native için i18next başlatıcısını içe aktarıyoruz.
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import 'intl-pluralrules' // 'intl-pluralrules' modülünü içe aktarıyoruz.

i18n // i18n konfigürasyonunu başlatıyoruz.
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    greeting: 'Hello, World!',
                    // istediğimiz kelimeleri veya cümlelerin İngilizcelerini buraya ekliyoruz
                    //Aynı şekilde Türkçe olarak aşağıyada eklememiz gerekiyor. 
                },
            },
            tr: {
                translation: {
                    greeting: 'Merhaba, Dünya!',
                    // Aynı isim ile Türkçelerini buraya ekliyoruz.
                },
            },
        },
        lng: 'en', // Başlangıç dilini İngilizce olarak ayarlıyoruz siz istediğiniz dili ayarlayabilirsiniz.
        fallbackLng: 'en',// Bir çeviri bulunamadığında kullanılacak yedek dil olarak isteidğimiz dili ayarlıyoruz.
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n