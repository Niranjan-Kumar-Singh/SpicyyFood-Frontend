// src/CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from '../components/ItemCard';
import '../styles/CategoryPage.css'

// Burger import
import AlooTikkiBurger from '../assets/images/Burger/aloo tikki burger.jpg';
import BBQChickenBurger from '../assets/images/Burger/bbq chicken burger.jpg';
import ButterChickenBurger from '../assets/images/Burger/butter chicke burger.jpg';
import CheesyVegBurger from '../assets/images/Burger/cheesy veg burger.jpg'
import ChickenKebabBurger from '../assets/images/Burger/chicken kabab burger.jpg';
import ChickenTandooriBurger from '../assets/images/Burger/chicken tandoori burger.jpg';
import ChoriBurger from '../assets/images/Burger/chori burger.jpeg';
import ClassicHamburger from '../assets/images/Burger/classic hamburger.jpg';
import ClassicVeg from '../assets/images/Burger/Classic Veg.jpg';
import EggBurger from '../assets/images/Burger/egg burger.jpg';
import ElkBurger from '../assets/images/Burger/Elk Burger.jpg';
import FalafelBurger from '../assets/images/Burger/falafel burger.jpeg';
import FishBurger from '../assets/images/Burger/fish burger.jpg';
import JumboBurger from '../assets/images/Burger/jumbo burger.jfif';
import KangarooBurger from '../assets/images/Burger/kangaroo burger.jpg';
import MaharajaMacBurger from '../assets/images/Burger/maharaja mac burger.jpg';
import MasalaBurger from '../assets/images/Burger/masala burger.jpg';
import MuttonBurger from '../assets/images/Burger/mutton burger.jpg';
import OstrichBurger from '../assets/images/Burger/ostrich burger.jpg';
import PaneerBurger from '../assets/images/Burger/paneer burger.webp';
import PoutineBurger from '../assets/images/Burger/poutine burger.jpeg';
import SchezwanBurger from '../assets/images/Burger/schezwan burger.jpg';
import SpicyVeggieBurger from '../assets/images/Burger/spicy veggie burger.jpg';
import VadaPavBurger from '../assets/images/Burger/vada pav burger.jpg';

//Chicken import
import Chicken65 from '../assets/images/Chicken/65.jpg';
import AmritsariFried from '../assets/images/Chicken/Amritsari Fried.jpg';
import AndhraCrispy from '../assets/images/Chicken/Andhra Crispy.jpeg';
import BatterFried from '../assets/images/Chicken/Batter Fried.jpeg';
import ButterChickenFry from '../assets/images/Chicken/Butter Chicken Fry.jpeg';
import CheeseCrustedFried from '../assets/images/Chicken/Cheese Crusted Fried.jpg';
import Crispy from '../assets/images/Chicken/Crispy.webp';
import Fried from '../assets/images/Chicken/Fried.jpg';
import HoneyChilliCrispy from '../assets/images/Chicken/Honey Chili Crispy.jpeg';
import HyderabadiCrispy from '../assets/images/Chicken/Hyderabadi Crispy.webp';
import KFCStyle from '../assets/images/Chicken/KFC Style.jpeg';
import Kiev from '../assets/images/Chicken/Kiev.jpeg';
import Koliwada from '../assets/images/Chicken/Koliwada.jpeg';
import Lollipop from '../assets/images/Chicken/Lollipop.jpeg';
import MalabarFried from '../assets/images/Chicken/Malabar Fried.jpeg';
import MasalaFried from '../assets/images/Chicken/Masala Fried.jpeg';
import Pakora from '../assets/images/Chicken/Pakora.jpg';
import PeriPeriFried from '../assets/images/Chicken/Peri Peri Fried.jpeg';
import PolloFrito from '../assets/images/Chicken/Pollo Frito.jpeg';
import Popcorn from '../assets/images/Chicken/Popcorn.jpg';
import SpicyGarlicFried from '../assets/images/Chicken/Spicy Garlic Fried.jpeg';
import StripsFingers from '../assets/images/Chicken/Strips Fingers.jpeg';
import TandooriFried from '../assets/images/Chicken/Tandoori Fried.jpg';
import Tempura from '../assets/images/Chicken/Tempura.jpeg';

//Coffee import
import Affogato from '../assets/images/coffee/Affogato.jpg';
import Americano from '../assets/images/coffee/Americano.jpg';
import BlackEye from '../assets/images/coffee/Black Eye .jpg';
import Brave from '../assets/images/coffee/Brave.jpg';
import ButterscotchCoffee from '../assets/images/coffee/Butterscotch Coffee.jpg';
import CafeMochaWithChocolate from '../assets/images/coffee/Café Mocha with Chocolate.jpg';
import CaffeAmericano from '../assets/images/coffee/Caffe americano.jpg';
import CaffeAuLait from '../assets/images/coffee/Caffe au lait.jpg';
import CaffeCorretto from '../assets/images/coffee/Caffe corretto.jpg';
import CaffeLatte from '../assets/images/coffee/Caffe latte .jpg';
import Cappuccino from '../assets/images/coffee/Cappuccino.jpg';
import CaramelLatte from '../assets/images/coffee/Caramel Latte.jpg';
import ColdBrew from '../assets/images/coffee/Cold Brew.jpg';
import Cortado from '../assets/images/coffee/Cortado.jpg';
import Doppio from '../assets/images/coffee/Doppio .jpg';
import EspressoConPanna from '../assets/images/coffee/Espresso Con Panna.jpg';
import EspressoShot from '../assets/images/coffee/Espresso shot.jpg';
import Espresso from '../assets/images/coffee/Espresso.jpg';
import FlatWhite from '../assets/images/coffee/Flat White.jpg';
import Frappe from '../assets/images/coffee/Frappé .jpg';
import HazelnutCoffee from '../assets/images/coffee/Hazelnut Coffee.jpg';
import IcedAmericano from '../assets/images/coffee/Iced Americano.jpg';
import IcedCappuccino from '../assets/images/coffee/Iced Cappuccino.jpg';
import IcedLatte from '../assets/images/coffee/Iced Latte .jpg';
import IcedMocha from '../assets/images/coffee/Iced Mocha.jpg';
import IrishCoffee from '../assets/images/coffee/Irish Coffee .jpg';
import Latte from '../assets/images/coffee/Latte.jpg';
import LongBlack from '../assets/images/coffee/Long Black.jpg';
import Lungo from '../assets/images/coffee/Lungo.jpg';
import Macchiato from '../assets/images/coffee/Macchiato.jpg';
import Mocha from '../assets/images/coffee/Mocha.jpg';
import NitroCoffee from '../assets/images/coffee/Nitro Coffee.jpg';
import PumpkinSpiceLatte from '../assets/images/coffee/Pumpkin Spice Latte .jpg';
import RedEye from '../assets/images/coffee/Red Eye .jpg';
import Ristretto from '../assets/images/coffee/Ristretto.jpg';
import Romano from '../assets/images/coffee/Romano.jpg';
import VanillaLatte from '../assets/images/coffee/Vanilla Latte .jpg';

