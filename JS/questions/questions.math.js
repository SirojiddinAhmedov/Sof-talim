// JS/questions/questions.math.js
export const QUESTIONS_MATH = [
  // 1-5: Oson lekin diqqat talab qiladi
  {
    id: 1,
    q: "Agar sizda 3 ta olma bo'lsa va siz ulardan 2 tasini olsangiz, sizda nechta olma bor?",
    options: ["1 ta", "2 ta", "3 ta", "5 ta"],
    answer: 1 // Siz olgan olmalar sizniki bo'ladi
  },
  {
    id: 2,
    q: "Sinfda 12 ta bola bor. Yarmi qiz bolalar, qolganlari esa o'g'il bolalar. Sinfda nechta o'g'il bola bor?",
    options: ["12 ta", "24 ta", "6 ta", "0 ta"],
    answer: 2
  },
  {
    id: 3,
    q: "Soat 3:00 ni ko'rsatmoqda. Agar soat mili 180 gradusga aylansa, soat necha bo'ladi?",
    options: ["6:00", "9:00", "12:00", "3:30"],
    answer: 1 // 180 gradus qarama-qarshi tomonga (9 raqamiga) o'tadi
  },
  {
    id: 4,
    q: "Qaysi raqamni teskari qilsangiz, u qiymati bo'yicha kichrayadi?",
    options: ["0", "8", "6", "9"],
    answer: 3 // 9 teskari bo'lsa 6 bo'ladi
  },
  {
    id: 5,
    q: "Tovuq 2 ta oyoqda turganda 3 kg bo'lsa, 1 ta oyoqda turganda necha kg bo'ladi?",
    options: ["1.5 kg", "3 kg", "6 kg", "0 kg"],
    answer: 1
  },

  // 6-15: O'rta daraja (Mantiqiy hisob-kitob)
  {
    id: 6,
    q: "Tungi soat 12 da yomg'ir yog'ayotgan bo'lsa, 72 soatdan keyin quyoshli ob-havo bo'lishi mumkinmi?",
    options: ["Ha", "Yo'q", "Faqat yozda", "Ehtimoli bor"],
    answer: 1 // 72 soat - roppa-rosa 3 sutka, yana tun bo'ladi, quyosh chiqmaydi
  },
  {
    id: 7,
    q: "Bir tayoqning 2 ta uchi bor. Yarimta tayoqning nechta uchi bor?",
    options: ["1 ta", "2 ta", "4 ta", "Uchi bo'lmaydi"],
    answer: 1 // Tayoqni kessangiz ham baribir 2 ta uchi bo'ladi
  },
  {
    id: 8,
    q: "Daraxtda 10 ta qush o'tiribdi. Ovchi bitta qushni otib tushirdi. Daraxtda nechta qush qoldi?",
    options: ["9 ta", "1 ta", "0 ta", "10 ta"],
    answer: 2 // Qolganlari uchib ketadi
  },
  {
    id: 9,
    q: "Bir kilogramm temir og'irmi yoki bir kilogramm paxtami?",
    options: ["Temir", "Paxta", "Ikkalasi teng", "Vazni yo'q"],
    answer: 2
  },
  {
    id: 10,
    q: "Ota o'zining 2 ta o'g'liga 10 dollarni shunday bo'lib berdiki, biriga ikkinchisidan 2 dollar ko'p tegdi. Kam olgan o'g'il necha dollar oldi?",
    options: ["4 dollar", "5 dollar", "3 dollar", "2 dollar"],
    answer: 0 // 4 va 6 dollar
  },
 {
    id: 11,
    q: "Agar 3 ta rasmda jami 12 ta burchak bo'lsa va ularning har biri bir xil shakl bo'lsa, bu qanday shakllar?",
    options: ["Kvadratlar", "Uchburchaklar", "Bechburchaklar", "Aylanalar"],
    answer: 1 // 12 / 3 = 4. Har bir rasmda 4 ta burchak bo'lishi kerak. Lekin mantiqan: To'rtburchak va Kvadrat ikkalasi ham 4 burchakli. Ammo javoblar orasida faqat bittasi mantiqiy to'g'ri keladi (12/3 = 4).
  },
  {
    id: 12,
    q: "Agar 5 ta mushuk 5 ta sichqonni 5 minutda tutsa, 100 ta mushuk 100 ta sichqonni necha minutda tutadi?",
    options: ["100 minut", "5 minut", "1 minut", "50 minut"],
    answer: 1 // Har bir mushuk bitta sichqonni 5 minutda tutadi
  },
  {
    id: 13,
    q: "1 dan 100 gacha bo'lgan sonlar orasida nechta '9' raqami bor?",
    options: ["10 ta", "11 ta", "19 ta", "20 ta"],
    answer: 3 // 9, 19, ..., 89 (9 ta), 90, 91...99 (11 ta). Jami 20 ta.
  },
  {
    id: 14,
    q: "Salyanka (shilliqqurt) 10 metrli quduqdan chiqmoqchi. U kunduzi 3 metr tepaga chiqadi, kechasi esa 2 metr pastga tushadi. U necha kunda tepaga chiqib oladi?",
    options: ["10 kunda", "8 kunda", "7 kunda", "9 kunda"],
    answer: 1 // 8-kuni u 3 metr chiqadi va quduqdan chiqib ketadi (pastga tushmaydi)
  },
  {
    id: 15,
    q: "Uchburchakning bir burchagini kesib tashlasak, unda nechta burchak qoladi?",
    options: ["2 ta", "3 ta", "4 ta", "0 ta"],
    answer: 2 // Burchak kesilsa, yangi burchak hosil bo'ladi
  },

  // 16-25: Qiyin va abstrakt (Elementery o'quvchi yiqiladigan joyi)
  {
    id: 16,
    q: "Qaysi son o'zining kvadratidan kattaroq?",
    options: ["10", "1", "0.5", "-5"],
    answer: 2 // 0.5 * 0.5 = 0.25. (0.5 > 0.25)
  },
  {
    id: 17,
    q: "To'rtta 9 raqami bilan qanday qilib 100 hosil qilish mumkin?",
    options: ["99 + 9/9", "9 * 9 + 9 + 9", "999 / 9", "99 + 9 - 9"],
    answer: 0
  },
  {
    id: 18,
    q: "Bir sonni 0 ga bo'lganda natija nima bo'ladi?",
    options: ["0", "1", "Cheksizlik", "Bo'lish mumkin emas"],
    answer: 3
  },
  {
    id: 19,
    q: "Agar g'ishtning vazni 1 kg va yana yarimta g'ishtga teng bo'lsa, bitta g'isht necha kg?",
    options: ["1.5 kg", "2 kg", "1 kg", "2.5 kg"],
    answer: 1 // x = 1 + 0.5x => 0.5x = 1 => x = 2
  },
  {
    id: 20,
    q: "Qog'oz varag'ini 3 marta bukladingiz. Endi uni o'rtasidan teshsangiz, varaqni yoyganda nechta teshik bo'ladi?",
    options: ["3 ta", "6 ta", "8 ta", "4 ta"],
    answer: 2 // 2^3 = 8
  },
  {
    id: 21,
    q: "0 dan 10 gacha bo'lgan sonlar ichida nechta 'tub son' (prime numbers) bor?",
    options: ["3 ta", "4 ta", "5 ta", "6 ta"],
    answer: 1 // 2, 3, 5, 7
  },
  {
    id: 22,
    q: "Romb va kvadratning umumiy o'xshashligi nimada?",
    options: ["Burchaklari 90 gradus", "Tomonlari teng", "Diagonallari teng", "Yuzalari teng"],
    answer: 1
  },
  {
    id: 23,
    q: "Ikki xonali sonning raqamlari yig'indisi 9 ga teng. Agar unga 9 qo'shilsa, raqamlari o'rnini almashtiradi. Bu son necha?",
    options: ["18", "45", "36", "27"],
    answer: 1 // 45 + 9 = 54
  },
  {
    id: 24,
    q: "Agar $x + y = 10$ va $x - y = 2$ bo'lsa, $x$ va $y$ ning ko'paytmasi nechaga teng?",
    options: ["20", "24", "16", "12"],
    answer: 1 // x=6, y=4. 6*4=24
  },
  {
    id: 25,
    q: "Marafonda yuguryapsiz. Siz ikkinchi o'rindagi odamni quvib o'tdingiz. Hozir siz nechanchi o'rindasiz?",
    options: ["Birinchi", "Ikkinchi", "Uchinchi", "Oxirgi"],
    answer: 1 // Ikkinchi odamning o'rnini olasiz, birinchi hali oldinda
  }
];