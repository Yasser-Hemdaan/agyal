// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        messageAlert: {
          wait: "wait your email is processed",
          success: "successfully...",
        },
        buttons: {
          more: "more",
        },
        header: {
          home: "home",
          about: "about us",
          fields: "fields",
          testmonials: "testmonials",
          contact: "contact",
          language: "العربيـة",
        },
        home: {
          hero: {
            special: "Because you are one of the family",
            main: "Get a membership now and enjoy a 50% discount on all tests",
            description:
              "Our laboratories are considered one of the leading medical laboratories in the field of medical analysis, and we always aim to provide a high-level and high-quality medical service in Egypt.",
            off: "OFF",
            LE: "L.E",
            test: "tests",
            parameters: "parameters",
          },
          about: {
            title: "About Us",
            desc: "Agyal connects you with exclusive discounts across a wide range of services and products in your town. From gyms and shopping centers to educational and medical services, we make it easy to save. Simply show your Agyal ID and enjoy the benefits!",
          },
          fields: {
            title: "fields",
            fieldsItems: {
              medicalItem: {
                title: "medical services",
                desc: "Get your discounts upon visiting our medical partners, whether it's a doctor's appointment, a laboratory, a pharmacy and many more relevant health services.",
              },
              educationalItem: {
                title: "educational services",
                desc: "Because we care about your knowledge and education, we're providing the top notch teachers and centers and classes to help you build the knowledge and career you always dreamed of.",
              },
              sportsItem: {
                title: "sports services",
                desc: "A wide variety of Gyms, Sportswear shops, private coaches, supplements and much more services at the palm of your hand.",
              },
              beautyItem: {
                title: "beauty services",
                desc: "For our lovely ladies, we offer all what you will ever need to shine like the queen you are, the best cosmetics for the best price.",
              },
              restaurantItem: {
                title: "restaurant services",
                desc: "ensures you enjoy your favorite meals at a lower cost. We partner with top restaurants to bring you exclusive deals. Save money while indulging in delicious food. Experience the best dining options at unbeatable prices.",
              },
              cafeItem: {
                title: "cafe services",
                desc: "allows you to enjoy your favorite beverages and snacks at reduced prices. We collaborate with top cafes to provide exclusive deals. Save money while enjoying premium coffee and treats. Experience the finest cafe options at unbeatable prices.",
              },
              clothesItem: {
                title: "clothes services",
                desc: "offers clients discounts on our clothing brands. Our service allows you to purchase your favorite fashion items at reduced prices. We partner with top clothing brands to bring you exclusive deals. Save money while staying stylish and trendy. Experience the best fashion options at unbeatable prices.",
              },
              perfumesItem: {
                title: "perfumes services",
                desc: "offers clients discounts on our perfume brands. Our service allows you to purchase your favorite fragrances at reduced prices. We partner with top perfume brands to provide exclusive deals. Save money while enjoying luxurious scents. Experience the best perfume options at unbeatable prices.",
              },
              variousItem: {
                title: "Various Services",
                desc: "Here you will find brands who provide services you will need through out your day, whether your car needs oil or you're buying new clothes it will always be here for the better quality and the best price in the market.",
              },
              onlineItem: {
                title: "online Services",
                desc: "allows you to shop for your favorite products at reduced prices. We partner with top online stores to bring you exclusive deals. Save money while enjoying a convenient shopping experience. Experience the best online shopping options at unbeatable prices.",
              },
            },
          },
          parteners: {
            title: "parteners",
          },
          statistics: {
            title: "Statistics",
            items: {
              surveyItem: {
                number: "1276",
                title: "surveys taken",
              },
              partenersItem: {
                number: "137",
                title: "parteners count",
              },
              servicesItem: {
                number: "114",
                title: "services provided",
              },
            },
          },
          opinionsWrapper: {
            title: "testmonials",
            opinions: {
              person1: {
                name: "Rafeeq",
                jobTitle: "Co-Founder / Operation Manager of Salahly",
                opinionDescription:
                  "A great idea for a company and definitely needed in upper Egypt and we will definitely have a future doing business together.",
              },
              person2: {
                name: "Rafeeq",
                jobTitle: "Co-Founder / Operation Manager of Salahly",
                opinionDescription:
                  "A great idea for a company and definitely needed in upper Egypt and we will definitely have a future doing business together.",
              },
              person3: {
                name: "Rafeeq",
                jobTitle: "Co-Founder / Operation Manager of Salahly",
                opinionDescription:
                  "A great idea for a company and definitely needed in upper Egypt and we will definitely have a future doing business together.",
              },
            },
          },
        },
        about: {
          choose: {
            title: "Why choose us",
            items: {
              save: {
                title: "Save Money",
                desc: "If you’re a member of our family you will be saving money hands over fist as every purchase you make will be discounted.",
              },
              offers: {
                title: "Get offers",
                desc: "Enjoy our exclusive offers from a variety of brands as our family member.",
              },
              benefits: {
                title: "Extra benefits",
                desc: "Enjoy our extra benefits where we help you to build a brighter future.",
              },
              map: {
                title: "City Map",
                desc: "We pinpoint number one brands in different markets to provide you with the best quality with the best price.",
              },
            },
          },
          implement: {
            title: "Implement Solutions & Achieve Goals",
            desc: "Our mission is to provide insurance and risk management services",
            items: {
              goals: {
                title: "goals",
                points: {
                  point1: "Enhance Life and decrease costs",
                  point2: "Increasing life standards",
                  point3: "Increase knowledge",
                  point4: "Leading a better future",
                },
              },
              values: {
                title: "values",
                points: {
                  point1: "Community Aid",
                  point2: "Dependability",
                  point3: "Building Trust",
                  point4: "Integrity",
                },
              },
              message: {
                title: "message",
                desc: "We provide you with unlimited services from unlimited places for unlimited generations. We offer a better future, all from you and for you.",
              },
            },
          },
        },
        fields: {
          title: "fields",
          category: {
            medical: {
              title: "medical",
              desc: "Get Your Discounts Upon Visiting Our Medical Partners, Whether It's A Doctor's Appointment, A Laboratory, A Pharmacy And Many More Relevant Health Services.",
              brands: {
                brand1: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand2: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand3: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand4: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand5: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand6: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand7: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand8: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand9: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
              },
            },
            educational: {
              title: "educational",
              desc: "Because We Care About Your Knowledge And Education, We're Providing The Top Notch Teachers And Centers And Classes To Help You Build The Knowledge And Career You Always Dreamed Of.",
              brands: {
                brand1: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand2: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand3: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand4: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand5: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand6: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand7: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand8: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand9: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
              },
            },
            sports: {
              title: "sports",
              desc: "A Wide Variety Of Gyms, Sportswear Shops, Private Coaches, Supplements And Much More Services At The Palm Of Your Hand.",
              brands: {
                brand1: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand2: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand3: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand4: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand5: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand6: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand7: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand8: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand9: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
              },
            },
            perfumesBeauty: {
              title: "perfumes & beauty",
              desc: "For Our Lovely Ladies, We Offer All What You Will Ever Need To Shine Like The Queen You Are, The Best Cosmetics For The Best Price.",
              brands: {
                brand1: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand2: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand3: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand4: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand5: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand6: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand7: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand8: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand9: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
              },
            },
            cafeRestaurant: {
              title: "cafe & restaurant",
              desc: "Ensures You Enjoy Your Favorite Meals At A Lower Cost. We Partner With Top Restaurants To Bring You Exclusive Deals. Save Money While Indulging In Delicious Food. Experience The Best Dining Options At Unbeatable Prices.",
              brands: {
                brand1: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand2: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand3: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand4: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand5: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand6: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand7: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand8: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand9: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
              },
            },
            clothes: {
              title: "clothes",
              desc: "Offers Clients Discounts On Our Clothing Brands. Our Service Allows You To Purchase Your Favorite Fashion Items At Reduced Prices. We Partner With Top Clothing Brands To Bring You Exclusive Deals. Save Money While Staying Stylish And Trendy. Experience The Best Fashion Options At Unbeatable Prices.",
              brands: {
                brand1: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand2: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand3: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand4: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand5: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand6: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand7: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand8: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand9: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
              },
            },
            various: {
              title: "various",
              desc: "Here You Will Find Brands Who Provide Services You Will Need Through Out Your Day, Whether Your Car Needs Oil Or You're Buying New Clothes It Will Always Be Here For The Better Quality And The Best Price In The Market.",
              brands: {
                brand1: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand2: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand3: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand4: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand5: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand6: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand7: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand8: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand9: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
              },
            },
            online: {
              title: "online",
              desc: "Allows You To Shop For Your Favorite Products At Reduced Prices. We Partner With Top Online Stores To Bring You Exclusive Deals. Save Money While Enjoying A Convenient Shopping Experience. Experience The Best Online Shopping Options At Unbeatable Prices.",
              brands: {
                brand1: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand2: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand3: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand4: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand5: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand6: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand7: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand8: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
                brand9: {
                  comment: "Silver: 10.0% , Gold: 15.0% , VIP: 20.0%",
                },
              },
            },
          },
        },
        testmonials: {
          FAQ: {
            title: "FAQ",
            items: {
              q1: {
                title: "How do I benefit from my membership?",
                answer:
                  "All you have to do is provide your ID card when at the cashier and discount will be provided automatically",
              },
              q2: {
                title: "How can I purchase a membership?",
                answer:
                  "You can pay the membership amount Via Vodafone Cash, Instapay, Bank transfer or Cash.",
              },
              q3: {
                title: "How did I get the membership ID?",
                answer:
                  "Once the purchase is completed our sales representative will collect the data necessary for the ID and you will have the ID card delivered to your chosen address within 3 working days.",
              },
            },
          },
        },
        contact: {
          title: "contact us",
          form: {
            name: "name",
            phone: "phone",
            email: "email",
            message: "type your message",
            send: "send",
          },
        },
        footer: {
          main: {
            title: "About",
            description:
              "Agyal connects you with exclusive discounts across a wide range of services and products in your town. From gyms and shopping centers to educational and medical services, we make it easy to save. Simply show your Agyal ID and enjoy the benefits!",
          },
          quickLinks: {
            title: "quick links",
            pages: {
              home: "home",
              about: "about us",
              fields: "fields",
              testmonials: "testmonials",
              contact: "contact",
            },
          },
          fields: {
            title: "fields",
            pages: {
              medical: "medical",
              educational: "educational",
              sports: "sports",
              beauty: "beauty",
              resturant: "resturant",
              cafe: "cafe",
              clothes: "clothes",
              perfumes: "perfumes",
              various: "various",
              online: "online",
            },
          },
          openingHours: {
            title: "opening hours",
            saturday: "Saturday",
            sunday: "Sunday",
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
          },
        },
      },
    },
    ar: {
      translation: {
        messageAlert: {
          wait: "انتظر حتى يتم ارسال رسالتك",
          success: "تم الارسال بنجاح...",
        },
        buttons: {
          more: "المزيد",
        },
        header: {
          home: "الرئيسية",
          about: "من نحن",
          fields: "المجالات",
          testmonials: "الآراء",
          contact: "تواصل معنا",
          language: "English",
        },
        home: {
          hero: {
            special: "علشان انت واحد من العيلة",
            main: "احصل على العضوية الآن واستمتع بخصم 50% على جميع التحالــــيـل",
            description:
              "تعتبر معاملنا من المعامل الطبية الرائدة في مجال التحليل الطبية, ونهدف دائما إلى تقديم خدمة طبية عالية المستوى وفائقة الجودة على ارض مصر",
            off: "خصم",
            LE: "ج.م",
            test: "اختبارات",
            parameters: "حدود",
          },
          about: {
            title: "من نحن",
            desc: "توفر لك أجيال خصومات حصرية عبر مجموعة واسعة من الخدمات والمنتجات في مدينتك. من الصالات الرياضية ومراكز التسوق إلى الخدمات التعليمية والطبية، نحن نجعل من السهل الادخار. ما عليك سوى إظهار هوية أجيال الخاصة بك والاستمتاع بالمزايا",
          },
          fields: {
            title: "المجالات",
            fieldsItems: {
              medicalItem: {
                title: "خدمات طبية",
                desc: "احصل على خصوماتك عند زيارة شركائنا الطبيين، سواء كان موعدًا مع الطبيب أو المختبر أو الصيدلية والعديد من الخدمات الصحية ذات الصلة",
              },
              educationalItem: {
                title: "خدمات تعليمية",
                desc: "لأننا نهتم بمعرفتك وتعليمك، فإننا نوفر لك أفضل المعلمين والمراكز والفصول الدراسية لمساعدتك في بناء المعرفة والوظيفة التي طالما حلمت بها",
              },
              sportsItem: {
                title: "خدمات رياضية",
                desc: "مجموعة واسعة من الصالات الرياضية ومحلات الملابس الرياضية والمدربين الخاصين والمكملات الغذائية والمزيد من الخدمات في متناول يدك",
              },
              beautyItem: {
                title: "خدمات التجميل",
                desc: "لسيداتنا الجميلات، نقدم كل ما ستحتاجينه للتألق مثل الملكة، أفضل مستحضرات التجميل بأفضل الأسعار",
              },
              restaurantItem: {
                title: "خدمات مطاعم",
                desc: "تضمن خدمتنا الاستمتاع بوجباتك المفضلة بتكلفة أقل. نتعاون مع أفضل المطاعم لتقديم عروض حصرية. وفر المال أثناء تناول الطعام اللذيذ. استمتع بأفضل خيارات الطعام بأسعار لا تقاوم.",
              },
              cafeItem: {
                title: "خدمات كافيهات",
                desc: "تتيح لك خدمتنا الاستمتاع بمشروباتك ووجباتك الخفيفة المفضلة بأسعار مخفضة. نتعاون مع أفضل المقاهي لتقديم عروض حصرية. وفر المال أثناء الاستمتاع بالقهوة الفاخرة والمأكولات الشهية. استمتع بأفضل خيارات المقاهي بأسعار لا تقاوم.",
              },
              clothesItem: {
                title: "خدمات ملابس",
                desc: "شراء أزياءك المفضلة بأسعار مخفضة. نتعاون مع أفضل العلامات التجارية للملابس لتقديم عروض حصرية. وفر المال بينما تبقى أنيقًا وعصريًا. استمتع بأفضل خيارات الموضة بأسعار لا تقاوم.",
              },
              perfumesItem: {
                title: "خدمات عطور",
                desc: "تتيح لك خدمتنا شراء عطرك المفضل بأسعار مخفضة. نتعاون مع أفضل العلامات التجارية للعطور لتقديم عروض حصرية. وفر المال أثناء الاستمتاع بالروائح الفاخرة. استمتع بأفضل خيارات العطور بأسعار لا تقاوم.",
              },
              variousItem: {
                title: "خدمات متنوعة",
                desc: "ستجد هنا العلامات التجارية التي تقدم الخدمات التي ستحتاجها طوال يومك، سواء كانت سيارتك تحتاج إلى زيت أو كنت تشتري ملابس جديدة، فستكون دائمًا هنا للحصول على أفضل جودة وأفضل سعر في السوق",
              },
              onlineItem: {
                title: "خدمات المتاجر إلكترونية",
                desc: "تتيح لك خدمتنا التسوق لشراء منتجاتك المفضلة بأسعار مخفضة. نتعاون مع أفضل المتاجر الإلكترونية لتقديم عروض حصرية. وفر المال أثناء الاستمتاع بتجربة تسوق مريحة. استمتع بأفضل خيارات التسوق عبر الإنترنت بأسعار لا تقاوم.",
              },
            },
          },
          parteners: {
            title: "شركاؤنا",
          },
          statistics: {
            title: "الإحصائيات",
            items: {
              surveyItem: {
                number: "1276",
                title: "الإستطلاعات المأخوذة",
              },
              partenersItem: {
                number: "137",
                title: "عدد الشركاء",
              },
              servicesItem: {
                number: "114",
                title: "الخدمات المقدمة",
              },
            },
          },
          opinionsWrapper: {
            title: "الآراء",
            opinions: {
              person1: {
                name: "رفيق",
                jobTitle: "المؤسس المشارك / مدير العمليات لشركة صلحلي",
                opinionDescription:
                  "إنها فكرة رائعة لشركة وهي مطلوبة بالتأكيد في صعيد مصر وسيكون لدينا بالتأكيد مستقبل في العمل معًا",
              },
              person2: {
                name: "رفيق",
                jobTitle: "المؤسس المشارك / مدير العمليات لشركة صلحلي",
                opinionDescription:
                  "إنها فكرة رائعة لشركة وهي مطلوبة بالتأكيد في صعيد مصر وسيكون لدينا بالتأكيد مستقبل في العمل معًا",
              },
              person3: {
                name: "رفيق",
                jobTitle: "المؤسس المشارك / مدير العمليات لشركة صلحلي",
                opinionDescription:
                  "إنها فكرة رائعة لشركة وهي مطلوبة بالتأكيد في صعيد مصر وسيكون لدينا بالتأكيد مستقبل في العمل معًا",
              },
            },
          },
        },
        about: {
          choose: {
            title: "لماذا اخترتنا",
            items: {
              save: {
                title: "توفير المال",
                desc: "إذا كنت عضوًا في عائلتنا، فستوفر المال بشكل كبير لأن كل عملية شراء تقوم بها ستتمتع بخصم.",
              },
              offers: {
                title: "احصل على العروض",
                desc: "استمتع بعروضنا الحصرية من مجموعة متنوعة من العلامات التجارية كأحد أفراد عائلتنا",
              },
              benefits: {
                title: "مزايا اضافية",
                desc: "استمتع بمزايانا الإضافية حيث نساعدك على بناء مستقبل أكثر إشراقًا",
              },
              map: {
                title: "خريطة المدينة",
                desc: "نحدد أفضل العلامات التجارية في الأسواق المختلفة لنقدم لك أعلى جودة بأفضل سعر.",
              },
            },
          },
          implement: {
            title: "تنفيذ الحلول وتحقيق الأهداف",
            desc: "مهمتنا هي تقديم خدمات التأمين وإدارة المخاطر",
            items: {
              goals: {
                title: "الأهداف",
                points: {
                  point1: "تعزيز الحياة وخفض التكاليف",
                  point2: "رفع معايير الحياة",
                  point3: "زيادة المعرفة",
                  point4: "قيادة مستقبل أفضل",
                },
              },
              values: {
                title: "القيم",
                points: {
                  point1: "مساعدة المجتمع",
                  point2: "الاعتمادية",
                  point3: "بناء الثقة",
                  point4: "النزاهة",
                },
              },
              message: {
                title: "الرسالة",
                desc: "نقدم لك خدمات غير محدودة من أماكن غير محدودة لأجيال غير محدودة. نحن نعدك بمستقبل أفضل، كل ذلك من أجلك ولصالحك.",
              },
            },
          },
        },
        fields: {
          title: "fields",
          category: {
            medical: {
              title: "طبي",
              desc: "احصل على خصوماتك عند زيارة شركائنا الطبيين، سواء كان ذلك موعدًا مع الطبيب أو المختبر أو الصيدلية والعديد من الخدمات الصحية ذات الصلة",
              brands: {
                brand1: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand2: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand3: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand4: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand5: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand6: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand7: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand8: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand9: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
              },
            },
            educational: {
              title: "تعليمي",
              desc: "مجموعة واسعة من الصالات الرياضية ومحلات الملابس الرياضية والمدربين الخاصين والمكملات الغذائية والمزيد من الخدمات في متناول يدك",
              brands: {
                brand1: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand2: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand3: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand4: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand5: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand6: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand7: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand8: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand9: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
              },
            },
            sports: {
              title: "رياضي",
              desc: "مجموعة واسعة من الصالات الرياضية ومحلات الملابس الرياضية والمدربين الخاصين والمكملات الغذائية والمزيد من الخدمات في متناول يدك",
              brands: {
                brand1: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand2: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand3: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand4: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand5: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand6: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand7: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand8: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand9: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
              },
            },
            perfumesBeauty: {
              title: "تجميلي وعطور",
              desc: "لسيداتنا الجميلات، نقدم كل ما ستحتاجينه للتألق مثل الملكة، أفضل مستحضرات التجميل بأفضل الأسعار",
              brands: {
                brand1: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand2: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand3: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand4: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand5: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand6: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand7: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand8: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand9: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
              },
            },
            cafeRestaurant: {
              title: "مطاعم وكافيهات",
              desc: "تضمن خدمتنا الاستمتاع بوجباتك المفضلة بتكلفة أقل. نتعاون مع أفضل المطاعم لتقديم عروض حصرية. وفر المال أثناء تناول الطعام اللذيذ. استمتع بأفضل خيارات الطعام بأسعار لا تقاوم.",
              brands: {
                brand1: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand2: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand3: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand4: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand5: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand6: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand7: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand8: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand9: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
              },
            },
            clothes: {
              title: "ملابس",
              desc: "شراء أزياءك المفضلة بأسعار مخفضة. نتعاون مع أفضل العلامات التجارية للملابس لتقديم عروض حصرية. وفر المال بينما تبقى أنيقًا وعصريًا. استمتع بأفضل خيارات الموضة بأسعار لا تقاوم.",
              brands: {
                brand1: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand2: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand3: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand4: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand5: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand6: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand7: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand8: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand9: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
              },
            },
            various: {
              title: "متنوع",
              desc: "ستجد هنا العلامات التجارية التي تقدم الخدمات التي ستحتاجها طوال يومك، سواء كانت سيارتك تحتاج إلى زيت أو كنت تشتري ملابس جديدة، فستكون دائمًا هنا للحصول على أفضل جودة وأفضل سعر في السوق",
              brands: {
                brand1: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand2: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand3: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand4: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand5: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand6: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand7: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand8: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand9: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
              },
            },
            online: {
              title: "متاجر إلكترونية",
              desc: "تتيح لك خدمتنا التسوق لشراء منتجاتك المفضلة بأسعار مخفضة. نتعاون مع أفضل المتاجر الإلكترونية لتقديم عروض حصرية. وفر المال أثناء الاستمتاع بتجربة تسوق مريحة. استمتع بأفضل خيارات التسوق عبر الإنترنت بأسعار لا تقاوم.",
              brands: {
                brand1: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand2: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand3: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand4: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand5: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand6: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand7: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand8: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
                brand9: {
                  comment: "فضي: 10.0% , ذهبي: 15.0% , مميز: 20.0%",
                },
              },
            },
          },
        },
        testmonials: {
          FAQ: {
            title: "الاسئلة المتداولة",
            items: {
              q1: {
                title: "كيف أستفيد من عضويتي؟",
                answer:
                  "كل ما عليك فعله هو تقديم بطاقة الهوية الخاصة بك عند الكاشير وسيتم تقديم الخصم تلقائيًا.",
              },
              q2: {
                title: "كيف يمكنني شراء العضوية؟",
                answer:
                  "يمكنك دفع مبلغ العضوية عبر فودافون كاش، إنستاباي، تحويل بنكي أو نقدًا.",
              },
              q3: {
                title: "كيف أحصل على بطاقة العضوية؟",
                answer:
                  "بمجرد اكتمال الشراء، سيقوم ممثل المبيعات لدينا بجمع البيانات اللازمة للبطاقة وستتلقى بطاقة العضوية إلى العنوان الذي اخترته في غضون 3 أيام عمل.",
              },
            },
          },
        },
        contact: {
          title: "تواصل معنا",
          form: {
            name: "الاسم",
            phone: "رقم الهاتف",
            email: "البريد الإلكتروني",
            message: "اترك رسالة لنا",
            send: "إرسال",
          },
        },
        footer: {
          main: {
            title: "من نحن",
            description:
              "توفر لك أجيال خصومات حصرية عبر مجموعة واسعة من الخدمات والمنتجات في مدينتك. من الصالات الرياضية ومراكز التسوق إلى الخدمات التعليمية والطبية، نحن نجعل من السهل الادخار. ما عليك سوى إظهار هوية أجيال الخاصة بك والاستمتاع بالمزايا!",
          },
          quickLinks: {
            title: "روابط سريعة",
            pages: {
              home: "الرئيسية",
              about: "من نحن",
              fields: "المجالات",
              testmonials: "الآراء",
              contact: "تواصل معنا",
            },
          },
          fields: {
            title: "المجالات",
            pages: {
              medical: "طبي",
              educational: "تعليمي",
              sports: "رياضي",
              beauty: "تجميل",
              resturant: "مطاعم",
              cafe: "كافيهات",
              clothes: "ملابس",
              perfumes: "عطور",
              various: "متنوع",
              online: "متاجر إلكترونية",
            },
          },
          openingHours: {
            title: "مواعيد العمل",
            saturday: "السبت",
            sunday: "الأحد",
            monday: "الأثنين",
            tuesday: "الثلاثاء",
            wednesday: "الأربعاء",
            thursday: "الخميس",
            friday: "الجمعة",
          },
        },
      },
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
