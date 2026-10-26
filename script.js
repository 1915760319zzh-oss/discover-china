function showAttraction(attractionId) {
    const attractions = {
        'great-wall': {
            name: 'Great Wall of China',
            description: 'The Great Wall is one of the most iconic landmarks in the world, stretching over 13,000 miles across northern China. Built over centuries to protect against invasions, it offers breathtaking views and a glimpse into China\'s ancient history.',
            highlights: ['Mutianyu Section - less crowded, great for photos', 'Badaling Section - most accessible from Beijing', 'Jinshanling Section - perfect for hiking enthusiasts', 'Sunrise and sunset views are spectacular'],
            transportation: 'From Beijing: Take a bus or train to Badaling (1.5 hours) or Mutianyu (2 hours). Private tours available.',
            accommodation: 'Hotels available in Beijing city center. For a unique experience, stay in renovated Great Wall watchtowers at Mutianyu.',
            food: 'Local restaurants serve traditional Chinese cuisine. Try Peking Duck in Beijing before your visit.',
            tips: 'Best visited in spring (April-May) or autumn (September-October). Wear comfortable shoes and bring water. Avoid national holidays when it gets extremely crowded.'
        },
        'the-bund': {
            name: 'The Bund, Shanghai',
            description: 'The Bund is Shanghai\'s most famous waterfront area, featuring a stunning contrast between colonial-era European buildings on one side and the futuristic Pudong skyline on the other. It\'s the perfect place to experience Shanghai\'s blend of old and new.',
            highlights: ['Night views with illuminated skyscrapers', 'Historical architecture from the 1920s-30s', 'Huangpu River cruise', 'Nanjing Road shopping street nearby'],
            transportation: 'Easy access via Shanghai Metro Line 2 (Nanjing East Road station). The area is pedestrian-friendly.',
            accommodation: 'Luxury hotels like Fairmont Peace Hotel overlook the Bund. Budget options available in nearby Jing\'an district.',
            food: 'Shanghai is famous for xiaolongbao (soup dumplings). Try Din Tai Fung or local street food stalls.',
            tips: 'Visit at sunset for the best photos. The light show on the Pudong side starts at 7 PM. Weekday mornings are less crowded.'
        },
        'panda-base': {
            name: 'Chengdu Research Base of Giant Panda Breeding',
            description: 'The world\'s largest panda breeding center, home to over 200 giant pandas. Watch these adorable creatures eat bamboo, play, and sleep in a natural habitat setting.',
            highlights: ['Baby pandas in the nursery (seasonal)', 'Red pandas in the forest area', 'Panda volunteer program (advance booking required)', 'Educational exhibits on conservation'],
            transportation: 'From Chengdu city center: Take bus 902 or a taxi (40 minutes). Metro Line 3 to Panda Avenue station, then shuttle bus.',
            accommodation: 'Stay in Chengdu city center. Recommended areas: Chunxi Road for shopping, Wuhou Shrine for culture.',
            food: 'Chengdu is the UNESCO City of Gastronomy. Must-try: Sichuan hotpot, mapo tofu, dan dan noodles. Warning: it\'s SPICY!',
            tips: 'Arrive early (7:30 AM) to see pandas during feeding time. They\'re most active in the morning. Afternoons they usually sleep. Book tickets online in advance.'
        },
        'west-lake': {
            name: 'West Lake, Hangzhou',
            description: 'A UNESCO World Heritage site, West Lake has inspired Chinese poets and artists for centuries. Its serene waters, pagodas, and gardens represent the ideal of classical Chinese landscape design.',
            highlights: ['Leifeng Pagoda with panoramic views', 'Three Pools Mirroring the Moon (on RMB 1 yuan bill)', 'Lingyin Temple - ancient Buddhist monastery', 'Lotus flowers in summer'],
            transportation: 'High-speed train from Shanghai (1 hour). West Lake is walkable, or rent a bicycle. Boat tours available.',
            accommodation: 'Lakeside hotels offer beautiful views. Budget options in Hangzhou city center are well-connected.',
            food: 'Hangzhou cuisine is lighter than Sichuan. Try Dongpo pork, West Lake fish, and Longjing tea (grown locally).',
            tips: 'Best in spring (March-May) for cherry blossoms or autumn (September-November) for clear skies. Early morning boat rides are magical.'
        },
        'li-river': {
            name: 'Li River, Guilin',
            description: 'The Li River cruise is one of China\'s most iconic experiences. Karst mountains, bamboo groves, and traditional villages create a landscape that looks like a traditional Chinese painting come to life.',
            highlights: ['83km cruise from Guilin to Yangshuo', 'Nine Horse Mural Hill', 'Yellow Cloth Shoal (20 yuan note backdrop)', 'Yangshuo\'s West Street nightlife'],
            transportation: 'Fly or take high-speed train to Guilin. Cruise downstream to Yangshuo (4-5 hours). Return by bus.',
            accommodation: 'Yangshuo offers boutique hotels and hostels. Stay near West Street for nightlife or in the countryside for peace.',
            food: 'Try beer fish (Yangshuo specialty), Guilin rice noodles, and stuffed liu san jie.',
            tips: 'Best season: April-October. Bring rain gear (weather changes quickly). The cruise can be touristy - consider a bamboo raft for a more intimate experience.'
        },
        'zhangjiajie': {
            name: 'Zhangjiajie National Forest Park',
            description: 'The towering sandstone pillars that inspired the floating mountains in Avatar. Zhangjiajie is a surreal landscape of over 3,000 quartzite columns, some rising over 1,000 meters.',
            highlights: ['Avatar Hallelujah Mountain', 'Glass Bridge (world\'s longest and highest)', 'Tianmen Mountain with Heaven\'s Gate', 'Bailong Elevator (world\'s tallest outdoor elevator)'],
            transportation: 'Fly to Zhangjiajie Hehua Airport or take train from Changsha. Park shuttle buses connect major sites.',
            accommodation: 'Stay in Wulingyuan district (near park entrance) or Zhangjiajie city. Options from budget hostels to luxury resorts.',
            food: 'Local Tujia cuisine. Try three-pot stew (sanxia guo) and spicy fish head.',
            tips: 'Allow 2-3 days minimum. The park is huge. Early morning avoids crowds and mist clears for best views. Bring layers - weather changes with altitude.'
        },
        'huangshan': {
            name: 'Huangshan (Yellow Mountain)',
            description: 'Famous for its "four wonders": bizarre pines, grotesque rocks, sea of clouds, and hot springs. Huangshan has been the subject of Chinese art and literature for over 1,000 years.',
            highlights: ['Sunrise from Bright Summit', 'Flying-over Rock formation', 'West Sea Grand Canyon', 'Hot springs at the mountain base'],
            transportation: 'High-speed train to Huangshan North station, then bus to Tangkou (1 hour). Cable car or hike up the mountain.',
            accommodation: 'Stay on the mountain (book well in advance - limited rooms) or in Tangkou at the base. Mountain hotels are basic but worth it for sunrise.',
            food: 'Anhui cuisine features stone ear fungus, bamboo shoots, and stinky tofu (not as bad as it sounds!).',
            tips: 'Best in autumn (September-November) for clear skies and colorful foliage. The hike up is strenuous - take the cable car if you\'re not fit. Stay overnight for sunrise.'
        },
        'lijiang': {
            name: 'Lijiang Old Town',
            description: 'A UNESCO World Heritage site, Lijiang is the heart of Naxi minority culture. Cobblestone streets, traditional wooden houses, and canals create a romantic atmosphere in the shadow of Jade Dragon Snow Mountain.',
            highlights: ['Old Town nightlife and bars', 'Jade Dragon Snow Mountain', 'Blue Moon Valley', 'Naxi ethnic culture and Dongba script'],
            transportation: 'Fly to Lijiang Sanyi Airport or take train from Kunming (3 hours). Old Town is pedestrian-only.',
            accommodation: 'Boutique guesthouses (kezan) in Old Town offer authentic experience. Book early for traditional courtyard rooms.',
            food: 'Try Naxi specialties: crossing-bridge noodles, Yak meat hotpot, and Lijiang Baba (flatbread).',
            tips: 'Altitude is 2,400m - take it easy the first day. Early morning and late evening are best to avoid crowds. The old town gets very touristy - explore side streets for authenticity.'
        },
        'jiuzhaigou': {
            name: 'Jiuzhaigou Valley',
            description: 'A fairy-tale landscape of multi-colored lakes, waterfalls, and snow-capped peaks. Jiuzhaigou\'s crystal-clear lakes display incredible colors due to mineral deposits and algae.',
            highlights: ['Five Flower Lake (most colorful)', 'Nuorilang Waterfall (widest in China)', 'Long Lake (largest and deepest)', 'Panda Lake'],
            transportation: 'Fly to Jiuzhai Huanglong Airport (limited flights) or bus from Chengdu (8-10 hours). Park shuttle buses available.',
            accommodation: 'Hotels outside the park entrance range from budget to luxury. Stay in Jiuzhaigou county.',
            food: 'Tibetan and Qiang minority cuisine. Try yak meat, butter tea, and tsampa (roasted barley flour).',
            tips: 'Best in autumn (October) for colorful forests. Arrive when park opens (7 AM) to beat crowds. The park is at 2,000-3,000m altitude - acclimatize slowly.'
        },
        'emei': {
            name: 'Emei Mountain',
            description: 'One of China\'s four sacred Buddhist mountains, Emei is home to the world\'s tallest golden Buddha and over 1,000 temples. The mountain\'s biodiversity and misty peaks create a spiritual atmosphere.',
            highlights: ['Golden Summit above the clouds', 'Ten-Thousand-Year Temple', 'Wild Tibetan macaques', 'Sunrise and sea of clouds'],
            transportation: 'High-speed train from Chengdu to Emeishan station (1.5 hours), then bus to the mountain. Cable car to Golden Summit.',
            accommodation: 'Temples on the mountain offer basic lodging. Hotels at the base or Golden Summit (book in advance).',
            food: 'Emei specialties: Emei tofu, Zhangcha duck (tea-smoked), and wild mushrooms.',
            tips: 'Allow 2 days minimum. The hike is challenging - consider cable car. Watch out for monkeys (they steal food and belongings). Best in autumn for clear views.'
        },
        'fenghuang': {
            name: 'Fenghuang Ancient Town',
            description: 'A beautifully preserved ancient town in Hunan province, Fenghuang (Phoenix) is famous for its Miao and Tujia minority stilted houses along the Tuojiang River. The town is especially magical at night when lanterns illuminate the water.',
            highlights: ['Tuojiang River at night', 'Miao minority culture and crafts', 'Anc city walls and gates', 'Rainbow Bridge'],
            transportation: 'Train to Jishou or Huaihua, then bus to Fenghuang (1 hour). The town is walkable.',
            accommodation: 'Riverside guesthouses offer beautiful views. Stay in traditional stilted houses for authentic experience.',
            food: 'Try Miao specialties: sour fish soup, blood tofu, and rice wine.',
            tips: 'Best in spring or autumn. Early morning before tourists arrive is magical. The town is less commercialized than Lijiang but still popular with Chinese tourists.'
        },
        'kanas': {
            name: 'Kanas Lake, Xinjiang',
            description: 'A mysterious alpine lake in the Altai Mountains that changes color with the seasons. Surrounded by Siberian taiga and inhabited by Tuva and Kazakh nomads, Kanas feels like a different world.',
            highlights: ['Color-changing lake (blue to green to silver)', 'Three Bays: Immortal Bay, Moon Bay, Dragon Bay', 'Tuva villages with wooden houses', 'Autumn colors (September-October)'],
            transportation: 'Fly to Burqin or Kanas Airport, or drive from Urumqi (6 hours). Park shuttle buses required.',
            accommodation: 'Yurts and guesthouses in the park. Wooden lodges available. Book well in advance.',
            food: 'Kazakh and Tuva cuisine: lamb skewers, naan bread, yogurt, and mare\'s milk (kumis).',
            tips: 'Best in autumn (late September-early October) for golden forests. The park is only accessible June-October. Bring warm clothes - nights are cold even in summer.'
        },
        'lushan': {
            name: 'Lushan Mountain',
            description: 'A famous retreat from summer heat, Lushan is known for its waterfalls, historical villas, and misty landscapes. It was a summer resort for foreign diplomats and Chinese leaders in the early 20th century.',
            highlights: ['Sandie Spring Waterfall (three-tiered)', 'Flower Path (immortalized in poetry)', 'Historical villas from 1920s', 'Hanpokou viewpoint'],
            transportation: 'Train to Jiujiang, then bus or cable car up the mountain (1 hour). Local buses on the mountain.',
            accommodation: 'Hotels in Guling town on the mountain. Many historical villas converted to guesthouses.',
            food: 'Try Lushan stone fish, stone fungus, and cloud mist tea (grown on the mountain).',
            tips: 'Best in summer (cool temperatures) or autumn. The mountain has a rich political history - visit the Lushan Conference site. Allow 2-3 days to explore.'
        },
        'three-gorges': {
            name: 'Three Gorges, Yangtze River',
            description: 'The Three Gorges (Qutang, Wu, and Xiling) are a series of dramatic river valleys on the Yangtze River. The area is famous for its cliffs, the Three Gorges Dam, and traditional riverside villages.',
            highlights: ['Three Gorges Dam (world\'s largest hydroelectric project)', 'Lesser Three Gorges cruise', 'Shennong Stream with hanging coffins', 'Fengdu Ghost City'],
            transportation: 'Most visitors take a 3-5 day cruise from Chongqing to Yichang (downstream) or reverse. Flights to Chongqing available.',
            accommodation: 'Cruise ships range from budget to luxury 5-star. Cabins have private balconies.',
            food: 'Cruises include meals featuring Sichuan and Hubei cuisine. Try spicy fish and local vegetables.',
            tips: 'Best season: April-October. Downstream cruise (4 days) is faster than upstream (5 days). The dam visit is educational but the natural gorges are the highlight.'
        },
        'huanglong': {
            name: 'Huanglong',
            description: 'A UNESCO World Heritage site famous for its colorful calcite pools, snow-capped peaks, and forests. The terraced travertine formations look like a dragon\'s scales, hence the name "Yellow Dragon".',
            highlights: ['3,400+ colorful calcite pools', 'Five-Colored Pond (most spectacular)', 'Snow Mountain Temple', 'Waterfalls and forests'],
            transportation: 'Bus from Chengdu (8-10 hours) or fly to Jiuzhai Huanglong Airport, then bus (1.5 hours). Cable car available.',
            accommodation: 'Hotels outside the park. Most visitors combine with Jiuzhaigou (1 hour away).',
            food: 'Similar to Jiuzhaigou - Tibetan and Qiang cuisine.',
            tips: 'Altitude is 3,000-3,600m - acclimatize slowly. Best combined with Jiuzhaigou visit. Allow 4-5 hours in the park. Cable car recommended to save energy.'
        }
    };

    const attraction = attractions[attractionId];
    if (!attraction) return;

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2>${attraction.name}</h2>
            <p class="modal-description">${attraction.description}</p>
            
            <h3>Highlights</h3>
            <ul>
                ${attraction.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
            
            <h3>Transportation</h3>
            <p>${attraction.transportation}</p>
            
            <h3>Accommodation</h3>
            <p>${attraction.accommodation}</p>
            
            <h3>Food</h3>
            <p>${attraction.food}</p>
            
            <h3>Tips</h3>
            <p>${attraction.tips}</p>
        </div>
    `;
    document.body.appendChild(modal);
}

function openNewTopic() {
    alert('Forum posting feature coming soon! For now, please email your topics to forum@discoverchina.com');
}

window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.remove();
    }
}