//Cold-Drink import
import ArizonaIcedTea from '../assets/images/ColdDrink/Arizona Iced Tea.jpeg';
import Bovonto from '../assets/images/ColdDrink/Bovonto.jpeg';
import Chaas from '../assets/images/ColdDrink/Chaas.jpg';
import ClubMate from '../assets/images/ColdDrink/Club Mate.jpg';
import CocaColaZero from '../assets/images/ColdDrink/Coca Cola Zero.jpg';
import FeverTreeTonic from '../assets/images/ColdDrink/Fever Tree Tonic.jpeg';
import Fiji from '../assets/images/ColdDrink/Fiji.jpeg';
import Hell from '../assets/images/ColdDrink/Hell.jpeg';
import Horchata from '../assets/images/ColdDrink/Horchata.jpeg';
import Keventers from '../assets/images/ColdDrink/Keventers.jpeg';
import Maaza from '../assets/images/ColdDrink/Maaza.png';
import Monster from '../assets/images/ColdDrink/Monster.jpeg';
import MountainDew from '../assets/images/ColdDrink/Mountain Dew.jpeg';
import PepsiBlack from '../assets/images/ColdDrink/Pepsi Black.jpg';
import PerrierSparkling from '../assets/images/ColdDrink/Perrier Sparkling.jpeg';
import RawPresseryAlmondMilk from '../assets/images/ColdDrink/Raw Pressery Almond Milk.jpg';
import RedBull from '../assets/images/ColdDrink/Red Bull.jpeg';
import RootBeer from '../assets/images/ColdDrink/Root Beer.jpeg';
import SanPellegrinoSparkling from '../assets/images/ColdDrink/San Pellegrino Sparkling.jpeg';
import SchweppesTonic from '../assets/images/ColdDrink/Schweppes Tonic.jpg';
import StarbucksColdBrew from '../assets/images/ColdDrink/Starbucks Cold Brew.jpg';
import Tamarindo from '../assets/images/ColdDrink/Tamarindo.avif';
import Twinings from '../assets/images/ColdDrink/Twinings.jpeg';
import VitaminWater from '../assets/images/ColdDrink/Vitamin.jpeg';

//Ice-Cream import
import AlmondButterscotch from '../assets/images/IceCream/Almond Butterscotch.png';
import AlphonsoMangoSorbet from '../assets/images/IceCream/Alphonso Mango Sorbet.jpeg';
import BlackcurrantDelight from '../assets/images/IceCream/Blackcurrant Delight.jpeg';
import BlueberryCheesecake from '../assets/images/IceCream/Blueberry Cheesecake.jpeg';
import CashewNutCaramel from '../assets/images/IceCream/Cashew Nut Caramel.webp';
import ChocoBar from '../assets/images/IceCream/Choco Bar.jpeg';
import Cornetto from '../assets/images/IceCream/Cornetto.jpg';
import DeathByChocolate from '../assets/images/IceCream/Death.jpg';
import FrenchVanillaBean from '../assets/images/IceCream/French Vanilla Bean.jpg';
import JalebiWithRabri from '../assets/images/IceCream/Jalebi with Rabri.jpg';
import LowFatStrawberry from '../assets/images/IceCream/Low Fat Strawberry.jpg';
import MadagascarVanilla from '../assets/images/IceCream/Madagascar Vanilla.jpg';
import MochaAlmondFudge from '../assets/images/IceCream/Mocha Almond Fudge.jpeg';
import PineappleSorbet from '../assets/images/IceCream/Pineapple Sorbet.jpeg';
import PistaBadamWithSaffron from '../assets/images/IceCream/Pista Badam with Saffron.jpg';
import Rasmalai from '../assets/images/IceCream/Rasmalai.jpg';
import RaspberrySorbet from '../assets/images/IceCream/Raspberry Sorbet.jpeg';
import RedBean from '../assets/images/IceCream/Red Bean.jpeg';
import RoastedAlmondWithHoney from '../assets/images/IceCream/Roasted Almond with Honey.webp';
import SicilianPistachio from '../assets/images/IceCream/Sicilian Pistachio.jpg';
import TahitianVanilla from '../assets/images/IceCream/Tahitian Vanilla.webp';
import TenderCoconut from '../assets/images/IceCream/Tender Coconut.jpeg';
import Vanilla from '../assets/images/IceCream/Vanilla.jpg';
import WalnutFudge from '../assets/images/IceCream/Walnut Fudge.jpeg';

//Kebabs import
import Afghani from '../assets/images/kebabs/Afghani.jpeg';
import Bihari from '../assets/images/kebabs/Bihari.jpeg';
import Brochette from '../assets/images/kebabs/Brochette.jpeg';
import Chapli from '../assets/images/kebabs/Chapli.jpeg';
import Chenjeh from '../assets/images/kebabs/Chenjeh.jpeg';
import Chuan from '../assets/images/kebabs/Chuan.jpeg';
import Churrasco from '../assets/images/kebabs/Churrasco.jpeg';
import Dora from '../assets/images/kebabs/Dora.jpg';
import Espetada from '../assets/images/kebabs/Espetada.jpeg';
import Galouti from '../assets/images/kebabs/Galouti.jpeg';
import HaraBhara from '../assets/images/kebabs/Hara Bhara.jpeg';
import Kakori from '../assets/images/kebabs/Kakori.jpeg';
import Kalmi from '../assets/images/kebabs/Kalmi.jpeg';
import Khorovats from '../assets/images/kebabs/Khorovats.jpeg';
import Peshawari from '../assets/images/kebabs/Peshawari.webp';
import Pinchitos from '../assets/images/kebabs/Pinchitos.jpeg';
import Pinchos from '../assets/images/kebabs/Pinchos.jpg';
import Reshmi from '../assets/images/kebabs/Reshmi.jpg';
import Satay from '../assets/images/kebabs/Satay.jpeg';
import Seekh from '../assets/images/kebabs/Seekh.jpeg';
import Shami from '../assets/images/kebabs/Shami.jpeg';
import Sosatie from '../assets/images/kebabs/Sosatie.jpeg';
import TundeKe from '../assets/images/kebabs/Tunde Ke.jpg';
import Yakitori from '../assets/images/kebabs/Yakitori.jpg';

//Noodles import
import Chopsuey from '../assets/images/Noodles/Chopsuey.webp';
import Chowmein from '../assets/images/Noodles/Chowmein.jpg';
import Fideua from '../assets/images/Noodles/Fideuà.webp';
import Glass from '../assets/images/Noodles/Glass.jpg';
import Hakka from '../assets/images/Noodles/Hakka.jpeg';
import Hokkien from '../assets/images/Noodles/Hokkien.jpeg';
import KoreanNaengmyeon from '../assets/images/Noodles/Korean Naengmyeon.jpeg';
import Kushari from '../assets/images/Noodles/Kushari.jpg';
import Macaroni from '../assets/images/Noodles/Macaroni.jpg';
import Maggi from '../assets/images/Noodles/Maggi.jpeg';
import MeeGoreng from '../assets/images/Noodles/Mee Goreng.jpg';
import PadThai from '../assets/images/Noodles/Pad Thai.jpeg';
import Ramen from '../assets/images/Noodles/Ramen.jpeg';
import Rice from '../assets/images/Noodles/Rice.jpeg';
import Rotini from '../assets/images/Noodles/Rotini.jpeg';
import Schezwan from '../assets/images/Noodles/Schezwan.jpeg';
import Sevai from '../assets/images/Noodles/Sevai.webp';
import Shirataki from '../assets/images/Noodles/Shirataki.jpg';
import Soba from '../assets/images/Noodles/Soba.jpg';
import Spaetzle from '../assets/images/Noodles/Spaetzle.webp';
import Thukpa from '../assets/images/Noodles/Thukpa.jpg';
import Udon from '../assets/images/Noodles/Udon.jpeg';
import Vermicelli from '../assets/images/Noodles/Vermicelli.jpeg';
import Yippee from '../assets/images/Noodles/Yippee.jpeg';


