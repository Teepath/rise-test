import React from 'react';
import {SvgProps} from 'react-native-svg';

import TickCircle from './TickCircle';
import CloseCircle from './CloseCircle';
import Feed from './Feed';
import TakeAwayPana from './TakeAwayPana';
import RefundPana from './RefundPana';
import Driving from './Driving';
import RiseLogo from './RiseLogo';
import MessengerPana from './MessengerPana';
import TimelineCuate from './TimelineCuate';
import Arrow, {ArrowProps} from './Arrow';
import More from './More';
import Share from './Share';
import PlanCardOne from './PlanCard0ne';
import Send from './Send';
import Indicator from './Indicator';
import GoogleIcon from './Google';
import FacebookIcon from './SuccessMessage';
import Eye from './Eye';
import EyeSlash from './EyeSlash';
import SingleDelivery from './SingleDelivery';
import MoreSetting from './MoreSemi';
import MultipleDelivery from './MultipleDelivery';
import Tracking from './Tracking';
import Clock from './Clock';
import Home from './Home';
import Notification from './Notification';
import ProfileAccount from './ProfileAccount';
import Wallet from './wallet';
import InfoCircle from './infoCircle';
import Plan from './Plan';
import PlanBox from './PlanBox';
import Truck from './Tuck';
import MiniVan from './MiniVan';
import RiderMore from './Feed';
import Polygon from './Polygon';
import Glyph from './Glyph';
import SearchIcon from './Search';
import SideArrow from './sidearrow'
import AddAndBackground from './AddwithBack';
import Sms from './sms';
import Package from './Package';
import Direction from './Direction'
import CircleCalendar from './CircleCalendar';
import ArrowCircle from './ArrowCircle';
import Box from './Box';
import Calendar from './Calendar';
import Tag from './Tag';
import BoxAdd from './BoxAdd';
import CouponBadge from './CouponBadge';
import MasterCard from './MasterCard';
import CardAdd from './CardAdd';
import Message from './Message';
import TruckIcon from './Truck';
import CircledArrow from './CircledArrow';
import OpenBox from './OpenBox';
import Flag from './Flag';
import Lock from './Lock';
import Help from './Help';
import SignOut from './SignOut';
import BackButton from './BackButton';
import ImagePicker from './ImagePicker';
import Ribbon from './Ribbon';
import Wheel from './PerformanceWheel'
import MagnifyRibbon from './Magnify';
import Money from './Money';
import SuccessCheckIcon from './SuccessCheck';
import SuccessMsgIcon from './SuccessMessage';
import Cancel from './Cancel';
import ArrowPoint from './ArrowPoint';
import Add from './Add';
import Unchecked from './uncheck';
import Checked from './checked';
import InvestCalculator from './InvestCalculator';
import FundWheel from './FundIcon';
import DirectionDown from './DirectionDown';
import DirectionUp from './DirectionUp';
import Info from "./Info"
import BackBTNWIthBackground from './BackBtnWithShadow';
import Option from './Option';
import CardOne from './PlanCardA';
import CardTwo from './PlanCardB';
import CardThree from './PlanCardC';

