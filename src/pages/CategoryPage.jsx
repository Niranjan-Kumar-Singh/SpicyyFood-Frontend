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
    { id: 1, name: 'Aloo Tikki Burger', image: AlooTikkiBurger },
    { id: 2, name: 'BBQ Chicken Burger', image: BBQChickenBurger },
    { id: 3, name: 'Butter Chicken Burger', image: ButterChickenBurger },
    { id: 4, name: 'Cheesy Veg Burger', image: CheesyVegBurger },
    { id: 5, name: 'Chicken Kebab Burger', image: ChickenKebabBurger },
    { id: 6, name: 'Chicken Tandoori Burger', image: ChickenTandooriBurger },
    { id: 7, name: 'Chori Burger', image: ChoriBurger },
    { id: 8, name: 'Classic Hamburger', image: ClassicHamburger },
    { id: 9, name: 'Classic Veg', image: ClassicVeg },
    { id: 10, name: 'Egg Burger', image: EggBurger },
    { id: 11, name: 'Elk Burger', image: ElkBurger },
    { id: 12, name: 'Falafel Burger', image: FalafelBurger },
    { id: 13, name: 'Fish Burger', image: FishBurger },
    { id: 14, name: 'Jumbo Burger', image: JumboBurger },
    { id: 15, name: 'Kangaroo Burger', image: KangarooBurger },
    { id: 16, name: 'Maharaja Mac Burger', image: MaharajaMacBurger },
    { id: 17, name: 'Masala Burger', image: MasalaBurger },
    { id: 18, name: 'Mutton Burger', image: MuttonBurger },
    { id: 19, name: 'Ostrich Burger', image: OstrichBurger },
    { id: 20, name: 'Paneer Burger', image: PaneerBurger },
    { id: 21, name: 'Poutine Burger', image: PoutineBurger },
    { id: 22, name: 'Schezwan Burger', image: SchezwanBurger },
    { id: 23, name: 'Spicy Veggie Burger', image: SpicyVeggieBurger },
    { id: 24, name: 'Vada Pav Burger', image: VadaPavBurger },
  ],

  chicken: [
    { id: 1, name: 'Chicken 65', image: Chicken65 },
    { id: 2, name: 'Amritsari Fried', image: AmritsariFried },
    { id: 3, name: 'Andhra Crispy', image: AndhraCrispy },
    { id: 4, name: 'Batter Fried', image: BatterFried },
    { id: 5, name: 'Butter Chicken Fry', image: ButterChickenFry },
    { id: 6, name: 'Cheese Crusted Fried', image: CheeseCrustedFried },
    { id: 7, name: 'Crispy', image: Crispy },
    { id: 8, name: 'Fried', image: Fried },
    { id: 9, name: 'Honey Chilli Crispy', image: HoneyChilliCrispy },
    { id: 10, name: 'Hyderabadi Crispy', image: HyderabadiCrispy },
    { id: 11, name: 'KFC Style', image: KFCStyle },
    { id: 12, name: 'Kiev', image: Kiev },
    { id: 13, name: 'Koliwada', image: Koliwada },
    { id: 14, name: 'Lollipop', image: Lollipop },
    { id: 15, name: 'Malabar Fried', image: MalabarFried },
    { id: 16, name: 'Masala Fried', image: MasalaFried },
    { id: 17, name: 'Pakora', image: Pakora },
    { id: 18, name: 'Peri Peri Fried', image: PeriPeriFried },
    { id: 19, name: 'Pollo Frito', image: PolloFrito },
    { id: 20, name: 'Popcorn', image: Popcorn },
    { id: 21, name: 'Spicy Garlic Fried', image: SpicyGarlicFried },
    { id: 22, name: 'Strips Fingers', image: StripsFingers },
    { id: 23, name: 'Tandoori Fried', image: TandooriFried },
    { id: 24, name: 'Tempura', image: Tempura },
  ],

  coffee: [
    { id: 1, name: 'Affogato', image: Affogato },
    { id: 2, name: 'Americano', image: Americano },
    { id: 3, name: 'Black Eye', image: BlackEye },
    { id: 4, name: 'Brave', image: Brave },
    { id: 5, name: 'Butterscotch Coffee', image: ButterscotchCoffee },
    { id: 6, name: 'Café Mocha with Chocolate', image: CafeMochaWithChocolate },
    { id: 7, name: 'Caffe Americano', image: CaffeAmericano },
    { id: 8, name: 'Caffe au Lait', image: CaffeAuLait },
    { id: 9, name: 'Caffe Corretto', image: CaffeCorretto },
    { id: 10, name: 'Caffe Latte', image: CaffeLatte },
    { id: 11, name: 'Cappuccino', image: Cappuccino },
    { id: 12, name: 'Caramel Latte', image: CaramelLatte },
    { id: 13, name: 'Cold Brew', image: ColdBrew },
    { id: 14, name: 'Cortado', image: Cortado },
    { id: 15, name: 'Doppio', image: Doppio },
    { id: 16, name: 'Espresso Con Panna', image: EspressoConPanna },
    { id: 17, name: 'Espresso Shot', image: EspressoShot },
    { id: 18, name: 'Espresso', image: Espresso },
    { id: 19, name: 'Flat White', image: FlatWhite },
    { id: 20, name: 'Frappé', image: Frappe },
    { id: 21, name: 'Hazelnut Coffee', image: HazelnutCoffee },
    { id: 22, name: 'Iced Americano', image: IcedAmericano },
    { id: 23, name: 'Iced Cappuccino', image: IcedCappuccino },
    { id: 24, name: 'Iced Latte', image: IcedLatte },
    { id: 25, name: 'Iced Mocha', image: IcedMocha },
    { id: 26, name: 'Irish Coffee', image: IrishCoffee },
    { id: 27, name: 'Latte', image: Latte },
    { id: 28, name: 'Long Black', image: LongBlack },
    { id: 29, name: 'Lungo', image: Lungo },
    { id: 30, name: 'Macchiato', image: Macchiato },
    { id: 31, name: 'Mocha', image: Mocha },
    { id: 32, name: 'Nitro Coffee', image: NitroCoffee },
    { id: 33, name: 'Pumpkin Spice Latte', image: PumpkinSpiceLatte },
    { id: 34, name: 'Red Eye', image: RedEye },
    { id: 35, name: 'Ristretto', image: Ristretto },
    { id: 36, name: 'Romano', image: Romano },
    { id: 37, name: 'Vanilla Latte', image: VanillaLatte },
  ],

  colddrink: [
    { id: 1, name: 'Arizona Iced Tea', image: ArizonaIcedTea },
    { id: 2, name: 'Bovonto', image: Bovonto },
    { id: 3, name: 'Chaas', image: Chaas },
    { id: 4, name: 'Club Mate', image: ClubMate },
    { id: 5, name: 'Coca Cola Zero', image: CocaColaZero },
    { id: 6, name: 'Fever Tree Tonic', image: FeverTreeTonic },
    { id: 7, name: 'Fiji', image: Fiji },
    { id: 8, name: 'Hell', image: Hell },
    { id: 9, name: 'Horchata', image: Horchata },
    { id: 10, name: 'Keventers', image: Keventers },
    { id: 11, name: 'Maaza', image: Maaza },
    { id: 12, name: 'Monster', image: Monster },
    { id: 13, name: 'Mountain Dew', image: MountainDew },
    { id: 14, name: 'Pepsi Black', image: PepsiBlack },
    { id: 15, name: 'Perrier Sparkling', image: PerrierSparkling },
    { id: 16, name: 'Raw Pressery Almond Milk', image: RawPresseryAlmondMilk },
    { id: 17, name: 'Red Bull', image: RedBull },
    { id: 18, name: 'Root Beer', image: RootBeer },
    { id: 19, name: 'San Pellegrino Sparkling', image: SanPellegrinoSparkling },
    { id: 20, name: 'Schweppes Tonic', image: SchweppesTonic },
    { id: 21, name: 'Starbucks Cold Brew', image: StarbucksColdBrew },
    { id: 22, name: 'Tamarindo', image: Tamarindo },
    { id: 23, name: 'Twinings', image: Twinings },
    { id: 24, name: 'Vitamin Water', image: VitaminWater },
  ],

  icecream: [
    { id: 1, name: 'Almond Butterscotch', image: AlmondButterscotch },
    { id: 2, name: 'Alphonso Mango Sorbet', image: AlphonsoMangoSorbet },
    { id: 3, name: 'Blackcurrant Delight', image: BlackcurrantDelight },
    { id: 4, name: 'Blueberry Cheesecake', image: BlueberryCheesecake },
    { id: 5, name: 'Cashew Nut Caramel', image: CashewNutCaramel },
    { id: 6, name: 'Choco Bar', image: ChocoBar },
    { id: 7, name: 'Cornetto', image: Cornetto },
    { id: 8, name: 'Death by Chocolate', image: DeathByChocolate },
    { id: 9, name: 'French Vanilla Bean', image: FrenchVanillaBean },
    { id: 10, name: 'Jalebi with Rabri', image: JalebiWithRabri },
    { id: 11, name: 'Low Fat Strawberry', image: LowFatStrawberry },
    { id: 12, name: 'Madagascar Vanilla', image: MadagascarVanilla },
    { id: 13, name: 'Mocha Almond Fudge', image: MochaAlmondFudge },
    { id: 14, name: 'Pineapple Sorbet', image: PineappleSorbet },
    { id: 15, name: 'Pista Badam with Saffron', image: PistaBadamWithSaffron },
    { id: 16, name: 'Rasmalai', image: Rasmalai },
    { id: 17, name: 'Raspberry Sorbet', image: RaspberrySorbet },
    { id: 18, name: 'Red Bean', image: RedBean },
    { id: 19, name: 'Roasted Almond with Honey', image: RoastedAlmondWithHoney },
    { id: 20, name: 'Sicilian Pistachio', image: SicilianPistachio },
    { id: 21, name: 'Tahitian Vanilla', image: TahitianVanilla },
    { id: 22, name: 'Tender Coconut', image: TenderCoconut },
    { id: 23, name: 'Vanilla', image: Vanilla },
    { id: 24, name: 'Walnut Fudge', image: WalnutFudge },
  ],

  kebab: [
    { id: 1, name: 'Afghani', image: Afghani },
    { id: 2, name: 'Bihari', image: Bihari },
    { id: 3, name: 'Brochette', image: Brochette },
    { id: 4, name: 'Chapli', image: Chapli },
    { id: 5, name: 'Chenjeh', image: Chenjeh },
    { id: 6, name: 'Chuan', image: Chuan },
    { id: 7, name: 'Churrasco', image: Churrasco },
    { id: 8, name: 'Dora', image: Dora },
    { id: 9, name: 'Espetada', image: Espetada },
    { id: 10, name: 'Galouti', image: Galouti },
    { id: 11, name: 'Hara Bhara', image: HaraBhara },
    { id: 12, name: 'Kakori', image: Kakori },
    { id: 13, name: 'Kalmi', image: Kalmi },
    { id: 14, name: 'Khorovats', image: Khorovats },
    { id: 15, name: 'Peshawari', image: Peshawari },
    { id: 16, name: 'Pinchitos', image: Pinchitos },
    { id: 17, name: 'Pinchos', image: Pinchos },
    { id: 18, name: 'Reshmi', image: Reshmi },
    { id: 19, name: 'Satay', image: Satay },
    { id: 20, name: 'Seekh', image: Seekh },
    { id: 21, name: 'Shami', image: Shami },
    { id: 22, name: 'Sosatie', image: Sosatie },
    { id: 23, name: 'Tunde Ke', image: TundeKe },
    { id: 24, name: 'Yakitori', image: Yakitori },
  ],

  noodles: [
  { id: 1, name: 'Hopsuey', image: Chopsuey },
  { id: 2, name: 'Howmein', image: Chowmein },
  { id: 3, name: 'Ideuä', image: Fideua },
  { id: 4, name: '31ass', image: Glass },
  { id: 5, name: 'Hakka', image: Hakka },
  { id: 6, name: 'Hokkien', image: Hokkien },
  { id: 7, name: 'Korean Naengmyeon', image: KoreanNaengmyeon },
  { id: 8, name: 'Kushari', image: Kushari },
  { id: 9, name: 'Macaroni', image: Macaroni },
  { id: 10, name: 'Maggi', image: Maggi },
  { id: 11, name: 'Mee Goreng', image: MeeGoreng },
  { id: 12, name: 'Pad Thai', image: PadThai },
  { id: 13, name: 'Ramen', image: Ramen },
  { id: 14, name: 'Rice', image: Rice },
  { id: 15, name: 'Rotini', image: Rotini },
  { id: 16, name: 'Schezwan', image: Schezwan },
  { id: 17, name: 'Sevai', image: Sevai },
  { id: 18, name: 'Shirataki', image: Shirataki },
  { id: 19, name: 'Soba', image: Soba },
  { id: 20, name: 'Spaetzle', image: Spaetzle },
  { id: 21, name: 'Thukpa', image: Thukpa },
  { id: 22, name: 'Udon', image: Udon },
  { id: 23, name: 'Vermicelli', image: Vermicelli },
  { id: 24, name: 'Yippee', image: Yippee }
  ],

  pizza: [
    { id: 1, name: 'Alsatian', image: Alsatian },
    { id: 2, name: 'Aussie', image: Aussie },
    { id: 3, name: 'BBQ Chicken', image: BBQChicken },
    { id: 4, name: 'Cheese Burst', image: CheeseBurst },
    { id: 5, name: 'Chicken Tikka', image: ChickenTikka },
    { id: 6, name: 'Flammkuchen', image: Flammkuchen },
    { id: 7, name: 'Frango com Catupiry', image: FrangoComCatupiry },
    { id: 8, name: 'Butter Chicken Pizza', image: ButterChickenPizza },
    { id: 9, name: 'Fugazza', image: Fugazza },
    { id: 10, name: 'Hawaiian', image: Hawaiian },
    { id: 11, name: 'Indian Spiced', image: IndianSpiced },
    { id: 12, name: 'Keema', image: Keema },
    { id: 13, name: 'Lahmacun', image: Lahmacun },
    { id: 14, name: 'Margherita', image: Margherita },
    { id: 15, name: 'Mayo Jaga', image: MayoJaga },
    { id: 16, name: 'Mexican Veg', image: MexicanVeg },
    { id: 17, name: 'Paneer Tikka', image: PaneerTikka },
    { id: 18, name: 'Portuguese', image: Portuguese },
    { id: 19, name: 'Prawn', image: Prawn },
    { id: 20, name: 'Quattro Stagioni', image: QuattroStagioni },
    { id: 21, name: 'Seafood', image: Seafood },
    { id: 22, name: 'Spicy Veggie', image: SpicyVeggie },
    { id: 23, name: 'Tlayuda', image: Tlayuda },
    { id: 24, name: 'Veggie Supreme', image: VeggieSupreme }
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