//Pizza import
import Alsatian from '../assets/images/pizza/Alsatian.webp';
import Aussie from '../assets/images/pizza/Aussie.jpg';
import BBQChicken from '../assets/images/pizza/BBQ Chicken.webp';
import CheeseBurst from '../assets/images/pizza/Cheese Burst.jpeg';
import ChickenTikka from '../assets/images/pizza/Chicken Tikka.jpeg';
import Flammkuchen from '../assets/images/pizza/Flammkuchen.webp';
import FrangoComCatupiry from '../assets/images/pizza/Frango com Catupiry.jpg';
import ButterChickenPizza from '../assets/images/pizza/FrapButter Chicken Pizzapé.jpg';
import Fugazza from '../assets/images/pizza/Fugazza.jpeg';
import Hawaiian from '../assets/images/pizza/Hawaiian.jpeg';
import IndianSpiced from '../assets/images/pizza/Indian Spiced.png';
import Keema from '../assets/images/pizza/Keema.avif';
import Lahmacun from '../assets/images/pizza/Lahmacun.jpg';
import Margherita from '../assets/images/pizza/Margherita.jpeg';
import MayoJaga from '../assets/images/pizza/Mayo Jaga.webp';
import MexicanVeg from '../assets/images/pizza/Mexican Veg.jpg';
import PaneerTikka from '../assets/images/pizza/Paneer Tikka.webp';
import Portuguese from '../assets/images/pizza/Portuguese.webp';
import Prawn from '../assets/images/pizza/Prawn.webp';
import QuattroStagioni from '../assets/images/pizza/Quattro Stagioni.jpg';
import Seafood from '../assets/images/pizza/Seafood.jpg';
import SpicyVeggie from '../assets/images/pizza/Spicy Veggie.jpeg';
import Tlayuda from '../assets/images/pizza/Tlayuda.jpg';
import VeggieSupreme from '../assets/images/pizza/Veggie Supreme.jpeg';


