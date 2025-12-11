// Menu Data with all items from Country in a Box
const menuItems = [
    // Asian Flavors
    {
        id: 1,
        name: "Teriyaki Chicken Bento",
        country: "Japan",
        category: "asian",
        price: 180,
        image: "Menu Pictures/Teriyaki Ckn Bento.png",
        description: "Tender chicken glazed with sweet teriyaki sauce, grilled to perfection, served with steamed rice and vegetables"
    },
    {
        id: 2,
        name: "Beef Bulgogi Bowl",
        country: "Korea",
        category: "asian",
        price: 195,
        image: "Menu Pictures/Beef Bulgogi Bowl.png",
        description: "Premium beef marinated in soy sauce, sesame oil, garlic, stir-fried with vegetables and served over rice"
    },
    {
        id: 3,
        name: "Stir-Fry Chicken Chow Mein",
        country: "China",
        category: "asian",
        price: 175,
        image: "Menu Pictures/Stir-Fry Chicken Chow Mein.png",
        description: "Wok-tossed egg noodles with tender chicken, crisp vegetables, and savory soy-based sauce"
    },
    {
        id: 4,
        name: "Pad Thai Box",
        country: "Thailand",
        category: "asian",
        price: 185,
        image: "Menu Pictures/Pad Thai Box.png",
        description: "Stir-fried rice noodles with shrimp, egg, bean sprouts, peanuts, and tamarind sauce"
    },
    {
        id: 5,
        name: "Sweet Soy Chicken Box",
        country: "Indonesia",
        category: "asian",
        price: 170,
        image: "Menu Pictures/Sweet Soy Chicken Box.png",
        description: "Tender chicken glazed with kecap manis (sweet soy sauce) served with jasmine rice"
    },
    {
        id: 6,
        name: "Chicken Curry Rice",
        country: "India",
        category: "asian",
        price: 190,
        image: "Menu Pictures/Chicken Curry Rice.png",
        description: "Tender chicken in aromatic curry sauce with Indian spices, served with basmati rice"
    },
    
    // Filipino Favorites
    {
        id: 7,
        name: "Tapa Breakfast Box",
        country: "Philippines",
        category: "filipino",
        price: 150,
        image: "Menu Pictures/Tapa Breakfast Box.png",
        description: "Marinated beef tapa with fried egg, garlic rice, and pickled vegetables (Tapsilog)"
    },
    {
        id: 8,
        name: "Sweet Tocino Box",
        country: "Philippines",
        category: "filipino",
        price: 145,
        image: "Menu Pictures/Sweet Tocino Box.png",
        description: "Sweet cured pork tocino with fried egg, garlic fried rice, and vinegar dip (Tocilog)"
    },
    {
        id: 9,
        name: "Chicken Adobo Bowl",
        country: "Philippines",
        category: "filipino",
        price: 160,
        image: "Menu Pictures/Chicken Adobo Bowl.png",
        description: "Chicken braised in soy sauce, vinegar, garlic, and bay leaves served over steamed rice"
    },
    {
        id: 10,
        name: "Pork Sisig Rice Box",
        country: "Philippines",
        category: "filipino",
        price: 165,
        image: "Menu Pictures/Pork Sisig Rice Box.png",
        description: "Crispy pork belly with onions, chili peppers, calamansi, and topped with egg"
    },
    {
        id: 11,
        name: "Sinigang Rice Bowl",
        country: "Philippines",
        category: "filipino",
        price: 170,
        image: "Menu Pictures/Sinigang Rice Bowl.png",
        description: "Sour tamarind soup with pork, vegetables (kangkong, radish, eggplant) and rice"
    },
    {
        id: 12,
        name: "Beef Caldereta Box",
        country: "Philippines",
        category: "filipino",
        price: 185,
        image: "Menu Pictures/Beef Caldereta Box.png",
        description: "Beef stew in tomato sauce with potatoes, carrots, bell peppers, and liver spread"
    },
    
    // European Flavors
    {
        id: 13,
        name: "Spaghetti Bolognese Box",
        country: "Italy",
        category: "european",
        price: 175,
        image: "Menu Pictures/Spaghetti Bolognese Box.png",
        description: "Classic Italian pasta with slow-cooked meat sauce, parmesan, and fresh basil"
    },
    {
        id: 14,
        name: "Garlic Butter Chicken Pasta",
        country: "Italy",
        category: "european",
        price: 185,
        image: "Menu Pictures/Garlic Butter Chicken Pasta.png",
        description: "Fettuccine pasta with grilled chicken in creamy garlic butter sauce and herbs"
    },
    {
        id: 15,
        name: "Fish & Chips Box",
        country: "UK",
        category: "european",
        price: 200,
        image: "Menu Pictures/Fish & Chips Box.png",
        description: "Beer-battered crispy fish fillet with golden chips, mushy peas, and tartar sauce"
    },
    {
        id: 16,
        name: "Cheesy Sausage Roll",
        country: "Germany",
        category: "european",
        price: 165,
        image: "Menu Pictures/Cheesy Sausage Roll.png",
        description: "German bratwurst sausage with melted cheese, sauerkraut, and mustard on a roll"
    },
    {
        id: 17,
        name: "Chicken Paella Rice Box",
        country: "Spain",
        category: "european",
        price: 195,
        image: "Menu Pictures/Chicken Paella Rice Box.png",
        description: "Spanish saffron-infused rice with chicken, bell peppers, peas, and chorizo"
    },
    {
        id: 18,
        name: "Chicken Gyro Wrap Box",
        country: "Greece",
        category: "european",
        price: 180,
        image: "Menu Pictures/Chicken Gyro Wrap Box.png",
        description: "Grilled chicken wrapped in pita with tzatziki, tomatoes, onions, and lettuce"
    },
    
    // American & Mediterranean
    {
        id: 19,
        name: "Classic Cheeseburger Box",
        country: "USA",
        category: "american",
        price: 190,
        image: "Menu Pictures/Classic Cheeseburger Box.png",
        description: "Juicy beef patty with cheddar cheese, lettuce, tomato, pickles, and crispy fries"
    },
    {
        id: 20,
        name: "Chili Con Carne Rice",
        country: "Mexico",
        category: "american",
        price: 175,
        image: "Menu Pictures/Chili Con Carne Rice.png",
        description: "Spicy beef chili with kidney beans, tomatoes, peppers, served over Mexican rice"
    },
    {
        id: 21,
        name: "Beef Kebab Box",
        country: "Iran",
        category: "american",
        price: 185,
        image: "Menu Pictures/Beef Kebab Box.png",
        description: "Grilled marinated beef skewers with saffron rice, grilled tomatoes, and flatbread"
    },
    {
        id: 22,
        name: "Barbeque Chicken Rice Box",
        country: "USA",
        category: "american",
        price: 180,
        image: "Menu Pictures/Barbeque Chicken Rice Box.png",
        description: "Smoky BBQ glazed chicken with coleslaw, cornbread, and seasoned rice"
    },
    {
        id: 23,
        name: "Chicken Biryani Rice",
        country: "Arabian",
        category: "american",
        price: 195,
        image: "Menu Pictures/Chicken Biryani Rice.png",
        description: "Aromatic basmati rice with spiced chicken, caramelized onions, and saffron"
    },
    {
        id: 24,
        name: "Brazilian Garlic Beef Box",
        country: "Brazil",
        category: "american",
        price: 200,
        image: "Menu Pictures/Brazilian Garlic Beef Box.png",
        description: "Tender beef strips sautéed with garlic, served with black beans and garlic rice"
    },
    
    // Filipino Snacks
    {
        id: 25,
        name: "Lumpiang Shanghai",
        country: "Philippines",
        category: "snacks",
        price: 80,
        image: "Menu Pictures/Lumpiang Shanghai.png",
        description: "Crispy Filipino spring rolls filled with pork and vegetables, served with sweet chili sauce (8 pcs)"
    },
    {
        id: 26,
        name: "Pancit Canton Cup",
        country: "Philippines",
        category: "snacks",
        price: 60,
        image: "Menu Pictures/Pancit Canton Cup.png",
        description: "Stir-fried wheat noodles with vegetables, chicken, and soy-based sauce in a convenient cup"
    },
    {
        id: 27,
        name: "Calamares Bites",
        country: "Philippines",
        category: "snacks",
        price: 95,
        image: "Menu Pictures/Calamares Bites.png",
        description: "Crispy breaded squid rings served with garlic mayo and calamansi"
    },
    {
        id: 28,
        name: "Mini Turon",
        country: "Philippines",
        category: "snacks",
        price: 70,
        image: "Menu Pictures/Mini Turon.png",
        description: "Caramelized banana spring rolls wrapped in crispy lumpia wrapper (6 pcs)"
    },
    
    // Asian Snacks
    {
        id: 29,
        name: "Japanese Gyoza",
        country: "Japan",
        category: "snacks",
        price: 90,
        image: "Menu Pictures/Japanese Gyoza.png",
        description: "Pan-fried pork and vegetable dumplings with crispy bottoms and ponzu dipping sauce (6 pcs)"
    },
    {
        id: 30,
        name: "Korean Fishcake Skewers",
        country: "Korea",
        category: "snacks",
        price: 75,
        image: "Menu Pictures/Korean Fishcake Skewers.png",
        description: "Korean odeng fish cakes on sticks served in warm broth (3 pcs)"
    },
    {
        id: 31,
        name: "Thai Chicken Bites",
        country: "Thailand",
        category: "snacks",
        price: 85,
        image: "Menu Pictures/Thai Chicken Bites.png",
        description: "Crispy fried chicken pieces marinated in Thai herbs with sweet chili dipping sauce"
    },
    
    // Western Snacks
    {
        id: 32,
        name: "French Fries",
        country: "USA",
        category: "snacks",
        price: 55,
        image: "Menu Pictures/French Fries.png",
        description: "Golden crispy potato fries seasoned with sea salt"
    },
    {
        id: 33,
        name: "Mozzarella Sticks",
        country: "Italy",
        category: "snacks",
        price: 95,
        image: "Menu Pictures/Mozzarella Sticks.png",
        description: "Breaded mozzarella cheese sticks fried until golden, served with marinara sauce (6 pcs)"
    },
    {
        id: 34,
        name: "Garlic Bread Duo",
        country: "Italy",
        category: "snacks",
        price: 65,
        image: "Menu Pictures/Garlic Bread Duo.png",
        description: "Toasted bread slices with garlic butter, herbs, and melted cheese (2 pcs)"
    },
    {
        id: 35,
        name: "Mexican Corn Cups",
        country: "Mexico",
        category: "snacks",
        price: 70,
        image: "Menu Pictures/Mexican Corn Cups.png",
        description: "Elote-style corn kernels with mayo, cotija cheese, chili powder, and lime"
    },
    {
        id: 36,
        name: "Churros Sticks",
        country: "Spain",
        category: "snacks",
        price: 80,
        image: "Menu Pictures/Churros Sticks.png",
        description: "Crispy fried dough sticks coated with cinnamon sugar, served with chocolate sauce"
    },
    
    // Mediterranean Snacks
    {
        id: 37,
        name: "Hummus & Pita Chips",
        country: "Lebanon",
        category: "snacks",
        price: 85,
        image: "Menu Pictures/Hummus & Pita Chips.png",
        description: "Creamy chickpea hummus drizzled with olive oil, served with crispy pita chips"
    },
    {
        id: 38,
        name: "Falafel Bites",
        country: "Middle East",
        category: "snacks",
        price: 90,
        image: "Menu Pictures/Falafel Bites.png",
        description: "Crispy fried chickpea and herb balls served with tahini sauce (6 pcs)"
    },
    {
        id: 39,
        name: "Loaded Nacho Box",
        country: "Mexico",
        category: "snacks",
        price: 110,
        image: "Menu Pictures/Loaded Nacho Box.png",
        description: "Tortilla chips topped with cheese, jalapeños, sour cream, salsa, and guacamole"
    },
    
    // Classic Drinks
    {
        id: 40,
        name: "Iced Tea",
        country: "International",
        category: "drinks",
        price: 45,
        image: "Menu Pictures/Iced Tea.png",
        description: "Freshly brewed black tea served chilled with lemon and ice"
    },
    {
        id: 41,
        name: "Calamansi Juice",
        country: "Philippines",
        category: "drinks",
        price: 50,
        image: "Menu Pictures/Calamansi Juice.png",
        description: "Tangy Filipino citrus juice made from fresh calamansi limes, sweetened and iced"
    },
    {
        id: 42,
        name: "House Brewed Coffee",
        country: "International",
        category: "drinks",
        price: 55,
        image: "Menu Pictures/House Brewed Coffee.png",
        description: "Freshly brewed premium coffee beans, served hot or iced"
    },
    {
        id: 43,
        name: "Milk Tea",
        country: "Taiwan",
        category: "drinks",
        price: 65,
        image: "Menu Pictures/Milk Tea.png",
        description: "Classic Taiwanese milk tea with black tea, creamy milk, and optional tapioca pearls"
    },
    {
        id: 44,
        name: "Iced Mocha",
        country: "International",
        category: "drinks",
        price: 75,
        image: "Menu Pictures/Iced Mocha.png",
        description: "Chilled espresso blended with chocolate syrup, milk, and whipped cream"
    },
    
    // International Drinks
    {
        id: 45,
        name: "Thai Milk Tea",
        country: "Thailand",
        category: "drinks",
        price: 70,
        image: "Menu Pictures/Thai Milk Tea.png",
        description: "Sweet orange-colored Thai tea with condensed milk and evaporated milk over ice"
    },
    {
        id: 46,
        name: "Korean Banana Milk",
        country: "Korea",
        category: "drinks",
        price: 65,
        image: "Menu Pictures/Korean Banana Milk.png",
        description: "Sweet and creamy Korean-style banana flavored milk drink, served chilled"
    },
    {
        id: 47,
        name: "Japanese Matcha Latte",
        country: "Japan",
        category: "drinks",
        price: 80,
        image: "Menu Pictures/Japanese Matcha Latte.png",
        description: "Premium Japanese green tea matcha powder whisked with steamed milk, hot or iced"
    },
    {
        id: 48,
        name: "American Lemonade",
        country: "USA",
        category: "drinks",
        price: 55,
        image: "Menu Pictures/American Lemonade.png",
        description: "Freshly squeezed lemon juice with sugar and cold water, garnished with mint"
    },
    {
        id: 49,
        name: "Mexican Horchata",
        country: "Mexico",
        category: "drinks",
        price: 60,
        image: "Menu Pictures/Mexican Horchata.png",
        description: "Creamy rice and cinnamon drink sweetened with vanilla, served over ice"
    },
    
    // Filipino Desserts
    {
        id: 50,
        name: "Leche Flan Slice",
        country: "Philippines",
        category: "desserts",
        price: 60,
        image: "Menu Pictures/Leche Flan Slice.png",
        description: "Silky smooth caramel custard made with egg yolks and condensed milk, Filipino-style"
    },
    {
        id: 51,
        name: "Mini Halo-Halo Cup",
        country: "Philippines",
        category: "desserts",
        price: 85,
        image: "Menu Pictures/Mini Halo-Halo Cup.png",
        description: "Filipino shaved ice dessert with sweet beans, fruits, jellies, ube, and leche flan"
    },
    {
        id: 52,
        name: "Buko Pandan Cup",
        country: "Philippines",
        category: "desserts",
        price: 70,
        image: "Menu Pictures/Buko Pandan Cup.png",
        description: "Sweet green jelly dessert with young coconut strips in creamy pandan-flavored sauce"
    },
    
    // Asian Desserts
    {
        id: 53,
        name: "Japanese Mochi Balls",
        country: "Japan",
        category: "desserts",
        price: 75,
        image: "Menu Pictures/Japanese Mochi Balls.png",
        description: "Soft and chewy rice cake balls filled with sweet red bean paste (4 pcs)"
    },
    {
        id: 54,
        name: "Thai Sticky Rice with Mango",
        country: "Thailand",
        category: "desserts",
        price: 90,
        image: "Menu Pictures/Thai Sticky Rice with Mango.png",
        description: "Sweet coconut sticky rice topped with fresh ripe mango slices and coconut cream"
    },
    {
        id: 55,
        name: "Korean Honey Pancake",
        country: "Korea",
        category: "desserts",
        price: 80,
        image: "Menu Pictures/Korean Honey Pancake.png",
        description: "Hotteok - sweet Korean pancake filled with honey, brown sugar, and crushed peanuts"
    },
    
    // Western Desserts
    {
        id: 56,
        name: "Brownie Bite",
        country: "USA",
        category: "desserts",
        price: 65,
        image: "Menu Pictures/Brownie Bite.png",
        description: "Rich and fudgy chocolate brownie square with chocolate chips, warm and gooey"
    },
    {
        id: 57,
        name: "Cookie Duo",
        country: "USA",
        category: "desserts",
        price: 55,
        image: "Menu Pictures/Cookie Duo.png",
        description: "Two freshly baked chocolate chip cookies, soft and chewy"
    },
    {
        id: 58,
        name: "Mini Cheesecake Cup",
        country: "USA",
        category: "desserts",
        price: 75,
        image: "Menu Pictures/Mini Cheesecake Cup.png",
        description: "Creamy New York style cheesecake with graham cracker crust and berry topping"
    },
    
    // Family Boxes
    {
        id: 59,
        name: "Pinoy Classic Family Box",
        country: "Philippines",
        category: "family",
        price: 550,
        image: "Menu Pictures/Pinoy Classic Family Box.png",
        description: "Filipino family feast with adobo, sisig, pancit, rice, and lumpiang shanghai (4-6 people)"
    },
    {
        id: 60,
        name: "Asian Favorites Family Box",
        country: "Asia",
        category: "family",
        price: 600,
        image: "Menu Pictures/Asian Favorites Family Box.png",
        description: "Asian variety platter with teriyaki, bulgogi, pad thai, gyoza, and fried rice (4-6 people)"
    },
    {
        id: 61,
        name: "European Comfort Box",
        country: "Europe",
        category: "family",
        price: 650,
        image: "Menu Pictures/European Comfort Box.png",
        description: "European classics with pasta bolognese, fish & chips, paella, and garlic bread (4-6 people)"
    },
    {
        id: 62,
        name: "The Americas & Mediterranean Party Box",
        country: "International",
        category: "family",
        price: 700,
        image: "Menu Pictures/The Americas & Mediterranean Party Box.png",
        description: "Party platter with burgers, kebabs, BBQ chicken, falafel, nachos, and sides (6-8 people)"
    },
    {
        id: 63,
        name: "Ultimate Country Sampler Box",
        country: "International",
        category: "family",
        price: 850,
        image: "Menu Pictures/Ultimate Country Sampler Box.png",
        description: "Global feast sampler featuring dishes from Philippines, Asia, Europe, and Americas (8-10 people)"
    }
];