export enum ICON_NAME {
  ribbon = 'ribbon',
  magnify = 'magnify',
  wheel='wheel',
  user = 'user',
  cancel='cancel',
  feed='feed',
  star = 'star',
  arrow = 'arrow',
  checked= 'checked',
  fundwheel='fundwheel',
  successicon='successicon',
  unchecked='unchecked',
  arrowpoint='arrowpoint',
  plancardone='plancardone',
  plan="plan",
  option='option',
  directiondown='directiondown',
  moresetting='moresetting',
  tickCircle = 'tickCircle',
  closeCircle = 'closeCircle',
  info="info",
  female="female",
  deliveryCuate = 'deliveryCuate',
  directionup='directionup',
  takeAwayPana = 'takeAwayPana',
  orderRideCuate = 'orderRideCuate',
  timelineCuate = 'timelineCuate',
  messengerPana = 'messengerPana',
  refundPana = 'refundPana',
  backbutton = "backbutton",
  logo='logo',
  driving='driving',
  calculator='calculator',
  planbox="planbox",
  indicator='indicator',
  plancard="plancard",
  plancardthree='plancardthree',
  more = 'more',
  send = 'send',
  addwithback = 'addwithback',
  facebook = 'facebook',
  eye = 'eye',
  eyeSlash = 'eyeSlash',
  singleDelivery = 'singleDelivery',
  multipleDelivery = 'multipleDelivery',
  tracking = 'tracking',
  clock = 'clock',
  home = 'home',
  wallet = 'wallet',
  notification = 'notification',
  profileAccount = 'profileAccount',
  infoCircle = 'infoCircle',
  bike = 'bike',
  car = 'car',
  truck = 'truck',
  miniVan = 'miniVan',
  mantruck = 'maintruck',
  polygon = 'polygon',
  glyph = 'glyph',
  search = 'search',
  directionarrow='directionarrow',
  sms = 'sms',
  sidearrow = 'sidearrow',
  instantPickup = 'instantPickup',
  circleCalendar = 'circleCalendar',
  share='share',
  arrowCircle = 'arrowCircle',
  box = 'box',
  backbtnshadow='backbtnshadow',
  creditCard = 'creditCard',
  calendar = 'calendar',
  tag = 'tag',
  boxAdd = 'boxAdd',
  plancardtwo = 'plancardtwo',
  couponBadge = 'couponBadge',
  masterCard = 'masterCard',
  cardAdd = 'cardAdd',
  mapSearchIcon = 'mapSearchIcon',
  message = 'message',
  ridermore='ridermore',
  truckIcon = 'truckIcon',
  callMissed = 'callMissed',
  circledArrow = 'circledArrow',
  emptyMessages = 'emptyMessages',
  openBox = 'openBox',
  connectionLost = 'connectionLost',
  flag = 'flag',
  help = 'help',
  lock = 'lock',
  signOut = 'signOut',
  imagePicker = 'imagePicker',
  package='package',
  money = 'money',
  successCheck = 'successCheck',
  add = 'add',
}

export interface BaseIconProps extends SvgProps {
  size?: number;
  color?: string;
  invert?: boolean;
}


interface IconProps
  extends BaseIconProps,
    Partial<ArrowProps> {
  name: ICON_NAME;
}

type IconSelectionObject = {[key in ICON_NAME]: React.ReactNode};

const Icons: IconSelectionObject = {
  tickCircle: TickCircle,
  plan:Plan,
  cancel:Cancel,
  magnify:MagnifyRibbon,
  closeCircle: CloseCircle,
  arrowpoint:ArrowPoint,
  arrow: Arrow,
  backbutton:BackButton,
  calculator:InvestCalculator,
  planbox:PlanBox,
  moresetting:MoreSetting,
  directionup:DirectionUp,
  feed:Feed,
  wheel: Wheel,
  option:Option,
  fundwheel:FundWheel,
  directiondown:DirectionDown,
  info:Info,
  checked: Checked,
  unchecked: Unchecked,
  successicon:SuccessMsgIcon,
  addwithback: AddAndBackground,
  driving:Driving,
  share:Share,
  takeAwayPana: TakeAwayPana,
  refundPana: RefundPana,
  messengerPana: MessengerPana,
  timelineCuate: TimelineCuate,
  ridermore:RiderMore,
  directionarrow: Direction,
  backbtnshadow:BackBTNWIthBackground,
  more: More,
  send: Send,
  plancardtwo: CardTwo,
  plancardthree: CardThree,
  indicator:Indicator,
  eye: Eye,
  eyeSlash: EyeSlash,
  plancard:CardOne,
  logo:RiseLogo,
  singleDelivery: SingleDelivery,
  multipleDelivery: MultipleDelivery,
  tracking: Tracking,
  clock: Clock,
  home: Home,
  wallet: Wallet,
  notification: Notification,
  profileAccount: ProfileAccount,
  plancardone:PlanCardOne,
  infoCircle: InfoCircle,
  ribbon: Ribbon,
  truck: Truck,
  miniVan: MiniVan,
  polygon: Polygon,
  glyph: Glyph,
  search: SearchIcon,
  sidearrow: SideArrow,
  circleCalendar: CircleCalendar,
  arrowCircle: ArrowCircle,
  box: Box,
  calendar: Calendar,
  tag: Tag,
  boxAdd: BoxAdd,
  couponBadge: CouponBadge,
  masterCard: MasterCard,
  cardAdd: CardAdd,
  message: Message,
  truckIcon: TruckIcon,
  circledArrow: CircledArrow,
  openBox: OpenBox,
  flag: Flag,
  lock: Lock,
  help: Help,
  signOut: SignOut,
  imagePicker: ImagePicker,
  money: Money,
  successCheck: SuccessCheckIcon,
  add: Add,
};

const Icon: React.FC<IconProps> = ({name, ...iconProps}) => {
  const SelectedIcon = Icons[name] as React.ElementType;
  return SelectedIcon ? <SelectedIcon {...iconProps} /> : null;
};

export default Icon;