// Sample data for category items
const itemsData = {
  burger: [
    { 
      id: 1, 
      name: 'Aloo Tikki Burger', 
      image: AlooTikkiBurger, 
      description: 'A crispy aloo tikki patty with fresh veggies.', 
      price: 99 
    },
    { 
      id: 2, 
      name: 'BBQ Chicken Burger', 
      image: BBQChickenBurger, 
      description: 'Tender grilled chicken with smoky BBQ sauce.', 
      price: 179 
    },
    { 
      id: 3, 
      name: 'Butter Chicken Burger', 
      image: ButterChickenBurger, 
      description: 'Juicy chicken patty with rich butter chicken gravy.', 
      price: 199 
    },
    { 
      id: 4, 
      name: 'Cheesy Veg Burger', 
      image: CheesyVegBurger, 
      description: 'A delicious vegetarian burger with melted cheese.', 
      price: 129 
    },
    { 
      id: 5, 
      name: 'Chicken Kebab Burger', 
      image: ChickenKebabBurger, 
      description: 'Spiced chicken kebab patty with tangy sauces.', 
      price: 159 
    },
    { 
      id: 6, 
      name: 'Chicken Tandoori Burger', 
      image: ChickenTandooriBurger, 
      description: 'Succulent chicken marinated in tandoori spices.', 
      price: 189 
    },
    { 
      id: 7, 
      name: 'Chori Burger', 
      image: ChoriBurger, 
      description: 'A savory burger with grilled chorizo sausage.', 
      price: 199 
    },
    { 
      id: 8, 
      name: 'Classic Hamburger', 
      image: ClassicHamburger, 
      description: 'A classic beef burger with simple toppings.', 
      price: 149 
    },
    { 
      id: 9, 
      name: 'Classic Veg', 
      image: ClassicVeg, 
      description: 'A classic vegetable burger with fresh veggies.', 
      price: 99 
    },
    { 
      id: 10, 
      name: 'Egg Burger', 
      image: EggBurger, 
      description: 'A tasty burger with fried egg and sauces.', 
      price: 119 
    },
    { 
      id: 11, 
      name: 'Elk Burger', 
      image: ElkBurger, 
      description: 'A gourmet burger with lean elk meat patty.', 
      price: 249 
    },
    { 
      id: 12, 
      name: 'Falafel Burger', 
      image: FalafelBurger, 
      description: 'Crispy falafel patty with hummus and tahini.', 
      price: 139 
    },
    { 
      id: 13, 
      name: 'Fish Burger', 
      image: FishBurger, 
      description: 'Crispy fish fillet with tartar sauce and lettuce.', 
      price: 179 
    },
    { 
      id: 14, 
      name: 'Jumbo Burger', 
      image: JumboBurger, 
      description: 'An extra-large burger with double patties.', 
      price: 249 
    },
    { 
      id: 15, 
      name: 'Kangaroo Burger', 
      image: KangarooBurger, 
      description: 'Exotic kangaroo meat patty with special sauces.', 
      price: 299 
    },
    { 
      id: 16, 
      name: 'Maharaja Mac Burger', 
      image: MaharajaMacBurger, 
      description: 'A royal burger with double chicken patties and veggies.', 
      price: 229 
    },
    { 
      id: 17, 
      name: 'Masala Burger', 
      image: MasalaBurger, 
      description: 'A spicy burger with Indian masala flavors.', 
      price: 109 
    },
    { 
      id: 18, 
      name: 'Mutton Burger', 
      image: MuttonBurger, 
      description: 'Juicy mutton patty with caramelized onions.', 
      price: 199 
    },
    { 
      id: 19, 
      name: 'Ostrich Burger', 
      image: OstrichBurger, 
      description: 'Exotic ostrich meat patty for adventurous eaters.', 
      price: 349 
    },
    { 
      id: 20, 
      name: 'Paneer Burger', 
      image: PaneerBurger, 
      description: 'Grilled paneer patty with tangy sauces.', 
      price: 139 
    },
    { 
      id: 21, 
      name: 'Poutine Burger', 
      image: PoutineBurger, 
      description: 'Burger topped with fries, cheese curds, and gravy.', 
      price: 199 
    },
    { 
      id: 22, 
      name: 'Schezwan Burger', 
      image: SchezwanBurger, 
      description: 'Spicy Schezwan sauce with a crispy patty.', 
      price: 149 
    },
    { 
      id: 23, 
      name: 'Spicy Veggie Burger', 
      image: SpicyVeggieBurger, 
      description: 'A veggie patty with a spicy kick.', 
      price: 119 
    },
    { 
      id: 24, 
      name: 'Vada Pav Burger', 
      image: VadaPavBurger, 
      description: 'Mumbai’s street-style Vada Pav in burger form.', 
      price: 89 
    }
  ],

  chicken: [
    { 
      id: 1, 
      name: 'Chicken 65', 
      image: Chicken65, 
      description: 'A spicy and flavorful fried chicken dish from South India.', 
      price: 199 
    },
    { 
      id: 2, 
      name: 'Amritsari Fried', 
      image: AmritsariFried, 
      description: 'Crispy fried chicken with a blend of Amritsari spices.', 
      price: 229 
    },
    { 
      id: 3, 
      name: 'Andhra Crispy', 
      image: AndhraCrispy, 
      description: 'Fried chicken coated in spicy Andhra-style seasoning.', 
      price: 249 
    },
    { 
      id: 4, 
      name: 'Batter Fried', 
      image: BatterFried, 
      description: 'Juicy chicken deep-fried in a light, crispy batter.', 
      price: 179 
    },
    { 
      id: 5, 
      name: 'Butter Chicken Fry', 
      image: ButterChickenFry, 
      description: 'Rich, buttery fried chicken with classic North Indian flavors.', 
      price: 299 
    },
    { 
      id: 6, 
      name: 'Cheese Crusted Fried', 
      image: CheeseCrustedFried, 
      description: 'Crispy fried chicken with a delicious cheese crust.', 
      price: 279 
    },
    { 
      id: 7, 
      name: 'Crispy', 
      image: Crispy, 
      description: 'Simple, golden fried chicken with a perfectly crispy coating.', 
      price: 169 
    },
    { 
      id: 8, 
      name: 'Fried', 
      image: Fried, 
      description: 'Classic fried chicken that’s juicy on the inside and crispy outside.', 
      price: 149 
    },
    { 
      id: 9, 
      name: 'Honey Chilli Crispy', 
      image: HoneyChilliCrispy, 
      description: 'Sweet and spicy fried chicken glazed with honey and chili sauce.', 
      price: 219 
    },
    { 
      id: 10, 
      name: 'Hyderabadi Crispy', 
      image: HyderabadiCrispy, 
      description: 'Crispy chicken with rich Hyderabadi spices.', 
      price: 239 
    },
    { 
      id: 11, 
      name: 'KFC Style', 
      image: KFCStyle, 
      description: 'Finger-lickin’ good fried chicken in the iconic KFC style.', 
      price: 199 
    },
    { 
      id: 12, 
      name: 'Kiev', 
      image: Kiev, 
      description: 'Stuffed fried chicken with a buttery garlic filling.', 
      price: 269 
    },
    { 
      id: 13, 
      name: 'Koliwada', 
      image: Koliwada, 
      description: 'Fried chicken marinated in a spicy Koliwada masala.', 
      price: 189 
    },
    { 
      id: 14, 
      name: 'Lollipop', 
      image: Lollipop, 
      description: 'Juicy chicken lollipops with a crispy coating.', 
      price: 149 
    },
    { 
      id: 15, 
      name: 'Malabar Fried', 
      image: MalabarFried, 
      description: 'Traditional Malabar-style spiced fried chicken.', 
      price: 259 
    },
    { 
      id: 16, 
      name: 'Masala Fried', 
      image: MasalaFried, 
      description: 'Fried chicken with a rich, spiced masala coating.', 
      price: 179 
    },
    { 
      id: 17, 
      name: 'Pakora', 
      image: Pakora, 
      description: 'Crispy chicken pakoras with a flavorful, spicy batter.', 
      price: 99 
    },
    { 
      id: 18, 
      name: 'Peri Peri Fried', 
      image: PeriPeriFried, 
      description: 'Spicy fried chicken with a fiery peri-peri marinade.', 
      price: 249 
    },
    { 
      id: 19, 
      name: 'Pollo Frito', 
      image: PolloFrito, 
      description: 'Latin-style fried chicken with vibrant seasoning.', 
      price: 269 
    },
    { 
      id: 20, 
      name: 'Popcorn', 
      image: Popcorn, 
      description: 'Bite-sized fried chicken popcorn with a crispy coating.', 
      price: 149 
    },
    { 
      id: 21, 
      name: 'Spicy Garlic Fried', 
      image: SpicyGarlicFried, 
      description: 'Crispy fried chicken with a spicy garlic twist.', 
      price: 229 
    },
    { 
      id: 22, 
      name: 'Strips Fingers', 
      image: StripsFingers, 
      description: 'Crispy chicken strips with a golden coating.', 
      price: 169 
    },
    { 
      id: 23, 
      name: 'Tandoori Fried', 
      image: TandooriFried, 
      description: 'Chicken marinated in tandoori spices and fried to perfection.', 
      price: 219 
    },
    { 
      id: 24, 
      name: 'Tempura', 
      image: Tempura, 
      description: 'Lightly battered and fried chicken in a Japanese tempura style.', 
      price: 189 
    }
  ],

  coffee: [
    { 
      id: 1, 
      name: 'Affogato', 
      image: Affogato, 
      description: 'A scoop of vanilla ice cream "drowned" in a shot of hot espresso.', 
      price: 149 
    },
    { 
      id: 2, 
      name: 'Americano', 
      image: Americano, 
      description: 'A rich espresso diluted with hot water, perfect for a lighter coffee.', 
      price: 99 
    },
    { 
      id: 3, 
      name: 'Black Eye', 
      image: BlackEye, 
      description: 'A strong coffee with two shots of espresso added to drip coffee.', 
      price: 159 
    },
    { 
      id: 4, 
      name: 'Brave', 
      image: Brave, 
      description: 'A latte made with half-and-half instead of regular milk for extra creaminess.', 
      price: 139 
    },
    { 
      id: 5, 
      name: 'Butterscotch Coffee', 
      image: ButterscotchCoffee, 
      description: 'Sweet and buttery coffee with rich butterscotch flavor.', 
      price: 179 
    },
    { 
      id: 6, 
      name: 'Café Mocha with Chocolate', 
      image: CafeMochaWithChocolate, 
      description: 'A delicious blend of coffee, steamed milk, and rich chocolate syrup.', 
      price: 189 
    },
    { 
      id: 7, 
      name: 'Caffe Americano', 
      image: CaffeAmericano, 
      description: 'A strong and flavorful espresso with added hot water for a milder taste.', 
      price: 99 
    },
    { 
      id: 8, 
      name: 'Caffe au Lait', 
      image: CaffeAuLait, 
      description: 'A French-style coffee made with strong coffee and steamed milk.', 
      price: 129 
    },
    { 
      id: 9, 
      name: 'Caffe Corretto', 
      image: CaffeCorretto, 
      description: 'Espresso "corrected" with a shot of liquor, usually grappa or sambuca.', 
      price: 169 
    },
    { 
      id: 10, 
      name: 'Caffe Latte', 
      image: CaffeLatte, 
      description: 'A smooth blend of espresso and steamed milk, topped with a small amount of foam.', 
      price: 139 
    },
    { 
      id: 11, 
      name: 'Cappuccino', 
      image: Cappuccino, 
      description: 'A classic coffee with equal parts espresso, steamed milk, and foam.', 
      price: 129 
    },
    { 
      id: 12, 
      name: 'Caramel Latte', 
      image: CaramelLatte, 
      description: 'A rich espresso-based drink mixed with caramel syrup and steamed milk.', 
      price: 159 
    },
    { 
      id: 13, 
      name: 'Cold Brew', 
      image: ColdBrew, 
      description: 'A smooth, refreshing coffee brewed slowly with cold water.', 
      price: 149 
    },
    { 
      id: 14, 
      name: 'Cortado', 
      image: Cortado, 
      description: 'A perfectly balanced espresso cut with warm milk to reduce acidity.', 
      price: 109 
    },
    { 
      id: 15, 
      name: 'Doppio', 
      image: Doppio, 
      description: 'A double shot of espresso for a bolder, richer flavor.', 
      price: 99 
    },
    { 
      id: 16, 
      name: 'Espresso Con Panna', 
      image: EspressoConPanna, 
      description: 'A shot of espresso topped with a dollop of whipped cream.', 
      price: 129 
    },
    { 
      id: 17, 
      name: 'Espresso Shot', 
      image: EspressoShot, 
      description: 'A single shot of rich, concentrated espresso.', 
      price: 79 
    },
    { 
      id: 18, 
      name: 'Espresso', 
      image: Espresso, 
      description: 'A strong, rich coffee brewed by forcing hot water through finely-ground beans.', 
      price: 79 
    },
    { 
      id: 19, 
      name: 'Flat White', 
      image: FlatWhite, 
      description: 'A creamy, velvety coffee made with espresso and steamed milk.', 
      price: 139 
    },
    { 
      id: 20, 
      name: 'Frappé', 
      image: Frappe, 
      description: 'A cold, frothy coffee drink made with instant coffee, ice, and milk.', 
      price: 169 
    },
    { 
      id: 21, 
      name: 'Hazelnut Coffee', 
      image: HazelnutCoffee, 
      description: 'A delicious blend of coffee with the nutty flavor of hazelnuts.', 
      price: 159 
    },
    { 
      id: 22, 
      name: 'Iced Americano', 
      image: IcedAmericano, 
      description: 'A refreshing cold coffee made with espresso and water over ice.', 
      price: 99 
    },
    { 
      id: 23, 
      name: 'Iced Cappuccino', 
      image: IcedCappuccino, 
      description: 'A cold version of the classic cappuccino with espresso, milk, and foam.', 
      price: 129 
    },
    { 
      id: 24, 
      name: 'Iced Latte', 
      image: IcedLatte, 
      description: 'A refreshing iced coffee with espresso and chilled milk.', 
      price: 139 
    },
    { 
      id: 25, 
      name: 'Iced Mocha', 
      image: IcedMocha, 
      description: 'A chilled coffee drink made with espresso, milk, and chocolate syrup.', 
      price: 179 
    },
    { 
      id: 26, 
      name: 'Irish Coffee', 
      image: IrishCoffee, 
      description: 'A rich coffee drink mixed with Irish whiskey and topped with cream.', 
      price: 199 
    },
    { 
      id: 27, 
      name: 'Latte', 
      image: Latte, 
      description: 'A smooth espresso drink with steamed milk and a light layer of foam.', 
      price: 129 
    },
    { 
      id: 28, 
      name: 'Long Black', 
      image: LongBlack, 
      description: 'A double shot of espresso added to hot water, similar to an Americano.', 
      price: 109 
    },
    { 
      id: 29, 
      name: 'Lungo', 
      image: Lungo, 
      description: 'A longer pull of espresso for a slightly less intense flavor.', 
      price: 99 
    },
    { 
      id: 30, 
      name: 'Macchiato', 
      image: Macchiato, 
      description: 'A shot of espresso "stained" with a small amount of steamed milk.', 
      price: 99 
    },
    { 
      id: 31, 
      name: 'Mocha', 
      image: Mocha, 
      description: 'A rich blend of coffee and chocolate with steamed milk and foam.', 
      price: 169 
    },
    { 
      id: 32, 
      name: 'Nitro Coffee', 
      image: NitroCoffee, 
      description: 'A smooth, cold brew coffee infused with nitrogen for a creamy texture.', 
      price: 189 
    },
    { 
      id: 33, 
      name: 'Pumpkin Spice Latte', 
      image: PumpkinSpiceLatte, 
      description: 'A fall favorite with espresso, steamed milk, and pumpkin spice flavoring.', 
      price: 199 
    },
    { 
      id: 34, 
      name: 'Red Eye', 
      image: RedEye, 
      description: 'A coffee drink combining drip coffee with a shot of espresso.', 
      price: 149 
    },
    { 
      id: 35, 
      name: 'Ristretto', 
      image: Ristretto, 
      description: 'A shorter, more concentrated shot of espresso for intense flavor.', 
      price: 109 
    },
    { 
      id: 36, 
      name: 'Romano', 
      image: Romano, 
      description: 'An espresso shot served with a twist of lemon for a zesty kick.', 
      price: 119 
    },
    { 
      id: 37, 
      name: 'Vanilla Latte', 
      image: VanillaLatte, 
      description: 'A creamy espresso-based drink with steamed milk and vanilla syrup.', 
      price: 169 
    },
  ],

  colddrink: [
    { 
      id: 1, 
      name: 'Arizona Iced Tea', 
      image: ArizonaIcedTea, 
      description: 'Refreshing iced tea with natural flavors and a hint of sweetness.', 
      price: 99 
    },
    { 
      id: 2, 
      name: 'Bovonto', 
      image: Bovonto, 
      description: 'Popular Indian soft drink with a fruity flavor and fizz.', 
      price: 50 
    },
    { 
      id: 3, 
      name: 'Chaas', 
      image: Chaas, 
      description: 'Traditional Indian buttermilk drink, perfect for hot weather.', 
      price: 30 
    },
    { 
      id: 4, 
      name: 'Club Mate', 
      image: ClubMate, 
      description: 'A fizzy, caffeinated drink with a unique herbal flavor.', 
      price: 150 
    },
    { 
      id: 5, 
      name: 'Coca Cola Zero', 
      image: CocaColaZero, 
      description: 'Zero-calorie version of the classic Coca Cola.', 
      price: 45 
    },
    { 
      id: 6, 
      name: 'Fever Tree Tonic', 
      image: FeverTreeTonic, 
      description: 'Premium tonic water with natural quinine and refreshing bubbles.', 
      price: 99 
    },
    { 
      id: 7, 
      name: 'Fiji', 
      image: Fiji, 
      description: 'Natural artesian water with a soft, smooth taste.', 
      price: 120 
    },
    { 
      id: 8, 
      name: 'Hell', 
      image: Hell, 
      description: 'A bold energy drink with a strong, sweet flavor.', 
      price: 100 
    },
    { 
      id: 9, 
      name: 'Horchata', 
      image: Horchata, 
      description: 'A creamy, sweet Mexican drink made with rice, cinnamon, and vanilla.', 
      price: 80 
    },
    { 
      id: 10, 
      name: 'Keventers', 
      image: Keventers, 
      description: 'Famous milkshake brand offering thick, rich flavored shakes.', 
      price: 180 
    },
    { 
      id: 11, 
      name: 'Maaza', 
      image: Maaza, 
      description: 'Popular mango-flavored drink with a smooth, fruity taste.', 
      price: 35 
    },
    { 
      id: 12, 
      name: 'Monster', 
      image: Monster, 
      description: 'High-energy drink with a powerful boost of caffeine and flavor.', 
      price: 110 
    },
    { 
      id: 13, 
      name: 'Mountain Dew', 
      image: MountainDew, 
      description: 'Citrusy soft drink with a sharp, refreshing taste.', 
      price: 40 
    },
    { 
      id: 14, 
      name: 'Pepsi Black', 
      image: PepsiBlack, 
      description: 'Zero-sugar cola with a bold, refreshing taste.', 
      price: 45 
    },
    { 
      id: 15, 
      name: 'Perrier Sparkling', 
      image: PerrierSparkling, 
      description: 'Refreshing sparkling water with natural carbonation.', 
      price: 120 
    },
    { 
      id: 16, 
      name: 'Raw Pressery Almond Milk', 
      image: RawPresseryAlmondMilk, 
      description: 'Healthy, plant-based almond milk drink, perfect for a dairy-free diet.', 
      price: 150 
    },
    { 
      id: 17, 
      name: 'Red Bull', 
      image: RedBull, 
      description: 'Popular energy drink with a sweet, tangy flavor and caffeine boost.', 
      price: 110 
    },
    { 
      id: 18, 
      name: 'Root Beer', 
      image: RootBeer, 
      description: 'Classic soda with a distinctive root-based flavor and creamy foam.', 
      price: 90 
    },
    { 
      id: 19, 
      name: 'San Pellegrino Sparkling', 
      image: SanPellegrinoSparkling, 
      description: 'Premium sparkling water with a crisp, clean taste.', 
      price: 150 
    },
    { 
      id: 20, 
      name: 'Schweppes Tonic', 
      image: SchweppesTonic, 
      description: 'Classic tonic water with a balanced quinine bitterness and sweetness.', 
      price: 80 
    },
    { 
      id: 21, 
      name: 'Starbucks Cold Brew', 
      image: StarbucksColdBrew, 
      description: 'Smooth and bold cold brew coffee from Starbucks.', 
      price: 200 
    },
    { 
      id: 22, 
      name: 'Tamarindo', 
      image: Tamarindo, 
      description: 'A tangy, sweet Mexican beverage made from tamarind fruit.', 
      price: 70 
    },
    { 
      id: 23, 
      name: 'Twinings', 
      image: Twinings, 
      description: 'Premium iced tea from the world-renowned tea brand.', 
      price: 99 
    },
    { 
      id: 24, 
      name: 'Vitamin Water', 
      image: VitaminWater, 
      description: 'A flavored water drink with added vitamins and electrolytes.', 
      price: 90 
    },
  ],

  icecream: [
    { 
      id: 1, 
      name: 'Almond Butterscotch', 
      image: AlmondButterscotch, 
      description: 'Crunchy almond pieces blended with rich butterscotch ice cream.', 
      price: 150 
    },
    { 
      id: 2, 
      name: 'Alphonso Mango Sorbet', 
      image: AlphonsoMangoSorbet, 
      description: 'A refreshing sorbet made with juicy Alphonso mangoes.', 
      price: 120 
    },
    { 
      id: 3, 
      name: 'Blackcurrant Delight', 
      image: BlackcurrantDelight, 
      description: 'Creamy ice cream infused with tangy blackcurrants.', 
      price: 140 
    },
    { 
      id: 4, 
      name: 'Blueberry Cheesecake', 
      image: BlueberryCheesecake, 
      description: 'A delicious blend of blueberry and cheesecake-flavored ice cream.', 
      price: 180 
    },
    { 
      id: 5, 
      name: 'Cashew Nut Caramel', 
      image: CashewNutCaramel, 
      description: 'Smooth caramel ice cream with crunchy cashew nuts.', 
      price: 160 
    },
    { 
      id: 6, 
      name: 'Choco Bar', 
      image: ChocoBar, 
      description: 'Classic chocolate-covered ice cream bar.', 
      price: 50 
    },
    { 
      id: 7, 
      name: 'Cornetto', 
      image: Cornetto, 
      description: 'Crispy cone filled with vanilla ice cream and topped with chocolate and nuts.', 
      price: 70 
    },
    { 
      id: 8, 
      name: 'Death by Chocolate', 
      image: DeathByChocolate, 
      description: 'Indulgent chocolate ice cream with layers of fudge and brownie.', 
      price: 200 
    },
    { 
      id: 9, 
      name: 'French Vanilla Bean', 
      image: FrenchVanillaBean, 
      description: 'Creamy vanilla ice cream made with real French vanilla beans.', 
      price: 130 
    },
    { 
      id: 10, 
      name: 'Jalebi with Rabri', 
      image: JalebiWithRabri, 
      description: 'An Indian fusion of jalebi with creamy rabri ice cream.', 
      price: 180 
    },
    { 
      id: 11, 
      name: 'Low Fat Strawberry', 
      image: LowFatStrawberry, 
      description: 'Delicious low-fat strawberry ice cream with real strawberry pieces.', 
      price: 110 
    },
    { 
      id: 12, 
      name: 'Madagascar Vanilla', 
      image: MadagascarVanilla, 
      description: 'Rich and creamy vanilla ice cream made with Madagascar vanilla beans.', 
      price: 140 
    },
    { 
      id: 13, 
      name: 'Mocha Almond Fudge', 
      image: MochaAlmondFudge, 
      description: 'A decadent blend of mocha and almond fudge ice cream.', 
      price: 160 
    },
    { 
      id: 14, 
      name: 'Pineapple Sorbet', 
      image: PineappleSorbet, 
      description: 'A light and fruity sorbet made from ripe pineapples.', 
      price: 120 
    },
    { 
      id: 15, 
      name: 'Pista Badam with Saffron', 
      image: PistaBadamWithSaffron, 
      description: 'A luxurious blend of pistachios, almonds, and saffron.', 
      price: 180 
    },
    { 
      id: 16, 
      name: 'Rasmalai', 
      image: Rasmalai, 
      description: 'Creamy ice cream flavored with Indian rasmalai sweets.', 
      price: 190 
    },
    { 
      id: 17, 
      name: 'Raspberry Sorbet', 
      image: RaspberrySorbet, 
      description: 'Tangy and sweet raspberry sorbet, perfect for a summer treat.', 
      price: 130 
    },
    { 
      id: 18, 
      name: 'Red Bean', 
      image: RedBean, 
      description: 'An exotic ice cream with the earthy flavor of red beans.', 
      price: 150 
    },
    { 
      id: 19, 
      name: 'Roasted Almond with Honey', 
      image: RoastedAlmondWithHoney, 
      description: 'Crunchy roasted almonds drizzled with honey in a creamy ice cream base.', 
      price: 160 
    },
    { 
      id: 20, 
      name: 'Sicilian Pistachio', 
      image: SicilianPistachio, 
      description: 'Smooth and nutty ice cream made from premium Sicilian pistachios.', 
      price: 170 
    },
    { 
      id: 21, 
      name: 'Tahitian Vanilla', 
      image: TahitianVanilla, 
      description: 'A tropical twist on classic vanilla ice cream, made with Tahitian vanilla beans.', 
      price: 150 
    },
    { 
      id: 22, 
      name: 'Tender Coconut', 
      image: TenderCoconut, 
      description: 'A light and refreshing ice cream made from tender coconut.', 
      price: 140 
    },
    { 
      id: 23, 
      name: 'Vanilla', 
      image: Vanilla, 
      description: 'Classic and smooth vanilla ice cream.', 
      price: 120 
    },
    { 
      id: 24, 
      name: 'Walnut Fudge', 
      image: WalnutFudge, 
      description: 'Rich chocolate ice cream with chunks of walnut fudge.', 
      price: 170 
    },
  ],

  kebab: [
    { 
      id: 1, 
      name: 'Afghani', 
      image: Afghani, 
      description: 'Mildly spiced creamy kebabs with a rich and smooth flavor.', 
      price: 250 
    },
    { 
      id: 2, 
      name: 'Bihari', 
      image: Bihari, 
      description: 'Smoky and spicy Bihari-style kebabs marinated in mustard oil and spices.', 
      price: 220 
    },
    { 
      id: 3, 
      name: 'Brochette', 
      image: Brochette, 
      description: 'Grilled kebabs on skewers, often served with vegetables.', 
      price: 200 
    },
    { 
      id: 4, 
      name: 'Chapli', 
      image: Chapli, 
      description: 'Flat minced meat kebabs infused with traditional Pashtun spices.', 
      price: 180 
    },
    { 
      id: 5, 
      name: 'Chenjeh', 
      image: Chenjeh, 
      description: 'Persian-style kebabs made with juicy marinated lamb.', 
      price: 270 
    },
    { 
      id: 6, 
      name: 'Chuan', 
      image: Chuan, 
      description: 'Chinese skewered kebabs, typically made with lamb or beef.', 
      price: 240 
    },
    { 
      id: 7, 
      name: 'Churrasco', 
      image: Churrasco, 
      description: 'Brazilian barbecue-style kebabs with tender, juicy cuts of meat.', 
      price: 300 
    },
    { 
      id: 8, 
      name: 'Dora', 
      image: Dora, 
      description: 'Traditional Armenian kebabs with a robust smoky flavor.', 
      price: 230 
    },
    { 
      id: 9, 
      name: 'Espetada', 
      image: Espetada, 
      description: 'Portuguese-style skewered kebabs, grilled to perfection.', 
      price: 250 
    },
    { 
      id: 10, 
      name: 'Galouti', 
      image: Galouti, 
      description: 'Melt-in-the-mouth minced meat kebabs, a specialty of Lucknow.', 
      price: 260 
    },
    { 
      id: 11, 
      name: 'Hara Bhara', 
      image: HaraBhara, 
      description: 'Vegetarian kebabs made with spinach, peas, and spices.', 
      price: 160 
    },
    { 
      id: 12, 
      name: 'Kakori', 
      image: Kakori, 
      description: 'Soft, flavorful minced meat kebabs with a rich spice blend.', 
      price: 280 
    },
    { 
      id: 13, 
      name: 'Kalmi', 
      image: Kalmi, 
      description: 'Chicken drumsticks marinated in yogurt and spices, grilled to perfection.', 
      price: 240 
    },
    { 
      id: 14, 
      name: 'Khorovats', 
      image: Khorovats, 
      description: 'Armenian-style grilled kebabs served with roasted vegetables.', 
      price: 260 
    },
    { 
      id: 15, 
      name: 'Peshawari', 
      image: Peshawari, 
      description: 'Spicy kebabs from the Peshawar region, known for their fiery taste.', 
      price: 210 
    },
    { 
      id: 16, 
      name: 'Pinchitos', 
      image: Pinchitos, 
      description: 'Spanish-style small kebabs, marinated in a mix of spices and olive oil.', 
      price: 200 
    },
    { 
      id: 17, 
      name: 'Pinchos', 
      image: Pinchos, 
      description: 'Flavorful, bite-sized grilled kebabs from Latin America.', 
      price: 190 
    },
    { 
      id: 18, 
      name: 'Reshmi', 
      image: Reshmi, 
      description: 'Creamy, mildly spiced chicken kebabs, known for their soft texture.', 
      price: 230 
    },
    { 
      id: 19, 
      name: 'Satay', 
      image: Satay, 
      description: 'Indonesian-style skewers served with a spicy peanut sauce.', 
      price: 200 
    },
    { 
      id: 20, 
      name: 'Seekh', 
      image: Seekh, 
      description: 'Juicy minced meat kebabs seasoned with a mix of spices, served on skewers.', 
      price: 220 
    },
    { 
      id: 21, 
      name: 'Shami', 
      image: Shami, 
      description: 'Pan-fried minced meat kebabs with a crispy outer layer and soft center.', 
      price: 190 
    },
    { 
      id: 22, 
      name: 'Sosatie', 
      image: Sosatie, 
      description: 'South African kebabs marinated in a curry-based sauce.', 
      price: 240 
    },
    { 
      id: 23, 
      name: 'Tunde Ke', 
      image: TundeKe, 
      description: 'A famous delicacy from Lucknow, made with finely minced meat and spices.', 
      price: 260 
    },
    { 
      id: 24, 
      name: 'Yakitori', 
      image: Yakitori, 
      description: 'Japanese-style skewers made with grilled chicken, seasoned with tare sauce.', 
      price: 200 
    },
  ],

  noodles: [
    { 
      id: 1, 
      name: 'Chopsuey', 
      image: Chopsuey, 
      description: 'Crispy fried noodles topped with stir-fried vegetables and sauce.', 
      price: 180 
    },
    { 
      id: 2, 
      name: 'Chowmein', 
      image: Chowmein, 
      description: 'Stir-fried noodles with vegetables and soy sauce.', 
      price: 150 
    },
    { 
      id: 3, 
      name: 'Fideua', 
      image: Fideua, 
      description: 'Spanish noodles cooked with seafood and saffron.', 
      price: 220 
    },
    { 
      id: 4, 
      name: 'Glass Noodles', 
      image: Glass, 
      description: 'Delicate, transparent noodles made from starch.', 
      price: 170 
    },
    { 
      id: 5, 
      name: 'Hakka Noodles', 
      image: Hakka, 
      description: 'Indian-Chinese stir-fried noodles with vegetables and soy sauce.', 
      price: 160 
    },
    { 
      id: 6, 
      name: 'Hokkien Noodles', 
      image: Hokkien, 
      description: 'Thick yellow noodles stir-fried with soy sauce and vegetables.', 
      price: 180 
    },
    { 
      id: 7, 
      name: 'Korean Naengmyeon', 
      image: KoreanNaengmyeon, 
      description: 'Cold buckwheat noodles served with a chilled broth.', 
      price: 200 
    },
    { 
      id: 8, 
      name: 'Kushari', 
      image: Kushari, 
      description: 'Egyptian comfort food made with noodles, rice, lentils, and a spicy tomato sauce.', 
      price: 150 
    },
    { 
      id: 9, 
      name: 'Macaroni', 
      image: Macaroni, 
      description: 'Elbow-shaped pasta often served with cheese or tomato sauce.', 
      price: 120 
    },
    { 
      id: 10, 
      name: 'Maggi', 
      image: Maggi, 
      description: 'Instant noodles cooked with vegetables and spices.', 
      price: 60 
    },
    { 
      id: 11, 
      name: 'Mee Goreng', 
      image: MeeGoreng, 
      description: 'Indonesian stir-fried noodles with a mix of sweet and spicy flavors.', 
      price: 180 
    },
    { 
      id: 12, 
      name: 'Pad Thai', 
      image: PadThai, 
      description: 'Popular Thai stir-fried rice noodles with peanuts, tofu, and tamarind sauce.', 
      price: 200 
    },
    { 
      id: 13, 
      name: 'Ramen', 
      image: Ramen, 
      description: 'Japanese noodles served in a flavorful broth with various toppings.', 
      price: 220 
    },
    { 
      id: 14, 
      name: 'Rice Noodles', 
      image: Rice, 
      description: 'Soft noodles made from rice, commonly used in Asian cuisine.', 
      price: 140 
    },
    { 
      id: 15, 
      name: 'Rotini', 
      image: Rotini, 
      description: 'Corkscrew-shaped pasta that holds sauces well.', 
      price: 130 
    },
    { 
      id: 16, 
      name: 'Schezwan Noodles', 
      image: Schezwan, 
      description: 'Spicy stir-fried noodles with Schezwan sauce.', 
      price: 170 
    },
    { 
      id: 17, 
      name: 'Sevai', 
      image: Sevai, 
      description: 'Indian-style vermicelli, often used in sweet and savory dishes.', 
      price: 120 
    },
    { 
      id: 18, 
      name: 'Shirataki', 
      image: Shirataki, 
      description: 'Low-carb, translucent noodles made from konjac yam.', 
      price: 190 
    },
    { 
      id: 19, 
      name: 'Soba', 
      image: Soba, 
      description: 'Japanese buckwheat noodles, often served cold or in soup.', 
      price: 200 
    },
    { 
      id: 20, 
      name: 'Spaetzle', 
      image: Spaetzle, 
      description: 'German egg noodles, often served with cheese or in soups.', 
      price: 180 
    },
    { 
      id: 21, 
      name: 'Thukpa', 
      image: Thukpa, 
      description: 'Tibetan noodle soup with vegetables and meat.', 
      price: 160 
    },
    { 
      id: 22, 
      name: 'Udon', 
      image: Udon, 
      description: 'Thick Japanese wheat noodles served in a savory broth.', 
      price: 210 
    },
    { 
      id: 23, 
      name: 'Vermicelli', 
      image: Vermicelli, 
      description: 'Thin rice noodles used in various Asian soups and stir-fries.', 
      price: 150 
    },
    { 
      id: 24, 
      name: 'Yippee', 
      image: Yippee, 
      description: 'Instant noodles with a tangy flavor, popular among kids.', 
      price: 70 
    },
  ],

  pizza: [
    { 
      id: 1, 
      name: 'Alsatian', 
      image: Alsatian, 
      description: 'Thin crust pizza topped with onions, bacon, and cream.', 
      price: 350 
    },
    { 
      id: 2, 
      name: 'Aussie', 
      image: Aussie, 
      description: 'Classic Australian pizza with ham, egg, and bacon.', 
      price: 400 
    },
    { 
      id: 3, 
      name: 'BBQ Chicken', 
      image: BBQChicken, 
      description: 'Pizza topped with BBQ chicken, red onions, and mozzarella.', 
      price: 450 
    },
    { 
      id: 4, 
      name: 'Cheese Burst', 
      image: CheeseBurst, 
      description: 'Loaded with extra cheese inside the crust and on top.', 
      price: 500 
    },
    { 
      id: 5, 
      name: 'Chicken Tikka', 
      image: ChickenTikka, 
      description: 'Spiced chicken tikka pieces with a creamy sauce on a pizza base.', 
      price: 480 
    },
    { 
      id: 6, 
      name: 'Flammkuchen', 
      image: Flammkuchen, 
      description: 'German-style thin crust pizza with crème fraîche, onions, and bacon.', 
      price: 370 
    },
    { 
      id: 7, 
      name: 'Frango com Catupiry', 
      image: FrangoComCatupiry, 
      description: 'Brazilian pizza with shredded chicken and creamy Catupiry cheese.', 
      price: 420 
    },
    { 
      id: 8, 
      name: 'Butter Chicken Pizza', 
      image: ButterChickenPizza, 
      description: 'Fusion pizza with butter chicken sauce and tender chicken pieces.', 
      price: 500 
    },
    { 
      id: 9, 
      name: 'Fugazza', 
      image: Fugazza, 
      description: 'Argentinian pizza with no sauce, topped with onions and mozzarella.', 
      price: 380 
    },
    { 
      id: 10, 
      name: 'Hawaiian', 
      image: Hawaiian, 
      description: 'Classic combo of ham, pineapple, and mozzarella.', 
      price: 430 
    },
    { 
      id: 11, 
      name: 'Indian Spiced', 
      image: IndianSpiced, 
      description: 'Topped with Indian spices, veggies, and paneer.', 
      price: 450 
    },
    { 
      id: 12, 
      name: 'Keema', 
      image: Keema, 
      description: 'Minced lamb cooked in spices, spread over a pizza base.', 
      price: 480 
    },
    { 
      id: 13, 
      name: 'Lahmacun', 
      image: Lahmacun, 
      description: 'Middle Eastern flatbread pizza with minced meat and spices.', 
      price: 400 
    },
    { 
      id: 14, 
      name: 'Margherita', 
      image: Margherita, 
      description: 'Simple and classic with tomato, mozzarella, and basil.', 
      price: 320 
    },
    { 
      id: 15, 
      name: 'Mayo Jaga', 
      image: MayoJaga, 
      description: 'Japanese-style pizza with potato, mayonnaise, and corn.', 
      price: 380 
    },
    { 
      id: 16, 
      name: 'Mexican Veg', 
      image: MexicanVeg, 
      description: 'Spicy veggies, jalapenos, and beans on a crispy crust.', 
      price: 400 
    },
    { 
      id: 17, 
      name: 'Paneer Tikka', 
      image: PaneerTikka, 
      description: 'Indian-style pizza topped with marinated paneer.', 
      price: 450 
    },
    { 
      id: 18, 
      name: 'Portuguese', 
      image: Portuguese, 
      description: 'Pizza with cured meats, olives, and eggs.', 
      price: 470 
    },
    { 
      id: 19, 
      name: 'Prawn Pizza', 
      image: Prawn, 
      description: 'Seafood pizza with fresh prawns and a garlic butter base.', 
      price: 520 
    },
    { 
      id: 20, 
      name: 'Quattro Stagioni', 
      image: QuattroStagioni, 
      description: 'Four seasons pizza with different toppings on each quarter.', 
      price: 480 
    },
    { 
      id: 21, 
      name: 'Seafood Pizza', 
      image: Seafood, 
      description: 'Topped with a variety of seafood and fresh herbs.', 
      price: 540 
    },
    { 
      id: 22, 
      name: 'Spicy Veggie', 
      image: SpicyVeggie, 
      description: 'Vegetable pizza with a spicy kick from chili flakes and jalapenos.', 
      price: 400 
    },
    { 
      id: 23, 
      name: 'Tlayuda', 
      image: Tlayuda, 
      description: 'Oaxacan Mexican pizza with beans, cheese, and avocado.', 
      price: 460 
    },
    { 
      id: 24, 
      name: 'Veggie Supreme', 
      image: VeggieSupreme, 
      description: 'Loaded with a variety of fresh vegetables and cheese.', 
      price: 420 
    },
  ],

};

const fetchItemsByCategory = (category) => {
  return itemsData[category] || [];
};

const CategoryPage = ({ onAddToCart }) => {
  const { name } = useParams();
  const items = fetchItemsByCategory(name);

  return (
    <div className="category-page">
      <h1>{name.charAt(0).toUpperCase() + name.slice(1)} Items</h1>
      <div className="item-cards-container">
        {items.map((item) => (
          <ItemCard 
            key={item.id} 
            item={item} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
