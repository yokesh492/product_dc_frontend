"use server";

import { cookies } from "next/headers";

const cookieStore = cookies();
const lang = cookieStore.get("lang").value;

export const productTitle = () =>
  (lang === "eng" && "Product Catalouge") ||
  (lang === "tam" && "பொருட்களின் பட்டியல்");
export const addProductButton = () =>
  (lang === "eng" && "Add Products") ||
  (lang === "tam" && "பொருளைச் சேர்க்கவும்");

export const loginPage = () => ({
  title: (lang === "eng" && "Login") || (lang === "tam" && "உள்நுழைய"),
  name_field: (lang === "eng" && "Name") || (lang === "tam" && "பெயர்"),
  pass_field:
    (lang === "eng" && "Password") || (lang === "tam" && "கடவுச்சொல்"),
  button: (lang === "eng" && "Submit") || (lang === "tam" && "சமர்ப்பிக்கவும்"),
  isNew: (lang === "eng" && "New?") || (lang === "tam" && "புதியது?"),
  choose:
    (lang === "eng" && "Choose your language") ||
    (lang === "tam" && "உங்கள் மொழியை தேர்வு செய்யவும்"),
  register:
    (lang === "eng" && "register") || (lang === "tam" && "பதிவு செய்யுங்கள்"),
});

export const registerPage = () => ({
  title: (lang === "eng" && "Register") || (lang === "tam" && "பதிவு"),
  name_field: (lang === "eng" && "Name") || (lang === "tam" && "பெயர்"),
  pass_field:
    (lang === "eng" && "Password") || (lang === "tam" && "கடவுச்சொல்"),
  button: (lang === "eng" && "Submit") || (lang === "tam" && "சமர்ப்பிக்கவும்"),
  isNew:
    (lang === "eng" && "Already Registered?") ||
    (lang === "tam" && "ஏற்கனவே பதிவு செய்யப்பட்டது?"),
  choose:
    (lang === "eng" && "Choose your language") ||
    (lang === "tam" && "உங்கள் மொழியை தேர்வு செய்யவும்"),
  login: (lang === "eng" && "login") || (lang === "tam" && "உள்நுழைய"),
});

export const loadingMessages = () => ({
  network:
    (lang === "eng" && "Network") ||
    (lang === "hin" && "नेटवर्क") ||
    (lang === "tam" && "நெட்வொர்க்"),
  message:
    (lang === "eng" && [
      "ONDC Network: Empowering small businesses, one digital step at a time.",
      "Unlocking opportunities: ONDC Network bridges the gap between buyers and sellers effortlessly.",
      "Joining hands for progress: ONDC Network fosters inclusive growth in India's digital marketplace",
      "Simplicity meets innovation: ONDC Network revolutionizes e-commerce for all.",
    ]) ||
    (lang === "tam" && [
      "ONDC நெட்வொர்க்: ஒரு இலக்கியத் தடவையை அதிகரிக்கும் சிறு வணிகங்கள்.",
      "வாய்ப்புகளை திறக்கும்: ONDC நெட்வொர்க் வாங்குபவர்களுக்கும் விற்பவர்களுக்கும் கலப்படுகின்றது.",
      "முன்னேற்றத்திற்கான கைக்கூட்டம்: ONDC நெட்வொர்க் இந்தியாவின் இணைய சந்தையில் உள்ள மொத்த வளர்ச்சியை ஊக்குவிக்கின்றது.",
      "எளியத்துடன் புதுமை சந்தித்தது: ONDC நெட்வொர்க் அனைத்தும் தனிப்பட்ட முறையில் மின்-வாணியத்தை முறியடிக்கின்றது.",
    ]),
});

export const formPage = () => ({
    title :   (lang === "eng" && "Add Item") ||
    (lang === "tam" && "பொருளைச் சேர்க்கவும்"),
    item_name : (lang === "eng" && "Item Name") ||
    (lang === "tam" && "பொருளின் பெயர்"),
    sku_id : (lang === "eng" && "SKU id") ||
    (lang === "tam" && "SKU ஐடி"),
    description : (lang === "eng" && "description") ||
    (lang === "tam" && "விளக்கம்"),
    quantity : (lang === "eng" && "Quantity") ||
    (lang === "tam" && "அளவு"),
    price : (lang === "eng" && "price") ||
    (lang === "tam" && "விலை"),
    discount_price : (lang === "eng" && "Discount Price") ||
    (lang === "tam" && "தள்ளுபடி விலை"),
    category : (lang === "eng" && "Category") ||
    (lang === "tam" && "வகை"),
    sub_category : (lang === "eng" && "Sub Category") ||
    (lang === "tam" && "துணை வகை"),
    variants : (lang === "eng" && "Variants") ||
    (lang === "tam" && "மாறுபாடுகள்"),
})
