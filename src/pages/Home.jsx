
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Scale, Gavel, Shield, Phone, Mail, MapPin, ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [highContrast, setHighContrast] = React.useState(false);

  return (
    <div dir="rtl" className={`min-h-screen ${highContrast ? 'high-contrast' : ''}`}>
      <div className="fixed left-4 top-4 z-50 bg-white rounded-lg shadow-lg p-4" role="navigation" aria-label="תפריט נגישות">
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setHighContrast(!highContrast)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2"
            aria-label="שינוי ניגודיות"
          >
            <span role="img" aria-hidden="true">👁️</span>
            ניגודיות גבוהה
          </button>
          <button
            onClick={() => {
              const html = document.querySelector('html');
              const currentSize = parseFloat(window.getComputedStyle(html).fontSize);
              html.style.fontSize = `${currentSize + 2}px`;
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2"
            aria-label="הגדלת טקסט"
          >
            <span role="img" aria-hidden="true">A+</span>
            הגדל טקסט
          </button>
        </div>
      </div>

      <div className="bg-gray-100 py-2 text-center text-sm" role="contentinfo">
        <p>אתר זה נגיש לאנשים עם מוגבלויות לפי תקן WCAG 2.1 ותקנות הנגישות</p>
      </div>

      <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white py-24" role="banner">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3')] bg-cover opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 flex justify-center md:order-1">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
                  <img
                      src="public/nivivri2.jpeg"
                      alt="עורך דין ניב עברי"
                      className="w-full h-full object-cover object-top"
                      role="img"
                  />
                </div>
                <div className="absolute -bottom-4 right-1/2 transform translate-x-1/2 bg-amber-500 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  חבר לשכת עורכי הדין
                </div>
              </div>
            </div>
            <div className="md:w-1/2 space-y-8 md:order-2">
              <div>
                <h4 className="text-amber-400 font-semibold mb-2">מעל 15 שנות ניסיון</h4>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">עו״ד ניב עברי</h1>
                <div className="w-16 h-1 bg-amber-400 mb-6"></div>
                <p className="text-xl leading-relaxed opacity-90">
                  מומחה בדיני משפחה, נדל״ן ומשפט מסחרי
                </p>
              </div>
              
              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-3">
                  <Scale className="w-6 h-6 text-amber-400" />
                  <span>ייצוג מול בתי משפט ורשויות</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gavel className="w-6 h-6 text-amber-400" />
                  <span>הצלחות מוכחות במאות תיקים</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-amber-400" />
                  <span>ליווי אישי לכל אורך הדרך</span>
                </div>
              </div>
              
              <Button 
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-2 rounded-full font-medium text-lg flex items-center gap-2"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                צור קשר עכשיו
                <ArrowLeftIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-32 h-64 bg-amber-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -left-16 top-1/3 transform -translate-y-1/2 w-32 h-32 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h4 className="text-amber-600 font-semibold mb-2">למה לבחור בנו</h4>
            <h2 className="text-3xl font-bold text-gray-900">אודות המשרד</h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="text-lg leading-relaxed text-gray-700 space-y-4">
              <p>
                משרדנו מתמחה בייצוג לקוחות פרטיים ועסקיים במגוון תחומי המשפט האזרחי והמסחרי. אנו מעניקים שירות משפטי איכותי, מקצועי, יסודי ואמין.
              </p>
              <p>
                אנו מאמינים כי הצלחת הלקוח היא הצלחתנו, ולכן בכל תיק אנו פועלים במסירות ובמקצועיות להשגת התוצאה המיטבית עבור הלקוח, תוך שמירה על סטנדרטים גבוהים של אתיקה מקצועית ושירות אישי.
              </p>
              <p>
                בעשור האחרון ייצגנו בהצלחה רבה מאות לקוחות פרטיים ועסקיים במגוון רחב של הליכים משפטיים. אנו מזמינים אתכם לפנות אלינו לייעוץ ראשוני ללא התחייבות.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h4 className="text-amber-600 font-semibold mb-2">המומחיות שלנו</h4>
            <h2 className="text-3xl font-bold text-gray-900">תחומי התמחות</h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-none overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-8">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Scale className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">דיני משפחה</h3>
                <p className="text-gray-600 text-center">
                  גירושין, מזונות, משמורת ילדים, הסכמי ממון, צוואות וירושות
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-none overflow-hidden">
              <div className="h-2 bg-amber-500"></div>
              <CardContent className="p-8">
                <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gavel className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">נדל״ן</h3>
                <p className="text-gray-600 text-center">
                  עסקאות מקרקעין, תמ״א 38, חוזי שכירות, ליווי פרויקטים
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-none overflow-hidden">
              <div className="h-2 bg-green-600"></div>
              <CardContent className="p-8">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">משפט מסחרי</h3>
                <p className="text-gray-600 text-center">
                  הסכמים מסחריים, הקמת חברות, סכסוכים עסקיים, ליטיגציה
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white relative overflow-hidden">
        <div className="absolute right-0 left-0 top-0 h-40 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h4 className="text-amber-600 font-semibold mb-2">עו״ד ישראלי מסביר</h4>
            <h2 className="text-3xl font-bold text-gray-900">צפו בנו בתקשורת</h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
          
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-[400px]"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="משרד עורכי דין"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h4 className="text-amber-400 font-semibold mb-2">המלצות</h4>
            <h2 className="text-3xl font-bold text-white">לקוחות מספרים</h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-b from-slate-800 to-slate-900 text-white border-none shadow-xl">
              <CardContent className="pt-8 p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="mb-6 text-center leading-relaxed text-slate-300">
                  ״עו״ד ישראלי טיפל בתיק המורכב שלי במקצועיות ורגישות. הוא היה זמין עבורי לאורך כל הדרך והשיג תוצאות מצוינות.״
                </p>
                <div className="text-center">
                  <div className="inline-block w-12 h-12 bg-amber-500 rounded-full text-white text-xl font-bold flex items-center justify-center mb-2">
                    ד
                  </div>
                  <p className="font-semibold text-white">דניאל כהן</p>
                  <p className="text-sm text-slate-400">לקוח פרטי</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-slate-800 to-slate-900 text-white border-none shadow-xl">
              <CardContent className="pt-8 p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="mb-6 text-center leading-relaxed text-slate-300">
                  ״הליווי המשפטי שקיבלתי היה מעל ומעבר למצופה. הידע המקצועי והיחס האישי היו יוצאי דופן.״
                </p>
                <div className="text-center">
                  <div className="inline-block w-12 h-12 bg-amber-500 rounded-full text-white text-xl font-bold flex items-center justify-center mb-2">
                    ר
                  </div>
                  <p className="font-semibold text-white">רחל לוי</p>
                  <p className="text-sm text-slate-400">לקוחה עסקית</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-slate-800 to-slate-900 text-white border-none shadow-xl">
              <CardContent className="pt-8 p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="mb-6 text-center leading-relaxed text-slate-300">
                  ״מקצועיות ללא פשרות, זמינות גבוהה ותוצאות מצוינות. ממליץ בחום!״
                </p>
                <div className="text-center">
                  <div className="inline-block w-12 h-12 bg-amber-500 rounded-full text-white text-xl font-bold flex items-center justify-center mb-2">
                    מ
                  </div>
                  <p className="font-semibold text-white">משה ישראלי</p>
                  <p className="text-sm text-slate-400">לקוח פרטי</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div id="contact" className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h4 className="text-amber-600 font-semibold mb-2">דברו איתנו</h4>
            <h2 className="text-3xl font-bold text-gray-900">צרו קשר</h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">טלפון</h3>
              <p className="text-lg">052-680-4495</p>
            </Card>
            
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">דוא״ל</h3>
              <p className="text-lg">nivivri@gmail.com</p>
            </Card>
            
            <Card className="text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">משרד ראשי</h3>
              <p className="text-lg">רחוב הרצל 123, תל אביב</p>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-12" role="contentinfo">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6">הצהרת נגישות ופרטיות</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע"ג-2013. האתר תומך בתקן WCAG 2.1 ברמה AA ומונגש לבעלי מוגבלויות וצרכים מיוחדים.
            </p>
            <p>
              המידע המוצג באתר הינו כללי בלבד ואינו מהווה ייעוץ משפטי או תחליף לייעוץ משפטי. הסתמכות על המידע המופיע באתר הינה באחריות המשתמש בלבד.
            </p>
            <p>
              אנו מכבדים את פרטיותכם - המידע הנאסף באתר משמש למטרות סטטיסטיות ושיפור השירות בלבד, בהתאם לחוק הגנת הפרטיות, התשמ"א-1981.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-slate-900 text-white py-8" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">נגישות</h3>
              <p className="text-sm">
                האתר נבנה בהתאם לתקן הישראלי לנגישות אתרי אינטרנט 5568 ולתקן WCAG 2.1 ברמה AA.
                לדיווח על בעיות נגישות: 03-1234567
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">מדיניות פרטיות</h3>
              <p className="text-sm">
                השימוש באתר כפוף למדיניות הפרטיות ולתנאי השימוש.
                כל הזכויות שמורות © {new Date().getFullYear()} משרד עו״ד ישראל ישראלי.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="#main-content"
        className="bg-blue-600 text-white p-4 absolute -top-40 left-0 z-50 focus:top-0 transition-all duration-200"
        role="navigation"
        aria-label="דלג לתוכן הראשי"
      >
        דלג לתוכן הראשי
      </a>

      <style jsx global>{`
        .high-contrast {
          background: black !important;
          color: yellow !important;
        }
        .high-contrast * {
          background: black !important;
          color: yellow !important;
          border-color: yellow !important;
        }
        .high-contrast img {
          filter: grayscale(100%) contrast(120%);
        }
        .high-contrast button,
        .high-contrast a {
          border: 2px solid yellow !important;
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
