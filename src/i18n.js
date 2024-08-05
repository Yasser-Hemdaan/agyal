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
                number: "97",
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
                  comment:
                    "Silver: 15% , Gold: 15% , VIP: 15% Internal and 15% , Gold: 15% , VIP: 20% external",
                },
                brand2: {
                  comment:
                    "Silver: 15% , Gold: 15% , VIP: 15% Internal and external",
                },
                brand3: {
                  comment: "Silver: 20% , Gold: 20% , VIP: 20% ",
                },
                brand4: {
                  comment: "Silver: 25% , Gold: 20% , VIP: 20% ",
                },
                brand5: {
                  comment:
                    "Silver: 15% , Gold: 15% , VIP: 15% Except for the dye",
                },
                brand6: {
                  comment:
                    "Silver: 15% , Gold: 15% , VIP: 15% Except for the dye",
                },
                brand7: {
                  comment: "Silver: 20% , Gold: 20% , VIP: 20%",
                },
                brand8: {
                  comment: "Silver: 25% , Gold: 25% , VIP: 25%",
                },
                brand9: {
                  comment:
                    "25% on examination - 15% on implants, orthodontics and other services",
                },
                brand10: {
                  comment: "up to 50% discount on all memberships",
                },
                brand11: {
                  comment: "Silver: 30% , Gold: 30% , VIP: 30%",
                },
                brand12: {
                  comment: "up to 50% discount on all memberships",
                },
                brand13: {
                  comment: "up to 15% discount on all memberships",
                },
                brand14: {
                  comment: "Silver: 25% , Gold: 25% , VIP: 25%",
                },
              },
            },
            educational: {
              title: "educational",
              desc: "Because We Care About Your Knowledge And Education, We're Providing The Top Notch Teachers And Centers And Classes To Help You Build The Knowledge And Career You Always Dreamed Of.",
              brands: {
                brand1: {
                  comment:
                    "10% American Diploma - 15% on courses - 20% on private lessons",
                },
                brand2: {
                  comment: "Silver: 8% , Gold: 10% , VIP: 12.5%",
                },
                brand3: {
                  comment:
                    "Summaries: Silver: 8%, Gold: 10%, VIP: 12%, Stationery: Silver: 8%, Gold: 9%, VIP: 10%, Toys: Silver: 8%, Gold: 9%, VIP: 10%",
                },
                brand4: {
                  comment: "up to 20%",
                },
              },
            },
            sports: {
              title: "sports",
              desc: "A Wide Variety Of Gyms, Sportswear Shops, Private Coaches, Supplements And Much More Services At The Palm Of Your Hand.",
              brands: {
                brand1: {
                  comment: "Silver: 10% , Gold: 12.5% , VIP: 15%",
                },
                brand2: {
                  comment: "Silver: 15% , Gold: 17.5% , VIP: 20%",
                },
                brand3: {
                  comment: "Silver: 20% , Gold: 35% , VIP: 50%",
                },
                brand4: {
                  comment: "Silver: 10% , Gold: 15% , VIP: 20%",
                },
              },
            },
            perfumesBeauty: {
              title: "perfumes & beauty",
              desc: "For Our Lovely Ladies, We Offer All What You Will Ever Need To Shine Like The Queen You Are, The Best Cosmetics For The Best Price.",
              brands: {
                brand1: {
                  comment: "VIP execlusive: 25%",
                },
                brand2: {
                  comment: "Silver: 8% , Gold: 9% , VIP: 10% Except for paper",
                },
                brand3: {
                  comment:
                    "On Store: Silver: 10%, Gold: 10%, VIP: 10%, Accessories & Bags: Gold, VIP execlusive: 15%, Watches & Glasses: VIP execlusive: 20%",
                },
                brand4: {
                  comment: "up to 20% on the base price, excluding offers.",
                },
                brand5: {
                  comment: "up to 50% for all memberships",
                },
                brand6: {
                  comment: "Silver: 10% , Gold: 12.5% , VIP: 15% On hand made",
                },
                brand7: {
                  comment: "Silver: 10% , Gold: 15% , VIP: 20%",
                },
                brand8: {
                  comment: "Silver: 10% , Gold: 15% , VIP: 20%",
                },
              },
            },
            cafeRestaurant: {
              title: "cafe & restaurant",
              desc: "Ensures You Enjoy Your Favorite Meals At A Lower Cost. We Partner With Top Restaurants To Bring You Exclusive Deals. Save Money While Indulging In Delicious Food. Experience The Best Dining Options At Unbeatable Prices.",
              brands: {
                brand1: {
                  comment: "Silver: 10% , Gold: 12.5% , VIP: 15%",
                },
                brand2: {
                  comment:
                    "Silver: 10% , Gold: 12.5% , VIP: 15% Offers not included",
                },
                brand3: {
                  comment: "Silver: 10% , Gold: 15% , VIP: 20%",
                },
                brand4: {
                  comment:
                    "Ice Cream, Waffles & Drinks: Silver: 10%, Gold: 12.5%, VIP: 15%, Desserts & Breakfast: Silver: 8%, Gold: 9%, VIP: 10%",
                },
                brand5: {
                  comment: "10% off restaurant and café - VIP execlusive",
                },
                brand6: {
                  comment: "Silver: 10% , Gold: 15% , VIP: 20%",
                },
                brand7: {
                  comment:
                    "Menu & Breakfast: Gold: 10%, VIP: 15%, Steak: VIP: 20%",
                },
                brand8: {
                  comment:
                    "Takeaway: Silver: 8%, Gold: 9%, VIP: 10%, Lounge: Silver: 10%, Gold: 12.5%, VIP: 15%, Free Delivery",
                },
                brand9: {
                  comment:
                    "hall: Silver: 8%, Gold: 10%, VIP: 12%, Free Delivery",
                },
                brand10: {
                  comment: "hall: Silver: 5%, Gold: 5%, VIP: 5%",
                },
                brand11: {
                  comment: "up to 5% Except for offers",
                },
                brand12: {
                  comment:
                    "Silver: 10%, Gold: 12.5%, VIP: 15% Except for offers, Sandwiches: Silver: 10%, Gold: 15%, VIP: 20%",
                },
                brand13: {
                  comment: "Sandwiches: Silver: 10%, Gold: 12.5%, VIP: 15%",
                },
                brand14: {
                  comment:
                    "Silver: 8% , Gold: 9% , VIP: 10% Offers not included",
                },
                brand15: {
                  comment:
                    "Silver: 8% , Gold: 9% , VIP: 10% Offers not included, Free delivery on any invoice over 500 EGP",
                },
                brand16: {
                  comment: "Silver: 10%, Gold: 12.5%, VIP: 15%",
                },
                brand17: {
                  comment:
                    "drinks: Silver: 10%, Gold: 12.5%, VIP: 15%, material: Silver: 8%, Gold: 9%, VIP: 10%",
                },
                brand18: {
                  comment: "Silver: 8% , Gold: 9% , VIP: 10%",
                },
                brand19: {
                  comment:
                    "drinks: Silver: 10%, Gold: 15%, VIP: 20%, material: Silver: 8%, Gold: 9%, VIP: 10%",
                },
                brand20: {
                  comment: "Silver: 8% , Gold: 10% , VIP: 12%",
                },
              },
            },
            clothes: {
              title: "clothes",
              desc: "Offers Clients Discounts On Our Clothing Brands. Our Service Allows You To Purchase Your Favorite Fashion Items At Reduced Prices. We Partner With Top Clothing Brands To Bring You Exclusive Deals. Save Money While Staying Stylish And Trendy. Experience The Best Fashion Options At Unbeatable Prices.",
              brands: {
                brand1: {
                  comment:
                    "Silver: 0% , Gold: 5% , VIP: 5% Add to the discount percentage available in the branch",
                },
                brand2: {
                  comment:
                    "Silver: 0% , Gold: 5% , VIP: 5% Add to the discount percentage available in the branch",
                },
                brand3: {
                  comment: "Silver: 20% , Gold: 35% , VIP: 50%",
                },
                brand4: {
                  comment: "Silver: 20% , Gold: 35% , VIP: 50%",
                },
                brand5: {
                  comment: "Silver: 10% , Gold: 12.5% , VIP: 15%",
                },
                brand6: {
                  comment: "Silver: 10% , Gold: 15% , VIP: 20%",
                },
                brand7: {
                  comment: "Silver: 10% , Gold: 15% , VIP: 20%",
                },
                brand8: {
                  comment:
                    "accessories: Silver: 8% , Gold: 9% , VIP: 10% - clothing: Silver: 10% , Gold: 12.5% , VIP: 15%",
                },
                brand9: {
                  comment: "Silver: 10% , Gold: 12.5% , VIP: 15%",
                },
              },
            },
            various: {
              title: "various",
              desc: "Here You Will Find Brands Who Provide Services You Will Need Through Out Your Day, Whether Your Car Needs Oil Or You're Buying New Clothes It Will Always Be Here For The Better Quality And The Best Price In The Market.",
              brands: {
                brand1: {
                  comment: "Silver: 8% , Gold: 9% , VIP: 10%",
                },
                brand2: {
                  comment:
                    "5% on conference hall - 7% on hotel rooms - VIP execlusive",
                },
                brand3: {
                  comment: "Silver: 5% , Gold: 5% , VIP: 5%",
                },
                brand4: {
                  comment: "Silver: 5% , Gold: 5% , VIP: 5%",
                },
                brand5: {
                  comment: "Silver: 5% , Gold: 5% , VIP: 5%",
                },
                brand6: {
                  comment:
                    "Living room, corner, kitchen, dining room and shelves: Silver: 10%, Gold: 12.5%, VIP: 15%, Bedroom and children's rooms: Silver: 10%, Gold: 15%, VIP: 20%",
                },
                brand7: {
                  comment: "up to 20%",
                },
                brand8: {
                  comment:
                    "Silver: 2% , Gold: 2% , VIP: 2% From the consumer list",
                },
                brand9: {
                  comment:
                    "Imported dry food, medicines and canned food: Silver: 5%, Gold: 5%, VIP: 5%, Egyptian dry food: Silver: 8%, Gold: 9%, VIP: 10%, Accessories and sand: Silver: 10%, Gold: 12.5%, VIP: 15%, Grooming and care: Silver: 15%, Gold: 20%, VIP: 25%, Free nail clipping",
                },
                brand10: {
                  comment: "up to 50% Except for mobiles",
                },
                brand11: {
                  comment:
                    "Silver: 10% , Gold: 11% , VIP: 12.5% Except snacks and drinks",
                },
                brand12: {
                  comment:
                    "Candy: Silver: 15%, Gold: 20%, VIP: 25%, gift boxes: Silver: 10%, Gold: 15%, VIP: 20%, Chocolate: Silver: 10%, Gold: 12.5%, VIP: 15%, Snacks: Silver: 8%, Gold: 9%, VIP: 10%, Additional discount on any bill over 1000 EGP: Silver: 5%, Gold: 5%, VIP: 5%",
                },
              },
            },
            online: {
              title: "online",
              desc: "Allows You To Shop For Your Favorite Products At Reduced Prices. We Partner With Top Online Stores To Bring You Exclusive Deals. Save Money While Enjoying A Convenient Shopping Experience. Experience The Best Online Shopping Options At Unbeatable Prices.",
              brands: {
                brand1: {
                  comment: "Silver: 10% , Gold: 20% , VIP: 30%",
                },
                brand2: {
                  comment:
                    "Silver: 10%, Gold: 12.5%, VIP: 15% Except for offers, Elegance veil: Silver: 5%, Gold: 5%, VIP: 5%",
                },
                brand3: {
                  comment: "Silver: 8% , Gold: 10% , VIP: 12%",
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
                number: "97",
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
                  comment:
                    "فضي: 15%، الذهب: 15%، مميز: 15% داخلي و15%، الذهب: 15%، مميز: 20% خارجي",
                },
                brand2: {
                  comment: "فضي: 15%، الذهب: 15%، مميز: 15% داخلي وخارجي",
                },
                brand3: {
                  comment: "فضي: 20%، الذهب: 20%، مميز: 20%",
                },
                brand4: {
                  comment: "فضي: 25%، الذهب: 20%، مميز: 20%",
                },
                brand5: {
                  comment: "فضي: 15%، الذهب: 15%، مميز: 15% باستثناء الصبغة",
                },
                brand6: {
                  comment: "فضي: 15%، الذهب: 15%، مميز: 15% باستثناء الصبغة",
                },
                brand7: {
                  comment: "فضي: 20%، الذهب: 20%، مميز: 20%",
                },
                brand8: {
                  comment: "فضي: 25%، الذهب: 25%، : 25%",
                },
                brand9: {
                  comment:
                    "25% على الفحص - 15% على الزراعة وتقويم الأسنان والخدمات الأخرى",
                },
                brand10: {
                  comment: "خصم يصل إلى 50% على جميع العضويات",
                },
                brand11: {
                  comment: "فضي: 30% , الذهب: 30% , مميز: 30%",
                },
                brand12: {
                  comment: "خصم يصل إلى 50% على جميع العضويات",
                },
                brand13: {
                  comment: "خصم يصل إلى 15% على جميع العضويات",
                },
                brand14: {
                  comment: "فضي: 25%، الذهب: 25%، مميز: 25%",
                },
              },
            },
            educational: {
              title: "تعليمي",
              desc: "مجموعة واسعة من الصالات الرياضية ومحلات الملابس الرياضية والمدربين الخاصين والمكملات الغذائية والمزيد من الخدمات في متناول يدك",
              brands: {
                brand1: {
                  comment:
                    "10% دبلومة أمريكية - 15% على الكورسات - 20% على الدروس الخصوصية",
                },
                brand2: {
                  comment: "فضي: 8%، الذهب: 10%، مميز: 12.5%",
                },
                brand3: {
                  comment:
                    "الملخصات: فضي: 8%، الذهب: 10%، مميز: 12%، الادوات المكتبية: فضي: 8%، الذهب: 9%، مميز: 10%، العاب الاضفال: فضي: 8%، الذهب: 9%، مميز: 10%",
                },
                brand4: {
                  comment: "خصم يصل إلى 20%",
                },
              },
            },
            sports: {
              title: "رياضي",
              desc: "مجموعة واسعة من الصالات الرياضية ومحلات الملابس الرياضية والمدربين الخاصين والمكملات الغذائية والمزيد من الخدمات في متناول يدك",
              brands: {
                brand1: {
                  comment: "فضي: 10% , ذهبي: 12.5% , مميز: 15%",
                },
                brand2: {
                  comment: "فضي: 15% , ذهبي: 17.5% , مميز: 20%",
                },
                brand3: {
                  comment: "فضي: 20% , ذهبي: 35% , مميز: 50%",
                },
                brand4: {
                  comment: "فضي: 10% , ذهبي: 15% , مميز: 20%",
                },
              },
            },
            perfumesBeauty: {
              title: "تجميلي وعطور",
              desc: "لسيداتنا الجميلات، نقدم كل ما ستحتاجينه للتألق مثل الملكة، أفضل مستحضرات التجميل بأفضل الأسعار",
              brands: {
                brand1: {
                  comment: "حصريا للمميز : 25%",
                },
                brand2: {
                  comment: "فضي: 8%، الذهب: 9%، مميز: 10% باستثناء الورق",
                },
                brand3: {
                  comment:
                    "على جميع ما في المتجر: فضي: 10%، الذهب: 10%، مميز: 10%، الإكسسوارات والحقائب: حصريا للذهب , المميز: 15%، الساعات والنظارات: حصريا للمميز: 20%",
                },
                brand4: {
                  comment: "خصم يصل إلي 20% علي السعر الأساسي ما عدا العروض",
                },
                brand5: {
                  comment: "خصم يصل إلى 50% لجميع العضويات",
                },
                brand6: {
                  comment: "فضي: 10%، الذهب: 12.5%، مميز: 15% على الشغل اليدوي",
                },
                brand7: {
                  comment: "فضي: 10%، الذهب: 15%، مميز: 20%",
                },
                brand8: {
                  comment: "فضي: 10%، الذهب: 15%، مميز: 20%",
                },
              },
            },
            cafeRestaurant: {
              title: "مطاعم وكافيهات",
              desc: "تضمن خدمتنا الاستمتاع بوجباتك المفضلة بتكلفة أقل. نتعاون مع أفضل المطاعم لتقديم عروض حصرية. وفر المال أثناء تناول الطعام اللذيذ. استمتع بأفضل خيارات الطعام بأسعار لا تقاوم.",
              brands: {
                brand1: {
                  comment: "فضي: 10%، الذهب: 12.5%، مميز: 15%",
                },
                brand2: {
                  comment:
                    "فضي: 10%، الذهبي: 12.5%، مميز: 15% العروض غير متضمنة",
                },
                brand3: {
                  comment: "فضي: 10%، الذهب: 15%، مميز: 20%",
                },
                brand4: {
                  comment:
                    "الآيس كريم والوافلز والمشروبات: الفضية: 10%، الذهبية: 12.5%، مميز: 15%، الحلويات والإفطار: الفضية: 8%، الذهبية: 9%، مميز: 10%",
                },
                brand5: {
                  comment: "خصم 10% على المطاعم والكافيهات - حصريا للمميز",
                },
                brand6: {
                  comment: "فضي: 10%، الذهب: 15%، مميز: 20%",
                },
                brand7: {
                  comment:
                    "المنيو والإفطار: الذهبي: 10%، مميز: 15%، شريحة لحم: مميز: 20%",
                },
                brand8: {
                  comment:
                    "التيك آواي: الفضية: 8%، الذهبية: 9%، مميز: 10%، الصالة: الفضية: 10%، الذهبية: 12.5 %، مميز: 15%، التوصيل مجاني",
                },
                brand9: {
                  comment:
                    "الصالة: فضي: 8%، الذهب: 10%، مميز: 12%، التوصيل مجاني",
                },
                brand10: {
                  comment: "الصالة: فضي: 5%، الذهب: 5%، مميز: 5%",
                },
                brand11: {
                  comment: "خصم يصل إلى 5%، بإستثناء العروض",
                },
                brand12: {
                  comment:
                    "الفضية: 10%، الذهبي: 12.5%، مميز: 15% باستثناء العروض، الساندويتشات: الفضية: 10%، الذهبي: 15%، مميز: 20%",
                },
                brand13: {
                  comment:
                    "الساندويتشات: الفضية: 10%، الذهبية: 12.5%، مميز: 15%",
                },
                brand14: {
                  comment: "فضي: 8%، الذهبي: 9%، مميز: 10% العروض غير متضمنة",
                },
                brand15: {
                  comment:
                    "فضي: 8%، الذهبي: 9%، مميز: 10% العروض غير متضمنة, توصيل مجاني على لأي فاتورة تتعدي قيمتها 500 جنية",
                },
                brand16: {
                  comment: "فضي: 10%، الذهب: 12.5%، مميز: 15%",
                },
                brand17: {
                  comment:
                    "فضي: 10%، الذهب: 12.5%، مميز: 15% مشروبات، فضي: 8%، الذهب: 9%، مميز: 10% خامات",
                },
                brand18: {
                  comment: "فضي: 8%، الذهب: 9%، مميز: 10%",
                },
                brand19: {
                  comment:
                    "فضي: 10%، الذهب: 15%، مميز: 20% مشروبات، فضي: 8%، الذهب: 9%، مميز: 10% خامات",
                },
                brand20: {
                  comment: "فضي: 8%، الذهب: 10%، مميز: 12%",
                },
              },
            },
            clothes: {
              title: "ملابس",
              desc: "شراء أزياءك المفضلة بأسعار مخفضة. نتعاون مع أفضل العلامات التجارية للملابس لتقديم عروض حصرية. وفر المال بينما تبقى أنيقًا وعصريًا. استمتع بأفضل خيارات الموضة بأسعار لا تقاوم.",
              brands: {
                brand1: {
                  comment:
                    "الفضي: 0%، الذهبي: 5%، مميز: 5% تضاف إلى نسبة الخصم المتوفرة في الفرع",
                },
                brand2: {
                  comment:
                    "الفضي: 0%، الذهبي: 5%، مميز: 5% تضاف إلى نسبة الخصم المتوفرة في الفرع",
                },
                brand3: {
                  comment: "فضي: 20% , ذهبي: 35% , مميز: 50%",
                },
                brand4: {
                  comment: "فضي: 20% , ذهبي: 35% , مميز: 50%",
                },
                brand5: {
                  comment: "فضي: 10%، الذهب: 12.5%، مميز: 15%",
                },
                brand6: {
                  comment: "فضي: 10% , ذهبي: 15% , مميز: 20%",
                },
                brand7: {
                  comment: "فضي: 10% , ذهبي: 15% , مميز: 20%",
                },
                brand8: {
                  comment:
                    "الاكسسوارات: فضة: 8%، ذهب: 9%، مميز: 10% - الملابس: فضة: 10%، ذهب: 12.5%، مميز: 15%",
                },
                brand9: {
                  comment: "فضي: 10%، الذهب: 12.5%، مميز: 15%",
                },
              },
            },
            various: {
              title: "متنوع",
              desc: "ستجد هنا العلامات التجارية التي تقدم الخدمات التي ستحتاجها طوال يومك، سواء كانت سيارتك تحتاج إلى زيت أو كنت تشتري ملابس جديدة، فستكون دائمًا هنا للحصول على أفضل جودة وأفضل سعر في السوق",
              brands: {
                brand1: {
                  comment: "فضي: 8% , ذهبي: 9% , مميز: 10%",
                },
                brand2: {
                  comment:
                    "خصم 5% على قاعة المؤتمرات - خصم 7% على غرف الفندق - حصرياً للمميز",
                },
                brand3: {
                  comment: "فضي: 5% , ذهبي: 5% , مميز: 5%",
                },
                brand4: {
                  comment: "فضي: 5% , ذهبي: 5% , مميز: 5%",
                },
                brand5: {
                  comment: "فضي: 5% , ذهبي: 5% , مميز: 5%",
                },
                brand6: {
                  comment:
                    "الأنتريه، الركنة، المطابخ، السفرة والرفايع: فضي: 10%، ذهبي: 12.5%، مميز: 15%، غرف النوم والأطفال: فضي: 10%، ذهبي: 15%، مميز: 20%",
                },
                brand7: {
                  comment: "خصم يصل إلى 20%",
                },
                brand8: {
                  comment: "فضي: 2%، الذهب: 2%، مميز: 2% من قائمة المستهلك",
                },
                brand9: {
                  comment:
                    "أغذية جافة مستوردة وأدوية ومعلبات: فضية: 5%، ذهبية: 5%، مميز: 5%، أغذية جافة مصرية: فضية: 8%، ذهبية: 9%، مميز: 10%، إكسسوارات ورمال: فضية: 10%، ذهبية: 12.5%، مميز: 15%، العناية : فضية: 15%، ذهبية: 20%، مميز: 25%، قص أظافر مجاني",
                },
                brand10: {
                  comment: "خصم يصل إلى 50%",
                },
                brand11: {
                  comment:
                    "فضي: 10%، الذهبي: 11%، مميز: 12.5% ​​باستثناء السناكس و المشروبات",
                },
                brand12: {
                  comment:
                    "الحلوى: الفضية: 15%، الذهبية: 20%، مميز: 25%، صناديق الهدايا: الفضية: 10%، الذهبية: 15%، مميز: 20%، الشوكولاتة: الفضية: 10%، الذهبية: 12.5%، مميز: 15%، السناكس: الفضية: 8%، الذهبية: 9%، مميز: 10%، خصم إضافي على أي فاتورة تزيد عن 1000 جنيه مصري: الفضية: 5%، الذهبية: 5%، مميز: 5%",
                },
              },
            },
            online: {
              title: "متاجر إلكترونية",
              desc: "تتيح لك خدمتنا التسوق لشراء منتجاتك المفضلة بأسعار مخفضة. نتعاون مع أفضل المتاجر الإلكترونية لتقديم عروض حصرية. وفر المال أثناء الاستمتاع بتجربة تسوق مريحة. استمتع بأفضل خيارات التسوق عبر الإنترنت بأسعار لا تقاوم.",
              brands: {
                brand1: {
                  comment: "فضي: 10% , ذهبي: 20% , مميز: 30%",
                },
                brand2: {
                  comment:
                    "فضي: 10%، الذهب: 12.5%، مميز: 15% باستثناء العروض، طرح الأليجانس: فضي: 5%، الذهب: 5%، مميز: 5%",
                },
                brand3: {
                  comment: "فضي: 8% , ذهبي: 10% , مميز: 12%",
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
