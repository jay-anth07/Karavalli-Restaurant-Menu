
    const restaurantData = {
      categories: [
        { id: 'salads', name: 'Salads', icon: 'salad' },
        { id: 'icecreams', name: 'Ice Creams', icon: 'ice-cream' },
        { id: 'juices', name: 'Juices', icon: 'cup-soda' },
        { id: 'rices', name: 'Rices', icon: 'utensils' },
        { id: 'biriyanis', name: 'Biriyanis', icon: 'flame' },
        { id: 'tiffins', name: 'Tiffins', icon: 'cooking-pot' },
        { id: 'burgers', name: 'Burgers', icon: 'sandwich' },
        { id: 'cooldrinks', name: 'Cool Drinks', icon: 'glass-water' }
      ],
      items: [
        /* ==================== 1. SALADS (15 UNIQUE DISHES) ==================== */
        {
          id: 'sal-1',
          categoryId: 'salads',
          name: 'Crunchy Coastal Garden Toss',
          punchline: 'Crisp Greens, Toasted Spices.',
          price: 240,
          originalPrice: 280,
          rating: 4.8,
          desc: 'Organic cucumbers, tender baby corn, cherry tomatoes, and shaved coconut tossed in curry leaf lemon dressing.',
          image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'sal-2',
          categoryId: 'salads',
          name: 'Spiced Paneer Tikka Salad',
          punchline: 'Smoky Cottage Cheese Delight.',
          price: 290,
          originalPrice: 340,
          rating: 4.9,
          desc: 'Chargrilled cottage cheese cubes over crisp garden bell peppers, mint emulsion, and roasted melon seeds.',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'sal-3',
          categoryId: 'salads',
          name: 'Avocado Sprouts & Pomegranate Bowl',
          punchline: 'Vitality in Every Crisp Spoon.',
          price: 320,
          originalPrice: 380,
          rating: 4.7,
          desc: 'Sprouted mung beans, buttery avocado slices, ruby pomegranate pearls, and roasted cumin citrus vinaigrette.',
          image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'sal-4',
          categoryId: 'salads',
          name: 'Raw Mango & Grated Coconut Koshimbir',
          punchline: 'Tangy Coastal Heritage Crunch.',
          price: 210,
          originalPrice: 250,
          rating: 4.9,
          desc: 'Finely julienned raw mangoes, fresh tender coconut, and split Bengal gram tempered with mustard seeds.',
          image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'sal-5',
          categoryId: 'salads',
          name: 'Roasted Beetroot & Goat Cheese Medley',
          punchline: 'Earthy Sweetness & Creamy Tang.',
          price: 310,
          originalPrice: 360,
          rating: 4.8,
          desc: 'Wood-roasted baby beetroots tossed with crumbled artisan goat cheese, baby arugula, and caramelized walnuts.',
          image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'sal-6',
          categoryId: 'salads',
          name: 'Spicy Chickpea & Cucumber Sundal Salad',
          punchline: 'South Indian Coastal Power Bowl.',
          price: 220,
          originalPrice: 260,
          rating: 4.7,
          desc: 'Boiled Kabuli chana tossed with diced English cucumbers, curry leaf tadka, and freshly crushed black pepper.',
          image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'sal-7',
          categoryId: 'salads',
          name: 'Coastal Quinoa & Charred Bell Peppers',
          punchline: 'Supergrain Infused With Coastal Lime.',
          price: 340,
          originalPrice: 390,
          rating: 4.8,
          desc: 'Fluffy organic quinoa mixed with fire-charred bell peppers, edamame, and cold-pressed sesame citrus drizzle.',
          image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'sal-8',
          categoryId: 'salads',
          name: 'Smoked Tofu Greens & Toasted Sesame Crunch',
          punchline: 'High-Protein Plant Nourishment.',
          price: 280,
          originalPrice: 330,
          rating: 4.6,
          desc: 'Hickory smoked tofu cubes rested on a bed of fresh hydro garden lettuce with a roasted sesame garlic vinaigrette.',
          image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'sal-9',
          categoryId: 'salads',
          name: 'Crispy Okra & Cherry Tomato Toss',
          punchline: 'Signature Southern Crunch & Zest.',
          price: 250,
          originalPrice: 290,
          rating: 4.9,
          desc: 'Thinly sliced crispy fried okra tossed with heirloom cherry tomatoes, red onions, and chaat lime masala.',
          image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'sal-10',
          categoryId: 'salads',
          name: 'Spiced Lentil & Green Apple Salad',
          punchline: 'Crisp Orchard Bite Meets Earthy Lentils.',
          price: 260,
          originalPrice: 300,
          rating: 4.8,
          desc: 'Crispy Granny Smith apple batons paired with warm sprouted green lentils and honey-mustard vinaigrette.',
          image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'sal-11',
          categoryId: 'salads',
          name: 'Charred Sweet Corn & Coriander Lime Slaw',
          punchline: 'Sweet Smoky Summer Cob Essence.',
          price: 230,
          originalPrice: 270,
          rating: 4.7,
          desc: 'Fire-roasted sweet corn kernels, shredded purple cabbage, fresh coriander sprigs, and lemon chili dressing.',
          image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'sal-12',
          categoryId: 'salads',
          name: 'Curried Broccoli & Shaved Almond Bowl',
          punchline: 'Mild Warm Spice with Toasted Nut Crunch.',
          price: 290,
          originalPrice: 340,
          rating: 4.8,
          desc: 'Blanched tender broccoli florets seasoned with mild Madras curry emulsion, golden raisins, and toasted almond flakes.',
          image: 'https://images.unsplash.com/photo-1561043433-aaf687c4cf04?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'sal-13',
          categoryId: 'salads',
          name: 'Heritage Papaya & Fresh Mint Ribbon Bowl',
          punchline: 'Tropical Crispness & Cooling Herb.',
          price: 220,
          originalPrice: 260,
          rating: 4.7,
          desc: 'Delicately shaved semi-ripe papaya ribbons, fresh garden mint, crushed roasted peanuts, and tamarind glaze.',
          image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'sal-14',
          categoryId: 'salads',
          name: 'Western Ghats Herb & Citrus Salad',
          punchline: 'Wild Forest Botanicals & Mandarin Oranges.',
          price: 330,
          originalPrice: 380,
          rating: 4.9,
          desc: 'Indigenous mountain herbs, sweet Nagpur orange segments, cucumber spheres, and cold-pressed coconut vinaigrette.',
          image: 'https://images.unsplash.com/photo-1505253758473-96b3d5eb926f?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'sal-15',
          categoryId: 'salads',
          name: 'Malabar Roasted Peanut & Kachumber Salad',
          punchline: 'Classic Indian Tea-Time Tang & Crunch.',
          price: 200,
          originalPrice: 240,
          rating: 4.8,
          desc: 'Spicy wood-roasted peanuts tossed with diced red onions, juicy tomatoes, fresh green chilies, and coriander.',
          image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=700&q=80'
        },

        /* ==================== 2. ICE CREAMS (15 UNIQUE DISHES) ==================== */
        {
          id: 'ice-1',
          categoryId: 'icecreams',
          name: 'Signature Tender Coconut Honey Scoop',
          punchline: 'Pure Malabar Coconut Bliss.',
          price: 210,
          originalPrice: 250,
          rating: 4.9,
          desc: 'Artisanal churned fresh coconut cream with chunks of tender malai and drizzled with wild Western Ghats honey.',
          image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ice-2',
          categoryId: 'icecreams',
          name: 'Belgian Dark Cocoa Fudge Swirl',
          punchline: 'Deep, Silky, Decadent Cocoa.',
          price: 230,
          originalPrice: 270,
          rating: 4.8,
          desc: 'Double rich 70% dark cocoa gelato folded with toasted walnut crumble and warm chocolate ganache ribbon.',
          image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ice-3',
          categoryId: 'icecreams',
          name: 'Alphonso Mango Kulfi Pop',
          punchline: 'Summer Gold Infused With Saffron.',
          price: 190,
          originalPrice: 230,
          rating: 4.9,
          desc: 'Traditional slow-reduced whole milk kulfi infused with Ratnagiri alphonso pulp, green cardamom, and pistachios.',
          image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ice-4',
          categoryId: 'icecreams',
          name: 'Roasted Almond Pista Malai Scoop',
          punchline: 'Royal Nut-Rich Velvet Spoonful.',
          price: 220,
          originalPrice: 260,
          rating: 4.8,
          desc: 'Creamy condensed buffalo milk gelato loaded with slow-roasted Californian almonds and emerald green pistachios.',
          image: 'https://images.unsplash.com/photo-1560008511-11c63416e52d?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ice-5',
          categoryId: 'icecreams',
          name: 'Chikmagalur Filter Coffee Gelato',
          punchline: 'Morning Brew Frozen to Perfection.',
          price: 200,
          originalPrice: 240,
          rating: 4.9,
          desc: 'Double decoction freshly brewed Karnataka filter coffee infused into heavy cream with chocolate espresso beans.',
          image: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ice-6',
          categoryId: 'icecreams',
          name: 'Western Ghats Wild Fig & Cream Scoop',
          punchline: 'Honeyed Dried Anjir Elegance.',
          price: 240,
          originalPrice: 280,
          rating: 4.7,
          desc: 'Plump sun-dried wild figs macerated in raw floral honey, folded into rich handcrafted country clotted cream.',
          image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ice-7',
          categoryId: 'icecreams',
          name: 'Kashmiri Saffron & Cardamom Matka Pot',
          punchline: 'Earthen Jar Infused with Golden Strands.',
          price: 260,
          originalPrice: 310,
          rating: 5.0,
          desc: 'Slow-simmered rabri ice cream seasoned with pure Pampore saffron strands and cardamom seeds served in baked clay.',
          image: 'https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ice-8',
          categoryId: 'icecreams',
          name: 'Coastal Jackfruit & Palm Jaggery Tub',
          punchline: 'Sweet Fragrant Tropical Heritage.',
          price: 210,
          originalPrice: 250,
          rating: 4.8,
          desc: 'Ripe coastal yellow jackfruit chunks blended with organic toddy palm jaggery syrup and fresh cream.',
          image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ice-9',
          categoryId: 'icecreams',
          name: 'Roasted Cashew Nut Butterscotch Crunch',
          punchline: 'Buttery Caramel with Crushed Cashews.',
          price: 230,
          originalPrice: 270,
          rating: 4.7,
          desc: 'Homemade brown butter butterscotch ripples paired with golden roasted coastal cashew nut praline.',
          image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ice-10',
          categoryId: 'icecreams',
          name: 'Gulkand & Sun-Dried Rose Petal Swirl',
          punchline: 'Aromatic Sweet Damask Rose Essence.',
          price: 200,
          originalPrice: 240,
          rating: 4.9,
          desc: 'Organic Ayurvedic sun-baked damask rose preserve churned into cooling whole milk with silver vark flakes.',
          image: 'https://images.unsplash.com/photo-1534706936160-d5ee67737249?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ice-11',
          categoryId: 'icecreams',
          name: 'Dark Chocolate Orange Truffle Scoop',
          punchline: 'Zesty Citrus Meets Bitter Sweet Velvet.',
          price: 250,
          originalPrice: 290,
          rating: 4.8,
          desc: 'Coorg orange zest infused into 65% single-origin dark cocoa cream with soft chocolate fudge truffle chunks.',
          image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ice-12',
          categoryId: 'icecreams',
          name: 'Vanilla Bean & Roasted Walnut Sundae',
          punchline: 'Bourbon Pod Infusion with Smoky Nuts.',
          price: 220,
          originalPrice: 260,
          rating: 4.7,
          desc: 'Speckled real Madagascar vanilla bean gelato crowned with warm spiced maple roasted walnuts.',
          image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ice-13',
          categoryId: 'icecreams',
          name: 'Kokum Berry Citrus Sorbet',
          punchline: 'Tart, Cooling & 100% Dairy-Free.',
          price: 190,
          originalPrice: 220,
          rating: 4.6,
          desc: 'Refreshing hand-extracted ruby kokum nectar frozen into a palate-cleansing sorbet with candied ginger zest.',
          image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ice-14',
          categoryId: 'icecreams',
          name: 'Chikoo & Brown Sugar Cream Bliss',
          punchline: 'Malty Sapodilla Velvety Decadence.',
          price: 210,
          originalPrice: 250,
          rating: 4.8,
          desc: 'Freshly pureed sweet sapota fruit churned with golden demerara sugar and fresh dairy farm cream.',
          image: 'https://images.unsplash.com/photo-1568283096533-078a24930eb8?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ice-15',
          categoryId: 'icecreams',
          name: 'Toasted Coconut Flake Caramel Pot',
          punchline: 'Crisp Grated Kopra in Dulce De Leche.',
          price: 230,
          originalPrice: 270,
          rating: 4.9,
          desc: 'Golden oven-toasted copra flakes layered with rich slow-cooked dulce de leche caramel ice cream.',
          image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=700&q=80'
        },

        /* ==================== 3. JUICES (15 UNIQUE DISHES) ==================== */
        {
          id: 'jui-1',
          categoryId: 'juices',
          name: 'Fresh Sugarcane Lime Frost',
          punchline: 'Crushed Cold with Ginger Zing.',
          price: 140,
          originalPrice: 170,
          rating: 4.8,
          desc: 'Cold-pressed farm fresh sugarcane juice energized with zesty key lime and crushed fresh Himalayan ginger.',
          image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'jui-2',
          categoryId: 'juices',
          name: 'Crimson Watermelon Basil Splash',
          punchline: 'Hydrating Sweet Summer Essence.',
          price: 160,
          originalPrice: 190,
          rating: 4.7,
          desc: 'Chilled ripe watermelon juice cold-muddled with fresh aromatic sweet basil leaves and rock salt.',
          image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'jui-3',
          categoryId: 'juices',
          name: 'Alphonso Mango Silk Puree',
          punchline: 'King of Fruits Freshly Extracted.',
          price: 180,
          originalPrice: 220,
          rating: 4.9,
          desc: 'Pure hand-pulped alphonso mango nectar served over ice with hints of saffron and mint.',
          image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'jui-4',
          categoryId: 'juices',
          name: 'Coastal Mosambi Sweet Lime Press',
          punchline: 'Pure Pulp Cold-Pressed Freshness.',
          price: 150,
          originalPrice: 180,
          rating: 4.7,
          desc: 'Hand-pressed ripe sweet limes with zero added sugar, spiced with a light pinch of black volcanic salt.',
          image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'jui-5',
          categoryId: 'juices',
          name: 'Wild Pomegranate Ruby Crush',
          punchline: 'Antioxidant Burst in Deep Crimson.',
          price: 190,
          originalPrice: 230,
          rating: 4.9,
          desc: 'Hand-peeled fresh Anar ruby pearls cold squeezed with a dash of lime juice and fresh ground black pepper.',
          image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'jui-6',
          categoryId: 'juices',
          name: 'Cold-Pressed Nagpur Orange Burst',
          punchline: 'Sunshine Citrus Loaded with Vitamin C.',
          price: 160,
          originalPrice: 190,
          rating: 4.8,
          desc: 'Freshly extracted sweet Nagpur oranges bottled immediately with natural juicy fruit pulp.',
          image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'jui-7',
          categoryId: 'juices',
          name: 'Green Detox Cucumber Mint Zing',
          punchline: 'Revitalizing Crisp Green Cleanse.',
          price: 140,
          originalPrice: 170,
          rating: 4.6,
          desc: 'Hydrating English cucumber, green apple, fresh mint leaves, and celery pressed with ginger drops.',
          image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'jui-8',
          categoryId: 'juices',
          name: 'Tropical Pineapple Mint Cooler',
          punchline: 'Tangy Coastal Queen Pineapple.',
          price: 160,
          originalPrice: 190,
          rating: 4.8,
          desc: 'Sweet ripe honey pineapple chunks muddled with aromatic mountain spearmint and sea salt crystals.',
          image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'jui-9',
          categoryId: 'juices',
          name: 'Wild Amla & Honey Immunity Elixir',
          punchline: 'Indian Gooseberry Herbal Vitality.',
          price: 130,
          originalPrice: 160,
          rating: 4.9,
          desc: 'Cold crushed mountain amla juice sweetened with pure forest honey and warm ground ginger infusion.',
          image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'jui-10',
          categoryId: 'juices',
          name: 'Pink Guava & Red Chilli Rim Nectar',
          punchline: 'Tangy Nostalgic Street Glass.',
          price: 170,
          originalPrice: 200,
          rating: 4.9,
          desc: 'Thick ripe pink guava juice poured into a glass rimmed with roasted cumin, rock salt, and Kashmiri chili.',
          image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'jui-11',
          categoryId: 'juices',
          name: 'Golden Papaya & Passionfruit Dew',
          punchline: 'Velvety Sunset Sweetness.',
          price: 160,
          originalPrice: 190,
          rating: 4.6,
          desc: 'Slow-blended sweet golden papaya nectar with tangy passionfruit pulp and a squeeze of lime.',
          image: 'https://images.unsplash.com/photo-1547517023-7ca0c162f816?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'jui-12',
          categoryId: 'juices',
          name: 'Sweet Beetroot & Carrot Glow Tonic',
          punchline: 'Earthy Sweet Deep Red Nutrition.',
          price: 150,
          originalPrice: 180,
          rating: 4.7,
          desc: 'Cold-pressed farm beets and sweet winter carrots with a refreshing splash of sour green apple.',
          image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'jui-13',
          categoryId: 'juices',
          name: 'Tender Coconut Lychee Chiller',
          punchline: 'Cooling Elixir from the Palms.',
          price: 180,
          originalPrice: 210,
          rating: 4.9,
          desc: 'Pure fresh coconut water stirred with sweet lychee chunks and crushed ice.',
          image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'jui-14',
          categoryId: 'juices',
          name: 'Black Grape & Chia Seed Splash',
          punchline: 'Rich Concord Grapes with Omega-3.',
          price: 170,
          originalPrice: 200,
          rating: 4.7,
          desc: 'Crushed seedless black grapes infused with soaked basil and chia seeds over shaved ice.',
          image: 'https://images.unsplash.com/photo-1596803244618-8dbee441d70b?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'jui-15',
          categoryId: 'juices',
          name: 'Lemongrass Citrus Quencher',
          punchline: 'Crisp Herbaceous Fragrant Sipper.',
          price: 150,
          originalPrice: 180,
          rating: 4.8,
          desc: 'Brewed fresh lemongrass stalk essence chilled and mixed with hand-squeezed yellow lemon juice.',
          image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80'
        },

        /* ==================== 4. RICES (15 UNIQUE DISHES) ==================== */
        {
          id: 'ric-1',
          categoryId: 'rices',
          name: 'Malabar Cashew Ghee Rice',
          punchline: 'Fragrant Kaima Ghee Perfection.',
          price: 260,
          originalPrice: 310,
          rating: 4.9,
          desc: 'Short grain Jeerakasala rice tempered in pure desi ghee, golden roasted cashews, fried onions, and whole spices.',
          image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ric-2',
          categoryId: 'rices',
          name: 'Velvety Curd Rice with Tadka',
          punchline: 'Cooling Traditional Comfort Bowl.',
          price: 210,
          originalPrice: 240,
          rating: 4.8,
          desc: 'Creamy slow-mashed rice folded with homemade set curd, tempered with mustard seeds, curry leaves, ginger, and pomegranate.',
          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ric-3',
          categoryId: 'rices',
          name: 'Heritage Tomato Rasam Rice',
          punchline: 'Tangy Coastal Pepper Infusion.',
          price: 240,
          originalPrice: 280,
          rating: 4.7,
          desc: 'Steamed rice immersed in spiced country tomato and tamarind broth with crushed black peppercorns and ghee tadka.',
          image: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ric-4',
          categoryId: 'rices',
          name: 'Temple Style Tamarind Puliyogare Pot',
          punchline: 'Intense Tangy Stone-Ground Podi Rice.',
          price: 230,
          originalPrice: 270,
          rating: 4.9,
          desc: 'Rice tempered in thick aged tamarind pulp, roasted peanuts, dry red chilies, sesame seeds, and asafoetida.',
          image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ric-5',
          categoryId: 'rices',
          name: 'Lemon Peanut Tempered Chitranna',
          punchline: 'Zesty Turmeric Infused Classic.',
          price: 200,
          originalPrice: 240,
          rating: 4.8,
          desc: 'Golden turmeric seasoned fluffy rice mixed with crunchy peanuts, fresh lime juice, green chilies, and curry leaves.',
          image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ric-6',
          categoryId: 'rices',
          name: 'Fragrant Coconut Milk & Star Anise Rice',
          punchline: 'Rich Coastal Coconut Simmer.',
          price: 270,
          originalPrice: 320,
          rating: 4.9,
          desc: 'Aged basmati cooked slowly in thick fresh coconut milk, spiced gently with whole cinnamon, cardamom, and clove.',
          image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ric-7',
          categoryId: 'rices',
          name: 'Karnataka Bisi Bele Bath with Boondi',
          punchline: 'Hot Lentil, Rice & Veggie Stew.',
          price: 250,
          originalPrice: 290,
          rating: 4.8,
          desc: 'Wholesome rice and toor dal simmered with vegetables and 30-spice homemade powder, topped with pure ghee and khara boondi.',
          image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ric-8',
          categoryId: 'rices',
          name: 'Pudina Mint & Coriander Pulao',
          punchline: 'Aromatic Herbaceous Green Grains.',
          price: 240,
          originalPrice: 280,
          rating: 4.7,
          desc: 'Long grain rice tossed with freshly ground spearmint, cilantro puree, tender green peas, and whole spices.',
          image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ric-9',
          categoryId: 'rices',
          name: 'Coastal Jeera & Fried Onion Pulao',
          punchline: 'Subtle Roasted Cumin Fragrance.',
          price: 220,
          originalPrice: 260,
          rating: 4.7,
          desc: 'Light fluffy basmati rice tempered with cracked royal cumin seeds, golden shallots, and fresh coriander.',
          image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ric-10',
          categoryId: 'rices',
          name: 'Brown Rice Ven Pongal with Cashews',
          punchline: 'Hearty Whole-Grain Ayurvedic Comfort.',
          price: 240,
          originalPrice: 280,
          rating: 4.8,
          desc: 'Unpolished brown rice and split yellow moong dal cooked with crushed black pepper, fresh ginger, and desi ghee.',
          image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ric-11',
          categoryId: 'rices',
          name: 'Mangalorean Matta Red Rice with Stew',
          punchline: 'Nutritious Coastal Red Grain.',
          price: 230,
          originalPrice: 270,
          rating: 4.6,
          desc: 'Nutty unpolished Matta rice served alongside traditional vegetable coconut milk stew and appalam.',
          image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ric-12',
          categoryId: 'rices',
          name: 'Curry Leaf & Black Pepper Tempered Rice',
          punchline: 'Warm Southern Spice Infusion.',
          price: 210,
          originalPrice: 250,
          rating: 4.8,
          desc: 'Steamed rice tossed in sun-dried roasted curry leaf powder, Tellicherry black pepper, and pure gingelly oil.',
          image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ric-13',
          categoryId: 'rices',
          name: 'Roasted Sesame Gingelly Podi Rice',
          punchline: 'Nutty Aromatics with Crispy Pappad.',
          price: 220,
          originalPrice: 260,
          rating: 4.7,
          desc: 'Aged rice mixed with stone-pounded black sesame podi, golden garlic cloves, and fragrant cold-pressed oil.',
          image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ric-14',
          categoryId: 'rices',
          name: 'Western Ghats Wild Mushroom Pulao',
          punchline: 'Earthy Wild Mushrooms in Basmati.',
          price: 290,
          originalPrice: 340,
          rating: 4.9,
          desc: 'Succulent button and shiitake mushrooms sauteed in ghee and simmered with fragrant basmati grains.',
          image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'ric-15',
          categoryId: 'rices',
          name: 'Royal Saffron Sweet Jaggery Pongal',
          punchline: 'Divine Festive Sweet Rice.',
          price: 230,
          originalPrice: 270,
          rating: 4.9,
          desc: 'Rice and lentils simmered in melted organic sugarcane jaggery, cardamom, nutmeg, fried raisins, and cashews.',
          image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=700&q=80'
        },

        /* ==================== 5. BIRIYANIS (15 UNIQUE DISHES) ==================== */
        {
          id: 'bir-1',
          categoryId: 'biriyanis',
          name: 'Karavalli Signature Claypot Dum Biryani',
          punchline: 'Sealed Earthen Magic with Spices.',
          price: 390,
          originalPrice: 460,
          rating: 5.0,
          desc: 'Layered aged basmati rice simmered inside an earthen handi with coastal masala, caramelized shallots, and fragrant kewra.',
          image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bir-2',
          categoryId: 'biriyanis',
          name: 'Chettinad Spiced Veg Dum Biryani',
          punchline: 'Bold Stone-Ground Star Anise Aromas.',
          price: 340,
          originalPrice: 390,
          rating: 4.8,
          desc: 'Farm vegetables tossed in stone-ground Chettinad spices, layered with fragrant saffron rice and served with mint raita.',
          image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bir-3',
          categoryId: 'biriyanis',
          name: 'Paneer Makhani Saffron Biryani',
          punchline: 'Rich Royal Charcoal Infusion.',
          price: 360,
          originalPrice: 420,
          rating: 4.9,
          desc: 'Soft marinated cottage cheese cubes cooked in rich saffron tomato gravy layered with long basmati grains.',
          image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bir-4',
          categoryId: 'biriyanis',
          name: 'Thalassery Jeerakasala Dum Biryani',
          punchline: 'Malabar Fragrant Short Grain Wonder.',
          price: 370,
          originalPrice: 430,
          rating: 4.9,
          desc: 'Authentic northern Kerala biryani cooked with tiny Kaima rice, ghee fried cashews, sultanas, and coastal masala paste.',
          image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bir-5',
          categoryId: 'biriyanis',
          name: 'Hyderabadi Zaffrani Vegetable Biryani',
          punchline: 'Nizami Royal Dum Heritage.',
          price: 350,
          originalPrice: 410,
          rating: 4.8,
          desc: 'Slow-dum-cooked long grain rice with mint, brown onions, milk-soaked saffron, garden vegetables, and salan gravy.',
          image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bir-6',
          categoryId: 'biriyanis',
          name: 'Raw Jackfruit (Kathal) Handi Biryani',
          punchline: 'Meaty Tender Jackfruit in Rich Masala.',
          price: 380,
          originalPrice: 440,
          rating: 4.9,
          desc: 'Tender baby jackfruit chunks marinated in spiced yogurt and slow-cooked in a sealed clay pot with basmati rice.',
          image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bir-7',
          categoryId: 'biriyanis',
          name: 'Royal Awadhi Subz Biryani',
          punchline: 'Mild Fragrant Cardamom & Rose Infusion.',
          price: 360,
          originalPrice: 420,
          rating: 4.8,
          desc: 'Subtle fragrant Lucknawi style biryani scented with ittar, rose water, and slow-braised root vegetables.',
          image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bir-8',
          categoryId: 'biriyanis',
          name: 'Ambur Wood-Fired Veggie Biryani',
          punchline: 'Seeraga Samba with Curd Tang.',
          price: 340,
          originalPrice: 390,
          rating: 4.7,
          desc: 'Traditional Arcot region biryani prepared with aromatic Seeraga Samba rice, chili paste, and sour curd base.',
          image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bir-9',
          categoryId: 'biriyanis',
          name: 'Coastal Mushroom & Ghee Roast Biryani',
          punchline: 'Fiery Byadagi Chili & Garlic Saute.',
          price: 370,
          originalPrice: 430,
          rating: 4.9,
          desc: 'Button mushrooms tossed in signature Kundapura ghee roast spices, layered with fragrant saffron rice.',
          image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bir-10',
          categoryId: 'biriyanis',
          name: 'Soya Chaap Charcoal Dum Biryani',
          punchline: 'Smoky Tandoor Marinated Protein.',
          price: 350,
          originalPrice: 400,
          rating: 4.7,
          desc: 'Smoked soya chaap chunks grilled over charcoal, folded with basmati rice, caramelized onions, and fresh coriander.',
          image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bir-11',
          categoryId: 'biriyanis',
          name: 'Dindigul Spicy Samba Dum Biryani',
          punchline: 'Peppery Southern Mountain Flavor.',
          price: 340,
          originalPrice: 390,
          rating: 4.8,
          desc: 'Seeraga Samba rice simmered with crushed shallots, ginger, green chilies, and sour curd with cooling onion pachadi.',
          image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bir-12',
          categoryId: 'biriyanis',
          name: 'Spiced Baby Potato Handi Dum Biryani',
          punchline: 'Golden Roasted Aloo in Spiced Gravy.',
          price: 320,
          originalPrice: 370,
          rating: 4.7,
          desc: 'Crispy fried baby potatoes simmered in coastal masala and layered under fragrant steam-cooked saffron basmati.',
          image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bir-13',
          categoryId: 'biriyanis',
          name: 'Malabar Dry Fruit & Nut Dum Biryani',
          punchline: 'Sweet, Savory Royal Celebration Dish.',
          price: 390,
          originalPrice: 450,
          rating: 4.9,
          desc: 'Plump golden raisins, whole cashew nuts, roasted almonds, and saffron rice simmered in claypot with ghee.',
          image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bir-14',
          categoryId: 'biriyanis',
          name: 'Kundapura Coconut Milk Veggie Biryani',
          punchline: 'Creamy Coastal Spice Symphony.',
          price: 360,
          originalPrice: 410,
          rating: 4.8,
          desc: 'Vegetables cooked in first extract coconut milk and stone-ground spices, layered with short aromatic rice.',
          image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bir-15',
          categoryId: 'biriyanis',
          name: 'Kolhapuri Fiery Red Chili Veg Biryani',
          punchline: 'Intense Spiced Lavangi Chili Heat.',
          price: 350,
          originalPrice: 400,
          rating: 4.8,
          desc: 'For lovers of real spice—fresh vegetables simmered in spicy Kolhapuri masala paste layered with long basmati grains.',
          image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=700&q=80'
        },

        /* ==================== 6. TIFFINS (15 UNIQUE DISHES) ==================== */
        {
          id: 'tif-1',
          categoryId: 'tiffins',
          name: 'Crisp Ghee Roast Masala Dosa',
          punchline: 'Golden Thin Crepe, Spiced Mash.',
          price: 180,
          originalPrice: 220,
          rating: 4.9,
          desc: 'Fermented batter griddled to golden perfection with pure clarified butter, stuffed with spiced potato podi filling.',
          image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'tif-2',
          categoryId: 'tiffins',
          name: 'Steamed Mallige Idli Platter',
          punchline: 'Cloud-Soft Pillows with 3 Chutneys.',
          price: 130,
          originalPrice: 160,
          rating: 4.8,
          desc: 'Trio of ultra-fluffy steamed rice cakes served with fresh coconut, tomato chili, and coriander chutneys plus piping sambar.',
          image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'tif-3',
          categoryId: 'tiffins',
          name: 'Crispy Medu Vada Duo',
          punchline: 'Crunchy Outside, Airy Inside.',
          price: 140,
          originalPrice: 170,
          rating: 4.7,
          desc: 'Golden fried savory lentil donuts seasoned with crushed black pepper, fresh ginger, and fragrant curry leaves.',
          image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'tif-4',
          categoryId: 'tiffins',
          name: 'Karavalli Butter Podi Open Dosa',
          punchline: 'Melted Butter with Gunpowder Spice.',
          price: 190,
          originalPrice: 230,
          rating: 5.0,
          desc: 'Thick spongy dosa smeared with white butter and showered with aromatic roasted lentil podi gunpowder.',
          image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'tif-5',
          categoryId: 'tiffins',
          name: 'Mysore Masala Dosa with Red Garlic Chutney',
          punchline: 'Crisp Crust, Spicy Inside Spread.',
          price: 190,
          originalPrice: 230,
          rating: 4.9,
          desc: 'Crispy crepe with inside layer of spicy garlic red chili chutney filled with soft spiced potato palya.',
          image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'tif-6',
          categoryId: 'tiffins',
          name: 'Delicate Coastal Neer Dosa with Sagu',
          punchline: 'Feather-Light Rice Crepes with Coconut.',
          price: 170,
          originalPrice: 210,
          rating: 4.9,
          desc: 'Melt-in-mouth rice crepes from Coastal Karnataka served with spiced mixed vegetable coconut sagu and jaggery milk.',
          image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'tif-7',
          categoryId: 'tiffins',
          name: 'Spongy Set Dosa with Saagu & Butter',
          punchline: 'Trio of Tender Spongy Pancakes.',
          price: 160,
          originalPrice: 190,
          rating: 4.8,
          desc: 'Three golden-yellow, super-soft griddled set dosas crowned with fresh butter dollop and rich vegetable saagu.',
          image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'tif-8',
          categoryId: 'tiffins',
          name: 'Crispy Onion Rava Dosa',
          punchline: 'Lacy Semolina Crepe with Golden Onions.',
          price: 180,
          originalPrice: 220,
          rating: 4.7,
          desc: 'Semolina and rice flour batter griddled to a lacy golden mesh sprinkled with caramelized onions and green chilies.',
          image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'tif-9',
          categoryId: 'tiffins',
          name: 'Cashew Khara Rava Upma',
          punchline: 'Roasted Semolina with Desi Ghee.',
          price: 140,
          originalPrice: 170,
          rating: 4.6,
          desc: 'Slow roasted semolina simmered with ginger, curry leaves, green peas, and whole golden cashews in pure ghee.',
          image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'tif-10',
          categoryId: 'tiffins',
          name: 'Mangalore Banana Buns with Coconut Chutney',
          punchline: 'Sweet, Fluffy Coastal Delicacy.',
          price: 150,
          originalPrice: 180,
          rating: 4.9,
          desc: 'Mildly sweet, deep-fried fluffy flatbreads prepared from ripe banana dough and cumin seeds served with spicy chutney.',
          image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'tif-11',
          categoryId: 'tiffins',
          name: 'Fluffy Hot Poori Masala Platter',
          punchline: 'Golden Puffed Bread with Potato Curry.',
          price: 160,
          originalPrice: 200,
          rating: 4.8,
          desc: 'Two golden puffed whole wheat pooris accompanied by homestyle spiced yellow potato bhaji and pickle.',
          image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'tif-12',
          categoryId: 'tiffins',
          name: 'Steamed Rice Idiyappam with Coconut Milk',
          punchline: 'String Hoppers with Sweet Nectar.',
          price: 170,
          originalPrice: 210,
          rating: 4.8,
          desc: 'Delicate steamed rice vermicelli nests served with sweet cardamom-infused fresh coconut milk and spicy kurma.',
          image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'tif-13',
          categoryId: 'tiffins',
          name: 'Kanchipuram Spiced Ghee Idli',
          punchline: 'Peppery Temple Idli with Cumin.',
          price: 150,
          originalPrice: 180,
          rating: 4.7,
          desc: 'Traditional idlis seasoned with coarsely crushed cumin, black pepper, ginger, and asafoetida steamed in leaf cups.',
          image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'tif-14',
          categoryId: 'tiffins',
          name: 'Chettinad Crispy Kuzhi Paniyaram',
          punchline: 'Dumplings Crispy Outside, Soft Inside.',
          price: 160,
          originalPrice: 190,
          rating: 4.8,
          desc: 'Savory fermented batter cooked in cast-iron aebleskiver pans with onions, mustard seeds, and coriander.',
          image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'tif-15',
          categoryId: 'tiffins',
          name: 'Ghee Ven Pongal with Drumstick Sambar',
          punchline: 'Buttery Lentil Porridge with Hot Stew.',
          price: 160,
          originalPrice: 190,
          rating: 4.9,
          desc: 'Rice and split moong lentils cooked to creamy perfection with crushed black pepper, ginger, cashews, and rich ghee.',
          image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80'
        },

        /* ==================== 7. BURGERS (15 UNIQUE DISHES) ==================== */
        {
          id: 'bur-1',
          categoryId: 'burgers',
          name: 'Backyard Flame-Grilled Paneer Burger',
          punchline: 'Temptation On A Toasted Bun.',
          price: 280,
          originalPrice: 330,
          rating: 4.9,
          desc: 'Thick marinated cottage cheese steak flame-grilled over open coals, layered with fresh lettuce, red onion, tomatoes, and smoky aioli.',
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bur-2',
          categoryId: 'burgers',
          name: 'Spiced Crisp Corn Veggie Crunch Burger',
          punchline: 'Loaded Double Crunch Patty.',
          price: 240,
          originalPrice: 290,
          rating: 4.8,
          desc: 'Crispy herb potato and sweet corn patty topped with melted cheddar, pickled gherkins, and tangy tandoori mayo.',
          image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bur-3',
          categoryId: 'burgers',
          name: 'Karavalli Smoky Chipotle Cheese Burst',
          punchline: 'Molten Cheese Core Explosion.',
          price: 310,
          originalPrice: 370,
          rating: 5.0,
          desc: 'Slow roasted portobello mushroom and smoked pepper patty stuffed with lava mozzarella in a toasted brioche bun.',
          image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bur-4',
          categoryId: 'burgers',
          name: 'Street Style Crispy Aloo Tikki Herb Burger',
          punchline: 'Golden Potato Patty with Mint Chutney.',
          price: 210,
          originalPrice: 250,
          rating: 4.7,
          desc: 'Crisp cumin potato patty spiced with chaat masala, layered with sliced red onions, tomatoes, and spicy green relish.',
          image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bur-5',
          categoryId: 'burgers',
          name: 'Portobello Mushroom & Truffle Mayo Burger',
          punchline: 'Earth-Grown Gourmet Indulgence.',
          price: 330,
          originalPrice: 390,
          rating: 4.9,
          desc: 'Whole grilled balsamic portobello cap with melted Swiss cheese, caramelized leeks, and truffle garlic emulsion.',
          image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bur-6',
          categoryId: 'burgers',
          name: 'Peri Peri Spiced Soya Steak Burger',
          punchline: 'Fiery African Bird’s Eye Glaze.',
          price: 270,
          originalPrice: 320,
          rating: 4.8,
          desc: 'High-protein seasoned soya steak tossed in zesty peri-peri glaze with crunchy red slaw and cooling mayo on brioche.',
          image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bur-7',
          categoryId: 'burgers',
          name: 'Jalapeno & Double Cheddar Melt Burger',
          punchline: 'Spicy Kick with Gooey Golden Cheese.',
          price: 290,
          originalPrice: 340,
          rating: 4.8,
          desc: 'Spiced lentil-bean patty smothered in aged sharp cheddar, pickled jalapeno rings, and chipotle barbecue drizzle.',
          image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bur-8',
          categoryId: 'burgers',
          name: 'Coastal Curry Mayo Crispy Tofu Burger',
          punchline: 'Crisp Silken Tofu in Coastal Spices.',
          price: 280,
          originalPrice: 330,
          rating: 4.7,
          desc: 'Panko crumbed organic firm tofu patty layered with house curry leaf mayonnaise, pickled cucumbers, and romaine.',
          image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bur-9',
          categoryId: 'burgers',
          name: 'BBQ Black Bean & Roasted Corn Burger',
          punchline: 'Smoky Southwestern Hearty Bite.',
          price: 260,
          originalPrice: 310,
          rating: 4.8,
          desc: 'Charred black beans, sweet corn, and brown rice patty smoked over applewood and topped with house hickory BBQ sauce.',
          image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bur-10',
          categoryId: 'burgers',
          name: 'Double Mac & Cheese Patty Burger',
          punchline: 'Crispy Macaroni Core with Golden Crust.',
          price: 320,
          originalPrice: 380,
          rating: 4.9,
          desc: 'Golden-fried cheddar macaroni cake layered with fresh garden greens, sliced heirloom tomato, and cheese fondue sauce.',
          image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bur-11',
          categoryId: 'burgers',
          name: 'Fresh Guacamole & Salsa Herb Brioche Burger',
          punchline: 'Chunky Hass Avocado & Citrus Pico.',
          price: 330,
          originalPrice: 390,
          rating: 4.8,
          desc: 'Crisp vegetable patty crowned with generous scoops of hand-mashed Hass guacamole, fresh tomato salsa, and cilantro.',
          image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bur-12',
          categoryId: 'burgers',
          name: 'Tandoori Masala Paneer Tower Burger',
          punchline: 'Double Cottage Cheese Steak Feast.',
          price: 340,
          originalPrice: 400,
          rating: 5.0,
          desc: 'Two thick slabs of tandoori chargrilled paneer layered with mint chutney, ring onions, and chatpata seasoning.',
          image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bur-13',
          categoryId: 'burgers',
          name: 'Crispy Falafel & Creamy Tahini Burger',
          punchline: 'Mediterranean Herb Chickpea Crunch.',
          price: 260,
          originalPrice: 310,
          rating: 4.7,
          desc: 'Herbaceous green falafel patty with pickled turnip, crisp cucumber ribbons, and creamy lemon sesame tahini dressing.',
          image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bur-14',
          categoryId: 'burgers',
          name: 'Caramelized Onion & Swiss Mushroom Burger',
          punchline: 'Sweet Onions with Melting Fondant.',
          price: 300,
          originalPrice: 350,
          rating: 4.8,
          desc: 'Slow cooked brown sweet onions layered over a savory mushroom-nut patty with creamy melting cheese.',
          image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'bur-15',
          categoryId: 'burgers',
          name: 'Fiery Schezwan Crispy Veg Burger',
          punchline: 'Sichuan Pepper & Crispy Patty Punch.',
          price: 250,
          originalPrice: 290,
          rating: 4.8,
          desc: 'Deep fried crispy seasoned vegetable patty bathed in red fiery Schezwan chili garlic sauce with crunchy iceberg lettuce.',
          image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=700&q=80'
        },

        /* ==================== 8. COOL DRINKS (15 UNIQUE DISHES) ==================== */
        {
          id: 'drk-1',
          categoryId: 'cooldrinks',
          name: 'Iced Kokum Mint Cooler',
          punchline: 'Coastal Mangalorean Quencher.',
          price: 130,
          originalPrice: 160,
          rating: 4.9,
          desc: 'Sun-dried wild kokum extract blended with fresh garden mint, roasted cumin, and effervescent sparkling soda.',
          image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'drk-2',
          categoryId: 'cooldrinks',
          name: 'Spiced Neer Mor (Buttermilk)',
          punchline: 'Frothy Country Churned Elixir.',
          price: 110,
          originalPrice: 140,
          rating: 4.8,
          desc: 'Refreshing hand-churned buttermilk whisked with ginger juice, chopped green chilies, cilantro, and asafoetida.',
          image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'drk-3',
          categoryId: 'cooldrinks',
          name: 'Royal Rose Petal Falooda Cooler',
          punchline: 'Sweet Basil Seeds & Velvet Milk.',
          price: 190,
          originalPrice: 240,
          rating: 4.9,
          desc: 'Chilled rose syrup milk infused with basil seeds, tender falooda vermicelli, and topped with a baby scoop of vanilla.',
          image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'drk-4',
          categoryId: 'cooldrinks',
          name: 'Nannari Sarbath with Chia Pearls',
          punchline: 'Aromatic Sarsaparilla Root Extract.',
          price: 140,
          originalPrice: 170,
          rating: 4.9,
          desc: 'Traditional cooling herbal Nannari syrup blended with lemon juice, chilled water, and bloomed chia seeds.',
          image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'drk-5',
          categoryId: 'cooldrinks',
          name: 'Chilled Royal Badam Milk with Saffron',
          punchline: 'Crushed Almonds in Cardamom Cream.',
          price: 180,
          originalPrice: 220,
          rating: 4.8,
          desc: 'Slow-boiled whole milk infused with slivered almonds, golden saffron threads, and freshly ground green cardamom.',
          image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'drk-6',
          categoryId: 'cooldrinks',
          name: 'Sweet Cardamom Lassi Swirl',
          punchline: 'Thick Hand-Whisked Yogurt Froth.',
          price: 150,
          originalPrice: 180,
          rating: 4.9,
          desc: 'Rich creamy Punjabi style curd whipped with fragrant green cardamom, organic sugar, and a crown of thick malai.',
          image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'drk-7',
          categoryId: 'cooldrinks',
          name: 'Spiced Raw Mango Aam Panna Cooler',
          punchline: 'Smoky Roasted Kairi Digestive.',
          price: 140,
          originalPrice: 170,
          rating: 4.8,
          desc: 'Fire-roasted raw green mangoes pureed with black salt, roasted cumin, mint leaves, and ice water.',
          image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'drk-8',
          categoryId: 'cooldrinks',
          name: 'Fresh Mint & Key Lime Sparkling Soda',
          punchline: 'Effervescent Garden Fizzy Citrus.',
          price: 130,
          originalPrice: 160,
          rating: 4.7,
          desc: 'Bruised mint leaves, fresh lime juice, simple cane syrup, and ice charged with bubbly club soda.',
          image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'drk-9',
          categoryId: 'cooldrinks',
          name: 'Blue Curacao Coastal Lagoon Fizz',
          punchline: 'Vibrant Azure Citrus Sparkle.',
          price: 170,
          originalPrice: 200,
          rating: 4.8,
          desc: 'Refreshing orange peel blue curacao syrup topped with sprite, crushed ice, and fresh mint leaves.',
          image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'drk-10',
          categoryId: 'cooldrinks',
          name: 'Masala Soda Street Twist',
          punchline: 'Zesty Cumin, Chatpata Pepper Fizz.',
          price: 120,
          originalPrice: 150,
          rating: 4.8,
          desc: 'Traditional spicy Indian street soda spiced with black rock salt, crushed roasted jeera, lime, and ginger.',
          image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'drk-11',
          categoryId: 'cooldrinks',
          name: 'Iced South Indian Filter Coffee',
          punchline: 'Frothy Chicory Brew over Cubes.',
          price: 160,
          originalPrice: 190,
          rating: 5.0,
          desc: 'Authentic 80:20 plantation coffee decoction whipped with creamy chilled milk and poured over crystal ice cubes.',
          image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'drk-12',
          categoryId: 'cooldrinks',
          name: 'Passion Fruit Fizzy Sparkler',
          punchline: 'Tart Tropical Seed Infusion.',
          price: 180,
          originalPrice: 210,
          rating: 4.8,
          desc: 'Ripe passion fruit pulp shaken with lemon juice and ice, topped with sparkling club soda.',
          image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'drk-13',
          categoryId: 'cooldrinks',
          name: 'Hibiscus Blossom Iced Infusion',
          punchline: 'Ruby Floral Petal Quencher.',
          price: 160,
          originalPrice: 190,
          rating: 4.7,
          desc: 'Brewed dried hibiscus calyces chilled and sweetened with organic clover honey and a touch of cinnamon.',
          image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'drk-14',
          categoryId: 'cooldrinks',
          name: 'Peach Apricot Iced Tea Brew',
          punchline: 'Crisp Orchard Infused Black Tea.',
          price: 150,
          originalPrice: 180,
          rating: 4.8,
          desc: 'Nilgiri loose leaf black tea slow-brewed, sweetened with ripe peach puree and served over crushed ice with mint.',
          image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=700&q=80'
        },
        {
          id: 'drk-15',
          categoryId: 'cooldrinks',
          name: 'Festive Kesar Thandai Milk Elixir',
          punchline: 'Poppy Seeds, Fennel & Saffron Milk.',
          price: 200,
          originalPrice: 250,
          rating: 4.9,
          desc: 'Traditional cooling herbal drink prepared with soaked almonds, melon seeds, fennel, rose petals, black pepper, and saffron.',
          image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=700&q=80'
        }
      ]
    };

    let currentCategory = 'burgers';
    let spotlightIndex = 0;
    let modalOfferIndex = 0;
    let modalCategoryTarget = 'burgers';
    let cart = [];

    const categoryTabsContainer = document.getElementById('categoryTabsContainer');
    const spotlightContent = document.getElementById('spotlightContent');
    const prevSlideBtn = document.getElementById('prevSlideBtn');
    const nextSlideBtn = document.getElementById('nextSlideBtn');
    const foodCardsGrid = document.getElementById('foodCardsGrid');
    const currentCategoryTitle = document.getElementById('currentCategoryTitle');
    
    // Offers Modal DOM
    const offersModal = document.getElementById('offersModal');
    const modalOfferCardBody = document.getElementById('modalOfferCardBody');
    const modalOfferCategoryBadge = document.getElementById('modalOfferCategoryBadge');
    const modalPrevOfferBtn = document.getElementById('modalPrevOfferBtn');
    const modalNextOfferBtn = document.getElementById('modalNextOfferBtn');
    const skipOffersBtn = document.getElementById('skipOffersBtn');

    // Cart DOM
    const openCartBtn = document.getElementById('openCartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const cartBackdrop = document.getElementById('cartBackdrop');
    const cartCountBadge = document.getElementById('cartCountBadge');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartSubtotalText = document.getElementById('cartSubtotalText');
    const cartGstText = document.getElementById('cartGstText');
    const cartTotalText = document.getElementById('cartTotalText');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // Order Success Modal DOM
    const successModal = document.getElementById('successModal');
    const successSummaryText = document.getElementById('successSummaryText');
    const redirectCountdownText = document.getElementById('redirectCountdownText');
    const redirectProgressBar = document.getElementById('redirectProgressBar');
    let autoRedirectTimer = null;
    let autoCountdownInterval = null;

    // Order Review & Confirmation Modal DOM
    const orderConfirmModal = document.getElementById('orderConfirmModal');
    const closeConfirmModalBtn = document.getElementById('closeConfirmModalBtn');
    const backToCartBtn = document.getElementById('backToCartBtn');
    const confirmItemsList = document.getElementById('confirmItemsList');
    const confirmSubtotalText = document.getElementById('confirmSubtotalText');
    const confirmGstText = document.getElementById('confirmGstText');
    const confirmGrandTotalText = document.getElementById('confirmGrandTotalText');
    const finalConfirmOrderBtn = document.getElementById('finalConfirmOrderBtn');

    // Combo Pairing Modal DOM
    const comboModal = document.getElementById('comboModal');
    const comboModalHeading = document.getElementById('comboModalHeading');
    const comboModalPitch = document.getElementById('comboModalPitch');
    const comboDishImg = document.getElementById('comboDishImg');
    const comboDishName = document.getElementById('comboDishName');
    const comboDishDesc = document.getElementById('comboDishDesc');
    const comboDishPrice = document.getElementById('comboDishPrice');
    const comboAcceptBtn = document.getElementById('comboAcceptBtn');
    const comboAcceptBtnText = document.getElementById('comboAcceptBtnText');
    const comboDeclineBtn = document.getElementById('comboDeclineBtn');
    let pendingComboItem = null;

    // Smart Online Food Combo Rules
    const comboRules = {
      burgers: {
        targetCategory: 'cooldrinks',
        targetDishId: 'drk-8', // Fresh Mint & Key Lime Sparkling Soda
        pitch: 'Hot & crisp? Cool it down with a frosty sip!'
      },
      biriyanis: {
        targetCategory: 'cooldrinks',
        targetDishId: 'drk-2', // Spiced Neer Mor (Buttermilk)
        pitch: 'Rich & spicy? Balance the heat with chilled buttermilk!'
      },
      tiffins: {
        targetCategory: 'cooldrinks',
        targetDishId: 'drk-11', // Iced South Indian Filter Coffee
        pitch: 'Golden crispy bites pair best with authentic filter coffee!'
      },
      rices: {
        targetCategory: 'cooldrinks',
        targetDishId: 'drk-1', // Iced Kokum Mint Cooler
        pitch: 'A comforting bowl calls for a tart, refreshing cooler!'
      },
      salads: {
        targetCategory: 'juices',
        targetDishId: 'jui-1', // Fresh Sugarcane Lime Frost
        pitch: 'Fresh greens taste even better with a cold-pressed zing!'
      },
      cooldrinks: {
        targetCategory: 'burgers',
        targetDishId: 'bur-2', // Spiced Crisp Corn Veggie Crunch Burger
        pitch: 'Got your drink? Grab a crunchy burger to make it a meal!'
      },
      juices: {
        targetCategory: 'salads',
        targetDishId: 'sal-1', // Crunchy Coastal Garden Toss
        pitch: 'Pure vitality! Complete it with an organic garden toss.'
      },
      icecreams: {
        targetCategory: 'cooldrinks',
        targetDishId: 'drk-3', // Royal Rose Petal Falooda Cooler
        pitch: 'Sweet tooth craving? Treat yourself to a royal falooda!'
      }
    };

    function initScrollPopAnimation() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      });

      document.querySelectorAll('.reveal-pop').forEach(el => {
        observer.observe(el);
      });
    }

    function checkAndShowCombo(addedItem) {
      const rule = comboRules[addedItem.categoryId];
      if (!rule) return;

      const pairedItem = restaurantData.items.find(i => i.id === rule.targetDishId) ||
                         restaurantData.items.find(i => i.categoryId === rule.targetCategory && i.id !== addedItem.id);
      
      if (!pairedItem) return;

      // Don't show if this item is already in cart
      const alreadyInCart = cart.some(c => c.id === pairedItem.id);
      if (alreadyInCart) return;

      pendingComboItem = pairedItem;
      comboModalHeading.textContent = 'Make it a Combo?';
      comboModalPitch.textContent = typeof rule.pitch === 'function' ? rule.pitch(addedItem.name) : rule.pitch;
      comboDishImg.src = pairedItem.image;
      comboDishImg.alt = pairedItem.name;
      comboDishName.textContent = pairedItem.name;
      comboDishDesc.textContent = pairedItem.punchline || 'Chef recommended pairing';
      comboDishPrice.textContent = `₹${pairedItem.price}`;
      comboAcceptBtnText.textContent = `Add for +₹${pairedItem.price}`;
      comboDeclineBtn.textContent = 'No, thanks';

      setTimeout(() => {
        comboModal.classList.add('open');
        document.body.style.overflow = 'hidden';
        lucide.createIcons();
      }, 350);
    }

    function closeComboModal() {
      comboModal.classList.remove('open');
      document.body.style.overflow = 'auto';
      pendingComboItem = null;
    }

    comboAcceptBtn.addEventListener('click', () => {
      if (pendingComboItem) {
        addToCart(pendingComboItem.id, true);
        showCartToast(`Combo added! "${pendingComboItem.name}" in cart`);
      }
      closeComboModal();
    });

    comboDeclineBtn.addEventListener('click', closeComboModal);
    comboModal.addEventListener('click', (e) => {
      if (e.target === comboModal) {
        closeComboModal();
      }
    });

    function showCartToast(message) {
      const toast = document.getElementById('cartToast');
      const msg = document.getElementById('cartToastMessage');
      if (!toast || !msg) return;

      msg.textContent = message;
      toast.classList.add('show');

      clearTimeout(window.cartToastTimer);
      window.cartToastTimer = setTimeout(() => {
        toast.classList.remove('show');
      }, 2400);
    }

    function bumpCartBadge() {
      if (!cartCountBadge) return;
      cartCountBadge.classList.remove('bump');
      void cartCountBadge.offsetWidth;
      cartCountBadge.classList.add('bump');
    }

    function renderCategoryTabs() {
      categoryTabsContainer.innerHTML = '';
      restaurantData.categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `category-pill-btn ${cat.id === currentCategory ? 'active' : ''}`;
        btn.innerHTML = `<i data-lucide="${cat.icon}" style="width: 16px; height: 16px;"></i> ${cat.name}`;
        btn.addEventListener('click', () => {
          selectCategory(cat.id, true);
        });
        categoryTabsContainer.appendChild(btn);
      });
      lucide.createIcons();
    }

    function selectCategory(categoryId, triggerOffersModal = false) {
      currentCategory = categoryId;
      spotlightIndex = 0;
      renderCategoryTabs();
      renderSpotlightSlider();
      renderMenuGrid();

      if (triggerOffersModal) {
        openOfferModal(categoryId);
      }
    }

    function getItemsForCurrentCategory() {
      return restaurantData.items.filter(item => item.categoryId === currentCategory);
    }

    function renderSpotlightSlider() {
      const categoryItems = getItemsForCurrentCategory();
      if (!categoryItems.length) return;

      if (spotlightIndex >= categoryItems.length) spotlightIndex = 0;
      if (spotlightIndex < 0) spotlightIndex = categoryItems.length - 1;

      const item = categoryItems[spotlightIndex];
      const activeCategoryObj = restaurantData.categories.find(c => c.id === currentCategory);

      // Generate progress indicator dots (limited display for aesthetics)
      let dotsHtml = '';
      const totalDots = Math.min(categoryItems.length, 15);
      for (let idx = 0; idx < totalDots; idx++) {
        dotsHtml += `<div class="spotlight-progress-dot ${idx === spotlightIndex ? 'active' : ''}" onclick="goToSpotlightIndex(${idx})"></div>`;
      }

      spotlightContent.innerHTML = `
        <div class="spotlight-col-left">
          <span class="spotlight-tag">${activeCategoryObj ? activeCategoryObj.name : 'Spotlight'} Collection (${spotlightIndex + 1}/${categoryItems.length})</span>
          <h3 class="spotlight-heading">${item.name}</h3>
          <div class="spotlight-rating-wrap">
            <span style="color: var(--color-latte); font-size: 1.1rem;">★</span>
            <span>${item.rating.toFixed(1)} / 5.0 Rating</span>
          </div>
          <button class="btn-primary" onclick="addToCart('${item.id}')">
            <i data-lucide="plus" style="width: 18px; height: 18px;"></i>
            <span>Add to Cart</span>
          </button>
        </div>

        <div class="spotlight-col-center">
          <div class="spotlight-glow-disk"></div>
          <div class="spotlight-image-holder">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="spotlight-progress-dots">
            ${dotsHtml}
          </div>
        </div>

        <div class="spotlight-col-right">
          <h4 class="spotlight-punchline">${item.punchline}</h4>
          <p class="spotlight-detail-desc">${item.desc}</p>
          <div class="spotlight-price-row">
            <div class="spotlight-price">₹${item.price}</div>
            <button class="btn-primary" style="background: var(--color-cocoa); border-color: var(--color-latte); color: var(--color-latte);" onclick="openOfferModal('${currentCategory}')">
              <span>View Offers</span>
            </button>
          </div>
        </div>
      `;
      lucide.createIcons();
    }

    function goToSpotlightIndex(idx) {
      spotlightIndex = idx;
      renderSpotlightSlider();
    }

    prevSlideBtn.addEventListener('click', () => {
      const items = getItemsForCurrentCategory();
      spotlightIndex = (spotlightIndex - 1 + items.length) % items.length;
      renderSpotlightSlider();
    });

    nextSlideBtn.addEventListener('click', () => {
      const items = getItemsForCurrentCategory();
      spotlightIndex = (spotlightIndex + 1) % items.length;
      renderSpotlightSlider();
    });

    function renderMenuGrid() {
      const categoryItems = getItemsForCurrentCategory();
      const currentCatObj = restaurantData.categories.find(c => c.id === currentCategory);
      currentCategoryTitle.textContent = currentCatObj ? `${currentCatObj.name} Selection (${categoryItems.length} Dishes)` : 'Menu Dishes';

      foodCardsGrid.innerHTML = '';
      categoryItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'food-card reveal-pop';
        // Add subtle staggered transition delays
        card.style.transitionDelay = `${(index % 4) * 0.08}s`;
        card.innerHTML = `
          <div class="food-card-img-wrap">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <span class="food-card-category-badge">${currentCatObj ? currentCatObj.name : ''}</span>
            <div class="food-card-rating">
              <span>★</span> ${item.rating.toFixed(1)}
            </div>
          </div>
          <div class="food-card-content">
            <h4 class="food-card-name">${item.name}</h4>
            <p class="food-card-desc">${item.desc}</p>
            <div class="food-card-footer">
              <div class="food-card-price">₹${item.price}</div>
              <button class="btn-add-cart-sm" onclick="addToCart('${item.id}')">
                <i data-lucide="plus" style="width: 14px; height: 14px;"></i>
                <span>Add</span>
              </button>
            </div>
          </div>
        `;
        foodCardsGrid.appendChild(card);
      });
      lucide.createIcons();
      initScrollPopAnimation();
    }

    function openOfferModal(categoryId) {
      modalCategoryTarget = categoryId || currentCategory;
      modalOfferIndex = 0;
      
      const catObj = restaurantData.categories.find(c => c.id === modalCategoryTarget);
      modalOfferCategoryBadge.textContent = catObj ? `${catObj.name} Special Discounts` : 'Exclusive Offer';

      renderOfferCard();
      offersModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeOfferModal() {
      offersModal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }

    function getCategoryOfferItems() {
      return restaurantData.items.filter(it => it.categoryId === modalCategoryTarget);
    }

    function renderOfferCard() {
      const offerItems = getCategoryOfferItems();
      if (!offerItems.length) return;

      if (modalOfferIndex >= offerItems.length) modalOfferIndex = 0;
      if (modalOfferIndex < 0) modalOfferIndex = offerItems.length - 1;

      const item = offerItems[modalOfferIndex];
      const discountPercent = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);

      modalOfferCardBody.innerHTML = `
        <div class="offer-img-box">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="offer-info-box">
          <div class="offer-meta-row">
            <h4 class="offer-dish-title">${item.name}</h4>
            <div class="offer-rating-tag">★ ${item.rating.toFixed(1)}</div>
          </div>
          <p style="font-size: 0.85rem; color: rgba(244, 241, 222, 0.7); margin-bottom: 0.8rem;">
            ${item.punchline}
          </p>
          <div class="offer-pricing-row">
            <div class="offer-price-highlight">
              <del>₹${item.originalPrice}</del> ₹${item.price}
              <span style="font-size: 0.75rem; background: var(--color-terracotta); color: var(--color-cream); padding: 2px 6px; border-radius: 4px; margin-left: 5px;">${discountPercent}% OFF</span>
            </div>
            <button class="btn-primary" style="padding: 0.5rem 1.1rem; font-size: 0.88rem;" onclick="addToCart('${item.id}');">
              <i data-lucide="plus" style="width: 14px; height: 14px;"></i> Add
            </button>
          </div>
        </div>
      `;

      if (offerItems.length > 1) {
        modalPrevOfferBtn.style.display = 'grid';
        modalNextOfferBtn.style.display = 'grid';
      } else {
        modalPrevOfferBtn.style.display = 'none';
        modalNextOfferBtn.style.display = 'none';
      }
      lucide.createIcons();
    }

    modalPrevOfferBtn.addEventListener('click', () => {
      const items = getCategoryOfferItems();
      modalOfferIndex = (modalOfferIndex - 1 + items.length) % items.length;
      renderOfferCard();
    });

    modalNextOfferBtn.addEventListener('click', () => {
      const items = getCategoryOfferItems();
      modalOfferIndex = (modalOfferIndex + 1) % items.length;
      renderOfferCard();
    });

    skipOffersBtn.addEventListener('click', closeOfferModal);

    offersModal.addEventListener('click', (e) => {
      if (e.target === offersModal) {
        closeOfferModal();
      }
    });

    function addToCart(itemId, suppressCombo = false) {
      const foundDish = restaurantData.items.find(i => i.id === itemId);
      if (!foundDish) return;

      const existingCartEntry = cart.find(c => c.id === itemId);
      if (existingCartEntry) {
        existingCartEntry.quantity += 1;
      } else {
        cart.push({
          id: foundDish.id,
          name: foundDish.name,
          price: foundDish.price,
          image: foundDish.image,
          quantity: 1
        });
      }
      updateCartDisplay();
      bumpCartBadge();
      showCartToast(`Added "${foundDish.name}" to cart`);

      if (!suppressCombo) {
        checkAndShowCombo(foundDish);
      }
    }

    function incrementCartQty(itemId) {
      const entry = cart.find(c => c.id === itemId);
      if (entry) {
        entry.quantity += 1;
        updateCartDisplay();
      }
    }

    function decrementCartQty(itemId) {
      const entry = cart.find(c => c.id === itemId);
      if (entry) {
        if (entry.quantity > 1) {
          entry.quantity -= 1;
        } else {
          cart = cart.filter(c => c.id !== itemId);
        }
        updateCartDisplay();
      }
    }

    function deleteCartItem(itemId) {
      cart = cart.filter(c => c.id !== itemId);
      updateCartDisplay();
      showCartToast("Item removed from cart");
    }

    function updateCartDisplay() {
      const totalCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);
      const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
      const gst = Math.round(subtotal * 0.05);
      const grandTotal = subtotal + gst;

      cartCountBadge.textContent = totalCount;
      cartSubtotalText.textContent = `₹${subtotal}`;
      cartGstText.textContent = `₹${gst}`;
      cartTotalText.textContent = `₹${grandTotal}`;

      checkoutBtn.disabled = cart.length === 0;

      if (cart.length === 0) {
        cartItemsList.innerHTML = `
          <div class="empty-cart-view">
            <i data-lucide="shopping-bag" style="width: 48px; height: 48px;"></i>
            <h4 style="font-family: var(--font-heading); color: var(--color-latte); margin-bottom: 0.3rem;">Your cart is empty</h4>
            <p style="font-size: 0.88rem;">Select your coastal cravings from our menu</p>
          </div>
        `;
      } else {
        cartItemsList.innerHTML = '';
        cart.forEach(item => {
          const row = document.createElement('div');
          row.className = 'cart-item-row';
          row.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
            <div class="cart-item-info">
              <div class="cart-item-title">${item.name}</div>
              <div class="cart-item-rate">₹${item.price} each</div>
            </div>
            <div class="cart-qty-ctrls">
              <button class="qty-btn" onclick="decrementCartQty('${item.id}')" aria-label="Decrease quantity">−</button>
              <span class="qty-count">${item.quantity}</span>
              <button class="qty-btn" onclick="incrementCartQty('${item.id}')" aria-label="Increase quantity">+</button>
            </div>
            <button class="delete-item-btn" onclick="deleteCartItem('${item.id}')" aria-label="Delete item">
              <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
            </button>
          `;
          cartItemsList.appendChild(row);
        });
      }
      lucide.createIcons();
    }

    function openCartDrawer() {
      cartDrawer.classList.add('open');
      cartBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeCartDrawer() {
      cartDrawer.classList.remove('open');
      cartBackdrop.classList.remove('open');
      document.body.style.overflow = 'auto';
    }

    openCartBtn.addEventListener('click', openCartDrawer);
    closeCartBtn.addEventListener('click', closeCartDrawer);
    cartBackdrop.addEventListener('click', closeCartDrawer);

    function openOrderConfirmModal() {
      if (cart.length === 0) return;
      closeCartDrawer();
      renderConfirmItems();
      orderConfirmModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      lucide.createIcons();
    }

    function closeOrderConfirmModal() {
      orderConfirmModal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }

    function renderConfirmItems() {
      if (cart.length === 0) {
        confirmItemsList.innerHTML = `
          <div class="empty-cart-view" style="padding: 2rem 1rem;">
            <p style="color: rgba(244, 241, 222, 0.7);">All items have been removed from your order.</p>
          </div>
        `;
        confirmSubtotalText.textContent = '₹0';
        confirmGstText.textContent = '₹0';
        confirmGrandTotalText.textContent = '₹0';
        finalConfirmOrderBtn.disabled = true;
        return;
      }

      finalConfirmOrderBtn.disabled = false;
      const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
      const gst = Math.round(subtotal * 0.05);
      const grandTotal = subtotal + gst;

      confirmSubtotalText.textContent = `₹${subtotal}`;
      confirmGstText.textContent = `₹${gst}`;
      confirmGrandTotalText.textContent = `₹${grandTotal}`;

      confirmItemsList.innerHTML = '';
      cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const row = document.createElement('div');
        row.className = 'confirm-item-row';
        row.innerHTML = `
          <div class="confirm-item-left">
            <img src="${item.image}" alt="${item.name}" class="confirm-item-img">
            <div class="confirm-item-details">
              <div class="confirm-item-name">${item.name}</div>
              <div class="confirm-item-calc">Qty: <strong>${item.quantity}</strong> &times; ₹${item.price} = <strong>₹${itemTotal}</strong></div>
            </div>
          </div>
          <button class="confirm-remove-btn" title="Remove this item" onclick="deleteFromConfirmation('${item.id}')" aria-label="Remove ${item.name}">
            &minus;
          </button>
        `;
        confirmItemsList.appendChild(row);
      });
      lucide.createIcons();
    }

    function deleteFromConfirmation(itemId) {
      const targetItem = cart.find(c => c.id === itemId);
      const itemName = targetItem ? targetItem.name : 'Item';

      // Remove from cart
      cart = cart.filter(c => c.id !== itemId);
      updateCartDisplay();
      renderConfirmItems();
      showCartToast(`Removed "${itemName}" from order`);

      if (cart.length === 0) {
        setTimeout(() => {
          closeOrderConfirmModal();
          showCartToast('Cart is now empty');
        }, 1200);
      }
    }

    // Step 1: Proceed from cart to review modal
    checkoutBtn.addEventListener('click', () => {
      openOrderConfirmModal();
    });

    closeConfirmModalBtn.addEventListener('click', closeOrderConfirmModal);
    backToCartBtn.addEventListener('click', () => {
      closeOrderConfirmModal();
      openCartDrawer();
    });

    orderConfirmModal.addEventListener('click', (e) => {
      if (e.target === orderConfirmModal) {
        closeOrderConfirmModal();
      }
    });

    // Step 2: Final confirmation click
    finalConfirmOrderBtn.addEventListener('click', () => {
      if (cart.length === 0) return;

      const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
      const grandTotal = subtotal + Math.round(subtotal * 0.05);
      const itemCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

      // Clear the cart
      cart = [];
      updateCartDisplay();
      closeOrderConfirmModal();

      // Show celebratory success modal
      successSummaryText.innerHTML = `Your banquet order of <strong>${itemCount} dishes</strong> (Grand Total: <strong>₹${grandTotal}</strong>) has been confirmed and sent to the Karavalli kitchen.`;
      successModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      lucide.createIcons();

      // Reset and trigger redirect animation & countdown (3 seconds)
      if (redirectProgressBar) {
        redirectProgressBar.style.animation = 'none';
        void redirectProgressBar.offsetWidth;
        redirectProgressBar.style.animation = 'redirectProgress 3s linear forwards';
      }

      let remainingSeconds = 3;
      if (redirectCountdownText) {
        redirectCountdownText.textContent = `Redirecting to Home in ${remainingSeconds} seconds...`;
      }

      clearInterval(autoCountdownInterval);
      clearTimeout(autoRedirectTimer);

      autoCountdownInterval = setInterval(() => {
        remainingSeconds -= 1;
        if (remainingSeconds > 0 && redirectCountdownText) {
          redirectCountdownText.textContent = `Redirecting to Home in ${remainingSeconds} second${remainingSeconds === 1 ? '' : 's'}...`;
        }
      }, 1000);

      // Auto redirect after 3 seconds
      autoRedirectTimer = setTimeout(() => {
        clearInterval(autoCountdownInterval);
        successModal.classList.remove('open');
        document.body.style.overflow = 'auto';

        // Smoothly scroll back to the top / Home section
        const homeSection = document.getElementById('home');
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Update active nav link
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        const homeLink = document.querySelector('.nav-links a[href="#home"]');
        if (homeLink) homeLink.classList.add('active');

        showCartToast('Welcome back to Karavalli Home!');
      }, 3000);
    });

    document.addEventListener('DOMContentLoaded', () => {
      renderCategoryTabs();
      renderSpotlightSlider();
      renderMenuGrid();
      updateCartDisplay();
      initScrollPopAnimation();
      lucide.createIcons();
    });